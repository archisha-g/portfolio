import React, { useState } from 'react';
import type { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { NeuroScriptVisual } from './NeuroScriptVisual';
import { SentinelVisual } from './SentinelVisual';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.isFeatured);
  const compactProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section className="section-wrapper projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header-row">
          <div className="projects-header-left">
            <span className="section-tag">03 / PORTFOLIO</span>
            <h2 id="projects-heading" className="section-title">
              Selected Work
            </h2>
            <p className="section-intro">
              A collection of systems, applications, and experiments I've built across software engineering and artificial intelligence.
            </p>
          </div>

          <div className="projects-counter-badge" aria-label="Total projects: 6">
            <span className="current-count font-mono">01</span>
            <span className="count-slash font-mono">/</span>
            <span className="total-count font-mono">06</span>
          </div>
        </div>

        {/* Featured Projects Stack */}
        <div className="featured-projects-stack">
          {featuredProjects.map((project) => {
            if (project.id === 'neuroscript') {
              return (
                <NeuroScriptVisual
                  key={project.id}
                  project={project}
                  onOpenDetails={(p) => setSelectedModalProject(p)}
                />
              );
            }
            if (project.id === 'sentinel') {
              return (
                <SentinelVisual
                  key={project.id}
                  project={project}
                  onOpenDetails={(p) => setSelectedModalProject(p)}
                />
              );
            }
            return null;
          })}
        </div>

        {/* Other Projects Heading & Grid */}
        <div className="compact-projects-wrapper">
          <div className="compact-section-header">
            <h3 className="compact-section-title">ADDITIONAL SYSTEMS &amp; EXPERIMENTS</h3>
            <span className="compact-header-rule" aria-hidden="true" />
          </div>

          <div className="compact-projects-grid">
            {compactProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedModalProject(p)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
};
