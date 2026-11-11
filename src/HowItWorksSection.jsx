import React, { memo } from "react";

export default memo(function HowItWorksSection() {
  const steps = [
    {
      days: "Days 1-7",
      title: "Build",
      desc: "I rebuild your profile from scratch: banner, headline, About, Featured, skills, experience."
    },
    {
      days: "Days 8-60",
      title: "Post",
      desc: "3-4 posts a week: carousels, cheatsheets and single-image posts, each with a scroll-stopping hook. You approve, then they go live."
    },
    {
      days: "Throughout",
      title: "Track",
      desc: "I track impressions, your most viral post and your best-performing format for your niche, and shift the plan toward what works."
    },
    {
      days: "Day 60",
      title: "Report",
      desc: "You get the numbers and a plan for the next 60 days."
    }
  ];

  return (
    <>
      <style>{`
        .how-it-works-section {
          padding: 90px 20px;
          background: #3D2722;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .hiw-container {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }
        .hiw-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .hiw-title {
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 48px;
          letter-spacing: -0.02em;
        }
        
        /* 4 Steps Grid */
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          position: relative;
          text-align: left;
        }
        .hiw-card {
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: transform 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .hiw-card:hover {
          transform: translateY(-5px);
          border-color: var(--cherry-red, #8E1825);
        }
        .hiw-badge {
          display: inline-block;
          background: var(--cherry-red, #8E1825);
          color: var(--butter-yellow, #FFEDAD);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
          width: max-content;
        }
        .hiw-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 14px;
        }
        .hiw-card-desc {
          font-size: 0.92rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.65;
        }

        @media(max-width: 900px) {
          .hiw-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .how-it-works-section { padding: 60px 16px; }
        }
      `}</style>

      <section className="how-it-works-section" id="how-it-works-section">
        <div className="hiw-container">
          <span className="hiw-tag">The Blueprint</span>
          <h2 className="hiw-title">How it works (4 steps)</h2>

          <div className="hiw-grid">
            {steps.map((item, index) => (
              <div key={index} className="hiw-card">
                <span className="hiw-badge">{item.days}</span>
                <h3 className="hiw-card-title">{item.title}</h3>
                <p className="hiw-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});