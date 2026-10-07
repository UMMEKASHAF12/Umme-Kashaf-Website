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

const STYLE = `
  /* =========================
     HIGH PERFORMANCE MARQUEE
  ========================== */

  @keyframes fpLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes fpRight {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  .fp-tab-btn {
    padding: 8px 18px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;

    border: 1.5px solid #2a2a2a;
    background: transparent;
    color: #888;

    font-family: 'Manrope', sans-serif;
    white-space: nowrap;

    outline: none;
    -webkit-tap-highlight-color: transparent;

    transition:
      background-color 0.18s ease,
      color 0.18s ease,
      border-color 0.18s ease;
  }

  .fp-tab-btn:hover {
    border-color: #e00;
    color: #e00;
  }

  .fp-tab-btn.on {
    background: #e00;
    border-color: #e00;
    color: #fff;
  }

  /* Only active panel exists in DOM */
  .fp-tab-content {
    width: 100%;
  }

  .fp-row {
    width: 100%;
    overflow: hidden;
    margin-bottom: 12px;

    /* Isolates the marquee from the rest of page */
    contain: layout paint;
  }

  .fp-track {
    display: flex;
    width: max-content;
    gap: 12px;

    /* GPU compositing */
    transform: translate3d(0, 0, 0);
    will-change: transform;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }

  .fp-track.left {
    animation-name: fpLeft;
    animation-duration: 25s;
  }

  .fp-track.right {
    animation-name: fpRight;
    animation-duration: 30s;
  }

  .fp-card {
    flex: 0 0 auto;

    overflow: hidden;
    background: #111;
    border: 1px solid #1e1e1e;
    border-radius: 6px;

    /* Prevent expensive rendering outside visible area */
    contain: paint;
  }

  .fp-card img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    /* Browser-friendly image rendering */
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  @media (max-width: 600px) {
    .fp-row {
      margin-bottom: 8px;
    }

    .fp-track {
      gap: 8px;
    }

    .fp-tab-btn {
      padding: 6px 14px;
      font-size: 0.74rem;
    }
  }

  /* Respect users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .fp-track {
      animation: none !important;
      transform: none !important;
    }
  }
`;


/* =========================
   MARQUEE ROW
========================= */

const MarqueeRow = memo(function MarqueeRow({
  items,
  width,
  height,
  direction,
}) {
  /*
    Only 2 copies are needed.
    3 copies were unnecessarily increasing DOM nodes,
    image decoding and paint work.
  */
  const loopItems = [...items, ...items];

  const cardWidth = `clamp(
    ${Math.round(width * 0.7)}px,
    45vw,
    ${width}px
  )`;

  const cardHeight = `clamp(
    ${Math.round(height * 0.7)}px,
    35vw,
    ${height}px
  )`;

  return (
    <div className="fp-row">
      <div
        className={`fp-track ${direction}`}
        style={{
          animationDuration:
            direction === "left" ? "25s" : "30s",
        }}
      >
        {loopItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="fp-card"
            style={{
              width: cardWidth,
              height: cardHeight,
            }}
          >
            <img
              src={item.img}
              alt=""
              loading={index < items.length ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
});


/* =========================
   ACTIVE CATEGORY ONLY
========================= */

const TabCategoryView = memo(function TabCategoryView({ cfg }) {
  return (
    <>
      <MarqueeRow
        items={cfg.row1}
        width={cfg.w}
        height={cfg.h}
        direction="left"
      />

      <MarqueeRow
        items={cfg.row2}
        width={cfg.w}
        height={cfg.h}
        direction="right"
      />
    </>
  );
});


/* =========================
   MAIN SECTION
========================= */

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "100px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
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
        contain: "layout paint",
      }}
    >
      <style>{STYLE}</style>

      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
          padding: "0 16px",

          opacity: inView ? 1 : 0,

          transform: inView
            ? "translate3d(0,0,0)"
            : "translate3d(0,12px,0)",

          transition:
            "opacity 0.35s ease, transform 0.35s ease",

          willChange: "opacity, transform",
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
          Featured{" "}
          <span style={{ color: "#e00" }}>
            Projects
          </span>
        </h2>
      </div>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 24,
          padding: "0 16px",

          opacity: inView ? 1 : 0,

          transition: "opacity 0.35s ease 0.05s",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`fp-tab-btn ${
              activeTab === tab ? "on" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ACTIVE TAB ONLY */}
      {inView && (
        <div className="fp-tab-content">
          <TabCategoryView
            cfg={tabData[activeTab]}
          />
        </div>
      )}
    </section>
  );
}