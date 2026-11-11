import React, { useState, memo } from "react";

export default memo(function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Do you promise clients?",
      a: "No. I build the profile and the content to represent your expertise professionally. Results depend on your work, market, and offer."
    },
    {
      q: "What if I don’t like the concept?",
      a: "You see the concept before paying 100%. We refine it together until it aligns perfectly with your brand."
    },
    {
      q: "How many revisions?",
      a: "Every single piece comes with 2 revision rounds to ensure complete satisfaction."
    },
    {
      q: "What payment methods do you accept?",
      a: "Direct international bank wire transfer, SWIFT, Wise, Payoneer, and major digital payment options."
    },
    {
      q: "What happens after 60 days?",
      a: "You receive a full performance report and a clear action plan for the next 60 days. You can continue on a monthly retainer or run it yourself."
    },
    {
      q: "Can you do my whole team?",
      a: "Yes! We can coordinate visual branding for executive teams and employee profiles after our initial onboarding."
    }
  ];

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <style>{`
        .faq-section {
          padding: 80px 20px;
          background: #3D2722;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .faq-container {
          max-width: 750px;
          width: 100%;
          text-align: center;
        }
        .faq-tag {
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
        .faq-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: #2A1A17;
          border: 1.5px solid rgba(142,24,37,0.4);
          border-radius: 14px;
          overflow: hidden;
          text-align: left;
          transition: border-color 0.2s;
        }
        .faq-item.open {
          border-color: var(--cherry-red, #8E1825);
        }
        .faq-question {
          padding: 18px 24px;
          font-size: 1rem;
          font-weight: 700;
          color: var(--butter-yellow, #FFEDAD);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-answer {
          padding: 0 24px 18px 24px;
          font-size: 0.9rem;
          color: var(--columbia-blue, #C8D9EC);
          line-height: 1.6;
        }

        @media(max-width: 600px) {
          .faq-section { padding: 50px 16px; }
          .faq-question { padding: 14px 18px; font-size: 0.92rem; }
          .faq-answer { padding: 0 18px 14px 18px; }
        }
      `}</style>

      <section className="faq-section" id="faqs-section">
        <div className="faq-container">
          <span className="faq-tag">Got Questions?</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={index} className={`faq-item ${openIdx === index ? "open" : ""}`}>
                <div className="faq-question" onClick={() => toggle(index)}>
                  <span>{item.q}</span>
                  <span>{openIdx === index ? "−" : "+"}</span>
                </div>
                {openIdx === index && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});