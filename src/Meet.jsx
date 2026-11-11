import React, { memo } from "react";
import ummePic from "./assets/PP2-02.jpg"; // Apni image ka path yahan adjust kar lein

export default memo(function MeetSection() {
  return (
    <>
      <style>{`
        .meet-section {
          background-color: #1C110E;
          padding: 100px 24px;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
          overflow: hidden;
        }

        .meet-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }

        .meet-content {
          text-align: left;
        }

        .meet-tag {
          display: inline-block;
          font-family: monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .meet-title {
          color: var(--cream, #FFF7E6);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
        }

        .meet-title span {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--butter-yellow, #FFEDAD);
        }

        .meet-story {
          display: flex;
          flex-direction: column;
          gap: 16px;
          color: var(--columbia-blue, #C8D9EC);
          font-size: 0.98rem;
          line-height: 1.65;
          margin-bottom: 36px;
        }

        .meet-story p {
          margin: 0;
        }

        .meet-highlight {
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 600;
        }

        .meet-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.6);
          color: var(--cream, #FFF7E6);
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
          transition: all 0.2s ease;
        }

        .meet-btn:hover {
          background: var(--cherry-red, #8E1825);
          border-color: var(--butter-yellow, #FFEDAD);
          color: var(--butter-yellow, #FFEDAD);
          transform: translateY(-2px);
        }

        .meet-btn svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        .meet-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .meet-image-card {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1/1;
          border-radius: 24px;
          overflow: hidden;
          background: #2A1A17;
          border: 2px solid rgba(255, 237, 173, 0.25);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          position: relative;
        }

        .meet-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media(max-width: 900px) {
          .meet-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .meet-content {
            text-align: center;
          }
          .meet-btn {
            margin: 0 auto;
          }
        }
      `}</style>

      <section className="meet-section" id="meet-umme">
        <div className="meet-container">
          <div className="meet-content">
            <span className="meet-tag">// FOUNDER STORY</span>
            <h2 className="meet-title">
              Meet <span>Umme</span>
            </h2>

            <div className="meet-story">
              <p>
                I’m Umme, founder of <span className="meet-highlight">4x-Vision</span>, based in Karachi. I started with a design course in 2023, and I designed my first LinkedIn banner in 2024.
              </p>
              <p>
                I started with banners. A founder would send me their profile, I’d design something sharp, and it looked great.
              </p>
              <p>
                Then the same thing kept happening. A new banner on a profile that told a different story from the person’s own website. And no content behind it. People kept asking me the same question: <span className="meet-highlight">“Can you also handle the posts? I just don’t have the time.”</span>
              </p>
              <p>
                That’s when I understood the banner was never the real problem. Great experts are too busy to make their LinkedIn say what their work already says.
              </p>
              <p>
                So I built <span className="meet-highlight">Presence Pro</span>. One person, one system. I read your website, rebuild your profile around what you already say, and write and design your content in your voice, from a five-minute voice note.
              </p>
              <p>
                I’m taking <span className="meet-highlight">5 founding clients in 2026</span>, and each one gets my full attention.
              </p>
            </div>

            <a 
              href="https://linkedin.com/in/ummekashaffofficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="meet-btn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Connect On LinkedIn
            </a>
          </div>

          <div className="meet-image-wrapper">
            <div className="meet-image-card">
              <img src={ummePic} alt="Umme - Founder of 4x-Vision" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});