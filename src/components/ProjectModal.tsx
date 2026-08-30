import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-project-number font-mono">{project.number}</span>
            <span className="modal-category-badge">TECHNICAL SPECIFICATION</span>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.name}
          </h2>
          <p className="modal-subtitle">{project.subtitle}</p>

          <div className="modal-tech-strip">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-section-block">
            <h4 className="modal-subheading">PROJECT OVERVIEW</h4>
            <p className="modal-text">
              {project.details?.overview || project.description}
            </p>
          </div>

          {project.details?.architecture && (
            <div className="modal-section-block">
              <h4 className="modal-subheading">ENGINEERING &amp; ARCHITECTURE</h4>
              <ul className="modal-feature-list">
                {project.details.architecture.map((item, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <Cpu size={14} className="feature-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.details?.outcomes && (
            <div className="modal-section-block">
              <h4 className="modal-subheading">TECHNICAL ACHIEVEMENTS</h4>
              <ul className="modal-feature-list">
                {project.details.outcomes.map((item, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle2 size={14} className="feature-icon accent-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-outline btn-sm">
            Close Specification
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Launch Live System</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
