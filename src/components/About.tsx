import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const paragraphs = PERSONAL_INFO.about.split('\n\n');

  return (
    <section className="section-wrapper about-section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="editorial-grid">
          {/* Left Column: Editorial Label & Section Marker */}
          <div className="editorial-sidebar">
            <div className="sidebar-sticky">
              <span className="section-tag">01 / OVERVIEW</span>
              <h2 id="about-heading" className="section-title">
                A little about me.
              </h2>
              <div className="sidebar-divider" />
              <p className="sidebar-annotation">
                Engineering foundations • AI Systems • Technical Leadership
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Body Text */}
          <div className="editorial-content">
            <div className="about-text-lead">
              {paragraphs[0]}
            </div>

            <div className="about-text-body">
              {paragraphs.slice(1).map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
