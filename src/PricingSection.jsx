import { useState, useEffect, useRef } from "react";

// ⚠️ APNA GOOGLE APPS SCRIPT WEB APP URL YAHAN PASTE KAREIN
const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUbo-bjeKoTOxWOpGb2krrskf8c3rYuPzBK9Ie4faitvxXwmK97xwvCy4TnaCUFpuk/exec";

const tabs = [
  "LinkedIn Profile Design",
  "Content Design",
  "Logo Design",
  "Monthly Retainer",
];

const plans = {
  "LinkedIn Profile Design": [
    {
      name: "Basic Profile",
      popular: false,
      features: [
        "1 Banner",
        "1 Profile headshot",
        "2 Featured section images",
        "Unlimited revisions",
        "Ready to use files",
        "Mobile Optimized",
        "48 hours delivery",
      ],
      oldPrice: "$99",
      price: "$49",
      discount: "50% OFF",
    },
    {
      name: "Growth Profile",
      popular: true,
      features: [
        "1 Banner",
        "1 Profile headshot",
        "2 Featured section images",
        "Unlimited revisions",
        "Headline & About Section Optimization",
        "Ready to use files",
        "Mobile Optimized",
        "72 hours delivery",
      ],
      oldPrice: "$150",
      price: "$75",
      discount: "50% OFF",
    },
    {
      name: "Premium Profile",
      popular: false,
      features: [
        "3 Banners Slideshow",
        "2 Profile headshots",
        "3 Featured section images",
        "Complete Profile Optimization",
        "2 Cheatsheets for LinkedIn content",
        "1 Infographic for LinkedIn content",
        "Unlimited Revisions",
        "JPEG + editable File",
        "Mobile Optimized",
        "7 days delivery",
      ],
      oldPrice: "$500",
      price: "$250",
      discount: "50% OFF",
    },
  ],
  "Content Design": [
    {
      name: "Starter",
      popular: false,
      features: ["1 Carousel (5 slides)", "1 Cheatsheet Design", "1 Infographic Design", "Jpg + PDF files", "3 days delivery"],
      oldPrice: "$120",
      price: "$60",
      discount: "50% OFF",
    },
    {
      name: "Growth",
      popular: true,
      features: ["3 Carousel posts", "2 Cheatsheet Designs", "2 Infographic Designs", "Jpg + PDF + Figma or Ai Files", "5 days delivery"],
      oldPrice: "$250",
      price: "$125",
      discount: "50% OFF",
    },
    {
      name: "Premium",
      popular: false,
      features: ["5 Carousel posts", "5 Cheatsheet Designs", "5 Infographic Designs", "Jpg + PDF + Figma or Ai Files", "7 days delivery"],
      oldPrice: "$399",
      price: "$199",
      discount: "50% OFF",
    },
  ],
  "Logo Design": [
    {
      name: "Basic",
      popular: false,
      features: ["1 Logo concept", "2 revisions", "PNG + JPEG", "3 days delivery"],
      oldPrice: "$150",
      price: "$75",
      discount: "50% OFF",
    },
    {
      name: "Brand Kit",
      popular: true,
      features: ["3 Logo concepts", "Unlimited revisions", "PNG + JPEG + SVG + Figma", "Color palette", "5 days delivery"],
      oldPrice: "$298",
      price: "$149",
      discount: "50% OFF",
    },
    {
      name: "Full Identity",
      popular: false,
      features: ["5 Logo concepts", "Full brand guide", "All file formats", "Social media kit", "7 days delivery"],
      oldPrice: "$598",
      price: "$299",
      discount: "50% OFF",
    },
  ],
  "Monthly Retainer": [
    {
      name: "Starter",
      popular: false,
      features: ["10 designs/month", "unlimited revisions", "Monthly check-in"],
      oldPrice: "$250",
      price: "$125",
      discount: "50% OFF",
    },
    {
      name: "Growth",
      popular: true,
      features: ["20 designs/month", "Unlimited revisions",  "Weekly check-in", "Priority support"],
      oldPrice: "$499",
      price: "$249",
      discount: "50% OFF",
    },
    {
      name: "Premium",
      popular: false,
      features: ["30 designs/month", "Unlimited revisions", "Same-day turnaround", "Managed Comments", "Track Performance"],
      oldPrice: "$699",
      price: "$350",
      discount: "50% OFF",
    },
  ],
};

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function PlanCard({ plan, index, onGetStarted }) {
  const [ref, vis] = useScrollReveal(0.1);
  const delay = index * 0.12;

  return (
    <div
      ref={ref}
      className={`pc-wrap ${plan.popular ? "pc-popular" : ""}`}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s, transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
      }}
    >
      <div className="pc-corner-badge">{plan.discount}</div>
      {plan.popular && <div className="pc-popular-tag">POPULAR</div>}
      <h3 className="pc-name">{plan.name}</h3>

      <ul className="pc-features">
        {plan.features.map((f, i) => (
          <li key={i}>
            <span className="pc-bullet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="pc-pricing">
        <span className="pc-old-price">{plan.oldPrice}</span>
        <span className="pc-price">{plan.price}</span>
      </div>

      <button onClick={() => onGetStarted(plan)} className="pc-btn">
        Get Started
        <span className="pc-btn-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [headRef, headVis] = useScrollReveal(0.2);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const currentPlans = plans[activeTab] || [];

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      category: activeTab,
      planName: selectedPlan?.name,
      price: selectedPlan?.price,
    };

    try {
      await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", details: "" });
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <section id="packages-section" className="pricing-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        .pricing-section {
          background: #fff;
          padding: 96px 24px 104px;
          font-family: 'Manrope', sans-serif;
        }

        .pricing-header { text-align: center; margin-bottom: 40px; }
        .pricing-icon { font-size: 2rem; margin-bottom: 10px; display: block; }
        .pricing-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #111;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        .pricing-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
        }
        .pricing-tab {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #555;
          transition: all 0.22s;
          font-family: 'Manrope', sans-serif;
          white-space: nowrap;
        }
        .pricing-tab:hover { border-color: #e00; color: #e00; }
        .pricing-tab.active { background: #e00; border-color: #e00; color: #fff; }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 980px;
          margin: 0 auto;
          align-items: start;
        }

        .pc-wrap {
          position: relative;
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 20px;
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          will-change: transform, opacity;
          transition: box-shadow 0.3s, border-color 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .pc-wrap:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          border-color: #e00;
          transform: translateY(-6px) !important;
        }

        .pc-popular { background: #e00; border-color: #e00; }
        .pc-popular:hover { border-color: #c00; box-shadow: 0 20px 56px rgba(220,0,0,0.3); }

        .pc-corner-badge {
          position: absolute;
          top: 0; right: 0;
          background: #111;
          color: #fff;
          font-size: 0.58rem;
          font-weight: 900;
          padding: 6px 12px;
          border-radius: 0 18px 0 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .pc-popular .pc-corner-badge { background: #fff; color: #e00; }

        .pc-popular-tag {
          display: inline-block;
          font-size: 0.58rem;
          font-weight: 800;
          color: #e00;
          background: #fff;
          border-radius: 999px;
          padding: 3px 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
          align-self: flex-start;
        }

        .pc-name { font-size: 1.4rem; font-weight: 900; color: #111; margin-bottom: 20px; letter-spacing: -0.02em; }
        .pc-popular .pc-name { color: #fff; }

        .pc-features {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
          flex: 1;
        }
        .pc-features li { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: #444; font-weight: 500; }
        .pc-popular .pc-features li { color: rgba(255,255,255,0.9); }

        .pc-bullet {
          width: 20px; height: 20px;
          background: rgba(220,0,0,0.1);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #e00;
        }
        .pc-popular .pc-bullet { background: rgba(255,255,255,0.2); color: #fff; }

        .pc-pricing { display: flex; align-items: baseline; gap: 10px; margin-bottom: 20px; }
        .pc-old-price { font-size: 1.1rem; font-weight: 700; color: #bbb; text-decoration: line-through; }
        .pc-popular .pc-old-price { color: rgba(255,255,255,0.5); }
        .pc-price { font-size: 2.2rem; font-weight: 900; color: #111; letter-spacing: -0.03em; line-height: 1; }
        .pc-popular .pc-price { color: #fff; }

        .pc-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #e00;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 13px 24px;
          font-size: 0.88rem;
          font-weight: 800;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          transition: background 0.22s, transform 0.2s;
          width: 100%;
        }
        .pc-btn:hover { background: #c00; transform: scale(1.02); }
        .pc-popular .pc-btn { background: #fff; color: #e00; }
        .pc-popular .pc-btn:hover { background: #f5f5f5; }

        .pc-btn-arrow {
          width: 28px; height: 28px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.22s;
        }
        .pc-popular .pc-btn-arrow { background: rgba(220,0,0,0.15); }
        .pc-btn:hover .pc-btn-arrow { transform: translateX(3px); }

        /* ── POPUP MODAL STYLES ── */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999;
          padding: 16px;
        }
        .modal-card {
          background: #fff;
          border-radius: 20px;
          max-width: 480px;
          width: 100%;
          padding: 32px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          position: relative;
          animation: popIn 0.3s cubic-bezier(.22,.68,0,1.2);
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-close {
          position: absolute;
          top: 20px; right: 20px;
          border: none; background: #f3f4f6;
          width: 32px; height: 32px;
          border-radius: 50%;
          font-size: 1.2rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }
        .modal-header h3 { font-size: 1.5rem; font-weight: 800; color: #111; margin-bottom: 4px; }
        .modal-header p { font-size: 0.85rem; color: #666; margin-bottom: 20px; }
        .plan-summary {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          padding: 12px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .plan-summary-title { font-weight: 700; font-size: 0.9rem; color: #111; }
        .plan-summary-price { font-weight: 900; color: #e00; font-size: 1.1rem; }

        .modal-form { display: flex; flex-direction: column; gap: 14px; }
        .modal-form label { font-size: 0.8rem; font-weight: 700; color: #333; margin-bottom: 4px; display: block; }
        .modal-form input, .modal-form textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1.5px solid #e5e7eb;
          font-family: inherit;
          font-size: 0.88rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .modal-form input:focus, .modal-form textarea:focus { border-color: #e00; }
        
        .submit-btn {
          background: #e00;
          color: #fff;
          font-weight: 800;
          border: none;
          padding: 14px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background 0.2s;
          margin-top: 10px;
        }
        .submit-btn:hover { background: #c00; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .success-box { text-align: center; padding: 20px 0; }
        .success-icon { font-size: 3rem; margin-bottom: 12px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-section { padding: 72px 16px 80px; }
          .pricing-tabs { gap: 6px; }
          .pricing-tab { font-size: 0.72rem; padding: 7px 14px; }
          .modal-card { padding: 24px 20px; }
        }
      `}</style>

      {/* Header */}
      <div
        ref={headRef}
        className="pricing-header"
        style={{
          opacity: headVis ? 1 : 0,
          transform: headVis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.75s cubic-bezier(.22,.68,0,1.2), transform 0.75s cubic-bezier(.22,.68,0,1.2)",
        }}
      >
        <h2>Pricings</h2>
      </div>

      {/* Tabs */}
      <div className="pricing-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pricing-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="pricing-grid">
        {currentPlans.map((plan, i) => (
          <PlanCard
            key={`${activeTab}-${i}`}
            plan={plan}
            index={i}
            onGetStarted={handleOpenModal}
          />
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            
            {!submitted ? (
              <>
                <div className="modal-header">
                  <h3>Start Your Project</h3>
                  <p>Fill out the details below to complete your order.</p>
                </div>

                <div className="plan-summary">
                  <div>
                    <div className="plan-summary-title">{selectedPlan?.name}</div>
                    <small style={{ color: "#777" }}>{activeTab}</small>
                  </div>
                  <div className="plan-summary-price">{selectedPlan?.price}</div>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div>
                    <label>Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div>
                    <label>Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label>Phone / WhatsApp Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+1234567890" />
                  </div>
                  <div>
                    <label>Project Details / Requirements</label>
                    <textarea name="details" rows="3" value={formData.details} onChange={handleChange} placeholder="Describe your project briefly..."></textarea>
                  </div>

                  <button type="submit" disabled={loading} className="submit-btn">
                    {loading ? "Submitting..." : "Done Project"}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-box">
                <div className="success-icon">🎉</div>
                <h3>Project Request Sent!</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '8px' }}>
                  Thank you! We have received your request for the <strong>{selectedPlan?.name}</strong> plan. We will get back to you shortly!
                </p>
                <button onClick={handleCloseModal} className="submit-btn" style={{ marginTop: '20px', width: '100%' }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}