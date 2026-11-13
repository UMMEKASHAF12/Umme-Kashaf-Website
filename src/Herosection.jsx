import { useState, useEffect, memo } from "react";
import kashafImg from "./assets/kashaf.jpg";
import newkashafImg from "./assets/PP2-02.jpg";

import client1 from "./assets/Jacob Img.jpg";
import client2 from "./assets/Imama.jpg";
import client3 from "./assets/GeraldImg.jpg";
import client4 from "./assets/Hera.jpg";
import client5 from "./assets/Brian Img.jpg";
import client6 from "./assets/Ruben Img.jpg";

import cisco from "./assets/cisco.png";
import forbes from "./assets/Forbes.png";
import dropbox from "./assets/dropbox.png";
import splunk from "./assets/splunk.png";
import netapp from "./assets/netapp.png";
import zayo from "./assets/Zayo.png";

const clientAvatars = [client1, client2, client3, client4, client5, client6];

const brands = [
  { name: "Cisco", logo: cisco },
  { name: "Forbes", logo: forbes },
  { name: "Dropbox", logo: dropbox },
  { name: "Splunk", logo: splunk },
  { name: "NetApp", logo: netapp },
  { name: "Michelin", logo: null },
  { name: "Zayo", logo: zayo },
  { name: "Pollen", logo: null },
  { name: "Aptech", logo: null },
  { name: "Relais & Châteaux", logo: null },
];
const marqueeItems = [...brands, ...brands, ...brands];

const flags = [
  { code: "pk", name: "Pakistan" },
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "de", name: "Germany" },
  { code: "ae", name: "UAE" },
  { code: "sa", name: "Saudi Arabia" },
];

