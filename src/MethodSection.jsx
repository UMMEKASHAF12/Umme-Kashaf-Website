import React, { memo } from "react";

export default memo(function MethodSection() {
  const steps = [
    {
      step: "01",
      title: "Read",
      subtitle: "Website padhna",
      desc: "Hum aapki website ko deeply analyze karte hain yeh samajhne ke liye ke aap apne clients ko asal mein kya offer karte hain."
    },
    {
      step: "02",
      title: "Match",
      subtitle: "Gap dhoondna aur profile rebuild",
      desc: "Aapke website ke message aur LinkedIn profile ke darmiyan jo gap hai, usay khatam karke profile ko completely rebuild karte hain."
    },
    {
      step: "03",
      title: "Speak",
      subtitle: "Aap ki awaaz mein content",
      desc: "Aisa high-impact content create karte hain jo bilkul aapki authentic voice aur brand tone mein bolta hai."
    }
  ];

  return (
    <>
      <style>{`
        .method-section {
          padding: 80px 20px;
          background: #3D2722;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .method-container {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }
        .method-tag {
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
        .method-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .method-desc {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 48px auto;
        }
        .method-desc span {
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
        }
        
        /* 3 Cards Grid */
        .method-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .method-card {
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 30px 24px;
          text-align: left;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .method-card:hover {
          transform: translateY(-5px);
          border-color: var(--cherry-red, #8E1825);
        }
        .card-number {
          font-size: 2.2rem;
          font-weight: 900;
          color: rgba(142, 24, 37, 0.3);
          position: absolute;
          top: 15px;
          right: 20px;
        }
        .card-title-wrap {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 8px;
        }
        .card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
        }
        .card-subtitle {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--columbia-blue, #C8D9EC);
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .card-text {
          font-size: 0.88rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.55;
          margin-top: 12px;
        }

        @media(max-width: 820px) {
          .method-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .method-section { padding: 50px 16px; }
        }
      `}</style>

      <section className="method-section" id="method-section">
        <div className="method-container">
          <span className="method-tag">Our Unique Approach</span>
          <h2 className="method-title">The method: your website first</h2>
          <p className="method-desc">
            Most people start with a template. I start with your website, because that’s where you say what you really do. <span>Then I make your LinkedIn say the same thing.</span>
          </p>

          <div className="method-cards-grid">
            {steps.map((item, index) => (
              <div key={index} className="method-card">
                <span className="card-number">{item.step}</span>
                <div className="card-title-wrap">
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <div className="card-subtitle">{item.subtitle}</div>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});