import React, { memo } from "react";

export default memo(function SoundFamiliarSection() {
  const painPoints = [
    {
      quote: "I know I should post. Then the week disappears.",
      expl: "Your best ideas never leave your head, so the people who’d hire you never hear them."
    },
    {
      quote: "My profile describes who I was three years ago.",
      expl: "Every visitor meets an older, smaller version of you."
    },
    {
      quote: "I opened a blank post, stared at it, and closed it.",
      expl: "Writing about yourself feels harder than doing the work, so it doesn’t happen."
    },
    {
      quote: "I hired someone once. The result sounded like a stranger.",
      expl: "Generic words don’t build trust. People can tell when it isn’t you."
    },
    {
      quote: "I’m better in person than I am online.",
      expl: "People who meet you trust you. People who find you online can’t tell."
    }
  ];

  return (
    <>
      <style>{`
        .sound-familiar-section {
          padding: 90px 20px;
          background: #3D2722;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .sf-container {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }
        .sf-tag {
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
        .sf-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }
        .sf-subtitle {
          font-size: clamp(0.95rem, 1.7vw, 1.1rem);
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.6;
          max-width: 720px;
          margin: 0 auto 50px;
        }
        .sf-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-align: left;
          margin-bottom: 50px;
        }
        .sf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          padding: 24px 22px;
          border-bottom: 1px solid rgba(255, 237, 173, 0.12);
          align-items: center;
          background: rgba(42, 26, 23, 0.4);
          border-radius: 12px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .sf-row:hover {
          background: rgba(42, 26, 23, 0.8);
          border-color: rgba(142, 24, 37, 0.6);
        }
        .sf-quote-col {
          border-left: 3px solid var(--cherry-red, #8E1825);
          padding-left: 14px;
        }
        .sf-quote {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--cream, #FFF7E6);
          line-height: 1.45;
        }
        .sf-cost-header {
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 6px;
          opacity: 0.9;
        }
        .sf-expl {
          font-size: 1rem; /* ~15-16px */
          color: rgba(255, 247, 230, 0.85); /* Cream with slight transparency */
          line-height: 1.55;
        }
        .sf-conclusion-box {
          background: rgba(142, 24, 37, 0.2);
          padding: 24px 28px;
          border-radius: 16px;
          border: 1.5px dashed var(--cherry-red, #8E1825);
          margin-bottom: 20px;
        }
        .sf-conclusion {
          font-size: clamp(1.05rem, 2vw, 1.15rem);
          color: var(--butter-yellow, #FFEDAD);
          line-height: 1.6;
          font-weight: 700;
        }
        .sf-transition-line {
          font-size: 0.95rem;
          color: var(--columbia-blue, #C8D9EC);
          font-weight: 600;
          font-style: italic;
        }

        @media(max-width: 768px) {
          .sound-familiar-section { padding: 50px 16px; }
          .sf-row { grid-template-columns: 1fr; gap: 16px; padding: 18px; }
          .sf-quote { font-size: 0.98rem; }
          .sf-expl { font-size: 0.95rem; }
          .sf-conclusion-box { padding: 18px 20px; }
        }
      `}</style>

      <section className="sound-familiar-section" id="sound-familiar-section">
        <div className="sf-container">
          <span className="sf-tag">Sound familiar?</span>
          <h2 className="sf-title">You’re not bad at LinkedIn.<br />You’re busy being good at your job.</h2>
          <p className="sf-subtitle">
            You have the work, the track record and the expertise. What you don’t have is the time to make LinkedIn show it.
          </p>

          <div className="sf-list">
            {painPoints.map((item, index) => (
              <div key={index} className="sf-row">
                <div className="sf-quote-col">
                  <div className="sf-quote">{item.quote}</div>
                </div>
                <div className="sf-expl-col">
                  <span className="sf-cost-header">What it costs you</span>
                  <div className="sf-expl">{item.expl}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sf-conclusion-box">
            <div className="sf-conclusion">
              The problem isn’t that you need to do more LinkedIn. It’s that your profile and your content don’t sound like you. That’s the part I fix.
            </div>
          </div>
          
          <div className="sf-transition-line">
            “If one of these felt a little too accurate, you’re in the right place.”
          </div>
        </div>
      </section>
    </>
  );
});