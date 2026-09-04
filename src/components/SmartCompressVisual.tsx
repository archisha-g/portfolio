import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import {
  ExternalLink,
  HardDrive,
  Archive,
  FileClock,
  FileCheck2,
  Gauge,
  FolderSearch,
} from 'lucide-react';

interface SmartCompressVisualProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const COMPRESSION_STAGES = [
  {
    step: 'MONITOR',
    label: 'Disk Space Watcher',
    icon: Gauge,
    desc: 'Continuously polls available disk space. When storage falls below the configurable threshold, the compression pipeline is triggered automatically.',
    sample: 'DiskMonitor: free=3.2 GB / total=256 GB (1.25%)\nThreshold: 5% — TRIGGER CONDITION MET\nPipeline: compression_worker.start()',
  },
  {
    step: 'SCAN & RANK',
    label: 'Intelligent File Prioritization',
    icon: FolderSearch,
    desc: 'Scans target directories and ranks files by compression potential — size and last-access time are weighted to surface the best candidates first.',
    sample: 'Ranked candidates (score desc):\n  [0] reports_2024.tar  | 1.8 GB | last_access: 47 days ago\n  [1] archive_raw.csv   | 420 MB | last_access: 12 days ago\n  [2] dump_backup.log   | 88 MB  | last_access: 3 days ago',
  },
  {
    step: 'COMPRESS',
    label: 'Lossless Gzip / Zlib Compression',
    icon: Archive,
    desc: 'Applies lossless Gzip or Zlib compression to selected files. Compressed-file markers prevent re-processing already compressed files.',
    sample: 'Compressing: reports_2024.tar → reports_2024.tar.gz\n  Algorithm : Gzip (level=9)\n  Input     : 1.8 GB  →  Output: 412 MB  (77.1% reduction)\n  Status    : SUCCESS | marked .compressed',
  },
  {
    step: 'METADATA',
    label: 'JSON Metadata Preservation',
    icon: FileClock,
    desc: 'Writes a JSON metadata record for every compressed file — original path, type, checksum, and timestamp — enabling safe, lossless restoration at any time.',
    sample: '{\n  "original": "/data/reports_2024.tar",\n  "compressed": "/data/reports_2024.tar.gz",\n  "algo": "gzip",\n  "original_size": 1932735283,\n  "compressed_at": "2026-09-05T03:51:00"\n}',
  },
  {
    step: 'RESTORE',
    label: 'Metadata-Driven Decompression',
    icon: FileCheck2,
    desc: 'Reads the JSON metadata map to locate, verify, and decompress files on demand — guaranteed lossless restoration via checksum validation.',
    sample: 'Restoring: reports_2024.tar.gz\n  Lookup    : metadata/compress_map.json ✓\n  Decompress: Gzip → /data/reports_2024.tar\n  Verify    : checksum OK ✓  |  Size restored: 1.8 GB',
  },
];

// Animated disk usage bar
const DiskMeter: React.FC<{ usedPct: number }> = ({ usedPct }) => {
  const isCritical = usedPct >= 95;
  const isWarning = usedPct >= 80 && usedPct < 95;
  const barColor = isCritical
    ? 'var(--accent-color)'
    : isWarning
    ? '#b45309'
    : 'var(--success-color)';

  return (
    <div className="sc-disk-meter">
      <div className="sc-meter-label font-mono">
        <span>DISK USAGE</span>
        <span style={{ color: isCritical ? 'var(--accent-color)' : 'inherit' }}>
          {usedPct}% used
          {isCritical && ' — THRESHOLD EXCEEDED'}
        </span>
      </div>
      <div className="sc-meter-track" role="progressbar" aria-valuenow={usedPct} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="sc-meter-fill"
          style={{ width: `${usedPct}%`, backgroundColor: barColor }}
        />
      </div>
      <div className="sc-meter-ticks font-mono">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span className="sc-threshold-marker">▲ 80%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export const SmartCompressVisual: React.FC<SmartCompressVisualProps> = ({
  project,
  onOpenDetails,
}) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [animDisk, setAnimDisk] = useState<number>(62);

  // Slowly animate disk fill toward critical to show the trigger
  useEffect(() => {
    const id = setInterval(() => {
      setAnimDisk((prev) => {
        if (prev >= 96) return 62; // reset loop
        return prev + 1;
      });
    }, 280);
    return () => clearInterval(id);
  }, []);

  const IconComp = COMPRESSION_STAGES[activeStage].icon;

  return (
    <article className="featured-project-card smartcompress-card">
      <div className="project-header-strip">
        <div className="project-index-badge">
          <span className="badge-num">{project.number}</span>
          <span className="badge-flag">LIVE SYSTEM</span>
        </div>
        <div className="project-action-group">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label="Open SmartCompress live site"
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
            <span className="tech-block-label">SYSTEMS &amp; COMPRESSION STACK</span>
            <div className="tech-tags-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive compression pipeline */}
        <div className="project-diagram-col">
          <div className="diagram-header-bar">
            <div className="diagram-title-group">
              <HardDrive size={14} className="diagram-icon" aria-hidden="true" />
              <span className="diagram-heading">COMPRESSION PIPELINE</span>
            </div>
            <span className="diagram-live-indicator">
              <span className="status-dot" />
              Auto-Monitoring Active
            </span>
          </div>

          {/* Animated Disk Meter */}
          <DiskMeter usedPct={animDisk} />

          <div className="sentinel-pipeline-box">
            {/* Stage tabs */}
            <div className="threat-flow-stepper" role="tablist" aria-label="SmartCompress Pipeline">
              {COMPRESSION_STAGES.map((stage, idx) => {
                const StageIcon = stage.icon;
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveStage(idx)}
                    className={`threat-step-btn ${isSelected ? 'selected' : ''}`}
                  >
                    <div className="threat-step-top">
                      <StageIcon size={13} />
                      <span className="threat-step-num">0{idx + 1}</span>
                    </div>
                    <span className="threat-step-name">{stage.step}</span>
                  </button>
                );
              })}
            </div>

            {/* Stage Detail */}
            <div className="sentinel-inspector-box">
              <div className="inspector-top">
                <span className="inspector-stage-label">
                  <IconComp size={12} style={{ display: 'inline', marginRight: '0.35rem' }} aria-hidden="true" />
                  STAGE 0{activeStage + 1} • {COMPRESSION_STAGES[activeStage].label}
                </span>
                <span className="sentinel-chip">COMPRESSION WORKFLOW</span>
              </div>
              <p className="inspector-desc">{COMPRESSION_STAGES[activeStage].desc}</p>
              <div className="inspector-code-preview threat-preview">
                <div className="preview-terminal-header font-mono">
                  <span>smartcompress_fs // stage_0{activeStage + 1}</span>
                </div>
                <pre className="font-mono">
                  <code>{COMPRESSION_STAGES[activeStage].sample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
