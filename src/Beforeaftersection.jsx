import { useState, useRef, useCallback, useEffect, memo } from "react";

import beforeImg from "./assets/before.jpg";
import afterImg from "./assets/after.jpg";

const slides = [
  {
    id: 1,
    before: beforeImg,
    after: afterImg,
    name: "Gerald Wood",
    tag: "Full LinkedIn Profile Transformation",
  },
];

const Slider = memo(({ slide }) => {
  const [interacted, setInteracted] = useState(false);

  const wrapRef = useRef(null);
  const afterRef = useRef(null);
  const dividerRef = useRef(null);
  const dragging = useRef(false);
  const frame = useRef(null);
  const x = useRef(50);

  const update = useCallback((clientX) => {
    const rect = wrapRef.current.getBoundingClientRect();
    x.current = Math.max(
      0,
      Math.min(((clientX - rect.left) / rect.width) * 100, 100)
    );

    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        const p = x.current;
        afterRef.current.style.width = `${p}%`;
        dividerRef.current.style.left = `${p}%`;
        frame.current = null;
      });
    }
  }, []);

  useEffect(() => {
    return () => frame.current && cancelAnimationFrame(frame.current);
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
          update(e.clientX);
          setInteracted(true);
        }}
        onPointerMove={(e) => {
          if (dragging.current) update(e.clientX);
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <div className="bas-layer">
          <img src={slide.before} alt="Before Transformation" loading="lazy" />
        </div>

        <div ref={afterRef} className="bas-after">
          <img src={slide.after} alt="After Transformation" loading="lazy" />
        </div>

        <div ref={dividerRef} className="bas-divider">
          <div className="bas-handle">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>

        {!interacted && (
          <div className="bas-hint">← Drag to reveal →</div>
        )}
      </div>

      <div className="bas-info">
        <span className="bas-name">{slide.name}</span>
        <span className="bas-tag">{slide.tag}</span>
      </div>
    </div>
  );
});

export default function BeforeAfterSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation-section"
      className="bas-section"
    >
      <style>{`
        .bas-section {
          background:#000;
          padding:80px 24px 88px;
          font-family:'Manrope',sans-serif;
          overflow:hidden;
        }

        .bas-header {
          text-align:center;
          margin-bottom:40px;
          opacity:0;
          transform:translateY(12px);
          transition:.35s ease;
        }

        .bas-header.visible,
        .bas-grid.visible {
          opacity:1;
          transform:translateY(0);
        }

        .bas-header-tag {
          display:block;
          color:#e00;
          font-size:.68rem;
          font-weight:700;
          letter-spacing:.15em;
          text-transform:uppercase;
          margin-bottom:12px;
        }

        .bas-header h2 {
          color:#fff;
          font-size:clamp(1.8rem,4vw,2.8rem);
          font-weight:900;
          margin:0 0 12px;
        }

        .bas-header h2 span {
          color:#e00;
        }

        .bas-header p {
          color:#888;
          font-size:.88rem;
          margin:0;
        }

        .bas-grid {
          max-width:680px;
          margin:auto;
          opacity:0;
          transform:translateY(12px);
          transition:.35s ease .05s;
        }

        .bas-labels,
        .bas-info {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .bas-labels {
          margin-bottom:10px;
          padding:0 4px;
        }

        .bas-before-label,
        .bas-after-label {
          font-size:.72rem;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:.1em;
        }

        .bas-before-label { color:#777; }
        .bas-after-label { color:#e00; }

        .bas-wrap {
          position:relative;
          width:100%;
          aspect-ratio:1000/900;
          overflow:hidden;
          cursor:ew-resize;
          touch-action:none;
          user-select:none;
          border:1px solid #222;
          border-radius:16px;
          background:#050505;
          contain:paint;
        }

        .bas-layer,
        .bas-after {
          position:absolute;
          inset:0;
        }

        .bas-layer img,
        .bas-after img {
          width:100%;
          height:100%;
          object-fit:contain;
          display:block;
          pointer-events:none;
          user-select:none;
        }

        .bas-after {
          width:50%;
          right:auto;
          overflow:hidden;
          will-change:width;
        }

        .bas-after img {
          width:calc(100% / 0.5);
          max-width:none;
        }

        .bas-divider {
          position:absolute;
          top:0;
          bottom:0;
          left:50%;
          width:2px;
          background:#fff;
          transform:translateX(-50%);
          pointer-events:none;
          will-change:left;
        }

        .bas-handle {
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:38px;
          height:38px;
          border-radius:50%;
          background:#e00;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:24px;
          line-height:1;
          box-shadow:0 4px 20px rgba(220,0,0,.35);
        }

        .bas-handle span {
          margin-top:-3px;
        }

        .bas-hint {
          position:absolute;
          bottom:14px;
          left:50%;
          transform:translateX(-50%);
          background:rgba(0,0,0,.75);
          color:#fff;
          padding:6px 16px;
          border-radius:999px;
          font-size:.65rem;
          font-weight:700;
          white-space:nowrap;
          pointer-events:none;
        }

        .bas-info {
          padding:14px 4px 0;
          gap:12px;
        }

        .bas-name {
          color:#fff;
          font-size:.88rem;
          font-weight:800;
        }

        .bas-tag {
          color:#e00;
          font-size:.62rem;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:.06em;
          border:1px solid rgba(220,0,0,.3);
          border-radius:999px;
          padding:4px 12px;
        }

        @media(max-width:600px) {
          .bas-section {
            padding:60px 16px 70px;
          }

          .bas-tag {
            font-size:.55rem;
            padding:4px 8px;
          }
        }
      `}</style>

      <div className={`bas-header ${visible ? "visible" : ""}`}>
        <span className="bas-header-tag">Transformations</span>

        <h2>
          Before & <span>After</span>
        </h2>

        <p>
          Drag the slider to see the transformation from blank profile to premium brand.
        </p>
      </div>

      <div className={`bas-grid ${visible ? "visible" : ""}`}>
        {slides.map((slide) => (
          <Slider key={slide.id} slide={slide} />
        ))}
      </div>
    </section>
  );
}