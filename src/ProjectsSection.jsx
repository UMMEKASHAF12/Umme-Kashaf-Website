import { useState, useRef, useEffect } from "react";

// ── PROJECT DATA — swap images with your real project screenshots ──
// Add your images to src/assets/ and import them, then replace the gradient placeholders
const projects = [
  {
    id: 1,
    tag: "LinkedIn Banner",
    title: "Executive Brand Redesign",
    desc: "Transformed a cluttered LinkedIn profile into a premium executive brand that drives connection requests.",
    stats: [{ label: "Followers Growth", val: "+340%" }, { label: "Profile Views", val: "12K+" }],
    color: "#e00",
    img: null, // replace with: import p1 from "./assets/project1.jpg"; then img: p1
  },
  {
    id: 2,
    tag: "Visual Identity",
    title: "B2B Founder Personal Brand",
    desc: "Built a cohesive visual identity system for a SaaS founder — banner, headshot framing, and content templates.",
    stats: [{ label: "Lead Inquiries", val: "+5x" }, { label: "Post Impressions", val: "80K" }],
    color: "#c00",
    img: null,
  },
  {
    id: 3,
    tag: "Profile Makeover",
    title: "Consultant Authority Build",
    desc: "Full LinkedIn overhaul for a management consultant. New banner, headline framework, and featured section.",
    stats: [{ label: "Connections", val: "500+" }, { label: "DMs/Month", val: "30+" }],
    color: "#a00",
    img: null,
  },
  {
    id: 4,
    tag: "Content Design",
    title: "Carousel Content System",
    desc: "Designed a 12-post carousel template system that became the client's highest-performing content format.",
    stats: [{ label: "Avg. Reach", val: "25K" }, { label: "Saves", val: "1.2K" }],
    color: "#880000",
    img: null,
  },
  {
    id: 5,
    tag: "Brand Identity",
    title: "Startup Founder Positioning",
    desc: "Repositioned a startup founder's LinkedIn from generic to industry thought leader in 30 days.",
    stats: [{ label: "Engagement Rate", val: "+8x" }, { label: "Speaking Invites", val: "3" }],
    color: "#b00",
    img: null,
  },
  {
    id: 6,
    tag: "LinkedIn Audit",
    title: "C-Suite Profile Elevation",
    desc: "Complete profile audit and redesign for a C-Suite executive targeting board-level opportunities.",
    stats: [{ label: "Board Inquiries", val: "5" }, { label: "Media Features", val: "2" }],
    color: "#d00",
    img: null,
  },
];

// Card component with scroll-triggered entrance
function ProjectCard({ project, index }) {
  const ref  = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const delay = (index % 3) * 0.12;

  return (
    <div
      ref={ref}
      className="proj-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                     transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
      }}
    >
      {/* Image / placeholder */}
      <div className="proj-img" style={{ background: project.img ? "none" : `linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)` }}>
        {project.img
          ? <img src={project.img} alt={project.title} />
          : (
            <div className="proj-img-placeholder">
              <div className="placeholder-lines">
                <span style={{ background: project.color, width:"60%", opacity:0.8 }} />
                <span style={{ width:"80%", opacity:0.3 }} />
                <span style={{ width:"45%", opacity:0.2 }} />
              </div>
              <div className="placeholder-icon" style={{ borderColor: project.color, color: project.color }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <rect x="3" y="3" width="18" height="18" rx="3"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Add Project Image</span>
              </div>
            </div>
          )
        }
        {/* Tag badge */}
        <span className="proj-tag" style={{ background: project.color }}>{project.tag}</span>
      </div>

      {/* Content */}
      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>

        {/* Stats */}
        <div className="proj-stats">
          {project.stats.map((s, i) => (
            <div key={i} className="proj-stat">
              <span className="proj-stat-val" style={{ color: project.color }}>{s.val}</span>
              <span className="proj-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#" className="proj-cta">
          View Case Study
          <span className="proj-arrow" style={{ background: project.color }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const headRef = useRef(null);
  const [headVis, setHeadVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadVis(true); },
      { threshold: 0.2 }
    );
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        .projects-section {
          background: #fff;
          padding: 90px 40px 100px;
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .proj-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 64px;
        }
        .proj-header-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          color: #e00;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .proj-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #111;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
        }
        .proj-header h2 span { color: #e00; }
        .proj-header p {
          font-size: 0.92rem;
          color: #777;
          line-height: 1.7;
          font-weight: 500;
        }

        /* ── GRID ── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── CARD ── */
        .proj-card {
          background: #111;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #222;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s, transform 0.3s;
          cursor: pointer;
        }
        .proj-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(220,0,0,0.3);
          transform: translateY(-6px) scale(1.01);
        }

        /* Image area */
        .proj-img {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .proj-img img {
          width:100%; height:100%; object-fit:cover; display:block;
          transition: transform 0.5s ease;
        }
        .proj-card:hover .proj-img img { transform: scale(1.06); }

        /* Placeholder when no image */
        .proj-img-placeholder {
          width:100%; height:100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 20px;
        }
        .placeholder-lines {
          display: flex; flex-direction: column; gap: 6px; width: 80%;
        }
        .placeholder-lines span {
          height: 6px;
          border-radius: 4px;
          background: #333;
          display: block;
        }
        .placeholder-icon {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          border: 1.5px dashed currentColor;
          border-radius: 12px;
          padding: 14px 20px;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          opacity: 0.6;
        }

        /* Tag */
        .proj-tag {
          position: absolute;
          top: 12px; left: 12px;
          font-size: 0.58rem;
          font-weight: 800;
          color: #fff;
          border-radius: 999px;
          padding: 3px 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Body */
        .proj-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .proj-title {
          font-size: 1.02rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .proj-desc {
          font-size: 0.78rem;
          color: #888;
          line-height: 1.65;
          margin-bottom: 18px;
          flex: 1;
        }

        /* Stats row */
        .proj-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 18px;
          border-bottom: 1px solid #222;
        }
        .proj-stat { display: flex; flex-direction: column; gap: 2px; }
        .proj-stat-val {
          font-size: 1.1rem;
          font-weight: 900;
          line-height: 1;
        }
        .proj-stat-label {
          font-size: 0.6rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* CTA */
        .proj-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: gap 0.2s;
        }
        .proj-cta:hover { gap: 14px; }
        .proj-arrow {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s;
        }
        .proj-cta:hover .proj-arrow { transform: rotate(45deg); }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
          .projects-section { padding: 70px 28px 80px; }
        }
        @media (max-width: 600px) {
          .proj-grid { grid-template-columns: 1fr; }
          .projects-section { padding: 56px 16px 64px; }
          .proj-header { margin-bottom: 44px; }
        }
      `}</style>

      {/* Header */}
      <div
        ref={headRef}
        className="proj-header"
        style={{
          opacity: headVis ? 1 : 0,
          transform: headVis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2)",
        }}
      >
        <span className="proj-header-tag">Selected Work</span>
        <h2>Brands I've <span>Transformed</span></h2>
        <p>
          Every project starts with understanding your story — then crafting a
          visual presence that makes people stop scrolling and start reaching out.
        </p>
      </div>

      {/* Grid */}
      <div className="proj-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}