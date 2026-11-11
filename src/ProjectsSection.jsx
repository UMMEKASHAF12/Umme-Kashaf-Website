import React from "react";

import img1 from "./assets/work1.jpg";
import img2 from "./assets/work2.jpg";
import img3 from "./assets/work3.jpg";
import img4 from "./assets/work4.jpg";
import img5 from "./assets/work5.jpg";
import img6 from "./assets/work6.jpg";
import img7 from "./assets/work7.jpg";
import img8 from "./assets/work8.jpg";
import img9 from "./assets/work9.jpg";

const bannerImages = [
  { src: img1, alt: "Work 1" },
  { src: img2, alt: "Work 2" },
  { src: img3, alt: "Work 3" },
  { src: img4, alt: "Work 4" },
  { src: img5, alt: "Work 5" },
  { src: img6, alt: "Work 6" },
  { src: img7, alt: "Work 7" },
  { src: img8, alt: "Work 8" },
  { src: img9, alt: "Work 9" },
];

export default function ProjectsSection() {
  const displayItems = bannerImages.length > 0 ? bannerImages : Array(9).fill({ src: null, alt: "Banner Preview" });

  return (
    <section className="projects-scroll-section" id="projects-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .projects-scroll-section {
          background: #120e0c;
          padding: 60px 0;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .proj-headline-container {
          text-align: center;
          max-width: 650px; /* Width thori restrict ki hai taake text cleanly 2 lines me aaye */
          margin: 0 auto 35px;
          padding: 0 20px;
        }

        .proj-headline {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 800;
          color: #FFF7E6;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        /* Sirf required words par italic apply kiya hai */
        .proj-headline .cormorant-italic {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 700;
          color: #FFEDAD;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 10px; /* Rows ka gap mazeed kam kiya */
        }

        .marquee-track {
          display: flex;
          gap: 10px; /* Cards ke darmiyan gap kam kiya */
          width: max-content;
          will-change: transform;
          animation: scrollMarquee 45s linear infinite;
        }

        .marquee-track.reverse {
          animation: scrollMarqueeReverse 45s linear infinite;
        }

        /* Hover karne par sirf wahi row rukegi, dusri nahi */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        .banner-img-item {
          width: 280px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          transform: translateZ(0);
        }

        .banner-img-item img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          pointer-events: none;
        }

        @keyframes scrollMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes scrollMarqueeReverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @media (max-width: 768px) {
          .banner-img-item {
            width: 220px;
          }
        }
      `}</style>

      {/* Headline configured to split cleanly into 2 lines */}
      <div className="proj-headline-container">
        <h2 className="proj-headline">
          You see your <span className="cormorant-italic">new banner</span> and <br />
          <span className="cormorant-italic">headline</span> before you pay.
        </h2>
      </div>

      {/* Optimized Infinite Scrolling Images */}
      <div className="marquee-wrapper">
        {/* Row 1 */}
        <div className="marquee-track">
          {displayItems.map((item, i) => (
            <div key={`row1-${i}`} className="banner-img-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
          {displayItems.map((item, i) => (
            <div key={`row1-dup-${i}`} className="banner-img-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Row 2 (Reverse) */}
        <div className="marquee-track reverse">
          {displayItems.slice().reverse().map((item, i) => (
            <div key={`row2-${i}`} className="banner-img-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
          {displayItems.slice().reverse().map((item, i) => (
            <div key={`row2-dup-${i}`} className="banner-img-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}