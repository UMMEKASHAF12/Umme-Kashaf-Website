import React, { memo } from "react";

export default memo(function DesignedFormatsSection() {
  const mockups = [
    {
      type: "Single Post",
      tag: "Text & Image",
      desc: "Clean typography and precise spacing that stops the scroll.",
      previewBg: "linear-gradient(135deg, #3D2722 0%, #8E1825 100%)"
    },
    {
      type: "Carousel",
      tag: "Multi-Slide PDF",
      desc: "Seamless visual flow designed to maximize read time and engagement.",
      previewBg: "linear-gradient(135deg, #2A1A17 0%, #3D2722 100%)"
    },
    {
      type: "Cheatsheet",
      tag: "Resource Design",
      desc: "High-value visual summary layout that earns bookmarks and shares.",
      previewBg: "linear-gradient(135deg, #8E1825 0%, #2A1A17 100%)"
    }
  ];

  return (
    <>
      <style>{`
        .df-section {
          padding: 80px 20px;
          background: #2A1A17;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .df-container {
          max-width: 950px;
          width: 100%;
          text-align: center;
        }
        .df-tag {
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
        .df-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .df-caption {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--columbia-blue, #C8D9EC);
          margin-bottom: 40px;
          font-style: italic;
        }
        .df-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .df-card {
          background: #3D2722;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 24px;
          text-align: left;
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .df-card:hover {
          transform: translateY(-5px);
          border-color: var(--cherry-red, #8E1825);
        }
        .mockup-preview {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          border: 1px solid rgba(255, 237, 173, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 16px;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.4);
        }
        .mockup-pill {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          background: rgba(0,0,0,0.5);
          padding: 3px 10px;
          border-radius: 999px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .mockup-type-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
        }
        .df-card-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .df-card-desc {
          font-size: 0.85rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.5;
        }

        @media(max-width: 820px) {
          .df-grid { grid-template-columns: 1fr; }
          .df-section { padding: 50px 16px; }
        }
      `}</style>

      <section className="df-section" id="designed-section">
        <div className="df-container">
          <span className="df-tag">Visual Samples</span>
          <h2 className="df-title">See what “designed” means</h2>
          <p className="df-caption">“Same voice. Three formats.”</p>

          <div className="df-grid">
            {mockups.map((item, index) => (
              <div key={index} className="df-card">
                <div className="mockup-preview" style={{ background: item.previewBg }}>
                  <span className="mockup-pill">{item.tag}</span>
                  <div className="mockup-type-title">{item.type}</div>
                </div>
                <div className="df-card-body">
                  <p className="df-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});