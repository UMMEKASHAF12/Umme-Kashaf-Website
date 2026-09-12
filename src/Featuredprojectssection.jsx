import { useState, useEffect, useRef, memo } from "react";

import work1Img from "./assets/work1.jpg";
import work2Img from "./assets/work2.jpg";
import work3Img from "./assets/work3.jpg";
import work4Img from "./assets/work4.jpg";
import work5Img from "./assets/work5.jpg";
import work6Img from "./assets/work6.jpg";
import work7Img from "./assets/work7.jpg";
import work8Img from "./assets/work8.jpg";
import work9Img from "./assets/work9.jpg";
import ch1Img from "./assets/ch1.jpg";
import ch2Img from "./assets/ch2.jpg";
import ch3Img from "./assets/ch3.jpg";
import ch4Img from "./assets/ch4.jpg";
import afterImg from "./assets/after.jpg";
import sp1Img from "./assets/SP1.png";
import sp2Img from "./assets/SP2.png";
import sp3Img from "./assets/SP3.png";
import sp4Img from "./assets/SP4.png";

const tabData = {
  "Profile Rebrands": {
    w: 280,
    h: 220,
    row1: [
      { id: 1, img: work1Img },
      { id: 2, img: work2Img },
      { id: 3, img: work3Img },
      { id: 4, img: work4Img },
      { id: 5, img: work5Img },
    ],
    row2: [
      { id: 6, img: work6Img },
      { id: 7, img: work7Img },
      { id: 8, img: work8Img },
      { id: 9, img: work9Img },
      { id: 10, img: afterImg },
    ],
  },
  "Content Design": {
    w: 200,
    h: 240,
    row1: [
      { id: 11, img: ch1Img },
      { id: 12, img: ch2Img },
      { id: 13, img: ch3Img },
      { id: 14, img: ch4Img },
    ],
    // Ab Neeche wali row mein bhi same uper wali images ayengi
    row2: [
      { id: 15, img: ch1Img },
      { id: 16, img: ch2Img },
      { id: 17, img: ch3Img },
      { id: 18, img: ch4Img },
    ],
  },
  "Social Media Posters": {
    w: 210,
    h: 210,
    row1: [
      { id: 19, img: sp1Img },
      { id: 20, img: sp2Img },
      { id: 21, img: sp3Img },
      { id: 22, img: sp4Img },
    ],
    row2: [
      { id: 23, img: sp1Img },
      { id: 24, img: sp2Img },
      { id: 25, img: sp3Img },
      { id: 26, img: sp4Img },
    ],
  },
};

const tabs = Object.keys(tabData);

// High Performance Hardware-Accelerated CSS
const STYLE = `
  @keyframes fpL { 
    0% { transform: translate3d(0, 0, 0); } 
    100% { transform: translate3d(-50%, 0, 0); } 
  }
  @keyframes fpR { 
    0% { transform: translate3d(-50%, 0, 0); } 
    100% { transform: translate3d(0, 0, 0); } 
  }

  .fp-tab-btn {
    padding: 8px 18px; border-radius: 999px; font-size: 0.8rem;
    font-weight: 600; cursor: pointer; border: 1.5px solid #2a2a2a;
    background: transparent; color: #888;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    font-family: 'Manrope', sans-serif; white-space: nowrap;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .fp-tab-btn:hover { border-color: #e00; color: #e00; }
  .fp-tab-btn.on { background: #e00; border-color: #e00; color: #fff; }

  .fp-tab-content {
    display: none;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }
  .fp-tab-content.active {
    display: block;
    opacity: 1;
  }

  .fp-row { 
    overflow: hidden; 
    margin-bottom: 12px; 
    width: 100%;
    contain: layout paint style;
  }

  .fp-track {
    display: flex; 
    gap: 12px; 
    width: max-content;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  .fp-track.left  { animation: fpL var(--spd, 25s) linear infinite; }
  .fp-track.right { animation: fpR var(--spd, 30s) linear infinite; }
  
  .fp-row:hover .fp-track { animation-play-state: paused; }

  .fp-card {
    flex-shrink: 0; 
    overflow: hidden;
    background: #111; 
    border: 1px solid #1e1e1e;
    contain: strict;
    border-radius: 6px;
  }

  .fp-card img {
    width: 100%; 
    height: 100%;
    object-fit: cover; 
    display: block;
  }

  @media (max-width: 600px) {
    .fp-row { margin-bottom: 8px; }
    .fp-track { gap: 8px; }
    .fp-tab-btn { padding: 6px 14px; font-size: 0.74rem; }
  }
`;

// Memoized for smooth tab switching without extra re-renders
const TabCategoryView = memo(function TabCategoryView({ cfg }) {
  // Multiply entries so loop moves smoothly without white-space
  const loopedRow1 = [...cfg.row1, ...cfg.row1, ...cfg.row1];
  const loopedRow2 = [...cfg.row2, ...cfg.row2, ...cfg.row2];

  const cardWidth = `clamp(${Math.round(cfg.w * 0.7)}px, 45vw, ${cfg.w}px)`;
  const cardHeight = `clamp(${Math.round(cfg.h * 0.7)}px, 35vw, ${cfg.h}px)`;

  return (
    <>
      <div className="fp-row">
        <div className="fp-track left" style={{ "--spd": "25s" }}>
          {loopedRow1.map((item, i) => (
            <div
              key={`r1-${item.id}-${i}`}
              className="fp-card"
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <img
                src={item.img}
                alt="project"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="fp-row">
        <div className="fp-track right" style={{ "--spd": "30s" }}>
          {loopedRow2.map((item, i) => (
            <div
              key={`r2-${item.id}-${i}`}
              className="fp-card"
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <img
                src={item.img}
                alt="project"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fast Preloading of Images in Background
    Object.values(tabData).forEach((category) => {
      [...category.row1, ...category.row2].forEach((item) => {
        if (item.img) {
          const img = new Image();
          img.src = item.img;
        }
      });
    });

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.01 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects-section"
      ref={sectionRef}
      style={{
        background: "#000",
        padding: "48px 0 60px",
        overflow: "hidden",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <style>{STYLE}</style>

      {/* Title */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
          padding: "0 16px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Featured <span style={{ color: "#e00" }}>Projects</span>
        </h2>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 24,
          padding: "0 16px",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.4s ease 0.05s",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`fp-tab-btn ${activeTab === tab ? "on" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`fp-tab-content ${activeTab === tab ? "active" : ""}`}
        >
          {activeTab === tab && <TabCategoryView cfg={tabData[tab]} />}
        </div>
      ))}
    </section>
  );
}