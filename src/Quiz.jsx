import React, { useState, memo } from "react";

// Stranger Test quiz.
// Flow: 6 questions -> score + biggest leak shown at once -> email unlocks the 3 fixes
// (shown on screen straight away) -> next step (Presence Start / Presence Pro).

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwojNbEjTA5NusjyW06GVJdjwHDvaB17rXXxTVSKEIGkbY1KvC6ne6WhlIaV5a45Zu/exec";

// Change these if your pricing section uses different links.
const START_LINK = "#pricing";
const PRO_LINK = "#pricing";

const QUESTIONS = [
  {
    key: "headline",
    question: "Headline: A stranger opens your profile. In five seconds, can they say who you help and what result you get them?",
    options: [
      { label: "Yes, my headline says it in one line", score: 2 },
      { label: "Partly. It lists my job title and skills", score: 1 },
      { label: "No. It says what I am, not what I do for people", score: 0 }
    ]
  },
  {
    key: "firstScreen",
    question: "Banner and Featured: Look at your banner and Featured section. Do they send a visitor to one clear next step?",
    options: [
      { label: "Yes: a clear promise and one offer to click", score: 2 },
      { label: "I have a banner, but nothing to click", score: 1 },
      { label: "Default banner, or Featured is empty or random", score: 0 }
    ]
  },
  {
    key: "about",
    question: "About: Read the first two lines of your About section. Who are they about?",
    options: [
      { label: "My reader and the problem I solve for them", score: 2 },
      { label: "A mix of my reader and my career history", score: 1 },
      { label: "My job titles and background, or it's empty", score: 0 }
    ]
  },
  {
    key: "content",
    question: "Content: In the last 30 days, how many posts would you be proud to have a prospect read?",
    options: [
      { label: "Four or more", score: 2 },
      { label: "One or two", score: 1 },
      { label: "None, or I haven’t posted", score: 0 }
    ]
  },
  {
    key: "proof",
    question: "Proof: Does your profile show results a stranger can check: a client outcome, a number, a named case study?",
    options: [
      { label: "Yes, in a post, Featured item or About", score: 2 },
      { label: "Only general claims like “I help businesses grow”", score: 1 },
      { label: "No proof anywhere", score: 0 }
    ]
  },
  {
    key: "inbound",
    question: "Inbound: How many messages or inquiries did LinkedIn bring you last month, without you reaching out first?",
    options: [
      { label: "Three or more", score: 2 },
      { label: "One or two", score: 1 },
      { label: "Zero", score: 0 }
    ]
  }
];

// What the visitor sees for their weakest section: one line before the email step,
// three fixes after it.
const LEAKS = {
  headline: {
    name: "your headline",
    line: "Your biggest leak is the headline. It’s the line every stranger reads first, and right now it doesn’t say what you do for them.",
    fixes: [
      "Rewrite it as: I help [who] get [result]. Put that part first, before any job title.",
      "Add one piece of proof after it: a number, a client type, or years of experience.",
      "Check it on your phone. If the main point is cut off, shorten it until it isn’t."
    ]
  },
  firstScreen: {
    name: "your banner and Featured section",
    line: "Your biggest leak is the first screen. Your banner and Featured section should hand a visitor one clear next step.",
    fixes: [
      "Put one sentence on your banner: who you help and what they get. Keep it clear of your profile photo.",
      "Make the first Featured item your next step, such as a link to book a call.",
      "Remove Featured items that don’t help a buyer decide. Three strong ones beat eight random ones."
    ]
  },
  about: {
    name: "your About section",
    line: "Your biggest leak is the About section. Only the first two lines show before “see more”, and right now they don’t give a stranger a reason to click.",
    fixes: [
      "Open with your reader’s problem in their own words, not with your job title.",
      "Follow with what you do about it and one result you’ve delivered.",
      "End with one clear next step: message you, or book a call."
    ]
  },
  content: {
    name: "your content",
    line: "Your biggest leak is content. Without recent posts, a visitor can’t tell whether you’re active or what you think.",
    fixes: [
      "Write down five questions clients ask you all the time. Each one is a post.",
      "Post once a week for four weeks before you try to post more. A steady rhythm matters more than volume.",
      "End each post with one question or one next step, so a reader has something to do."
    ]
  },
  proof: {
    name: "your proof",
    line: "Your biggest leak is proof. Strangers won’t take your word for it, so show them a result they can check.",
    fixes: [
      "Pick one client result and write it as: situation, what you did, what changed.",
      "Add it to your Featured section and mention it in your About.",
      "Ask two past clients for a LinkedIn recommendation this week."
    ]
  },
  inbound: {
    name: "inbound",
    line: "Your biggest leak is inbound. Your profile may look fine, but it isn’t turning visits into conversations.",
    fixes: [
      "Add one clear invitation to your headline or About, such as “Message me the word AUDIT”.",
      "Put a booking link in your Featured section and in your contact info.",
      "Finish your posts with an invitation to message you about one specific thing."
    ]
  }
};

