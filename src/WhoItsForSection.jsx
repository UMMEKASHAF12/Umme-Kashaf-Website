import React, { memo } from "react";

export default memo(function WhoItsForSection() {
  const forList = [
    "Founders building personal authority",
    "Consultants & Advisors looking for premium reach",
    "Executives & Senior Professionals short on time",
    "Experts with great work who want an aligned profile"
  ];

  const notForList = [
    "Anyone looking for fake guaranteed clients",
    "People expecting instant viral followers overnight",
    "Anyone unwilling to review/approve 5-min weekly voice notes",
    "Businesses looking for automated spam engagement"
  ];

  return (
    <>
      <style>{`
        .wif-section {
          padding: 80px 20px;
          background: #2A1A17;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .wif-container {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }
        .wif-tag {
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
        .wif-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }
        .wif-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }
        .wif-card {
          background: #3D2722;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 30px 24px;
          text-align: left;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .wif-card.not-for {
          border-color: rgba(200, 217, 236, 0.2);
        }
        .wif-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .wif-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.9rem;
        }
        .wif-icon.for {
          background: var(--cherry-red, #8E1825);
          color: var(--butter-yellow, #FFEDAD);
        }
        .wif-icon.not {
          background: rgba(200, 217, 236, 0.15);
          color: var(--columbia-blue, #C8D9EC);
        }
        .wif-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
        }
        .wif-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wif-item {
          font-size: 0.9rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .wif-disclaimer {
          background: rgba(142, 24, 37, 0.2);
          border: 1.5px dashed var(--cherry-red, #8E1825);
          border-radius: 16px;
          padding: 20px 24px;
          font-size: 0.95rem;
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
          line-height: 1.6;
        }

        @media(max-width: 768px) {
          .wif-grid { grid-template-columns: 1fr; }
          .wif-section { padding: 50px 16px; }
        }
      `}</style>

      <section className="wif-section" id="who-its-for-section">
        <div className="wif-container">
          <span className="wif-tag">Fit Check</span>
          <h2 className="wif-title">Who it’s for</h2>

          <div className="wif-grid">
            {/* For Card */}
            <div className="wif-card">
              <div className="wif-card-header">
                <div className="wif-icon for">✓</div>
                <h3 className="wif-card-title">Ideal For</h3>
              </div>
              <ul className="wif-list">
                {forList.map((item, index) => (
                  <li key={index} className="wif-item">
                    <span style={{ color: "var(--butter-yellow)" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For Card */}
            <div className="wif-card not-for">
              <div className="wif-card-header">
                <div className="wif-icon not">✕</div>
                <h3 className="wif-card-title">Not For</h3>
              </div>
              <ul className="wif-list">
                {notForList.map((item, index) => (
                  <li key={index} className="wif-item">
                    <span style={{ color: "var(--columbia-blue)" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="wif-disclaimer">
            Note: I build the profile and the content. Results depend on your work and your market.
          </div>
        </div>
      </section>
    </>
  );
});