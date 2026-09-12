import React from 'react';
import kashafImg from "./assets/kashaf.jpg";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Manrope:wght@400;500;600;700;800&display=swap');

        .footer-container {
          background-color: #000000;
          padding: 40px 20px;
          font-family: 'Manrope', sans-serif;
          color: #000000;
        }

        .footer-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 48px 50px 24px 50px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
          padding-bottom: 30px;
        }

        .footer-brand {
          max-width: 320px;
        }

        /* Handwritten Signature Style Logo */
        .brand-logo {
          font-family: 'Great Vibes', cursive;
          font-size: 3.8rem;
          font-weight: 400;
          color: #000000;
          margin: 0 0 6px 0;
          line-height: 1.1;
          display: inline-block;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .brand-tagline {
          font-family: 'Manrope', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: #e53e3e; /* Red color for tagline */
          line-height: 1.4;
          margin: 0;
        }

        .footer-right-group {
          display: flex;
          gap: 80px;
          flex-wrap: wrap;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .col-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 18px;
        }

        .contact-col {
          gap: 16px;
        }

        .profile-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .profile-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #e53e3e; /* Red accent border */
        }

        .profile-info {
          display: flex;
          flex-direction: column;
        }

        .profile-name {
          font-family: 'Manrope', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: #000000;
        }

        .profile-role {
          font-family: 'Manrope', sans-serif;
          font-size: 0.74rem;
          color: #e53e3e; /* Red text for role */
          font-weight: 600;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #000000;
        }

        .email-link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem;
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .email-link:hover {
          color: #e53e3e; /* Red on hover */
          text-decoration: underline;
        }

        .socials-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          background-color: #000000;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background-color: #e53e3e; /* Red on hover */
          transform: translateY(-2px);
        }

        .social-icon svg {
          width: 16px;
          height: 16px;
          fill: #ffffff;
        }

        .footer-bottom {
          border-top: 1.5px dashed #e2e8f0;
          padding-top: 18px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          color: #4a5568;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-bottom strong {
          color: #000000;
        }

        .footer-bottom strong.red-text {
          color: #e53e3e;
        }

        @media (max-width: 768px) {
          .footer-card { padding: 32px 20px 20px 20px; }
          .footer-right-group { gap: 40px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .brand-logo { font-size: 3.2rem; }
        }
      `}</style>

      <footer className="footer-container">
        <div className="footer-card">
          <div className="footer-content">
            
            {/* Signature Brand Title */}
            <div className="footer-brand">
              <h2 className="brand-logo">UmmeKashaf</h2>
              <p className="brand-tagline">
                Your LinkedIn Design Partner.
              </p>
            </div>

            <div className="footer-right-group">
              {/* Contact & Socials */}
              <div className="footer-col contact-col">
                <h3 className="col-title">Get In Touch</h3>
                
                <div className="profile-box">
                  <img 
                    src={kashafImg} 
                    alt="Umme Kashaf" 
                    className="profile-avatar" 
                  />
                  <div className="profile-info">
                    <span className="profile-name">Umme Kashaf</span>
                    <span className="profile-role">LinkedIn Designer</span>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:ummekashaf19@gmail.com" className="email-link">
                    ummekashaf19@gmail.com
                  </a>
                </div>

                <div className="socials-box">
                  <span className="contact-label">Socials</span>
                  <div className="social-icons">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/ummekashafofficial/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-icon" 
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    </a>
                    
                    {/* Behance */}
                    <a 
                      href="https://www.behance.net/ummekashaf1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-icon" 
                      aria-label="Behance"
                    >
                      <svg viewBox="0 0 24 24"><path d="M7.8 13c.6 0 1.1-.1 1.4-.4.3-.3.5-.7.5-1.2 0-.5-.2-.9-.5-1.1-.3-.2-.8-.4-1.4-.4H4.7V13h3.1zM8 17.7c.7 0 1.3-.2 1.7-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-1-.5-1.7-.5H4.7v3.8H8zM16.1 11.2c-.7 0-1.2.2-1.6.6-.4.4-.6.9-.6 1.6h4.3c0-.7-.2-1.2-.6-1.6-.4-.4-.9-.6-1.5-.6zm.2 6.5c1 0 1.8-.4 2.3-1.1l-1.4-.8c-.3.4-.6.6-1 .6-.4 0-.8-.1-1-.4-.2-.3-.4-.7-.4-1.2h6.1c0-.2.1-.5.1-.7 0-1.4-.4-2.5-1.2-3.3-.8-.8-1.9-1.2-3.3-1.2-1.4 0-2.5.4-3.4 1.3-.9.9-1.3 2.1-1.3 3.6 0 1.4.4 2.6 1.3 3.5.9.8 2.1 1.3 3.5 1.3zM22 2H2v20h20V2zM11.8 16.3c0 1-.3 1.8-1 2.4-.7.6-1.6.9-2.7.9H2.2V6.8h6c1.1 0 2 .3 2.6.8.6.5 1 1.2 1 2.1 0 .7-.2 1.3-.6 1.7-.4.4-.9.7-1.5.8.8.2 1.4.5 1.8 1 .3.5.5 1.2.5 2.1zm8-8h-4.8V6.8h4.8v1.5z"/></svg>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/kashafs.design?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-icon" 
                      aria-label="Instagram"
                    >
                      <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 <strong className="red-text">Kashafs.Design</strong>. All Rights Reserved</p>
            <p>Developed By <strong>Umme Kashaf</strong></p>
          </div>
        </div>
      </footer>
    </>
  );
}