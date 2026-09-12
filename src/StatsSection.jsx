import { useEffect, useRef, useState, memo } from "react";

const stats = [
  { val: 50, suffix: "+", label: "Worked with Global Clients Worldwide", prefix: "" },
  { val: 3, suffix: "+", label: "years of design experience", prefix: "" },
  { val: 6.5, suffix: "K+", label: "LinkedIn following", prefix: "", decimal: 1 },
  { val: 10, suffix: "%", label: "Creator Worldwide", prefix: "TOP " },
];

const StatItem = memo(function StatItem({ stat, index, started }) {
  const valRef = useRef(null);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let rafId = null;
    const duration = 1600 + index * 120;
    const decimal = stat.decimal || 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth Cubic Easing
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = ease * stat.val;

      // Direct DOM mutation for maximum smooth performance without React re-renders
      if (valRef.current) {
        const formattedDisplay = decimal ? currentVal.toFixed(decimal) : Math.floor(currentVal);
        valRef.current.textContent = `${stat.prefix}${formattedDisplay}${stat.suffix}`;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, stat, index]);

  return (
    <div
      className="ss-stat"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
        transition: `opacity 0.7s cubic-bezier(.16, 1, .3, 1) ${index * 0.1}s,
                     transform 0.7s cubic-bezier(.16, 1, .3, 1) ${index * 0.1}s`,
      }}
    >
      <span className="ss-val" ref={valRef}>
        {stat.prefix}0{stat.suffix}
      </span>
      <span className="ss-label">{stat.label}</span>
    </div>
  );
});

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when user scrolls to this section
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // Disconnect after trigger to save memory
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section">
      <style>{`
        #stats-section {
          background: transparent;
          padding: 60px 24px;
          font-family: 'Manrope', sans-serif;
          width: 100%;
          contain: content;
        }

        .ss-wrap {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ss-stat {
          flex: 1;
          text-align: left;
          padding: 0 24px;
          border-right: 1px solid #e2e8f0;
          will-change: opacity, transform;
          backface-visibility: hidden;
        }

        .ss-stat:first-child {
          padding-left: 0;
        }

        .ss-stat:last-child {
          border-right: none;
          padding-right: 0;
        }

        .ss-val {
          display: block;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 800;
          color: #ff0000;
          line-height: 1;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        .ss-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          color: #555555;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .ss-wrap {
            flex-wrap: wrap;
            gap: 28px 0;
          }
          .ss-stat {
            flex: 1 1 50%;
            padding: 0 16px;
            border-right: none;
          }
          .ss-stat:nth-child(odd) {
            border-right: 1px solid #e2e8f0;
            padding-left: 0;
          }
          .ss-stat:nth-child(even) {
            padding-right: 0;
          }
        }

        @media (max-width: 480px) {
          .ss-stat {
            flex: 1 1 100%;
            padding: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 20px !important;
          }
          .ss-stat:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
        }
      `}</style>

      <div className="ss-wrap" ref={ref}>
        {stats.map((s, i) => (
          <StatItem key={i} stat={s} index={i} started={started} />
        ))}
      </div>
    </section>
  );
}