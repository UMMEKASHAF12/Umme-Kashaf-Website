import { useState, useRef, useCallback, useEffect } from "react";

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

function Slider({ slide }) {
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const wrapRef = useRef(null);
  const afterLayerRef = useRef(null);
  const dividerRef = useRef(null);
  
  const isDragging = useRef(false);
  const pctRef = useRef(50);
  const animationFrameId = useRef(null);

  // Directly update DOM using CSS properties (Fast 60FPS update without React state lag)
  const updateSliderDOM = useCallback((pct) => {
    if (afterLayerRef.current && dividerRef.current) {
      afterLayerRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      dividerRef.current.style.left = `${pct}%`;
    }
  }, []);

  const calcPct = useCallback((clientX) => {
    if (!wrapRef.current) return 50;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!isDragging.current) return;
    
    pctRef.current = calcPct(clientX);

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      updateSliderDOM(pctRef.current);
    });
  }, [calcPct, updateSliderDOM]);

  const onStart = useCallback((clientX) => {
    isDragging.current = true;
    pctRef.current = calcPct(clientX);
    updateSliderDOM(pctRef.current);
    setHasInteracted(true);
  }, [calcPct, updateSliderDOM]);

  useEffect(() => {
    const onMouseUp = () => {
      isDragging.current = false;
    };

    const onMouseMove = (e) => {
      if (isDragging.current) {
        handleMove(e.clientX);
      }
    };

    const onTouchMove = (e) => {
      if (isDragging.current && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleMove]);

  return (
    <div className="bas-outer">
      <div className="bas-labels">
        <span className="bas-label bas-label--before">Before</span>
        <span className="bas-label bas-label--after">After</span>
      </div>

      <div
        ref={wrapRef}
        className="bas-wrap"
        onMouseDown={(e) => onStart(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
      >
        {/* BEFORE */}
        <div className="bas-layer">
          <img src={slide.before} alt="Before Transformation" loading="eager" decoding="async" />
        </div>

        {/* AFTER — clipped via Direct Ref */}
        <div 
          ref={afterLayerRef} 
          className="bas-layer bas-after" 
          style={{ clipPath: `inset(0 50% 0 0)` }}
        >
          <img src={slide.after} alt="After Transformation" loading="eager" decoding="async" />
        </div>

        {/* Divider */}
        <div ref={dividerRef} className="bas-divider" style={{ left: `50%` }}>
          <div className="bas-handle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>

        {!hasInteracted && (
          <div className="bas-hint">← Drag to reveal →</div>
        )}
      </div>

      <div className="bas-info">
        <span className="bas-info-name">{slide.name}</span>
        <span className="bas-info-tag">{slide.tag}</span>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="transformation-section" ref={sectionRef} style={{
      background: "#000",
      padding: "80px 24px 88px",
      fontFamily: "'Manrope', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        .bas-header { text-align:center; margin-bottom:40px; }
        .bas-header-tag { display:inline-block; font-size:0.68rem; font-weight:700; color:#e00; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:12px; font-family:'Manrope',sans-serif; }
        .bas-header h2 { font-size:clamp(1.8rem,4vw,2.8rem); font-weight:900; color:#fff; line-height:1.1; letter-spacing:-0.025em; margin-bottom:12px; font-family:'Manrope',sans-serif; }
        .bas-header h2 span { color:#e00; }
        .bas-header p { font-size:0.88rem; color:#888; line-height:1.6; font-family:'Manrope',sans-serif; }

        .bas-grid { display:flex; flex-direction:column; gap:40px; max-width:680px; margin:0 auto; }

        .bas-outer { display:flex; flex-direction:column; gap:0; }

        .bas-labels { display:flex; justify-style:space-between; justify-content:space-between; margin-bottom:10px; padding:0 4px; }
        .bas-label { font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; font-family:'Manrope',sans-serif; }
        .bas-label--before { color:#777; }
        .bas-label--after  { color:#e00; }

        .bas-wrap {
          position:relative; width:100%;
          aspect-ratio: 1000 / 900;
          overflow:hidden; cursor:col-resize;
          user-select:none; 
          touch-action: none; /* Prevents mobile scroll conflict during drag */
          border:1px solid #222;
          border-radius:16px;
          background:#050505;
          contain: layout paint style;
        }

        .bas-layer { 
          position:absolute; inset:0; width:100%; height:100%; 
          will-change: clip-path;
        }
        .bas-layer img { width:100%; height:100%; object-fit:contain; display:block; pointer-events:none; }

        .bas-divider {
          position:absolute; top:0; bottom:0; width:2px;
          background:#fff; transform:translateX(-50%);
          pointer-events:none; z-index:10;
          will-change: left;
        }

        .bas-handle {
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%);
          width:38px; height:38px; background:#e00;
          border-radius:50%; display:flex; align-items:center;
          justify-content:center; gap:1px;
          box-shadow:0 4px 20px rgba(220,0,0,0.4);
          pointer-events:none;
        }

        .bas-hint {
          position:absolute; bottom:14px; left:50%;
          transform:translateX(-50%);
          background:rgba(0,0,0,0.75); color:#fff;
          font-size:0.65rem; font-weight:700;
          padding:6px 16px; border-radius:999px;
          letter-spacing:0.06em; font-family:'Manrope',sans-serif;
          pointer-events:none; white-space:nowrap;
          border:1px solid rgba(255,255,255,0.15);
          animation:hintPulse 2s ease-in-out infinite;
          z-index:11;
        }
        @keyframes hintPulse { 0%,100%{opacity:0.85;} 50%{opacity:1;} }

        .bas-info { display:flex; align-items:center; justify-content:space-between; padding:14px 4px 0; }
        .bas-info-name { font-size:0.88rem; font-weight:800; color:#fff; font-family:'Manrope',sans-serif; }
        .bas-info-tag { font-size:0.62rem; font-weight:700; color:#e00; text-transform:uppercase; letter-spacing:0.06em; border:1px solid rgba(220,0,0,0.3); border-radius:999px; padding:4px 12px; font-family:'Manrope',sans-serif; }
      `}</style>

      <div className="bas-header" style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}>
        <span className="bas-header-tag">Transformations</span>
        <h2>Before & <span>After</span></h2>
        <p>Drag the slider to see the transformation from blank profile to premium brand.</p>
      </div>

      <div className="bas-grid" style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
      }}>
        {slides.map((slide) => (
          <Slider key={slide.id} slide={slide} />
        ))}
      </div>
    </section>
  );
}