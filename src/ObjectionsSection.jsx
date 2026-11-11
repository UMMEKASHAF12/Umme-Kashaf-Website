import React, { memo } from "react";

export default memo(function ObjectionsSection() {
  const objections = [
    {
      q: "Will it sound like me?",
      a: "Yes. I study your website, your profile and your own words first. You approve every post before it goes live, so nothing goes out that doesn’t sound like you."
    },
    {
      q: "I have no time.",
      a: "That’s exactly why this exists. You give me one short brief a month. I write, design and track everything else."
    },
    {
      q: "A designer didn’t help last time.",
      a: "You see a real concept before you decide. Then you approve every post before it’s published. You’re never guessin"
    },
    {
      q: "Will it actually bring clients?",
      a: "Your profile explains you in 3 seconds, and your posts are built to start conversations. I track impressions and your best formats every week, so we repeat what works and drop what doesn’t.No."
    }
  ];

  return (
    <>
      <style>{`
        .obj-section {
          padding: 80px 20px;
          background: #2A1A17;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .obj-container {
          max-width: 800px;
          width: 100%;
          text-align: center;
        }
        .obj-tag {
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
        .obj-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }
        .obj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .obj-card {
          background: #3D2722;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 18px;
          padding: 24px;
          text-align: left;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .obj-q {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 10px;
        }
        .obj-a {
          font-size: 0.92rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.5;
        }

        @media(max-width: 768px) {
          .obj-grid { grid-template-columns: 1fr; }
          .obj-section { padding: 50px 16px; }
        }
      `}</style>

      <section className="obj-section" id="before-you-start">
        <div className="obj-container">
          <span className="obj-tag">Clear Doubts</span>
          <h2 className="obj-title">Before you start</h2>

          <div className="obj-grid">
            {objections.map((item, index) => (
              <div key={index} className="obj-card">
                <div className="obj-q">{item.q}</div>
                <div className="obj-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});