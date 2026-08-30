import React, { useState } from 'react';
import type { Project } from '../types';
import { ArrowRight, Code, Cpu, ExternalLink, Play, Layers, FileCode, CheckCircle2 } from 'lucide-react';

interface NeuroScriptVisualProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const COMPILER_STAGES = [
  {
    name: 'SOURCE CODE',
    description: 'High-level expressive syntax tailored for AI & NLP workflow orchestration',
    icon: FileCode,
    snippet: 'pipeline NLPClassifier {\n  input raw_text: String\n  model = load("transformer/nlp")\n  classify(tokenize(raw_text))\n}',
  },
  {
    name: 'LEXICAL ANALYSIS',
    description: 'Custom regex-based tokenizer generating normalized token streams & location spans',
    icon: Code,
    snippet: '[TOKEN_KEYWORD "pipeline", TOKEN_IDENT "NLPClassifier", TOKEN_LBRACE, ...]',
  },
  {
    name: 'PARSER (AST)',
    description: 'Recursive descent parser constructing strongly-typed Abstract Syntax Tree',
    icon: Layers,
    snippet: 'ASTNode::PipelineDeclaration {\n  id: "NLPClassifier",\n  body: [VarDecl, ModelLoad, TransformCall]\n}',
  },
  {
    name: 'SEMANTIC ANALYSIS',
    description: 'Scope validation, symbol table registration & static type compatibility checks',
    icon: CheckCircle2,
    snippet: 'SymbolTable: verified 3 identifiers, 0 type mismatches, model tensors aligned',
  },
  {
    name: 'THREE-ADDRESS CODE',
    description: 'Intermediate representation quad generation (3AC) for machine independence',
    icon: Cpu,
    snippet: 't1 = tokenize raw_text\nt2 = call load, "transformer/nlp"\nt3 = call classify, t1, t2\nreturn t3',
  },
  {
    name: 'EXECUTION ENGINE',
    description: 'FastAPI asynchronous sandbox executing TAC instructions & returning telemetry',
    icon: Play,
    snippet: 'Status: 200 OK | Latency: 12ms | Output: {"label": "positive", "confidence": 0.94}',
  },
];

export const NeuroScriptVisual: React.FC<NeuroScriptVisualProps> = ({ project, onOpenDetails }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'code'>('pipeline');

  return (
    <article className="featured-project-card neuroscript-card">
      <div className="project-header-strip">
        <div className="project-index-badge">
          <span className="badge-num">{project.number}</span>
          <span className="badge-flag">FEATURED SYSTEM</span>
        </div>
        <div className="project-action-group">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label="Open live NeuroScript web IDE"
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
        {/* Left Column: Project Editorial Information */}
        <div className="project-info-col">
          <h3 className="project-main-title">{project.name}</h3>
          <p className="project-subtitle-lead">{project.subtitle}</p>
          <p className="project-description-text">{project.description}</p>

          <div className="project-tech-block">
            <span className="tech-block-label">COMPILER &amp; RUNTIME STACK</span>
            <div className="tech-tags-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Compiler Pipeline Diagram */}
        <div className="project-diagram-col">
          <div className="diagram-header-bar">
            <div className="diagram-title-group">
              <Cpu size={14} className="diagram-icon" aria-hidden="true" />
              <span className="diagram-heading">COMPILATION PIPELINE</span>
            </div>

            <div className="diagram-tab-switch">
              <button
                className={`tab-switch-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('pipeline')}
              >
                Pipeline Stages
              </button>
              <button
                className={`tab-switch-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                Syntax Preview
              </button>
            </div>
          </div>

          {activeTab === 'pipeline' ? (
            <div className="pipeline-interactive-box">
              {/* Stepper Pipeline Flow */}
              <div className="pipeline-stepper" role="tablist" aria-label="NeuroScript Compiler Pipeline">
                {COMPILER_STAGES.map((stage, idx) => {
                  const IconComponent = stage.icon;
                  const isSelected = activeStage === idx;
                  return (
                    <button
                      key={idx}
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveStage(idx)}
                      className={`pipeline-node-btn ${isSelected ? 'selected' : ''}`}
                    >
                      <div className="node-icon-box">
                        <IconComponent size={14} />
                      </div>
                      <div className="node-text-wrap">
                        <span className="node-step-index">0{idx + 1}</span>
                        <span className="node-step-title">{stage.name}</span>
                      </div>
                      {idx < COMPILER_STAGES.length - 1 && (
                        <div className="node-connector" aria-hidden="true">
                          <ArrowRight size={12} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Inspector Box */}
              <div className="stage-inspector-box">
                <div className="inspector-top">
                  <span className="inspector-stage-label">
                    STAGE 0{activeStage + 1} • {COMPILER_STAGES[activeStage].name}
                  </span>
                  <span className="inspector-status-badge">ACTIVE PASS</span>
                </div>
                <p className="inspector-desc">{COMPILER_STAGES[activeStage].description}</p>
                <div className="inspector-code-preview">
                  <pre className="font-mono">
                    <code>{COMPILER_STAGES[activeStage].snippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          ) : (
            <div className="syntax-preview-box">
              <div className="preview-top-bar">
                <span className="preview-filename">classifier.ns</span>
                <span className="preview-lang">NeuroScript v1.0</span>
              </div>
              <pre className="syntax-code-block font-mono">
                <code>{project.codeSample}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
