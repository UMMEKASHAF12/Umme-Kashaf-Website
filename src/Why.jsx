import React, { memo } from "react";

export default memo(function WhySection() {
  const comparisons = [
    {
      typical: "Write posts to your brief or from generic templates",
      pro: "Start from your website and your own words"
    },
    {
      typical: "Deliver a banner or text, rarely both",
      pro: "Premium profile built from scratch, then 3-4 posts a week for 60 days in the same system"
    },
    {
      typical: "Content only, profile left as it was",
      pro: "Headline, About, Featured and banner matched first"
    },
    {
      typical: "Adapt templates to sound like you",
      pro: "Built from your content brief, so every post sounds like you"
    },
    {
      typical: "Ask for hours of your time each week",
      pro: "One short doc a month from you. Want extra posts? Fill the weekly doc"
    },
    {
      typical: "Report impressions and likes",
      pro: "I track impressions, your best post and your best format every week, then double down on what works"
    },
    {
      typical: "You manage two people and pass your voice between them",
      pro: "One person, one system, one voice"
    }
  ];

  return (
    <>
      <style>{`
        .why-section {
          background: #1C110E;
          padding: 90px 24px;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .why-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .why-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .why-tag {
          display: inline-block;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .why-title {
          color: var(--cream, #FFF7E6);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .why-title span {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--butter-yellow, #FFEDAD);
        }
        .why-table {
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }
        .why-table-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #3D2722;
          border-bottom: 1.5px solid rgba(142, 24, 37, 0.5);
        }
        .why-col-head {
          padding: 20px 24px;
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .why-col-head.typical {
          color: #aaa;
          border-right: 1px solid rgba(142, 24, 37, 0.3);
        }
        .why-col-head.pro {
          color: var(--butter-yellow, #FFEDAD);
          background: rgba(142, 24, 37, 0.25);
        }
        .why-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid rgba(200,217,236,0.08);
        }
        .why-row:last-child {
          border-bottom: none;
        }
        .why-cell {
          padding: 20px 24px;
          font-size: 0.92rem;
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .why-cell.typical {
          color: #999;
          border-right: 1px solid rgba(200,217,236,0.08);
        }
        .why-cell.pro {
          color: var(--cream, #FFF7E6);
          font-weight: 600;
          background: rgba(142, 24, 37, 0.08);
        }
        .why-arrow {
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 800;
          flex-shrink: 0;
        }

        @media(max-width: 768px) {
          .why-section { padding: 60px 16px; }
          .why-table-header, .why-row {
            grid-template-columns: 1fr;
          }
          .why-col-head.typical, .why-cell.typical {
            border-right: none;
            border-bottom: 1px solid rgba(200,217,236,0.08);
          }
          .why-cell.typical {
            color: var(--columbia-blue, #C8D9EC);
          }
        }
      `}</style>

      <section className="why-section" id="why-section">
        <div className="why-container">
          <div className="why-header">
            <span className="why-tag">The Difference</span>
            <h2 className="why-title">
              Why Choose <span>Presence Pro</span>
            </h2>
          </div>

          <div className="why-table">
            <div className="why-table-header">
              <div className="why-col-head typical">Typical ghostwriters and designers</div>
              <div className="why-col-head pro">Presence Pro</div>
            </div>

            {comparisons.map((item, index) => (
              <div className="why-row" key={index}>
                <div className="why-cell typical">{item.typical}</div>
                <div className="why-cell pro">
                  <span className="why-arrow">▶</span>
                  <span>{item.pro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});