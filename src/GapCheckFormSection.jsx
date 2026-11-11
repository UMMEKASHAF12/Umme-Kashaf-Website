import React, { useState, memo } from "react";

export default memo(function GapCheckFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    linkedin: "",
    selling: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .gc-section {
          padding: 80px 20px;
          background: #2A1A17;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid rgba(142,24,37,0.3);
        }
        .gc-container {
          max-width: 600px;
          width: 100%;
          text-align: center;
        }
        .gc-tag {
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
        .gc-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .gc-subtitle {
          font-size: 1rem;
          color: var(--columbia-blue, #C8D9EC);
          margin-bottom: 32px;
        }
        .gc-form-box {
          background: #3D2722;
          border: 1.5px solid var(--cherry-red, #8E1825);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          text-align: left;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 6px;
        }
        .form-input {
          width: 100%;
          background: #2A1A17;
          border: 1.5px solid rgba(200,217,236,0.2);
          border-radius: 10px;
          padding: 12px 16px;
          color: var(--butter-yellow, #FFEDAD);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .form-input:focus {
          border-color: var(--cherry-red, #8E1825);
        }
        .gc-submit-btn {
          width: 100%;
          background: var(--cherry-red, #8E1825);
          color: var(--butter-yellow, #FFEDAD);
          border: 1px solid var(--butter-yellow, #FFEDAD);
          border-radius: 999px;
          padding: 14px;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
          margin-top: 10px;
        }
        .gc-submit-btn:hover {
          background: var(--butter-yellow, #FFEDAD);
          color: var(--dark-chocolate, #3D2722);
          transform: scale(1.02);
        }
        .gc-note {
          text-align: center;
          font-size: 0.8rem;
          color: var(--columbia-blue, #C8D9EC);
          margin-top: 14px;
          font-weight: 600;
        }
        .success-box {
          background: rgba(142,24,37,0.3);
          border: 1.5px solid var(--cherry-red, #8E1825);
          padding: 24px;
          border-radius: 16px;
          text-align: center;
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
        }

        @media(max-width: 600px) {
          .gc-section { padding: 50px 16px; }
          .gc-form-box { padding: 20px; }
        }
      `}</style>

      <section className="gc-section" id="final-section">
        <div className="gc-container">
          <span className="gc-tag">Free Audit</span>
          <h2 className="gc-title">Not ready yet?</h2>
          <p className="gc-subtitle">Send me your profile. Get a free Gap Check.</p>

          <div className="gc-form-box">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Website URL</label>
                  <input
                    type="url"
                    name="website"
                    required
                    placeholder="https://yourwebsite.com"
                    className="form-input"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>LinkedIn Profile Link</label>
                  <input
                    type="url"
                    name="linkedin"
                    required
                    placeholder="https://linkedin.com/in/username"
                    className="form-input"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>What do you sell?</label>
                  <input
                    type="text"
                    name="selling"
                    required
                    placeholder="e.g. B2B SaaS, Consulting services..."
                    className="form-input"
                    value={formData.selling}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="gc-submit-btn">
                  Send my profile →
                </button>
                <p className="gc-note">Free. I check 3 a week.</p>
              </form>
            ) : (
              <div className="success-box">
                Thank you! Your profile has been submitted. I’ll send over your free Gap Check shortly.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
});