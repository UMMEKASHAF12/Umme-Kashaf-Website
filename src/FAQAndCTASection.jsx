import { useState } from "react";

const faqs = [
  {
    q: "How does the process look like?",
    a: "Simple: Select your package and fill a very quick form. I reach out within 24 hours and we schedule a quick call so I understand your needs. From there I start working and send you initial concepts, we refine them together through revisions, and I hand off the final files ready to go. You'll always know what stage we're at. No chasing, no guesswork."
  },
  {
    q: "How fast will I get my designs?",
    a: "Turnaround time depends on the scope of work, but most individual profile designs or branding assets are delivered within 3-5 business days."
  },
  {
    q: "What do you need from me to get started?",
    a: "I will need your current LinkedIn profile link, your target audience details, brand guidelines (if any), and any specific text/content you want to highlight."
  },
  {
    q: "What if I don't like the first design?",
    a: "No worries at all! Every package includes multiple revision rounds to ensure the final output aligns perfectly with your vision and goals."
  },
  {
    q: "Do you only work with LinkedIn or other platforms too?",
    a: "While LinkedIn design is my primary focus, I also design assets for Twitter/X, YouTube, and general brand social media kits upon request."
  },
  {
    q: "What payment methods do you accept?",
    a: "I accept direct bank transfers, Wise, Payoneer, and major credit/debit cards depending on your location."
  },
  {
    q: "Do you offer refunds if I'm not satisfied?",
    a: "Client satisfaction is guaranteed through our thorough revision process. Refunds are evaluated case-by-case before final asset handoff."
  },
  {
    q: "With whom I'll be working with?",
    a: "You will be working directly with me from start to finish—no account managers or middle agencies involved."
  }
];

export default function FAQAndCTASection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-cta-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800;900&display=swap');

        .faq-cta-wrapper {
          font-family: 'Manrope', sans-serif;
          background: #ffffff;
          width: 100%;
        }

        .cta-banner {
          background: #000000;
          color: #ffffff;
          text-align: center;
          padding: 48px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .cta-banner h3 {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ff0000;
          color: #000000;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 10px 22px;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(150, 4, 4, 0.8);
        }

        .faq-section {
          max-width: 760px;
          margin: 0 auto;
          padding: 80px 24px 100px;
          text-align: center;
        }

        .faq-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }

        .faq-item {
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-item.active {
          border-color: #0f172a;
        }

        .faq-question {
          width: 100%;
          padding: 16px 20px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
          cursor: pointer;
          text-align: left;
        }

        .faq-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0f172a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          flex-shrink: 0;
          margin-left: 12px;
        }

        .faq-answer {
          padding: 0 20px 18px;
          font-size: 0.82rem;
          color: #475569;
          line-height: 1.65;
          font-weight: 500;
        }

        .faq-bottom-action {
          margin-top: 40px;
        }

        .book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ff0000;
          color: #000000;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(204, 255, 0, 0.3);
        }

        @media (max-width: 600px) {
          .faq-section { padding: 60px 16px 80px; }
          .faq-question { font-size: 0.85rem; padding: 14px 16px; }
          .faq-answer { font-size: 0.78rem; padding: 0 16px 14px; }
        }
      `}</style>

      <div className="cta-banner">
        <h3>Send Me a Message on LinkedIn<br />For a Custom Package.</h3>
        <a href="https://linkedin.com/in/ummekashafofficial" target="_blank" rel="noopener noreferrer" className="cta-btn">
          Visit my LinkedIn Profile ➔
        </a>
      </div>

      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>

        <div className="faq-bottom-action">
          <a href="https://calendly.com/ummekashafofficial/new-meeting" target="_blank" rel="noopener noreferrer" className="book-btn">
            Book a slot to work with me
          </a>
        </div>
      </div>
    </div>
  );
}