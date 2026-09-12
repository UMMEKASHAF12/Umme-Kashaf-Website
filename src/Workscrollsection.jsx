import w1 from "./assets/Jacob Img.jpg";
import w2 from "./assets/Brian Img.jpg";
import w3 from "./assets/Ruben Img.jpg";
import w4 from "./assets/Hera.jpg";
import w5 from "./assets/kashaf.jpg";
import w6 from "./assets/umme.png";

const rowOne = [
  { id:1,  img: w1, label: "LinkedIn Banner Redesign"    },
  { id:2,  img: w2, label: "Executive Brand Identity"    },
  { id:3,  img: w3, label: "B2B Founder Profile"         },
  { id:4,  img: w4, label: "Carousel Content System"     },
  { id:5,  img: w5, label: "Consultant Makeover"         },
  { id:6,  img: w6, label: "C-Suite Profile Elevation"   },
];

const rowTwo = [
  { id:7,  img: w4, label: "Personal Brand Design"       },
  { id:8,  img: w5, label: "Startup Founder Positioning" },
  { id:9,  img: w6, label: "Visual Identity System"      },
  { id:10, img: w1, label: "LinkedIn Audit & Redesign"   },
  { id:11, img: w2, label: "Content Template Pack"       },
  { id:12, img: w3, label: "Brand Authority Build"       },
];

const rowThree = [
  { id:13, img: w5, label: "Premium Profile Design"      },
  { id:14, img: w6, label: "Featured Section Images"     },
  { id:15, img: w1, label: "Headline & About Section"    },
  { id:16, img: w2, label: "Profile Headshot Frame"      },
  { id:17, img: w3, label: "Mobile Optimized Banner"     },
  { id:18, img: w4, label: "LinkedIn Growth System"      },
];

const r1 = [...rowOne,   ...rowOne,   ...rowOne  ];
const r2 = [...rowTwo,   ...rowTwo,   ...rowTwo  ];
const r3 = [...rowThree, ...rowThree, ...rowThree];

function WorkCard({ item }) {
  return (
    <div className="ws-card">
      <img src={item.img} alt={item.label} />
      <div className="ws-overlay">
        <span className="ws-overlay-label">{item.label}</span>
        <span className="ws-overlay-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            width="14" height="14">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function WorkScrollSection() {
  return (
    <section className="ws-section" id="work-scroll-section">
      <style>{`
        .ws-section {
          background: #000;
          padding: 72px 0 80px;
          overflow: hidden;
        }
        .ws-header {
          text-align: center;
          margin-bottom: 52px;
          padding: 0 24px;
        }
        .ws-header-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 700;
          color: #e00;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-family: 'Manrope', sans-serif;
        }
        .ws-header h2 {
          font-size: clamp(1.9rem, 4vw, 2.9rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.1;
          font-family: 'Manrope', sans-serif;
        }
        .ws-header h2 span { color: #e00; }

        .ws-row-wrap {
          overflow: hidden;
          margin-bottom: 14px;
        }
        .ws-row-wrap:last-child { margin-bottom: 0; }

        .ws-track {
          display: flex;
          gap: 14px;
          width: max-content;
        }
        .ws-track.left  { animation: scrollLeft  38s linear infinite; }
        .ws-track.right { animation: scrollRight 45s linear infinite; }
        .ws-track.left2 { animation: scrollLeft  32s linear infinite; }
        .ws-row-wrap:hover .ws-track { animation-play-state: paused; }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }

        .ws-card {
          position: relative;
          width: 260px;
          height: 210px;
          border-radius: 0;
          overflow: hidden;
          flex-shrink: 0;
          background: #111;
          cursor: pointer;
        }
        .ws-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }
        .ws-card:hover img { transform: scale(1.07); }

        .ws-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 14px 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ws-card:hover .ws-overlay { opacity: 1; }

        .ws-overlay-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          font-family: 'Manrope', sans-serif;
          max-width: 75%;
        }
        .ws-overlay-arrow {
          width: 28px;
          height: 28px;
          background: #e00;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s;
        }
        .ws-card:hover .ws-overlay-arrow { transform: rotate(45deg); }

        @media (max-width: 768px) {
          .ws-card { width: 200px; height: 161px; }
          .ws-section { padding: 56px 0 60px; }
          .ws-header { margin-bottom: 40px; }
        }
        @media (max-width: 480px) {
          .ws-card { width: 160px; height: 129px; }
          .ws-section { padding: 44px 0 48px; }
        }
      `}</style>

      <div className="ws-header">
        <span className="ws-header-tag">My Work</span>
        <h2>Scroll Through <span>My Designs</span></h2>
      </div>

      <div className="ws-row-wrap">
        <div className="ws-track left">
          {r1.map((item, i) => <WorkCard key={`r1-${i}`} item={item} />)}
        </div>
      </div>

      <div className="ws-row-wrap">
        <div className="ws-track right">
          {r2.map((item, i) => <WorkCard key={`r2-${i}`} item={item} />)}
        </div>
      </div>

      <div className="ws-row-wrap">
        <div className="ws-track left2">
          {r3.map((item, i) => <WorkCard key={`r3-${i}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}