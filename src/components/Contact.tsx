import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section-wrapper contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-card-box">
          <div className="contact-header-block">
            <span className="section-tag">07 / CONNECT</span>
            <h2 id="contact-heading" className="contact-main-heading font-serif">
              Let's build something useful.
            </h2>
            <p className="contact-intro-text">
              I'm always interested in interesting technical problems, ambitious projects, research, and opportunities to build things that matter.
            </p>
          </div>

          <div className="contact-action-area">
            {/* Primary Action Button */}
            <div className="contact-cta-row">
              <a
                href={`mailto:${PERSONAL_INFO.contacts.email}`}
                className="btn btn-primary btn-lg contact-primary-btn"
                aria-label="Send email to Archisha Ghanshani"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn btn-outline contact-copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-success" aria-hidden="true" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Contact Channels Grid */}
            <div className="contact-channels-grid">
              {/* Email */}
              <div className="channel-item">
                <span className="channel-label font-mono">EMAIL</span>
                <a
                  href={`mailto:${PERSONAL_INFO.contacts.email}`}
                  className="channel-value channel-link"
                >
                  <Mail size={14} className="channel-icon" aria-hidden="true" />
                  <span>{PERSONAL_INFO.contacts.email}</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="channel-item">
                <span className="channel-label font-mono">LINKEDIN</span>
                <a
                  href={PERSONAL_INFO.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-link"
                  aria-label="Archisha Ghanshani LinkedIn profile (opens in new tab)"
                >
                  <svg className="channel-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <span>archisha-ghanshani</span>
                  <ArrowUpRight size={12} className="channel-arrow" aria-hidden="true" />
                </a>
              </div>

              {/* GitHub */}
              <div className="channel-item">
                <span className="channel-label font-mono">GITHUB</span>
                <a
                  href={PERSONAL_INFO.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value channel-link"
                  aria-label="Archisha Ghanshani GitHub profile (opens in new tab)"
                >
                  <svg className="channel-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span>github.com/archisha-g</span>
                  <ArrowUpRight size={12} className="channel-arrow" aria-hidden="true" />
                </a>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
