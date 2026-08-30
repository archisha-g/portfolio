import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap" aria-label="Site Footer">
      <div className="container">
        <div className="footer-inner">
          {/* Left Column: Copyright & Tech attribution */}
          <div className="footer-left">
            <p className="footer-copyright font-mono">
              &copy; 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="footer-tech font-mono">
              Built with React, TypeScript &amp; Vite • Editorial Engineering Design
            </p>
          </div>

          {/* Right Column: Quick Links & Back to Top */}
          <div className="footer-right">
            <div className="footer-links">
              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span>GitHub</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
              <span className="footer-dot" aria-hidden="true">•</span>
              <a
                href={PERSONAL_INFO.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span>LinkedIn</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
              <span className="footer-dot" aria-hidden="true">•</span>
              <a
                href={`mailto:${PERSONAL_INFO.contacts.email}`}
                className="footer-link"
              >
                <span>Email</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top of page"
            >
              <span>TOP</span>
              <ArrowUp size={13} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
