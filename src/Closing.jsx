import React, { memo } from "react";

export default memo(function ClosingSection() {
  return (
    <>
      <style>{`
        .closing-section {
          background-color: #1C110E;
          position: relative;
          padding: 120px 24px 140px;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          text-align: center;
          border-top: 1px solid rgba(142,24,37,0.3);
        }

        /* Bottom soft butter-yellow radial glow */
        .closing-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 237, 173, 0.12) 0%, rgba(28, 17, 14, 0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        .closing-container {
          position: relative;
          z-index: 2;
          max-width: 750px;
          margin: 0 auto;
        }

        .closing-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .closing-title {
          color: var(--cream, #FFF7E6);
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .closing-subtitle {
          color: var(--columbia-blue, #C8D9EC);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 36px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .closing-btn {
          display: inline-block;
          background-color: var(--butter-yellow, #FFEDAD);
          color: #1C110E;
          font-size: 1rem;
          font-weight: 800;
          padding: 16px 36px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 8px 30px rgba(255, 237, 173, 0.25);
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .closing-btn:hover {
          transform: translateY(-2px);
          background-color: #fff;
        }

        .closing-note {
          display: block;
          margin-top: 14px;
          font-size: 0.8rem;
          color: var(--columbia-blue, #C8D9EC);
          opacity: 0.8;
          font-weight: 600;
        }

        .closing-link-wrap {
          margin-top: 30px;
        }

        .closing-secondary-link {
          color: var(--butter-yellow, #FFEDAD);
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.2s;
        }

        .closing-secondary-link:hover {
          opacity: 0.8;
        }

        @media(max-width: 600px) {
          .closing-section { padding: 80px 16px 100px; }
        }
      `}</style>

      <section className="closing-section" id="closing-cta">
        <div className="closing-container">
          <span className="closing-tag">THE FINAL PUSH</span>
          
          <h2 className="closing-title">
            If your expertise isn’t visible, your LinkedIn is the most direct fix.
          </h2>

          <p className="closing-subtitle">
            Get Presence Pro, or start with a free Gap Check, and let’s find out if we’re the right fit.
          </p>

          <div>
            <a href="#pricing" className="closing-btn">
              Get your 60-day Presence Pro
            </a>
            <span className="closing-note">5 founding clients in 2026 · You see the concept before you pay</span>
          </div>

          <div className="closing-link-wrap">
            <a href="#stranger-test-quiz" className="closing-secondary-link">
              Not ready? Take the free Gap Check →
            </a>
          </div>
        </div>
      </section>
    </>
  );
});