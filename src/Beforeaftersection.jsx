import { useState, useRef, useCallback, memo } from "react";
import beforeImg from "./assets/before.jpg";
import afterImg from "./assets/after.jpg";

const slides = [
  {
    id: 1,
    before: beforeImg,
    after: afterImg,
    name: "Gerald Wood",
    tag: "Full LinkedIn Profile Transformation",
    review: "“I do not normally respond to cold-call DMs. But when Umme contacted me, something struck a chord... She offered to upgrade my LinkedIn Profile so that I can appeal to more customers... Working with Umme was very uncomplicated and rewarding... I highly recommend for LinkedIn services of all kind!”",
    title: "CEO, AC Authentic | Architect for Change"
  },
];

const Slider = memo(({ slide }) => {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  const handlePointerMove = useCallback((e) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  return (
    <div className="bas-outer">
      <div className="bas-labels">
        <span className="bas-before-label">Before</span>
        <span className="bas-after-label">After</span>
      </div>

      <div
        ref={wrapRef}
        className="bas-wrap"
        onPointerDown={(e) => {
          dragging.current = true;
          wrapRef.current.setPointerCapture(e.pointerId);
          handlePointerMove(e);
        }}
        onPointerMove={(e) => {
          if (dragging.current) handlePointerMove(e);
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img src={slide.before} alt="Before Transformation" className="bas-img" />
        <div className="bas-after" style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}>
          <img src={slide.after} alt="After Transformation" className="bas-img" />
        </div>
        <div className="bas-divider" style={{ left: `${pos}%` }}>
          <div className="bas-handle">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>

      <div className="bas-info-card">
        <div className="bas-info-header">
          <span className="bas-name">{slide.name}</span>
          <span className="bas-tag">{slide.tag}</span>
        </div>
        <p className="bas-review-text">{slide.review}</p>
        <span className="bas-client-title">{slide.title}</span>
      </div>
    </div>
  );
});

export default function ProjectsSection() {
  return (
    <section id="transformation-section" className="bas-section">
      <style>{`
        .bas-section {
          background: #1C110E;
          padding: 80px 24px 88px;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .bas-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .bas-header-tag {
          display: inline-block;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .bas-header h2 {
          color: var(--cream, #FFF7E6);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          margin: 0 0 12px;
        }
        .bas-header h2 span {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--butter-yellow, #FFEDAD);
        }
        .bas-header p {
          color: var(--columbia-blue, #C8D9EC);
          font-size: 0.88rem;
          margin: 0;
        }
        .bas-grid {
          max-width: 680px;
          margin: auto;
        }
        .bas-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding: 0 4px;
        }
        .bas-before-label, .bas-after-label {
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .1em;
        }
        .bas-before-label { color: #888; }
        .bas-after-label { color: var(--butter-yellow, #FFEDAD); }
        .bas-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1000/900;
          overflow: hidden;
          cursor: ew-resize;
          touch-action: none;
          user-select: none;
          border: 1.5px solid rgba(255, 237, 173, 0.25);
          border-radius: 16px;
          background: #0b0705;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }
        .bas-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
          user-select: none;
          display: block;
        }
        .bas-after {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          will-change: clip-path;
        }
        .bas-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2.5px;
          background: var(--butter-yellow, #FFEDAD);
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 3;
        }
        .bas-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--cherry-red, #8E1825);
          border: 2px solid var(--butter-yellow, #FFEDAD);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--butter-yellow, #FFEDAD);
          font-size: 20px;
          line-height: 1;
          box-shadow: 0 4px 20px rgba(142,24,37,.5);
        }
        .bas-handle span { margin-top: -3px; }
        .bas-info-card {
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 16px;
          padding: 20px;
          margin-top: 16px;
          text-align: left;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        .bas-info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(200,217,236,0.12);
        }
        .bas-name {
          color: var(--cream, #FFF7E6);
          font-size: 1rem;
          font-weight: 800;
        }
        .bas-tag {
          color: var(--butter-yellow, #FFEDAD);
          background: rgba(142,24,37,0.4);
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .06em;
          border: 1px solid rgba(255,237,173,0.3);
          border-radius: 999px;
          padding: 4px 12px;
        }
        .bas-review-text {
          font-size: 0.88rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.5;
          font-style: italic;
          margin: 0 0 10px 0;
        }
        .bas-client-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--butter-yellow, #FFEDAD);
          display: block;
        }
      `}</style>

      <div className="bas-header">
        <span className="bas-header-tag">Proof & Transformation</span>
        <h2>Before & <span>After</span></h2>
        <p>Drag the slider to see the transformation from blank profile to premium brand.</p>
      </div>

      <div className="bas-grid">
        {slides.map((slide) => (
          <Slider key={slide.id} slide={slide} />
        ))}
      </div>
    </section>
  );
}