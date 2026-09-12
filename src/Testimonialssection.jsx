import { useEffect, useRef, useState } from "react";
import jacobImg from "./assets/Jacob Img.jpg";
import brianImg from "./assets/Brian Img.jpg";
import rubenImg from "./assets/Ruben Img.jpg";
import heraImg from "./assets/Hera.jpg";
import geraldImg from "./assets/GeraldImg.jpg";
import imamaImg from "./assets/Imama.jpg";




const testimonials = [
  {
    id: 1,
    name: "Jacob Ferguson",
    role: "IT Engineer · Rudick Innovatioan & Technology",
    avatar: jacobImg,
    text: "UMME did an amazing job with my profile. Before my profile was cluttered and had no real direction. UMME was able to take my profile in turn it into a masterpiece. Thank you UMME for all of your hard work.",
  },
  {
    id: 2,
    name: "Brian Wilson",
    role: "Founder · BGP Engineering",
    avatar: brianImg,
    text: "Umme did a great job upgrading my LinkedIn banner to look more professional. I particularly liked the picture of me and pose she had next to the headline. It makes me look authoritative, like I know what I'm doing. :) It could be a billboard now.",
  },
  {
    id: 3,
    name: "Ruben Clarke",
    role: "GRC Engineer· Information Security Consultant",
    avatar: rubenImg,
    text: "Umme redid my LinkedIn profile and the difference is obvious. Before, it was cluttered and didn't say much about what I actually do. She fixed the messaging and the visuals so it looks like a real brand instead of a half-filled template. She was patient through a few rounds of revisions and delivered when she said she would. Recommend her if your profile needs work.",
  },
  {
    id: 4,
    name: "Hera Iqram",
    role: "Trainer at · SMIT",
    avatar: heraImg,
    text: "I highly recommend Kashaf for designing She is incredibly passionate about her work, patient throughout the process, and delivers top-notch quality. If you need a professional design, she is the one to go to!",
  },
  {
    id: 5,
    name: "Gerald Wood",
    role: "CEO of · AC Authentic",
    avatar: geraldImg,
    text: "From the start, she just got it. It felt like she already understood what I wanted without me having to over-explain. Super hardworking and helpful.",
  },
  {
    id: 6,
    name: "Imama Ansari",
    role: "Co-Founder · 4x-Vision",
    avatar: imamaImg,
    text: "Working with Umme Kashaf was a wonderful experience. Her creativity, professionalism, and strong understanding of visual storytelling truly stand out. She knows how to turn ideas into impactful designs that help personal brands and businesses attract attention and connect with their audience effectively. ",
  },
//   {
//     id: 7,
//     name: "Syeda Qirat",
//     role: "Mern Stack Developer · Freelance",
//     avatar: rubenImg,
//     text: "UMME KASHAF did an amazing job transforming my LinkedIn banner into a professional and impactful personal brand identity. Her creativity and understanding of visual storytelling are impressive. Highly recommended!",

//  },
  // {
  //   id: 8,
  //   name: "Nadim R.",
  //   role: "Luxury Brand Dealer",
  //   avatar: rubenImg,
  //   text: "I am grateful for the opportunity to work with such amazing clients. Their trust and support have been invaluable in helping"
  // },
  // {
  //   id: 9,
  //   name: "Arooj Mazhar",
  //   role: "Founder of · Al-Hikkmah Institute",
  //   avatar: rubenImg,
  //   text: "Recently, I collaborated with UMME on a project for our institute Al-Hikmah E-Learning, and I'm pleased with the outcome.She designed engaging Quran posts for our social media platforms, effectively conveying our message and resonating with our audience"
  // },
  // {
  //   id: 10,
  //   name: "Filza Naeem",
  //   role: "Mern Stack Developer · Freelance",
  //   avatar: rubenImg,
  //   text: "I am grateful for the opportunity to work with such amazing clients. Their trust and support have been invaluable in helping"
  // },
];

// Duplicate data to create a seamless infinite loop across rows
const row1Data = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
const row2Data = [...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse()];
const row3Data = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function ReviewCell({ t }) {
  return (
    <div className="tm-cell">
      <div className="tm-author">
        <img src={t.avatar} alt={t.name} className="tm-avatar" />
        <div className="tm-meta">
          <span className="tm-name">{t.name}</span>
          <span className="tm-role">{t.role}</span>
        </div>
      </div>
      <p className="tm-text">{t.text}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const [headRef, headVis] = useScrollReveal(0.2);

  return (
    <section id="testimonials-section" className="tm-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        .tm-section {
          background: #ffffff;
          padding: 80px 0 100px;
          font-family: 'Manrope', sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* Side fade overlays for smooth scroll effect */
        .tm-section::before,
        .tm-section::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }
        .tm-section::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 20%, transparent);
        }
        .tm-section::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 20%, transparent);
        }

        /* ── HEADER ── */
        .tm-header {
          text-align: center;
          max-width: 520px;
          margin: 0 auto 50px;
          padding: 0 20px;
        }
        .tm-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900; 
          color: #111; 
          line-height: 1.1;
          letter-spacing: -0.025em; 
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        /* ── GRID/BORDER WALL CONTAINER ── */
        .tm-wall-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .tm-marquee-row {
          display: flex;
          overflow: hidden;
          user-select: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .tm-marquee-row:last-child {
          border-bottom: none;
        }

        .tm-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        /* Smooth continuous infinite scrolling */
        .track-left {
          animation: scrollLeft 45s linear infinite;
        }
        .track-right {
          animation: scrollRight 45s linear infinite;
        }

        .tm-marquee-row:hover .tm-marquee-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── REVIEW CELL (EXACT LIKE IMAGE) ── */
        .tm-cell {
          width: 360px;
          padding: 24px 28px;
          border-right: 1px solid #e2e8f0;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: #ffffff;
          transition: background-color 0.2s ease;
        }
        .tm-cell:hover {
          background-color: #f8fafc;
        }

        /* Author Info Top */
        .tm-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .tm-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .tm-meta { flex: 1; min-width: 0; }
        .tm-name {
          display: block;
          font-size: 0.82rem;
          font-weight: 800;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tm-role {
          display: block;
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 500;
          margin-top: 1px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Text Bottom */
        .tm-text {
          font-size: 0.78rem;
          color: #334155;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
          .tm-section { padding: 50px 0; }
          .tm-cell { width: 280px; padding: 18px 20px; }
          .tm-section::before, .tm-section::after { width: 40px; }
        }
      `}</style>

      {/* Header */}
      <div
        ref={headRef}
        className="tm-header"
        style={{
          opacity: headVis ? 1 : 0,
          transform: headVis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.75s cubic-bezier(.22,.68,0,1.2), transform 0.75s cubic-bezier(.22,.68,0,1.2)",
        }}
      >
        <h2>What my Clients say</h2>
      </div>

      {/* Continuous Grid/Border Wall Rows */}
      <div className="tm-wall-container">
        
        {/* Row 1: Left Animation */}
        <div className="tm-marquee-row">
          <div className="tm-marquee-track track-left">
            {row1Data.map((t, i) => (
              <ReviewCell key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Right Animation */}
        <div className="tm-marquee-row">
          <div className="tm-marquee-track track-right">
            {row2Data.map((t, i) => (
              <ReviewCell key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 3: Left Animation */}
        <div className="tm-marquee-row">
          <div className="tm-marquee-track track-left">
            {row3Data.map((t, i) => (
              <ReviewCell key={`r3-${i}`} t={t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}