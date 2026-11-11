import React, { memo } from "react";

export default memo(function TimeCommitmentSection() {
  const WHATSAPP = "https://wa.me/923432687416";

  return (
    <>
      <style>{`
        .tc-section {
          padding: 80px 20px;
          background: #3D2722;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .tc-container {
          max-width: 750px;
          width: 100%;
          text-align: center;
        }
        .tc-tag {
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
        .tc-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .tc-box {
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
          text-align: left;
        }
        .tc-highlight {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .tc-p {
          font-size: 0.95rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .tc-p span {
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
        }
        .tc-safety {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(142, 24, 37, 0.25);
          border: 1px solid var(--cherry-red, #8E1825);
          padding: 12px 18px;
          border-radius: 12px;
          margin-top: 20px;
          font-size: 0.88rem;
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 600;
        }

        @media(max-width: 600px) {
          .tc-section { padding: 50px 16px; }
          .tc-box { padding: 20px; }
        }
      `}</style>

      <section className="tc-section" id="time-commitment-section">
        <div className="tc-container">
          <span className="tc-tag">Effortless Workflow</span>
          <h2 className="tc-title">Would this fit into your week?</h2>

          <div className="tc-box">
            <div className="tc-highlight">
              Honest answer: you give me five minutes a week. I do the rest.
            </div>
            <p className="tc-p">
              No long writing sessions or endless back-and-forth. You send a quick voice note, and I transform it into high-converting posts, carousels, and cheatsheets.
            </p>
            <div className="tc-safety">
              <span>🔒</span>
              <div>You never hand over a password. I send the content, you publish it.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});