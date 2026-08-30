import React from 'react';
import type { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="project-compact-card"
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View details for ${project.name}`}
    >
      <div className="card-top-row">
        <span className="card-index font-mono">{project.number}</span>
        <div className="card-arrow-wrap" aria-hidden="true">
          <ArrowUpRight size={16} className="card-arrow" />
        </div>
      </div>

      <h3 className="compact-project-title">{project.name}</h3>
      <p className="compact-project-subtitle">{project.subtitle}</p>
      <p className="compact-project-desc">{project.description}</p>

      <div className="compact-tech-list">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
