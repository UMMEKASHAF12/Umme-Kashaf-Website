import React, { memo } from "react";

export default memo(function WhatYouGetSection() {
  const items = [
    {
      step: "01",
      title: "Website-to-profile gap review",
      desc: "Comprehensive audit aligning your core web messaging with your LinkedIn presence.",
      badge: "Audit & Analysis"
    },
    {
      step: "02",
      title: "New banner, headline, About and Featured section",
      desc: "Complete visual and textual overhaul so your profile converts visitors instantly.",
      badge: "Profile Overhaul"
    },
    {
      step: "03",
      title: "35 pieces over 60 days",
      desc: "[15 posts, 10 carousels, 10 cheatsheet], designed completely in your unique voice.",
      badge: "Content OS"
    },
    {
      step: "04",
      title: "Editable design files",
      desc: "Full access to your templates and assets for complete ownership and future use.",
      badge: "Templates & Assets"
    },
    {
      step: "05",
      title: "2 revision rounds on every piece",
      desc: "Complete satisfaction guaranteed with iterative refinement on text and visuals.",
      badge: "Refinements"
    },
    {
      step: "06",
      title: "60-day report and next-step plan",
      desc: "Performance insights, profile views analysis, and a clear roadmap for what's next.",
      badge: "Strategy Roadmap"
    }
  ];

  return (
    <>
      <style>{`
        .wyg-section {
          padding: 100px 20px 140px;
          background: #1C110E;
          display: flex;
          justify-content: center;
        }
        .wyg-container {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }
        .wyg-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .wyg-title {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 50px;
          letter-spacing: -0.02em;
        }

        .wyg-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-align: left;
        }

        .wyg-card {
          background: #26170F;
          border: 1.5px solid rgba(255, 237, 173, 0.22);
          border-radius: 22px;
          padding: 36px 34px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .wyg-card:hover {
          transform: translateY(-4px);
          border-color: var(--cherry-red, #8E1825);
        }

        .wyg-card-left {
          max-width: 620px;
        }

        .wyg-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .wyg-step-num {
          font-size: 0.8rem;
          font-weight: 900;
          color: var(--cherry-red, #8E1825);
          background: var(--butter-yellow, #FFEDAD);
          padding: 2px 8px;
          border-radius: 6px;
        }

        .wyg-card-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--columbia-blue, #C8D9EC);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .wyg-card-title {
          font-size: clamp(1.25rem, 2.2vw, 1.6rem);
          font-weight: 800;
          color: var(--cream, #FFF7E6);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .wyg-card-desc {
          font-size: 0.96rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.6;
        }

        .wyg-check-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(142, 24, 37, 0.3);
          border: 1.5px solid var(--cherry-red, #8E1825);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--butter-yellow, #FFEDAD);
          font-size: 1.2rem;
        }

        @media(max-width: 768px) {
          .wyg-section { padding: 60px 16px 80px; }
          .wyg-card {
            padding: 24px 20px;
            flex-direction: column;
            align-items: flex-start;
          }
          .wyg-check-icon { display: none; }
        }
      `}</style>

      <section className="wyg-section" id="what-you-get-section">
        <div className="wyg-container">
          <span className="wyg-tag">Deliverables</span>
          <h2 className="wyg-title">What you get</h2>

          <div className="wyg-list">
            {items.map((item, index) => (
              <div key={index} className="wyg-card">
                <div className="wyg-card-left">
                  <div className="wyg-card-header">
                    <span className="wyg-step-num">{item.step}</span>
                    <span className="wyg-card-badge">{item.badge}</span>
                  </div>
                  <h3 className="wyg-card-title">{item.title}</h3>
                  <p className="wyg-card-desc">{item.desc}</p>
                </div>
                <div className="wyg-check-icon">✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});