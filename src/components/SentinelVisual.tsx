import React, { useState } from 'react';
import type { Project } from '../types';
import { ShieldAlert, ExternalLink, Bot, Terminal, AlertTriangle, ShieldCheck } from 'lucide-react';

interface SentinelVisualProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const THREAT_PIPELINE_STEPS = [
  {
    step: 'INPUT LOG',
    label: 'Telemetry Ingestion',
    icon: Terminal,
    desc: 'Unstructured auth failures, firewall logs, and unusual API endpoint spikes ingested in real time.',
    sample: 'LOG: 403 Forbidden | IP: 198.51.100.42 | Path: /admin/config/exec | Frequency: 180 req/min',
  },
  {
    step: 'THREAT ANALYSIS',
    label: 'Gemini Heuristic Scan',
    icon: Bot,
    desc: 'Google Gemini API parses the event context against MITRE ATT&CK patterns to detect privilege escalation vectors.',
    sample: 'Vector Identified: Credential stuffing & Remote Code Execution probe (T1059 / T1110)',
  },
  {
    step: 'RISK ASSESSMENT',
    label: 'Contextual Severity Scoring',
    icon: AlertTriangle,
    desc: 'Generates quantified risk score (8.9 / 10 - HIGH) considering host critical assets & active sessions.',
    sample: 'Severity: CRITICAL | Impact: High | Exploitability: Proven Active Attempt',
  },
  {
    step: 'RECOMMENDED RESPONSE',
    label: 'Actionable Mitigation',
    icon: ShieldCheck,
    desc: 'Automates firewall rate-limiting, revokes compromised tokens, and produces human-readable incident briefs.',
    sample: 'Action: IP 198.51.100.42 isolated. Session tokens invalidated. Admin notified with remediation steps.',
  },
];

export const SentinelVisual: React.FC<SentinelVisualProps> = ({ project, onOpenDetails }) => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  return (
    <article className="featured-project-card sentinel-card">
      <div className="project-header-strip">
        <div className="project-index-badge">
          <span className="badge-num">{project.number}</span>
          <span className="badge-flag">AI SECURITY SYSTEM</span>
        </div>
        <div className="project-action-group">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label="Open live Sentinel interface"
            >
              <span>Live Project</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
          <button
            onClick={() => onOpenDetails(project)}
            className="btn btn-outline btn-sm"
          >
            <span>View Architecture</span>
          </button>
        </div>
      </div>

      <div className="featured-project-layout">
        {/* Left Column */}
        <div className="project-info-col">
          <h3 className="project-main-title">{project.name}</h3>
          <p className="project-subtitle-lead">{project.subtitle}</p>
          <p className="project-description-text">{project.description}</p>

          <div className="project-tech-block">
            <span className="tech-block-label">CYBERSECURITY &amp; AI STACK</span>
            <div className="tech-tags-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Threat Response Flow */}
        <div className="project-diagram-col">
          <div className="diagram-header-bar">
            <div className="diagram-title-group">
              <ShieldAlert size={14} className="diagram-icon" aria-hidden="true" />
              <span className="diagram-heading">THREAT EVALUATION PIPELINE</span>
            </div>
            <span className="diagram-live-indicator">
              <span className="status-dot" />
              Gemini API Connected
            </span>
          </div>

          <div className="sentinel-pipeline-box">
            {/* Step Navigation Bar */}
            <div className="threat-flow-stepper" role="tablist" aria-label="Sentinel Threat Pipeline">
              {THREAT_PIPELINE_STEPS.map((item, idx) => {
                const IconComp = item.icon;
                const isSelected = selectedStep === idx;
                return (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedStep(idx)}
                    className={`threat-step-btn ${isSelected ? 'selected' : ''}`}
                  >
                    <div className="threat-step-top">
                      <IconComp size={13} />
                      <span className="threat-step-num">0{idx + 1}</span>
                    </div>
                    <span className="threat-step-name">{item.step}</span>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="sentinel-inspector-box">
              <div className="inspector-top">
                <span className="inspector-stage-label">
                  STAGE 0{selectedStep + 1} • {THREAT_PIPELINE_STEPS[selectedStep].label}
                </span>
                <span className="sentinel-chip">SECURITY WORKFLOW</span>
              </div>
              <p className="inspector-desc">{THREAT_PIPELINE_STEPS[selectedStep].desc}</p>
              <div className="inspector-code-preview threat-preview">
                <div className="preview-terminal-header font-mono">
                  <span>telemetry_stream // node_0{selectedStep + 1}</span>
                </div>
                <pre className="font-mono">
                  <code>{THREAT_PIPELINE_STEPS[selectedStep].sample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
