import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ArchivalMedia {
  type: 'photo' | 'certificate';
  title: string;
  url: string;
  caption?: string;
}

interface ArchivalLightboxProps {
  media: ArchivalMedia | null;
  onClose: () => void;
}

export const ArchivalLightbox: React.FC<ArchivalLightboxProps> = ({ media, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (media) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media, onClose]);

  if (!media) return null;

  return (
    <div
      className="modal-backdrop lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="lightbox-header">
          <div className="lightbox-meta">
            <span className="lightbox-badge font-mono">
              {media.type === 'certificate' ? 'OFFICIAL CERTIFICATE' : 'EVENT ARCHIVE PHOTO'}
            </span>
            <h3 id="lightbox-title" className="lightbox-title font-serif">
              {media.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="lightbox-close-btn"
            aria-label="Close archival viewer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Media Frame */}
        <div className="lightbox-image-frame">
          <img
            src={media.url}
            alt={media.caption || media.title}
            className="lightbox-image"
          />
        </div>

        {/* Caption Bar */}
        {media.caption && (
          <div className="lightbox-caption-bar">
            <ZoomIn size={13} className="lightbox-caption-icon" aria-hidden="true" />
            <p className="lightbox-caption-text font-mono">{media.caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};
