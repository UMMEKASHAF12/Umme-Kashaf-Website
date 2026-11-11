import React, { useState, memo } from "react";

export default memo(function PresenceQuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [leadData, setLeadData] = useState({ email: "", linkedin: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwojNbEjTA5NusjyW06GVJdjwHDvaB17rXXxTVSKEIGkbY1KvC6ne6WhlIaV5a45Zu/exec";

  const questions = [
    {
      id: 1,
      question: "1. Headline: A stranger opens your profile. In five seconds, can they say who you help and what result you get them?",
      options: [
        { label: "Yes, my headline says it in one line", score: 2 },
        { label: "Partly. It lists my job title and skills", score: 1 },
        { label: "No. It says what I am, not what I do for people", score: 0 }
      ]
    },
    {
      id: 2,
      question: "2. Banner and Featured: Look at your banner and Featured section. Do they send a visitor to one clear next step?",
      options: [
        { label: "Yes: a clear promise and one offer to click", score: 2 },
        { label: "I have a banner, but nothing to click", score: 1 },
        { label: "Default banner, or Featured is empty or random", score: 0 }
      ]
    },
    {
      id: 3,
      question: "3. Website match: Open your website next to your LinkedIn. Do they tell the same story?",
      options: [
        { label: "Same offer, same proof, same voice", score: 2 },
        { label: "Roughly, but one is out of date", score: 1 },
        { label: "They look like two different people", score: 0 }
      ]
    },
    {
      id: 4,
      question: "4. Content: In the last 30 days, how many posts would you be proud to have a prospect read?",
      options: [
        { label: "Four or more", score: 2 },
        { label: "One or two", score: 1 },
        { label: "None, or I haven’t posted", score: 0 }
      ]
    },
    {
      id: 5,
      question: "5. Proof: Does your profile show results a stranger can check: a client outcome, a number, a named case study?",
      options: [
        { label: "Yes, in a post, Featured item or About", score: 2 },
        { label: "Only vague claims like “I help businesses grow”", score: 1 },
        { label: "No proof anywhere", score: 0 }
      ]
    },
    {
      id: 6,
      question: "6. Inbound: How many warm DMs or inquiries did LinkedIn bring you last month, without you reaching out first?",
      options: [
        { label: "Three or more", score: 2 },
        { label: "One or two", score: 1 },
        { label: "Zero", score: 0 }
      ]
    }
  ];

  const handleAnswerSelect = (score) => {
    const updatedAnswers = { ...answers, [currentStep]: score };
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((acc, val) => acc + val, 0);
  };

  const getWeakestQuestionLine = () => {
    let minScore = 3;
    let weakestIdx = 0;
    
    Object.entries(answers).forEach(([stepIdx, score]) => {
      if (score < minScore) {
        minScore = score;
        weakestIdx = parseInt(stepIdx);
      }
    });

    switch (weakestIdx) {
      case 0:
        return "Your biggest leak is the headline. It’s the line every stranger reads first, and right now it doesn’t say what you do for them.";
      case 1:
        return "Your biggest leak is the first screen. Your banner and Featured section should hand a visitor one clear next step.";
      case 2:
        return "Your biggest leak is the mismatch with your website. Visitors who check both start to doubt which one is true.";
      case 3:
        return "Your biggest leak is content. Without posts people can read, your profile has nothing to prove you’re active and sharp.";
      case 4:
        return "Your biggest leak is proof. Strangers won’t take your word for it, so show them a result they can check.";
      case 5:
        return "Your biggest leak is inbound. Your profile may look fine, but it isn’t turning visits into conversations.";
      default:
        return "";
    }
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: leadData.email,
          linkedin: leadData.linkedin,
          score: calculateTotalScore(),
          weakestLeak: getWeakestQuestionLine()
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const totalScore = calculateTotalScore();

  return (
    <>
      <style>{`
        .pq-section {
          background: #1C110E;
          padding: 90px 20px;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(142,24,37,0.3);
          border-bottom: 1px solid rgba(142,24,37,0.3);
        }
        .pq-container {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }
        .pq-tag {
          display: inline-block;
          color: var(--butter-yellow, #FFEDAD);
          background: var(--cherry-red, #8E1825);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .pq-title {
          color: var(--cream, #FFF7E6);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .pq-title span {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: var(--butter-yellow, #FFEDAD);
        }
        .pq-subtitle {
          color: var(--columbia-blue, #C8D9EC);
          font-size: 0.98rem;
          margin-bottom: 40px;
          line-height: 1.5;
        }
        .pq-card {
          background: #2A1A17;
          border: 1.5px solid rgba(142, 24, 37, 0.4);
          border-radius: 20px;
          padding: 36px 28px;
          text-align: left;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }
        .pq-progress {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        .pq-question {
          color: var(--cream, #FFF7E6);
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.4;
        }
        .pq-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pq-option-btn {
          background: #1C110E;
          border: 1.5px solid rgba(142, 24, 37, 0.5);
          color: var(--columbia-blue, #C8D9EC);
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pq-option-btn:hover {
          background: var(--cherry-red, #8E1825);
          color: var(--cream, #FFF7E6);
          border-color: var(--butter-yellow, #FFEDAD);
          transform: translateY(-2px);
        }
        .pq-result-box {
          text-align: center;
        }
        .pq-score-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--butter-yellow, #FFEDAD);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .pq-result-box h3 {
          color: var(--butter-yellow, #FFEDAD);
          font-size: 1.4rem;
          font-weight: 900;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .pq-result-box p {
          color: var(--columbia-blue, #C8D9EC);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .pq-weakest-leak {
          background: rgba(142, 24, 37, 0.25);
          border-left: 3px solid var(--butter-yellow, #FFEDAD);
          padding: 14px 16px;
          border-radius: 8px;
          text-align: left;
          font-size: 0.88rem;
          color: var(--cream, #FFF7E6);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .pq-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
          margin-top: 20px;
        }
        .pq-input-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--butter-yellow, #FFEDAD);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .pq-input {
          width: 100%;
          background: #1C110E;
          border: 1.5px solid rgba(200,217,236,0.2);
          border-radius: 10px;
          padding: 12px 16px;
          color: var(--cream, #FFF7E6);
          font-size: 0.9rem;
          outline: none;
          font-family: 'Inter', sans-serif;
        }
        .pq-input:focus {
          border-color: var(--cherry-red, #8E1825);
        }
        .pq-submit-btn {
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
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }
        .pq-submit-btn:hover {
          background: var(--butter-yellow, #FFEDAD);
          color: #3D2722;
          transform: scale(1.02);
        }
        .pq-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .pq-success {
          background: rgba(142,24,37,0.3);
          border: 1.5px solid var(--cherry-red, #8E1825);
          padding: 24px;
          border-radius: 16px;
          text-align: center;
          color: var(--butter-yellow, #FFEDAD);
          font-weight: 700;
          font-size: 1.05rem;
          line-height: 1.5;
        }

        @media(max-width: 600px) {
          .pq-section { padding: 60px 16px; }
          .pq-card { padding: 24px 18px; }
        }
      `}</style>

      <section className="pq-section" id="stranger-test-quiz">
        <div className="pq-container">
          <span className="pq-tag">Quick Assessment</span>
          <h2 className="pq-title">
            Does your LinkedIn pass the <span>stranger test?</span>
          </h2>
          <p className="pq-subtitle">6 questions. 60 seconds. Find out what's leaking your leads.</p>

          <div className="pq-card">
            {!isCompleted ? (
              <div>
                <div className="pq-progress">
                  Question {currentStep + 1} of {questions.length}
                </div>
                <h3 className="pq-question">{questions[currentStep].question}</h3>
                <div className="pq-options">
                  {questions[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      className="pq-option-btn"
                      onClick={() => handleAnswerSelect(opt.score)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pq-result-box">
                <div className="pq-score-label">Your Score: {totalScore} / 12</div>

                {totalScore <= 5 && (
                  <div>
                    <h3>“Strangers are leaving before they see how good you are.”</h3>
                    <p>Your expertise is real, but your profile isn’t showing it. A free Gap Check shows exactly where people drop off.</p>
                  </div>
                )}
                {totalScore >= 6 && totalScore <= 9 && (
                  <div>
                    <h3>“You’re close, and the gaps are fixable.”</h3>
                    <p>The foundation is there. A few specific fixes would change how people see you and how many reach out.</p>
                  </div>
                )}
                {totalScore >= 10 && (
                  <div>
                    <h3>“Your profile does its job.”</h3>
                    <p>Your next step is staying visible with consistent content, without it eating your week.</p>
                  </div>
                )}

                <div className="pq-weakest-leak">
                  <strong>Analysis:</strong> {getWeakestQuestionLine()}
                </div>

                {!submitted ? (
                  <form onSubmit={handleLeadSubmit} className="pq-form">
                    <div className="pq-input-group">
                      <label>Your LinkedIn Profile URL</label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="pq-input"
                        value={leadData.linkedin}
                        onChange={(e) => setLeadData({ ...leadData, linkedin: e.target.value })}
                      />
                    </div>
                    <div className="pq-input-group">
                      <label>Where should we send your results?</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="pq-input"
                        value={leadData.email}
                        onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="pq-submit-btn" disabled={loading}>
                      {loading ? "Sending..." : (totalScore >= 10 ? "See how Presence Pro works →" : "Get my free Gap Check →")}
                    </button>
                  </form>
                ) : (
                  <div className="pq-success">
                    🎉 Thank you! Your customized report has been dispatched to <strong>{leadData.email}</strong>. Check your inbox shortly!
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
});