function tierFor(score) {
  if (score <= 5) return "low";
  if (score <= 9) return "mid";
  return "high";
}

export default memo(function PresenceQuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [leadData, setLeadData] = useState({ email: "", linkedin: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
  const tier = tierFor(totalScore);

  // Lowest-scoring question. On a tie, the earliest one wins.
  const weakestIdx = QUESTIONS.reduce((worst, _q, idx) => {
    const s = answers[idx] ?? 2;
    const w = answers[worst] ?? 2;
    return s < w ? idx : worst;
  }, 0);
  const isPerfect = totalScore === QUESTIONS.length * 2;
  const leak = LEAKS[QUESTIONS[weakestIdx].key];

  const handleAnswerSelect = (score) => {
    setAnswers({ ...answers, [currentStep]: score });
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // "no-cors" lets the browser send to Google Apps Script, but the page cannot read
      // the reply. So a network failure is caught here, while a script error is not.
      // Test this form yourself and check that a new row appears in your sheet.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          email: leadData.email,
          linkedin: leadData.linkedin,
          score: totalScore,
          tier,
          weakestLeak: isPerfect ? "none" : QUESTIONS[weakestIdx].key,
          answers: QUESTIONS.map((q, i) => q.key + ":" + (answers[i] ?? "")).join(", "),
          submittedAt: new Date().toISOString()
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("That didn’t go through. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const progress = Math.round(((isCompleted ? QUESTIONS.length : currentStep) / QUESTIONS.length) * 100);

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

        .pq-bar { height: 5px; background: rgba(200,217,236,0.15); border-radius: 999px; margin-bottom: 18px; overflow: hidden; }
        .pq-bar-fill { height: 100%; background: var(--butter-yellow, #FFEDAD); border-radius: 999px; transition: width 0.3s ease; }
        .pq-back { background: none; border: none; color: var(--columbia-blue, #C8D9EC); font-size: 0.82rem; cursor: pointer; margin-top: 18px; padding: 0; text-decoration: underline; }
        .pq-locked { border: 1.5px dashed rgba(255,237,173,0.45); border-radius: 12px; padding: 16px; text-align: left; margin-bottom: 8px; }
        .pq-locked strong { color: var(--butter-yellow, #FFEDAD); display: block; margin-bottom: 6px; font-size: 0.95rem; }
        .pq-locked span { color: var(--columbia-blue, #C8D9EC); font-size: 0.88rem; line-height: 1.5; }
        .pq-note { color: var(--columbia-blue, #C8D9EC); font-size: 0.76rem; line-height: 1.5; margin: 0; opacity: 0.85; }
        .pq-optional { text-transform: none; font-weight: 500; opacity: 0.8; letter-spacing: 0; }
        .pq-error { color: #FFB4B4; font-size: 0.85rem; margin: 0; }
        .pq-fixes { text-align: left; background: rgba(142,24,37,0.25); border-left: 3px solid var(--butter-yellow, #FFEDAD); border-radius: 8px; padding: 18px; margin-bottom: 22px; }
        .pq-fixes h4 { color: var(--butter-yellow, #FFEDAD); font-size: 1rem; font-weight: 800; margin: 0 0 10px; }
        .pq-fixes ol { margin: 0; padding-left: 20px; color: var(--cream, #FFF7E6); font-size: 0.9rem; line-height: 1.6; }
        .pq-fixes li { margin-bottom: 8px; }
        .pq-next { color: var(--columbia-blue, #C8D9EC); font-size: 0.9rem; line-height: 1.6; margin-bottom: 18px; text-align: left; }
        .pq-cta-row { display: flex; flex-direction: column; gap: 10px; }
        .pq-cta-secondary { color: var(--columbia-blue, #C8D9EC); font-size: 0.88rem; text-align: center; text-decoration: underline; }
        .pq-option-btn:focus-visible, .pq-submit-btn:focus-visible, .pq-input:focus-visible { outline: 2px solid var(--butter-yellow, #FFEDAD); outline-offset: 2px; }

        @media(max-width: 600px) {
          .pq-section { padding: 60px 16px; }
          .pq-card { padding: 24px 18px; }
        }
      `}</style>

      <section className="pq-section" id="stranger-test-quiz">
        <div className="pq-container">
          <span className="pq-tag">Free 60-second test</span>
          <h2 className="pq-title">
            Does your LinkedIn pass the <span>stranger test?</span>
          </h2>
          <p className="pq-subtitle">6 questions. Get your score, your biggest leak, and 3 fixes you can do today.</p>

          <div className="pq-card">
            {!isCompleted ? (
              <div>
                <div className="pq-bar" aria-hidden="true">
                  <div className="pq-bar-fill" style={{ width: progress + "%" }} />
                </div>
                <div className="pq-progress">
                  Question {currentStep + 1} of {QUESTIONS.length}
                </div>
                <h3 className="pq-question">{QUESTIONS[currentStep].question}</h3>
                <div className="pq-options">
                  {QUESTIONS[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="pq-option-btn"
                      onClick={() => handleAnswerSelect(opt.score)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {currentStep > 0 && (
                  <button type="button" className="pq-back" onClick={handleBack}>
                    Back
                  </button>
                )}
              </div>
            ) : (
              <div className="pq-result-box">
                <div className="pq-score-label">Your score: {totalScore} / 12</div>

                {tier === "low" && (
                  <div>
                    <h3>Strangers are leaving before they see how good you are.</h3>
                    <p>Your expertise is real, but your profile isn’t showing it yet. The good news: the biggest gaps are also the quickest to fix.</p>
                  </div>
                )}
                {tier === "mid" && (
                  <div>
                    <h3>You’re close, and the gaps are fixable.</h3>
                    <p>The foundation is there. A few specific fixes would change how people see you and how many reach out.</p>
                  </div>
                )}
                {tier === "high" && (
                  <div>
                    <h3>Your profile does its job.</h3>
                    <p>Your next step is staying visible with consistent content, without it eating your week.</p>
                  </div>
                )}

                {!isPerfect && (
                  <div className="pq-weakest-leak">
                    <strong>Your biggest leak:</strong> {leak.line}
                  </div>
                )}

                {!submitted ? (
                  <>
                    <div className="pq-locked">
                      <strong>
                        {isPerfect ? "Your 3 next moves are ready" : "Your 3 fixes for " + leak.name + " are ready"}
                      </strong>
                      <span>Enter your email and they’ll appear right here. No waiting for an inbox.</span>
                    </div>
                    <form onSubmit={handleLeadSubmit} className="pq-form">
                      <div className="pq-input-group">
                        <label htmlFor="pq-email">Your email</label>
                        <input
                          id="pq-email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="pq-input"
                          value={leadData.email}
                          onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                        />
                      </div>
                      <div className="pq-input-group">
                        <label htmlFor="pq-linkedin">
                          Your LinkedIn profile link <span className="pq-optional">(optional)</span>
                        </label>
                        <input
                          id="pq-linkedin"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="pq-input"
                          value={leadData.linkedin}
                          onChange={(e) => setLeadData({ ...leadData, linkedin: e.target.value })}
                        />
                      </div>
                      {error && <p className="pq-error" role="alert">{error}</p>}
                      <button type="submit" className="pq-submit-btn" disabled={loading}>
                        {loading ? "Sending..." : "Show my 3 fixes →"}
                      </button>
                      <p className="pq-note">
                        I’ll use your email to send your result and occasional LinkedIn tips. You can unsubscribe at any time. Add your profile link if you’d like me to look at it personally.
                      </p>
                    </form>
                  </>
                ) : (
                  <div>
                    <div className="pq-fixes">
                      <h4>{isPerfect ? "Your 3 next moves" : "3 fixes for " + leak.name}</h4>
                      <ol>
                        {(isPerfect
                          ? [
                              "Keep a steady rhythm: the same posting days every week.",
                              "Turn your best client result into a Featured case study.",
                              "Review your headline every quarter so it keeps up with your work."
                            ]
                          : leak.fixes
                        ).map((fix, i) => (
                          <li key={i}>{fix}</li>
                        ))}
                      </ol>
                    </div>

                    <p className="pq-next">
                      {tier === "high"
                        ? "Your profile is in good shape. If you’d like the content handled for you, Presence Pro is 3 to 5 posts a week, written and designed in your voice."
                        : tier === "mid"
                        ? "Want these done for you? Presence Start rebuilds your whole profile once. Presence Pro adds 60 days of content on top."
                        : "Want all of this done for you? Presence Pro rebuilds your profile and runs your content for 60 days. Presence Start covers the profile alone."}
                    </p>

                    <div className="pq-cta-row">
                      <a className="pq-submit-btn" href={tier === "mid" ? START_LINK : PRO_LINK}>
                        {tier === "mid" ? "See Presence Start →" : "See Presence Pro →"}
                      </a>
                      <a className="pq-cta-secondary" href={tier === "mid" ? PRO_LINK : START_LINK}>
                        {tier === "mid" ? "Or see Presence Pro" : "Or see Presence Start"}
                      </a>
                    </div>
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