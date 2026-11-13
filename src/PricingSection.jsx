import React, { memo } from "react";

export default memo(function PricingSection() {
  const CALENDLY = "https://calendly.com/ummekashafofficial/new-meeting";

  const startFeatures = [
    "New premium banner",
    "Headline and About, rewritten",
    "Featured section set up",
    "Experience, skills and every other section optimized",
    "3 posts, written and designed in your voice",
    "2 Days delivery",
    "3 revision round"
  ];

  const proFeatures = [
    "Premium LinkedIn profile built from scratch: banner, headline, About, Featured, skills and experience",
    "3-5 posts a week for 60 days: carousels, cheatsheets and single-image posts with scroll-stopping hooks",
    "Written from your monthly content brief, so every post sounds like you",
    "Weekly tracking: impressions, your most viral post and your best format for your niche",
    "Editable design files",
    "1 revision round on every post (extra rounds are available if you need them)",
    "Day-60 report and a plan for what comes next"
  ];

  return (
    <>
      <style>{`
        .pricing-section {
          padding: 90px 20px;
          background: #3D2722;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
          font-family: 'Inter', sans-serif;
        }
        .pricing-container {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }
        .pricing-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 40px;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          align-items: stretch;
          text-align: left;
        }
        .pricing-card {
          background: #2A1A17;
          border: 2px solid rgba(142, 24, 37, 0.6);
          border-radius: 24px;
          padding: 36px 28px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .pricing-card.featured {
          border-color: var(--butter-yellow, #FFEDAD);
          background: linear-gradient(180deg, #321F1B 0%, #2A1A17 100%);
        }
        .pricing-card:hover {
          transform: translateY(-4px);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(142,24,37,0.4);
          padding-bottom: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .plan-title {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
        }
        .plan-duration {
          font-size: 0.82rem;
          color: var(--columbia-blue, #C8D9EC);
          font-weight: 600;
        }
        .plan-price-wrap {
          text-align: right;
        }
        .plan-price {
          font-size: 2rem;
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          line-height: 1;
        }
        .founding-badge {
          font-size: 0.72rem;
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
          margin-top: 6px;
          background: rgba(142, 24, 37, 0.4);
          padding: 3px 8px;
          border-radius: 4px;
          display: inline-block;
        }
        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 30px;
          padding: 0;
          flex-grow: 1;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.5;
        }
        .feature-check {
          color: var(--cherry-red, #8E1825);
          font-weight: 900;
        }
        .pricing-card.featured .feature-check {
          color: var(--butter-yellow, #FFEDAD);
        }
        .cta-wrap {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }
        .pricing-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--cherry-red, #8E1825);
          color: var(--butter-yellow, #FFEDAD);
          border-radius: 999px;
          padding: 14px 28px;
          font-size: 0.92rem;
          font-weight: 800;
          text-decoration: none;
          border: 1px solid var(--butter-yellow, #FFEDAD);
          width: 100%;
          transition: transform 0.2s, background 0.2s, color 0.2s;
        }
        .pricing-card.featured .pricing-cta {
          background: var(--butter-yellow, #FFEDAD);
          color: var(--dark-chocolate, #3D2722);
        }
        .pricing-cta:hover {
          background: var(--butter-yellow, #FFEDAD);
          color: var(--dark-chocolate, #3D2722);
          transform: scale(1.02);
        }
        .payment-terms {
          font-size: 0.78rem;
          color: var(--columbia-blue, #C8D9EC);
          font-weight: 600;
          margin: 0;
        }
        .availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(142,24,37,0.3);
          border: 1px solid var(--cherry-red, #8E1825);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
        }

        @media(max-width: 768px) {
          .pricing-section { padding: 60px 16px; }
          .pricing-grid { grid-template-columns: 1fr; }
          .plan-price-wrap { text-align: left; margin-top: 8px; }
        }
      `}</style>

      <section className="pricing-section" id="packages-section">
        <div className="pricing-container">
          <span className="pricing-tag">Simple Investment</span>
          
          <div className="pricing-grid">
            {/* Presence Start Card */}
            <div className="pricing-card">
              <div className="card-top">
                <div>
                  <h3 className="plan-title">Presence Start</h3>
                  <span className="plan-duration">Your whole profile, rebuilt</span>
                </div>
                <div className="plan-price-wrap">
                  <div className="plan-price">$199</div>
                  <div className="founding-badge">one-time</div>
                </div>
              </div>

              <ul className="features-list">
                {startFeatures.map((feat, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="cta-wrap">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="pricing-cta">
                  Get Presence Start →
                </a>
                <p className="payment-terms">
                  Plus 3 posts to try my writing.
                </p>
              </div>
            </div>

            {/* Presence Pro Card (Featured) */}
            <div className="pricing-card featured">
              <div className="card-top">
                <div>
                  <h3 className="plan-title">Presence Pro</h3>
                  <span className="plan-duration">60 days engagement</span>
                </div>
                <div className="plan-price-wrap">
                  <div className="plan-price">$699</div>
                  <div className="founding-badge">Founding Price</div>
                </div>
              </div>

              <ul className="features-list">
                {proFeatures.map((feat, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="cta-wrap">
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="pricing-cta">
                  Start my 60-day Presence Pro →
                </a>
                <p className="payment-terms">
                  50% to start, after you approve the concept. 50% on day 30.
                </p>
                <div className="availability-pill">
                  <span className="dot"></span>
                  I take 5 clients in 2 months. 3 spots left this month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});