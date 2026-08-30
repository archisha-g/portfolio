import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="section-wrapper skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-tag">04 / COMPETENCIES</span>
            <h2 id="skills-heading" className="section-title">
              Technical Index
            </h2>
          </div>
          <p className="section-intro">
            Core programming languages, frameworks, AI/ML libraries, and development tools applied in production and research systems.
          </p>
        </div>

        {/* Technical Index Table / Grid */}
        <div className="skills-index-grid">
          {SKILLS_DATA.map((group, idx) => (
            <div key={idx} className="skills-category-row">
              <div className="skills-category-header">
                <div className="category-meta">
                  <span className="category-num font-mono">0{idx + 1}</span>
                  <h3 className="category-name">{group.category}</h3>
                </div>
                <Terminal size={14} className="category-icon" aria-hidden="true" />
              </div>

              <div className="skills-tags-cluster">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-item-tag font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
