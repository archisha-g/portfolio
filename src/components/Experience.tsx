import React from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="section-wrapper experience-section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-tag">02 / CAREER</span>
            <h2 id="experience-heading" className="section-title">
              Experience
            </h2>
          </div>
          <p className="section-intro">
            Track record spanning technology operations, team leadership, full-stack engineering, and mobile architecture.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-spine" aria-hidden="true" />

          {EXPERIENCES_DATA.map((exp) => (
            <article key={exp.id} className="timeline-item">
              {/* Timeline Marker */}
              <div className="timeline-marker-wrap" aria-hidden="true">
                <div className="timeline-node" />
                <span className="timeline-index">{exp.number}</span>
              </div>

              <div className="timeline-grid">
                {/* Left: Time & Location */}
                <div className="timeline-meta">
                  <div className="meta-period">
                    <Calendar size={13} className="meta-icon" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="meta-location">
                      <MapPin size={13} className="meta-icon" aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Right: Role, Company & Description */}
                <div className="timeline-content">
                  <div className="role-header">
                    <h3 className="role-title">{exp.role}</h3>
                    <div className="company-badge">
                      <Building2 size={13} aria-hidden="true" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <p className="role-description">{exp.description}</p>

                  {exp.skillsHighlight && (
                    <ul className="role-tags" aria-label="Key competencies">
                      {exp.skillsHighlight.map((tag, tagIdx) => (
                        <li key={tagIdx} className="role-tag-item">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
