import React, { useState, memo } from "react";
import kashafImg from "./assets/kashaf.jpg";

export default memo(function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Will this get me clients?",
      a: "I can’t promise that, and I’d be wary of anyone who does. I build a profile that explains you clearly and content that keeps you visible. What it brings depends on your work and your market."
    },
    {
      q: "What if I don’t like the concept?",
      a: "Then you’ve lost nothing. You see the banner and headline concept before you pay. If it’s not right, we talk."
    },
    {
      q: "Will my posts sound like AI?",
      a: "They start from your website and your own voice notes. I write in your words, then design them."
    },
    {
      q: "What do I actually have to do?",
      a: "Send a five-minute voice note each week, and approve and publish what I send back."
    },
    {
      q: "What if I run out of things to say?",
      a: "You won’t. I pull ideas from your website, your voice notes and the questions your clients ask."
    },
    {
      q: "How many revisions do I get?",
      a: "Two rounds on every piece."
    },
    {
      q: "Can you handle my whole team?",
      a: "Yes, as a next step. Start with yourself, then we bring the same system to your team."
    },
    {
      q: "What happens after 60 days?",
      a: "You get a report and a plan. You can continue with me or take everything and run it yourself."
    },
    {
      q: "Why not just hire a designer and a ghostwriter?",
      a: "You can. Then you manage two people and pass your voice between them. Presence Pro is one person, one system, one voice."
    },
    {
      q: "How do I know it’s a good fit?",
      a: "Take the free Gap Check. I’ll tell you honestly what I’d change, and whether I’m the right person to do it."
    }
  ];

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);
  const WHATSAPP = "https://wa.me/923432687416";

  return (
    <>
      <style>{`
        .faq-section {
          padding: 90px 24px;
          background: var(--dark-chocolate, #3D2722);
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .faq-wrapper {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 60px;
          align-items: start;
        }
        .faq-left {
          position: sticky;
          top: 100px;
        }
        .faq-main-title {
          font-size: clamp(2.2rem, 3.5vw, 3rem);
          font-weight: 900;
          color: var(--cream-text, #FDFBF7);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 28px;
        }
        .help-card {
          background: rgba(200, 217, 236, 0.08);
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          text-align: left;
        }
        .help-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--butter-yellow, #FFEDAD);
          margin-bottom: 16px;
        }
        .help-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--cream-text, #FDFBF7);
          margin-bottom: 8px;
        }
        .help-desc {
          font-size: 0.9rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .help-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--cherry-red, #8E1825);
          color: var(--cream-text, #FDFBF7);
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.2s, opacity 0.2s;
        }
        .help-btn:hover {
          opacity: 0.9;
          transform: scale(1.02);
        }
        .faq-right {
          display: flex;
          flex-direction: column;
        }
        .faq-item {
          border-bottom: 1px solid rgba(200, 217, 236, 0.15);
          padding: 24px 0;
          transition: border-color 0.2s;
        }
        .faq-item:first-child {
          border-top: 1px solid rgba(200, 217, 236, 0.15);
        }
        .faq-question {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--cream-text, #FDFBF7);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          user-select: none;
        }
        .faq-question:hover {
          color: var(--butter-yellow, #FFEDAD);
        }
        .faq-arrow {
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--columbia-blue, #C8D9EC);
          transition: transform 0.2s ease;
        }
        .faq-answer {
          font-size: 0.95rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.6;
          margin-top: 14px;
          padding-right: 20px;
        }

        @media(max-width: 900px) {
          .faq-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .faq-left {
            position: static;
          }
          .faq-section {
            padding: 60px 16px;
          }
        }
      `}</style>

      <section className="faq-section" id="faqs-section">
        <div className="faq-wrapper">
          {/* Left Side: Title & Support Card */}
          <div className="faq-left">
            <h2 className="faq-main-title">A few things before we start.</h2>
            <div className="help-card">
              <img src={kashafImg} alt="Umme Kashaf" className="help-avatar" />
              <h3 className="help-title">Still have a question?</h3>
              <p className="help-desc">
                Send me a note. I’ll help you work out if this is right for you.
              </p>
              <a
                href={`${WHATSAPP}?text=Hi%20Umme,%20I%20have%20a%20question%20about%20Presence%20Pro.`}
                target="_blank"
                rel="noopener noreferrer"
                className="help-btn"
              >
                Ask me a question ↗
              </a>
            </div>
          </div>

          {/* Right Side: FAQ Accordion List */}
          <div className="faq-right">
            {faqs.map((item, index) => {
              const isOpen = openIdx === index;
              return (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={() => toggle(index)}>
                    <span>{item.q}</span>
                    <span className="faq-arrow">{isOpen ? "−" : "↓"}</span>
                  </div>
                  {isOpen && <div className="faq-answer">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});