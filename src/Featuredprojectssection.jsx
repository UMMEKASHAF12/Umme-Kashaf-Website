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
    row1: [work1Img, work2Img, work3Img, work4Img, work5Img],
    row2: [work6Img, work7Img, work8Img, work9Img, afterImg],
  },

  "Content Design": {
    w: 200,
    h: 240,
    row1: [ch1Img, ch2Img, ch3Img, ch4Img],
    row2: [ch1Img, ch2Img, ch3Img, ch4Img],
  },

  "Social Media Posters": {
    w: 210,
    h: 210,
    row1: [sp1Img, sp2Img, sp3Img, sp4Img],
    row2: [sp1Img, sp2Img, sp3Img, sp4Img],
  },
};

const tabs = Object.keys(tabData);

const Marquee = memo(({ images, w, h, reverse }) => {
  const [loaded, setLoaded] = useState(0);

  return (
    <div className="fp-row">
      <div
        className={`fp-track ${reverse ? "reverse" : ""}`}
        style={{
          "--speed": `${images.length * 5}s`,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            className="fp-card"
            key={`${src}-${i}`}
            style={{
              width: `clamp(${w * 0.7}px,45vw,${w}px)`,
              height: `clamp(${h * 0.7}px,35vw,${h}px)`,
            }}
          >
            <img
              src={src}
              alt=""
              loading={i < images.length ? "lazy" : "lazy"}
              decoding="async"
              draggable="false"
              onLoad={() => setLoaded((n) => n + 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

const Category = memo(({ data }) => (
  <>
    <Marquee
      images={data.row1}
      w={data.w}
      h={data.h}
    />

    <Marquee
      images={data.row2}
      w={data.w}
      h={data.h}
      reverse
    />
  </>
));

export default function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects-section"
      className="fp-section"
    >
      <style>{`
        .fp-section {
          background:#000;
          padding:48px 0 60px;
          overflow:hidden;
          font-family:'Manrope',sans-serif;
          contain:layout paint;
        }

        .fp-title {
          text-align:center;
          margin-bottom:20px;
          padding:0 16px;
        }

        .fp-title h2 {
          margin:0;
          color:#fff;
          font-size:clamp(1.5rem,4vw,2.5rem);
          font-weight:900;
          line-height:1.1;
        }

        .fp-title span {
          color:#e00;
        }

        .fp-tabs {
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:8px;
          margin-bottom:24px;
          padding:0 16px;
        }

        .fp-tab {
          padding:8px 18px;
          border-radius:999px;
          border:1px solid #2a2a2a;
          background:transparent;
          color:#888;
          font-family:'Manrope',sans-serif;
          font-size:.8rem;
          font-weight:600;
          cursor:pointer;
          white-space:nowrap;
        }

        .fp-tab.active {
          background:#e00;
          border-color:#e00;
          color:#fff;
        }

        .fp-row {
          width:100%;
          overflow:hidden;
          margin-bottom:12px;
          contain:paint;
        }

        .fp-track {
          display:flex;
          width:max-content;
          gap:12px;

          animation:
            fpMove var(--speed) linear infinite;

          will-change:transform;
          transform:translate3d(0,0,0);
        }

        .fp-track.reverse {
          animation-name:fpMoveReverse;
        }

        @keyframes fpMove {
          from {
            transform:translate3d(0,0,0);
          }
          to {
            transform:translate3d(-50%,0,0);
          }
        }

        @keyframes fpMoveReverse {
          from {
            transform:translate3d(-50%,0,0);
          }
          to {
            transform:translate3d(0,0,0);
          }
        }

        .fp-card {
          flex:none;
          overflow:hidden;
          border-radius:6px;
          background:#111;
          contain:paint;
        }

        .fp-card img {
          width:100%;
          height:100%;
          display:block;
          object-fit:cover;
        }

        @media(max-width:600px) {
          .fp-section {
            padding:40px 0 50px;
          }

          .fp-row {
            margin-bottom:8px;
          }

          .fp-track {
            gap:8px;
          }

          .fp-tab {
            padding:6px 14px;
            font-size:.74rem;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .fp-track {
            animation:none;
          }
        }
      `}</style>

      <div className="fp-title">
        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="fp-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`fp-tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {visible && (
        <Category data={tabData[activeTab]} />
      )}
    </section>
  );
}