const CALENDLY = "https://calendly.com/ummekashafofficial/new-meeting";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default memo(function HeroSection() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    document.title = "Umme Kashaf | Presence Pro: LinkedIn profile and content, done for you";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = newkashafImg;
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setNavScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Inter:wght@400;500;600;700;800;900&display=swap');

        :root {
          --cherry-red: #8E1825;
          --columbia-blue: #C8D9EC;
          --butter-yellow: #FFEDAD;
          --dark-chocolate: #3D2722;
          --espresso: #1C110E;
          --espresso-2: #26170F;
          --cream: #FFF7E6;
          --ruby: #C42A3B;
          --gold-glow: rgba(255, 237, 173, 0.35);
        }

        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        html, body { font-family:'Inter', sans-serif; background:var(--espresso); color:var(--cream); overflow-x:hidden; -webkit-font-smoothing:antialiased; }
        :focus-visible { outline:3px solid var(--butter-yellow); outline-offset:3px; }
        @media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; scroll-behavior:auto !important; } }

        .cormorant-italic { font-family:'Cormorant Garamond', serif; font-style:italic; font-weight:700; color:var(--butter-yellow); }

        /* NAV - Fast & Lightweight */
        .nav { position:fixed; top:0; left:0; right:0; z-index:999; display:flex; justify-content:center; align-items:center; padding:12px 24px; gap:12px; transition:background .15s ease, padding .15s ease; max-width:100vw; transform: translateZ(0); }
        .nav.scrolled { background:rgba(28,17,14,.98); box-shadow:0 4px 20px rgba(0,0,0,.4); padding:8px 16px; backdrop-filter:blur(6px); }
        .nav-links { display:flex; align-items:center; background:rgba(38,23,15,.92); border:1px solid rgba(255,237,173,.25); border-radius:999px; padding:8px 20px; gap:16px; flex-wrap:nowrap; justify-content:center; }
        .nav-links a { color:var(--cream); font-size:.82rem; font-weight:600; white-space:nowrap; cursor:pointer; text-decoration:none; transition:color .1s; }
        .nav-links a:hover { color:var(--butter-yellow); }
        .nav-cta { display:inline-flex; align-items:center; gap:8px; background:var(--butter-yellow); color:var(--espresso); border-radius:999px; padding:6px 16px 6px 6px; font-size:.8rem; font-weight:800; text-decoration:none; transition:transform .1s ease; white-space:nowrap; flex-shrink:0; will-change:transform; }
        .nav-cta:hover { transform:scale(1.02); }
        .nav-avatar { width:26px; height:26px; border-radius:50%; object-fit:cover; border:1.5px solid var(--espresso); }
        .page-top-spacer { height:75px; }

        /* HERO - GPU Accelerated */
        .hero-outer { position:relative; margin:0 12px; min-height:560px; border:1px solid rgba(255,237,173,.22); border-radius:24px; overflow:hidden; display:flex; align-items:center; justify-content:center; transform: translateZ(0);
          background:
            radial-gradient(55% 45% at 50% 0%, rgba(255,237,173,.14), transparent 70%),
            radial-gradient(40% 40% at 100% 100%, rgba(196,42,59,.25), transparent 70%),
            linear-gradient(180deg, var(--espresso-2), var(--espresso)); }

        .hero-center { position:relative; z-index:5; text-align:center; max-width:740px; width:100%; padding:44px 16px; display:flex; flex-direction:column; align-items:center; }
        .social-proof { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:22px; }
        .avatar-stack { display:flex; align-items:center; }
        .avatar-stack img { width:34px; height:34px; border-radius:50%; border:2px solid var(--butter-yellow); margin-left:-10px; object-fit:cover; }
        .avatar-stack img:first-child { margin-left:0; }
        .proof-label { font-size:.78rem; color:var(--columbia-blue); font-weight:600; }

        .hero-headline { font-size:clamp(2rem,4.4vw,3.4rem); font-weight:800; line-height:1.14; letter-spacing:-.02em; color:var(--cream); margin-bottom:16px; }
        .hero-subdescription { font-size:clamp(.95rem,1.8vw,1.08rem); color:var(--columbia-blue); line-height:1.65; margin-bottom:24px; max-width:620px; }

        .flags-row { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:26px; flex-wrap:wrap; }
        .flag-item { display:flex; flex-direction:column; align-items:center; gap:2px; }
        .flag-img { width:30px; height:18px; border-radius:2px; object-fit:cover; display:block; }
        .flag-name { font-size:.48rem; color:var(--columbia-blue); font-weight:700; letter-spacing:.04em; }

        .cta-container { display:flex; flex-direction:column; align-items:center; gap:10px; }
        .hero-cta { display:inline-flex; align-items:center; justify-content:center; gap:12px; background:var(--butter-yellow); color:var(--espresso); border-radius:999px; padding:13px 14px 13px 30px; font-size:.98rem; font-weight:800; text-decoration:none; border:none; cursor:pointer; box-shadow:0 8px 24px rgba(0,0,0,0.35); transition:transform .1s ease; font-family:'Inter',sans-serif; will-change:transform; }
        .hero-cta:hover { transform:translateY(-1px); }
        .arrow-circle { width:32px; height:32px; background:var(--cherry-red); border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .arrow-circle svg { width:14px; height:14px; stroke:var(--butter-yellow); fill:none; stroke-width:2.5; stroke-linecap:round; stroke-linejoin:round; }
        .secondary-link { background:none; border:none; font-family:inherit; color:var(--columbia-blue); font-size:.84rem; font-weight:600; text-decoration:underline; text-underline-offset:3px; cursor:pointer; }
        .secondary-link:hover { color:var(--butter-yellow); }

        /* LOGOS - Optimized Marquee Animation */
        .logos-section { margin-top:0px; background:var(--espresso); }
        .logos-caption { text-align:center; font-size:.76rem; color:var(--columbia-blue); font-weight:600; padding:22px 20px 14px; border-top:1px solid rgba(255,237,173,.15); }
        .marquee-wrapper { overflow:hidden; position:relative; padding:8px 0 24px; contain:layout paint; }
        .marquee-wrapper::before,.marquee-wrapper::after { content:''; position:absolute; top:0; bottom:0; width:70px; z-index:2; pointer-events:none; }
        .marquee-wrapper::before { left:0; background:linear-gradient(to right,var(--espresso) 30%,transparent); }
        .marquee-wrapper::after { right:0; background:linear-gradient(to left,var(--espresso) 30%,transparent); }
        .marquee-track { display:flex; align-items:center; width:max-content; animation:marquee 35s linear infinite; will-change:transform; }
        .marquee-track:hover { animation-play-state:paused; }
        @keyframes marquee { from{transform:translate3d(0,0,0);} to{transform:translate3d(-33.333%,0,0);} }
        .marquee-item { display:flex; align-items:center; justify-content:center; height:46px; padding:0 28px; border-right:1px solid rgba(200,217,236,.12); flex-shrink:0; }
        .marquee-item img { height:24px; width:auto; max-width:110px; object-fit:contain; filter: brightness(0) invert(1) opacity(0.85); }
        .logo-text { font-size:.84rem; font-weight:800; color:var(--cream); opacity: 0.85; white-space:nowrap; }

        @media (max-width:820px) {
          .hero-center { max-width:100%; padding:32px 14px; }
          .hero-outer { min-height:380px; }
          .nav { flex-wrap:wrap; padding:8px 12px; justify-content:space-between; }
          .nav-links { order:2; width:100%; overflow-x:auto; justify-content:flex-start; padding:6px 12px; gap:12px; margin-top:4px; }
          .nav-links::-webkit-scrollbar { display:none; }
          .nav-cta { order:1; padding:5px 12px 5px 5px; font-size:.75rem; }
          .page-top-spacer { height:100px; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-links">
          <a onClick={() => scrollToId("quiz-section")}>Gap quiz</a>
          <a onClick={() => scrollToId("projects-section")}>Proof</a>
          <a onClick={() => scrollToId("packages-section")}>Presence Pro</a>
          <a onClick={() => scrollToId("testimonials-section")}>Reviews</a>
          <a onClick={() => scrollToId("faqs-section")}>FAQ</a>
        </div>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="nav-cta">
          <img src={newkashafImg} alt="Umme Kashaf" className="nav-avatar" loading="eager" />
          <span>Get Presence Pro</span>
        </a>
      </nav>

      <div className="page-top-spacer" />

      {/* HERO */}
      <div className="hero-outer">
        <div className="hero-center">
          <div className="social-proof">
            <div className="avatar-stack">
              {clientAvatars.map((src, i) => <img key={i} src={src} alt="Client" loading="eager" />)}
            </div>
            <div className="proof-label">Trusted by 70+ clients Worldwide</div>
          </div>

          <h1 className="hero-headline">
            <span className="cormorant-italic">Your expertise deserves</span> better than a quiet LinkedIn.
          </h1>

          <p className="hero-subdescription">
I rebuild your profile and write your posts in your voice, so the right people start conversations with you. Done for you in 60 days.          </p>

          <div className="flags-row">
            {flags.map(f => (
              <div key={f.code} className="flag-item">
                <img className="flag-img" src={`https://flagcdn.com/w80/${f.code}.png`} alt={f.name} title={f.name} loading="lazy" />
                <span className="flag-name">{f.name}</span>
              </div>
            ))}
          </div>

          <div className="cta-container">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="hero-cta">
              Get your 60-day Presence Pro
              <span className="arrow-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </a>
            <button className="secondary-link" onClick={() => scrollToId("quiz-section")}>
              Not ready? Take the free Gap Check quiz.
            </button>
          </div>
        </div>
      </div>

      {/* LOGOS SECTION */}
      <div className="logos-section">
        <p className="logos-caption">Clients have worked at</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((brand, i) => (
              <div key={i} className="marquee-item">
                {brand.logo
                  ? <img src={brand.logo} alt={brand.name} loading="lazy"
                      onError={(e) => { e.target.style.display = "none"; if (e.target.nextSibling) e.target.nextSibling.style.display = "block"; }} />
                  : null}
                <span className="logo-text" style={{ display: brand.logo ? "none" : "block" }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});