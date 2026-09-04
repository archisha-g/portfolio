import React, { useState } from 'react';
import { CURRENT_RESEARCH, RESEARCH_ENTRIES_DATA } from '../data/portfolioData';
import { Network, BookOpen, FlaskConical, ChevronDown, ChevronUp, Tag } from 'lucide-react';
import type { ResearchEntry } from '../types';

const ResearchEntryCard: React.FC<{ entry: ResearchEntry }> = ({ entry }) => {
  const [abstractExpanded, setAbstractExpanded] = useState(false);
  const [findingsOpen, setFindingsOpen] = useState(false);

  const isPaper = entry.type === 'PAPER';

  return (
    <article className="research-entry-card">
      <div className="research-entry-top">
        <div className="research-entry-badges">
          <span className={`research-entry-type-pill ${isPaper ? 'type-paper' : 'type-study'}`}>
            {isPaper ? <BookOpen size={11} aria-hidden="true" /> : <FlaskConical size={11} aria-hidden="true" />}
            <span className="font-mono">{entry.type}</span>
          </span>
          <span className="research-entry-status-pill font-mono">{entry.status}</span>
        </div>
        <span className="research-entry-year font-mono">{entry.year}</span>
      </div>

      <div className="research-entry-body">
        <div className="research-entry-title-col">
          <h3 className="research-entry-title">{entry.title}</h3>
          <p className="research-entry-subtitle font-mono">{entry.subtitle}</p>
          <span className="research-entry-venue font-mono">
            {isPaper ? '📄' : '🧪'} {entry.venue}
          </span>
        </div>

        <div className="research-entry-abstract-wrap">
          <p className={`research-entry-abstract ${abstractExpanded ? 'expanded' : 'collapsed'}`}>
            {entry.abstract}
          </p>
          <button
            className="research-entry-toggle font-mono"
            onClick={() => setAbstractExpanded((v) => !v)}
            aria-expanded={abstractExpanded}
          >
            {abstractExpanded ? (
              <><ChevronUp size={13} aria-hidden="true" /> COLLAPSE</>
            ) : (
              <><ChevronDown size={13} aria-hidden="true" /> READ ABSTRACT</>
            )}
          </button>
        </div>

        {/* Collapsible key findings */}
        <div className="research-entry-findings">
          <button
            className="research-findings-toggle font-mono"
            onClick={() => setFindingsOpen((v) => !v)}
            aria-expanded={findingsOpen}
          >
            {findingsOpen ? (
              <><ChevronUp size={13} aria-hidden="true" /> HIDE KEY FINDINGS</>
            ) : (
              <><ChevronDown size={13} aria-hidden="true" /> VIEW KEY FINDINGS</>
            )}
          </button>
          <div
            className={`research-findings-drawer ${findingsOpen ? 'research-findings-drawer--open' : ''}`}
            aria-hidden={!findingsOpen}
          >
            <div className="research-findings-drawer-inner">
              <ul className="research-entry-findings-list research-questions-list--drawer">
                {entry.keyFindings.map((finding, idx) => (
                  <li key={idx} className="research-entry-finding-item">
                    <div className="question-bullet-box font-mono">0{idx + 1}</div>
                    <span className="question-text">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="research-entry-tags">
          <Tag size={11} aria-hidden="true" className="tags-icon" />
          {entry.tags.map((tag) => (
            <span key={tag} className="research-tag font-mono">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

/* ── Minimal highlight card for the current research topic ── */
const CurrentResearchCard: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="research-highlight-card research-highlight-card--minimal">
      {/* Always-visible top strip */}
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

      {/* Minimal body — title + description always visible */}
      <div className="research-minimal-body">
        <h3 className="research-topic-title font-serif">{CURRENT_RESEARCH.title}</h3>
        <p className="research-desc-text">{CURRENT_RESEARCH.description}</p>
      </div>

      {/* Expand / collapse key findings */}
      <button
        className="research-findings-toggle font-mono"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        id="current-research-findings-toggle"
      >
        {open ? (
          <><ChevronUp size={13} aria-hidden="true" /> HIDE KEY QUESTIONS</>
        ) : (
          <><ChevronDown size={13} aria-hidden="true" /> VIEW KEY QUESTIONS</>
        )}
      </button>

      {/* Collapsible findings panel */}
      <div
        className={`research-findings-drawer ${open ? 'research-findings-drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="research-findings-drawer-inner">
          <ul className="research-questions-list research-questions-list--drawer">
            {CURRENT_RESEARCH.keyQuestions.map((q, idx) => (
              <li key={idx} className="research-question-item">
                <div className="question-bullet-box font-mono">0{idx + 1}</div>
                <span className="question-text">{q}</span>
              </li>
            ))}
          </ul>
          <div className="research-subtle-note font-mono">
            Hands-on experimental study • Transformer circuit analysis &amp; internal feature superposition
          </div>
        </div>
      </div>
    </article>
  );
};

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

        <CurrentResearchCard />

        {/* Published Research & Independent Studies */}
        <div className="research-entries-section">
          <div className="research-entries-header">
            <span className="research-entries-label font-mono">RESEARCH OUTPUT</span>
            <div className="research-entries-divider" aria-hidden="true" />
          </div>
          <div className="research-entries-grid">
            {RESEARCH_ENTRIES_DATA.map((entry) => (
              <ResearchEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
