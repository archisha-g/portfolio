import React, { useEffect } from 'react';
import { X, Terminal, Cpu, Layers, Sparkles } from 'lucide-react';

interface DevModeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevModeDrawer: React.FC<DevModeDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop dev-mode-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-mode-title"
    >
      <div
        className="modal-content dev-mode-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header dev-modal-header">
          <div className="modal-header-meta">
            <Terminal size={15} className="dev-icon" aria-hidden="true" />
            <span id="dev-mode-title" className="font-mono dev-mode-title">
              ARCHISHA.DEV_INSPECTOR // v1.0
            </span>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close developer mode inspector"
          >
            <X size={16} />
          </button>
        </div>

        <div className="modal-body dev-modal-body font-mono">
          <div className="dev-banner-strip">
            <span className="dev-status-tag">SYSTEM_READY</span>
            <span className="dev-time-tag">{new Date().toISOString()}</span>
          </div>

          <div className="dev-grid-specs">
            <div className="dev-spec-card">
              <div className="dev-card-head">
                <Cpu size={14} />
                <span>CORE SPECIALIZATIONS</span>
              </div>
              <ul className="dev-list">
                <li>• Compiler Design &amp; Intermediate Representations (3AC)</li>
                <li>• Natural Language Processing &amp; LLM Context Pipelines</li>
                <li>• Computer Vision &amp; Deep Transfer Learning</li>
                <li>• Full-Stack Architecture (MERN, React Native, FastAPI)</li>
              </ul>
            </div>

            <div className="dev-spec-card">
              <div className="dev-card-head">
                <Layers size={14} />
                <span>RUNTIME &amp; ENVIRONMENT</span>
              </div>
              <ul className="dev-list">
                <li>• Framework: React 18 + Vite (ESM Native)</li>
                <li>• Type Safety: TypeScript Strict Mode</li>
                <li>• Styling: Zero-Runtime Vanilla CSS Tokens</li>
                <li>• Typography: Instrument Serif + Inter + JetBrains Mono</li>
              </ul>
            </div>

            <div className="dev-spec-card">
              <div className="dev-card-head">
                <Sparkles size={14} />
                <span>ACTIVE MODULES</span>
              </div>
              <ul className="dev-list">
                <li>• [ACTIVE] NeuroScript Compiler Diagnostic Engine</li>
                <li>• [ACTIVE] Sentinel Google Gemini Threat Triage</li>
                <li>• [ACTIVE] Theme Engine (LocalStorage + Prefers-Color-Scheme)</li>
                <li>• [ACTIVE] IntersectionObserver Viewport Tracker</li>
              </ul>
            </div>
          </div>

          <div className="dev-shortcuts-box">
            <span className="dev-shortcuts-label">KEYBOARD SHORTCUTS:</span>
            <span className="dev-shortcut-item"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> Toggle Inspector</span>
            <span className="dev-shortcut-item"><kbd>Esc</kbd> Close Modals</span>
          </div>
        </div>

        <div className="modal-footer dev-modal-footer">
          <button onClick={onClose} className="btn btn-outline btn-sm font-mono">
            EXIT_DEV_MODE()
          </button>
        </div>
      </div>
    </div>
  );
};
