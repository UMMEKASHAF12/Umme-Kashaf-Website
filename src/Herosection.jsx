import { useState, useEffect, useRef, lazy, Suspense, memo } from "react";

const StatsSection            = lazy(() => import("./StatsSection"));
const FeaturedProjectsSection = lazy(() => import("./Featuredprojectssection"));
const BeforeAfterSection      = lazy(() => import("./Beforeaftersection"));
const PricingSection          = lazy(() => import("./PricingSection"));
const TestimonialsSection     = lazy(() => import("./Testimonialssection"));
const FAQAndCTASection        = lazy(() => import("./FAQAndCTASection"));
const Footer                  = lazy(() => import("./Footer"));

import jacobImg  from "./assets/Jacob Img.jpg";
import brianImg  from "./assets/Brian Img.jpg";
import rubenImg  from "./assets/Ruben Img.jpg";
import heraImg   from "./assets/Hera.jpg";
import kashafImg from "./assets/kashaf.jpg";
import ummeImg   from "./assets/umme.png";
import linkedinSS from "./assets/linkedin-ss.png";

import cisco from "./assets/cisco.png";
import forbes from "./assets/Forbes.png";
import dropbox from "./assets/dropbox.png";
import splunk from "./assets/splunk.png";
import netapp from "./assets/netapp.png";
import zayo from "./assets/Zayo.png";

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

const reviews = [
  { id: 1, avatar: jacobImg, name: "Jacob Ferguson", followers: "7K+", text: "UMME did an amazing job with my profile. It was cluttered before she turned it into a masterpiece!", side: "left", topPct: "14%", delay: 0 },
  { id: 2, avatar: brianImg, name: "Brian Wilson", followers: "16K+", text: "Umme upgraded my LinkedIn banner to look very professional. It could be a billboard now.", side: "right", topPct: "14%", delay: 0.25 },
  { id: 3, avatar: rubenImg, name: "Ruben Clarke", followers: "2.5K+", text: "Umme redid my LinkedIn profile and the difference is obvious. Highly recommend her!", side: "left", topPct: "56%", delay: 0.5 },
  { id: 4, avatar: heraImg, name: "Hera Iqram", followers: "1.7K+", text: "Incredibly passionate about her work, patient throughout, and delivers top-notch quality.", side: "right", topPct: "56%", delay: 0.75 },
];

const trustedAvatars = [jacobImg, brianImg, rubenImg, heraImg, kashafImg];

const flags = [
  { code: "pk", name: "Pakistan" },
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "de", name: "Germany" },
  { code: "ae", name: "UAE" },
  { code: "sa", name: "Saudi Arabia" },
];

const WHATSAPP = "https://wa.me/923432687416";
const CALENDLY = "https://calendly.com/ummekashafofficial/new-meeting";
const LINKEDIN = "https://www.linkedin.com/in/ummekashafofficial/";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function LazySection({ children, bg = "#fff" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ contain: "content" }}>
      {show
        ? <Suspense fallback={<div style={{ height: 100, background: bg }} />}>{children}</Suspense>
        : <div style={{ height: 100, background: bg }} />
      }
    </div>
  );
}

