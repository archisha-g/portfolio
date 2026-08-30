import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="section-wrapper education-section" id="education" aria-labelledby="education-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-tag">06 / ACADEMICS</span>
            <h2 id="education-heading" className="section-title">
              Education
            </h2>
          </div>
          <p className="section-intro">
            Foundational studies and research in computer science and artificial intelligence architectures.
          </p>
        </div>

        <div className="education-compact-card">
          <div className="education-grid">
            <div className="education-icon-col">
              <div className="education-icon-box">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
            </div>

            <div className="education-content-col">
              <div className="education-primary-row">
                <h3 className="education-institution">{EDUCATION_DATA.institution}</h3>
                <div className="education-period font-mono">
                  <Calendar size={13} aria-hidden="true" />
                  <span>{EDUCATION_DATA.period}</span>
                </div>
              </div>

              <div className="education-degree-row">
                <span className="education-degree">{EDUCATION_DATA.degree}</span>
                <span className="education-dot" aria-hidden="true">•</span>
                <span className="education-spec">{EDUCATION_DATA.specialization}</span>
              </div>

              <div className="education-highlight-pill">
                <Award size={13} aria-hidden="true" />
                <span>Specialization in Artificial Intelligence &amp; Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
