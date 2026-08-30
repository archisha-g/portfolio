import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDownRight, ExternalLink, Mail, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTimeString(formatted);

      // Derive subtle time greeting
      const hour = parseInt(formatted.split(':')[0], 10);
      if (hour >= 5 && hour < 12) {
        setGreeting('MORNING IN INDIA');
      } else if (hour >= 12 && hour < 17) {
        setGreeting('AFTERNOON IN INDIA');
      } else if (hour >= 17 && hour < 21) {
        setGreeting('EVENING IN INDIA');
      } else {
        setGreeting('NIGHT IN INDIA');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      <div className="container">
        {/* Status / Eyebrow Header */}
        <div className="hero-eyebrow-row">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            <span>{PERSONAL_INFO.eyebrow}</span>
          </div>

          <div className="hero-live-status">
            <span className="status-indicator">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span className="status-text">
              {timeString ? `${timeString} IST • ${greeting}` : 'MEERUT, INDIA'}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          {PERSONAL_INFO.tagline}
        </h1>

        {/* Subtitle / Bio */}
        <p className="hero-subtitle">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons & Secondary Link */}
        <div className="hero-actions-row">
          <div className="hero-primary-btns">
            <button
              onClick={() => handleScrollTo('projects')}
              className="btn btn-primary hero-btn"
            >
              <span>View Projects</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-outline hero-btn"
            >
              <span>Get in Touch</span>
              <Mail size={15} aria-hidden="true" />
            </button>
          </div>

          <div className="hero-secondary-links">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
              aria-label="Archisha Ghanshani GitHub profile (opens in new tab)"
            >
              <span>GitHub</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
            <span className="hero-divider" aria-hidden="true">•</span>
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
              aria-label="Archisha Ghanshani LinkedIn profile (opens in new tab)"
            >
              <span>LinkedIn</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Status Strip & Subtle Ticker Detail */}
        <div className="hero-footer-detail">
          <div className="hero-status-cards">
            <div className="status-card">
              <span className="status-label">{PERSONAL_INFO.status.state}</span>
              <span className="status-value">{PERSONAL_INFO.status.activity}</span>
            </div>
            <div className="status-card">
              <span className="status-label">BASED IN</span>
              <span className="status-value">
                <MapPin size={13} className="inline-icon" />
                {PERSONAL_INFO.status.location}
              </span>
            </div>
          </div>

          {/* Micro-interaction: Subtle animated line & ticker */}
          <div className="hero-ticker-wrap" aria-hidden="true">
            <div className="hero-ticker-track">
              {PERSONAL_INFO.ticker.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="ticker-item">{item}</span>
                  <span className="ticker-sep">/</span>
                </React.Fragment>
              ))}
              {PERSONAL_INFO.ticker.map((item, idx) => (
                <React.Fragment key={`dup-${idx}`}>
                  <span className="ticker-item">{item}</span>
                  <span className="ticker-sep">/</span>
                </React.Fragment>
              ))}
            </div>
            <div className="ticker-line" />
          </div>
        </div>
      </div>
    </section>
  );
};
