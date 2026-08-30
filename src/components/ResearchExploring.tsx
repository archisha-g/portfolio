import React from 'react';
import { CURRENT_RESEARCH } from '../data/portfolioData';
import { Network } from 'lucide-react';

export const ResearchExploring: React.FC = () => {
  return (
    <section className="section-wrapper research-exploring-section" id="research" aria-labelledby="research-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-tag">03.5 / RESEARCH</span>
            <h2 id="research-heading" className="section-title">
              Currently Exploring
            </h2>
          </div>
          <p className="section-intro">
            Investigating foundational questions in artificial intelligence beyond API orchestration, focusing on the internal mechanisms of deep models.
          </p>
        </div>

        <article className="research-highlight-card">
          <div className="research-top-strip">
            <div className="research-badge-group">
              <span className="research-status-pill">
                <span className="status-ping-sm" aria-hidden="true" />
                <span className="font-mono">{CURRENT_RESEARCH.status}</span>
              </span>
              <span className="research-area-label font-mono">{CURRENT_RESEARCH.area}</span>
            </div>

            <span className="research-icon-label" aria-hidden="true">
              <Network size={16} />
            </span>
          </div>

          <div className="research-main-grid">
            <div className="research-left-col">
              <h3 className="research-topic-title font-serif">
                {CURRENT_RESEARCH.title}
              </h3>
              <p className="research-desc-text">
                {CURRENT_RESEARCH.description}
              </p>
              <div className="research-subtle-note font-mono">
                Hands-on experimental study • Transformer circuit analysis &amp; internal feature superposition
              </div>
            </div>

            <div className="research-right-col">
              <span className="research-subheading font-mono">CORE EXPERIMENTAL QUESTIONS</span>
              <ul className="research-questions-list">
                {CURRENT_RESEARCH.keyQuestions.map((q, idx) => (
                  <li key={idx} className="research-question-item">
                    <div className="question-bullet-box font-mono">0{idx + 1}</div>
                    <span className="question-text">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