export default memo(function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    // ════════════════════════════════════════════════════════
    // 1. Browser Tab ka Title set karein
    document.title = "Umme Kashaf | Personal Brand Designer";

    // 2. Browser Tab ki Picture (Favicon) Dynamic Set karein
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = kashafImg;
    // ════════════════════════════════════════════════════════

    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setNavScrolled(window.scrollY > 50);
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
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        html, body { font-family:'Manrope',sans-serif; background:#fff; color:#111; overflow-x:hidden; -webkit-font-smoothing:antialiased; }

        /* Hardware acceleration helper */
        .hw-accel { transform: translateZ(0); backface-visibility: hidden; }

        /* ══ STICKY NAV ══ */
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 999; display: flex; justify-content: center; align-items: center;
          padding: 14px 24px; gap: 12px;
          transition: background 0.25s ease, box-shadow 0.25s ease, padding 0.25s ease;
          max-width: 100vw;
        }
        .nav.scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          padding: 10px 16px;
        }
        .nav-links {
          display:flex; align-items:center; background:#fff;
          border:1.5px solid #e5e7eb; border-radius:999px;
          padding:10px 20px; gap:16px;
          box-shadow:0 2px 14px rgba(0,0,0,0.07);
          flex-wrap:nowrap; justify-content:center;
          transition: padding 0.25s ease;
        }
        .nav.scrolled .nav-links { padding:8px 16px; }
        .nav-links a {
          text-decoration:none; color:#222; font-size:0.84rem;
          font-weight:600; transition:color 0.2s; white-space:nowrap; cursor:pointer;
        }
        .nav-links a:hover { color:#e00; }
        
        .nav-cta {
          display:inline-flex; align-items:center; gap:8px; background:#111; color:#fff;
          border-radius:999px; padding:7px 18px 7px 7px; font-size:0.82rem;
          font-weight:800; text-decoration:none;
          transition:background 0.2s, transform 0.2s; white-space:nowrap; flex-shrink:0;
        }
        .nav-cta:hover { background:#e00; transform:scale(1.02); }
        .nav-avatar { width:30px; height:30px; border-radius:50%; object-fit:cover; border:2px solid #e00; }

        .page-top-spacer { height: 80px; }

        /* ══ HERO ══ */
        .hero-outer {
          position:relative; margin:0 16px; min-height:520px;
          border:1.5px dashed #ffaaaa; border-radius:22px;
          overflow:hidden; display:flex; align-items:center; justify-content:center;
          contain: layout style;
        }
        .cp { position:absolute; color:#e00; font-size:1.4rem; font-weight:300; line-height:1; z-index:2; pointer-events:none; }
        .cp-tl{top:12px;left:14px;} .cp-tr{top:12px;right:14px;}
        .cp-bl{bottom:12px;left:14px;} .cp-br{bottom:12px;right:14px;}

        /* ══ REVIEW CARDS ══ */
        .review-card {
          position:absolute; width:200px; background:#fff;
          border:1.5px solid #ffe0e0; border-radius:16px; padding:12px 14px;
          box-shadow:0 8px 30px rgba(220,0,0,0.09),0 2px 6px rgba(0,0,0,0.07);
          z-index:10; will-change:transform;
          animation: floatCard 4s ease-in-out infinite alternate;
          transition:opacity 0.6s ease;
        }
        @keyframes floatCard {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -8px, 0); }
        }
        .review-card.left{left:14px;} .review-card.right{right:14px;}
        .review-header{display:flex;align-items:center;gap:8px;margin-bottom:7px;}
        .review-avatar{width:30px;height:30px;border-radius:50%;object-fit:cover;flex-shrink:0;border:1.5px solid #ffe0e0;}
        .review-name{display:block;font-size:0.70rem;font-weight:800;color:#111;}
        .review-badge{display:inline-block;font-size:0.57rem;background:#ff2222;color:#fff;border-radius:999px;padding:1px 7px;font-weight:700;margin-top:2px;}
        .review-text{font-size:0.65rem;color:#444;line-height:1.5;}

        /* ══ HERO CENTER ══ */
        .hero-center {
          position:relative; z-index:5; text-align:center;
          max-width:520px; width:100%; padding:48px 16px;
          display:flex; flex-direction:column; align-items:center;
        }
        .social-proof { display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:24px; opacity:0; transform:translate3d(0,16px,0); animation:fadeUp 0.6s ease forwards 0.1s; }
        .avatar-stack{display:flex;align-items:center;}
        .avatar-stack img{width:34px;height:34px;border-radius:50%;border:2.5px solid #fff;margin-left:-10px;object-fit:cover;box-shadow:0 1px 4px rgba(0,0,0,0.12);}
        .avatar-stack img:first-child{margin-left:0;}
        .proof-text{text-align:left;}
        .proof-stars{color:#f59e0b;font-size:0.82rem;letter-spacing:2px;}
        .proof-label{font-size:0.77rem;color:#555;font-weight:600;margin-top:2px;}

        .hero-headline {
          font-size:clamp(1.7rem,3.6vw,2.8rem); font-weight:900; line-height:1.15;
          letter-spacing:-0.025em; color:#111; margin-bottom:20px;
          opacity:0; transform:translate3d(0,20px,0);
          animation:fadeUp 0.6s ease forwards 0.2s;
        }
        .hero-headline .accent{color:#e00;}

        /* FLAGS */
        .flags-row { display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:28px; opacity:0; transform:translate3d(0,14px,0); animation:fadeUp 0.6s ease forwards 0.3s; flex-wrap:wrap; }
        .flag-item{display:flex;flex-direction:column;align-items:center;gap:3px;}
        .flag-img{width:32px;height:20px;border-radius:3px;object-fit:cover;box-shadow:0 2px 6px rgba(0,0,0,0.15);display:block;transition:transform 0.2s;}
        .flag-img:hover{transform:scale(1.15) translate3d(0,-2px,0);}
        .flag-name{font-size:0.48rem;color:#999;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;}

        /* CTA */
        .hero-cta {
          display:inline-flex; align-items:center; justify-content:center; gap:12px; background:#111; color:#fff;
          border-radius:999px; padding:12px 28px; font-size:0.92rem; font-weight:800;
          text-decoration:none; transition:background 0.2s,transform 0.2s,box-shadow 0.2s;
          opacity:0; animation:fadeUp 0.6s ease forwards 0.4s;
          font-family:'Manrope',sans-serif; max-width: 100%;
        }
        .hero-cta:hover{background:#e00;transform:scale(1.03);box-shadow:0 8px 24px rgba(220,0,0,0.25);}
        .arrow-circle{width:32px;height:32px;background:#e00;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.2s,background 0.2s;}
        .hero-cta:hover .arrow-circle{transform:rotate(45deg);background:#fff;}
        .hero-cta:hover .arrow-circle svg{stroke:#e00;}
        .arrow-circle svg{width:15px;height:15px;stroke:#fff;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;}

        /* ══ LOGOS (UNIFORM SIZING & PERFORMANCE) ══ */
        .logos-section{margin-top:20px;}
        .logos-caption{
          text-align:center; font-size:0.75rem; color:#777; font-weight:700;
          letter-spacing:0.08em; text-transform:uppercase; padding:24px 24px 20px;
          border-top:1.5px solid #f0f0f0; margin-bottom:10px;
        }
        .marquee-wrapper{overflow:hidden;position:relative;padding:10px 0 30px;contain:paint;}
        .marquee-wrapper::before,.marquee-wrapper::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
        .marquee-wrapper::before{left:0;background:linear-gradient(to right,#fff 30%,transparent);}
        .marquee-wrapper::after{right:0;background:linear-gradient(to left,#fff 30%,transparent);}
        .marquee-track{display:flex;align-items:center;width:max-content;animation:marquee 28s linear infinite;will-change:transform;}
        .marquee-track:hover{animation-play-state:paused;}
        @keyframes marquee{from{transform:translate3d(0,0,0);}to{transform:translate3d(-33.333%,0,0);}}
        
        .marquee-item{display:flex;align-items:center;justify-content:center;height:50px;padding:0 32px;border-right:1px solid #f0f0f0;flex-shrink:0;}
        
        .marquee-item img{
          height:34px; width:auto; max-width:110px; object-fit:contain;
          filter: none !important; opacity: 1 !important; transition: transform 0.2s;
        }
        .marquee-item:hover img{ transform: scale(1.08); }
        .logo-text{font-size:0.88rem;font-weight:800;color:#333;white-space:nowrap;font-family:'Manrope',sans-serif;}

        /* ══ ABOUT SECTION ══ */
        .about-section{display:grid;grid-template-columns:1fr 1fr;align-items:center;background:#000;min-height:500px;overflow:hidden;contain:layout style;}
        .about-left{padding:60px 40px 60px 56px;position:relative;z-index:5;opacity:0;transform:translate3d(-30px,0,0);}
        .about-left.in{animation:slideInLeft 0.6s ease forwards;}
        .about-tag{display:inline-block;font-size:0.68rem;font-weight:700;color:#e00;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:14px;}
        .about-name{font-size:clamp(2rem,3.8vw,3.4rem);font-weight:900;color:#fff;line-height:1.05;letter-spacing:-0.03em;margin-bottom:18px;}
        .about-name span{color:#e00;}
        .about-desc{font-size:0.88rem;color:#bbb;line-height:1.75;margin-bottom:32px;max-width:400px;}
        .about-btn{display:inline-flex;align-items:center;gap:12px;background:transparent;color:#fff;border:2px solid #e00;border-radius:999px;padding:12px 24px;font-size:0.88rem;font-weight:800;text-decoration:none;font-family:'Manrope',sans-serif;transition:background 0.2s,transform 0.2s,box-shadow 0.2s;}
        .about-btn:hover{background:#e00;transform:scale(1.03);box-shadow:0 0 24px rgba(220,0,0,0.35);}
        .about-btn-li-icon{width:18px;height:18px;fill:#fff;flex-shrink:0;}
        .about-btn .arrow-circle{width:28px;height:28px;background:#e00;border-radius:50%;display:flex;align-items:center;justify-content:center;}
        .about-btn:hover .arrow-circle{background:#fff;}
        .about-btn:hover .arrow-circle svg{stroke:#e00;}
        .about-btn .arrow-circle svg{width:13px;height:13px;stroke:#fff;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;}
        
        .about-right{position:relative;display:flex;align-items:center;justify-content:center;padding:60px 48px 60px 20px;z-index:5;opacity:0;transform:translate3d(30px,0,0);}
        .about-right.in{animation:slideInRight 0.6s ease forwards 0.15s;}
        
        .photo-card-wrap{position:relative;width:280px;height:375px;margin: 0 auto;}
        .photo-card-wrap::before{content:'';position:absolute;inset:-3px;border-radius:30px;background:conic-gradient(from var(--angle,0deg),transparent 0deg,transparent 60deg,#ff0000 90deg,#ff6666 120deg,#ffffff 150deg,#ff6666 180deg,#ff0000 210deg,transparent 240deg,transparent 360deg);animation:rotateBorder 3.5s linear infinite;will-change:transform;z-index:0;}
        .photo-card-wrap::after{content:'';position:absolute;inset:3px;border-radius:24px;background:#000;z-index:3;pointer-events:none;}
        .photo-card{position:relative;width:100%;height:100%;border-radius:26px;overflow:hidden;background:#111;z-index:4;}
        .photo-card img.main-photo{width:100%;height:100%;object-fit:cover;object-position:center 8%;display:block;}
        .photo-label{position:absolute;bottom:12px;right:14px;font-size:0.63rem;font-weight:700;color:rgba(255,255,255,0.7);letter-spacing:0.04em;text-shadow:0 1px 6px rgba(0,0,0,0.9);}
        @property --angle{syntax:'<angle>';initial-value:0deg;inherits:false;}
        @keyframes rotateBorder{from{--angle:0deg;}to{--angle:360deg;}}
        
        .in-bubble{position:absolute;top:20px;right:-18px;width:44px;height:44px;background:linear-gradient(135deg,#0077b5,#004d7a);border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,119,181,0.5);animation:floatBubble 3.5s ease-in-out infinite;z-index:20;will-change:transform;}
        .in-bubble svg{width:22px;height:22px;fill:#fff;}
        @keyframes floatBubble{0%,100%{transform:translate3d(0,0,0) rotate(-4deg);}50%{transform:translate3d(0,-6px,0) rotate(4deg);}}
        
        .linkedin-card{position:absolute;bottom:-18px;left:-32px;width:210px;background:#fff;border-radius:13px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.45);border:1px solid #eee;z-index:20;}
        .linkedin-card img{width:100%;display:block;}

        @keyframes fadeUp{to{opacity:1;transform:translate3d(0,0,0);}}
        @keyframes slideInLeft{to{opacity:1;transform:translate3d(0,0,0);}}
        @keyframes slideInRight{to{opacity:1;transform:translate3d(0,0,0);}}

        /* ══ RESPONSIVE ══ */
        @media(max-width:1024px){
          .review-card{width:180px;}
        }

        @media(max-width:820px){
          .review-card{display:none;}
          .hero-center{max-width:100%;padding:36px 16px;}
          .hero-outer{min-height:380px;}
          
          .nav { flex-wrap: wrap; padding: 10px 14px; justify-content: space-between; }
          .nav-links { order: 2; width: 100%; overflow-x: auto; justify-content: flex-start; padding: 8px 14px; gap: 14px; margin-top: 6px; }
          .nav-links::-webkit-scrollbar { display: none; }
          .nav-cta { order: 1; padding: 6px 14px 6px 6px; font-size: 0.78rem; }
          .page-top-spacer{ height: 110px; }

          .about-section{grid-template-columns:1fr; text-align:center;}
          .about-left{padding:44px 24px 28px; display:flex; flex-direction:column; align-items:center;}
          .about-desc{max-width:100%;}
          .about-right{padding:30px 24px 60px; justify-content:center; width: 100%;}
          .photo-card-wrap{width:240px; height:320px;}
          .linkedin-card{left: 0; right: 0; margin: 0 auto; width: 180px; bottom: -20px;}
          .in-bubble{right: 10px; top: 10px;}
        }

        @media(max-width:600px){
          .hero-outer{margin:0 8px; min-height:340px; border-radius:16px;}
          .hero-headline{font-size:1.55rem;}
          .hero-cta{padding:10px 20px; font-size:0.84rem;}
          
          .about-left{padding:32px 16px 20px;}
          .photo-card-wrap{width:210px; height:280px;}
          .linkedin-card{width:150px; bottom:-15px;}
          .in-bubble{width:36px; height:36px; top:5px; right:5px;}
          .in-bubble svg{width:18px; height:18px;}
          
          .flags-row{gap:6px;}
          .flag-img{width:26px; height:16px;}
          .marquee-item{padding:0 20px; height:45px;}
          .marquee-item img{height:28px; max-width:85px;}
        }

        @media(max-width:420px){
          .hero-headline{font-size:1.35rem;}
          .hero-cta{width: 100%; padding: 10px 14px; font-size: 0.8rem;}
        }
      `}</style>

      {/* ── FIXED NAV ── */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-links">
          <a onClick={() => scrollToId("about-section")}>About</a>
          <a onClick={() => scrollToId("projects-section")}>Projects</a>
          <a onClick={() => scrollToId("packages-section")}>Packages</a>
          <a onClick={() => scrollToId("testimonials-section")}>Testimonials</a>
          <a onClick={() => scrollToId("faqs-section")}>Faqs</a>
        </div>
        <a
          href={`${WHATSAPP}?text=Hi%20Umme,%20I%20want%20to%20discuss%20a%20project!`}
          target="_blank" rel="noopener noreferrer"
          className="nav-cta"
        >
          <img src={kashafImg} alt="Umme" className="nav-avatar" loading="eager" />
          <span className="nav-text">Chat With Umme</span>
        </a>
      </nav>

      <div className="page-top-spacer" />

      {/* ── HERO ── */}
      <div className="hero-outer">
        <span className="cp cp-tl">+</span>
        <span className="cp cp-tr">+</span>
        <span className="cp cp-bl">+</span>
        <span className="cp cp-br">+</span>

        {reviews.map((r) => (
          <div key={r.id}
            className={`review-card ${r.side}`}
            style={{ top: r.topPct, opacity: visible ? 1 : 0, transitionDelay: `${r.delay}s` }}>
            <div className="review-header">
              <img src={r.avatar} alt={r.name} className="review-avatar" loading="eager" />
              <div>
                <span className="review-name">{r.name}</span>
                <span className="review-badge">{r.followers} · Followers</span>
              </div>
            </div>
            <p className="review-text">{r.text}</p>
          </div>
        ))}

        <div className="hero-center">
          <div className="social-proof">
            <div className="avatar-stack">
              {trustedAvatars.map((src, i) => <img key={i} src={src} alt="" loading="eager" />)}
            </div>
            <div className="proof-text">
              <div className="proof-stars">★★★★★</div>
              <div className="proof-label">Trusted by 50+ Global Clients</div>
            </div>
          </div>

          <h1 className="hero-headline">
            Helping B2B Founders & <span className="accent">Personal Brands</span> Turn LinkedIn Profiles Into Lead Magnets
          </h1>

          <div className="flags-row">
            {flags.map(f => (
              <div key={f.code} className="flag-item">
                <img className="flag-img" src={`https://flagcdn.com/w80/${f.code}.png`} alt={f.name} title={f.name} loading="lazy" />
                <span className="flag-name">{f.name}</span>
              </div>
            ))}
          </div>

          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="hero-cta">
            Book a 1:1 Strategy Call
            <span className="arrow-circle">
              <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </span>
          </a>
        </div>
      </div>

      {/* ── LOGOS SECTION ── */}
      <div className="logos-section">
        <p className="logos-caption">My clients have worked with &amp; are affiliated with these brands</p>
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

      {/* ── ABOUT SECTION ── */}
      <AboutSection linkedinSS={linkedinSS} />

      {/* ── LAZY SECTIONS ── */}
      <LazySection bg="#fff"><StatsSection /></LazySection>
      <LazySection bg="#000"><FeaturedProjectsSection /></LazySection>
      <LazySection bg="#fff"><PricingSection /></LazySection>
      <LazySection bg="#000"><BeforeAfterSection /></LazySection>
      <LazySection bg="#000"><TestimonialsSection /></LazySection>
      <LazySection bg="#000"><FAQAndCTASection /></LazySection>
      <LazySection bg="#000"><Footer /></LazySection>
    </>
  );
});

function AboutSection({ linkedinSS }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    if (leftRef.current) obs.observe(leftRef.current);
    if (rightRef.current) obs.observe(rightRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about-section" id="about-section">
      <div className="about-left" ref={leftRef}>
        <span className="about-tag">LinkedIn Brand Designer</span>
        <h2 className="about-name">Meet<br /><span>Umme Kashaf</span></h2>
        <p className="about-desc">
          I'm Umme Kashaf — a LinkedIn Brand & Visual Designer helping B2B Founders and Personal Brands
          build premium first impressions. Ranked Top 10% Worldwide, I've worked with 50+ global clients
          across 6 countries, transforming LinkedIn profiles into powerful lead magnets.
        </p>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="about-btn">
          <svg className="about-btn-li-icon" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Connect On LinkedIn
          <span className="arrow-circle">
            <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
          </span>
        </a>
      </div>
      <div className="about-right" ref={rightRef}>
        <div className="photo-card-wrap">
          <div className="in-bubble">
            <svg viewBox="0 0 24 24" fill="#fff">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="photo-card">
            <img className="main-photo" src={ummeImg} alt="Umme Kashaf" loading="eager" />
            <span className="photo-label">Umme Kashaf</span>
          </div>
          <div className="linkedin-card">
            <img src={linkedinSS} alt="LinkedIn Profile" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}