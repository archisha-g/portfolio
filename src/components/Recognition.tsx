import React, { useState } from 'react';
import { AWARDS_DATA } from '../data/portfolioData';
import { Award, Sparkles, BookOpen, Image, FileText, ArrowUpRight } from 'lucide-react';
import { ArchivalLightbox } from './ArchivalLightbox';

export const Recognition: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'photo' | 'certificate';
    title: string;
    url: string;
    caption?: string;
  } | null>(null);

  // Group awards by year
  const years = Array.from(new Set(AWARDS_DATA.map((a) => a.year))).sort((a, b) => Number(b) - Number(a));

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'RESEARCH':
        return <BookOpen size={12} aria-hidden="true" />;
      case 'MEDAL':
      case 'AWARD':
        return <Sparkles size={12} aria-hidden="true" />;
      default:
        return <Award size={12} aria-hidden="true" />;
    }
  };

  return (
    <section className="section-wrapper recognition-section" id="recognition" aria-labelledby="recognition-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-tag">05 / HONORS &amp; ARCHIVE</span>
            <h2 id="recognition-heading" className="section-title">
              Recognition
            </h2>
          </div>
          <p className="section-intro">
            A curated archive of national hackathon championships, IEEE competitions, research papers, and academic honors with verified certificates and event photos.
          </p>
        </div>

        <div className="recognition-list-wrap">
          {years.map((year) => {
            const yearAwards = AWARDS_DATA.filter((a) => a.year === year);
            return (
              <div key={year} className="recognition-year-group">
                <div className="recognition-year-aside font-mono">
                  <span className="year-sticky">{year}</span>
                </div>

                <div className="recognition-items-col">
                  {yearAwards.map((item) => (
                    <article key={item.id} className="recognition-item">
                      <div className="recognition-main">
                        <div className="recognition-title-row">
                          <div className="title-org-wrap">
                            <h3 className="recognition-title">{item.title}</h3>
                            {item.organization && (
                              <span className="recognition-org font-mono">
                                • {item.organization}
                              </span>
                            )}
                          </div>

                          <div className="badge-media-actions">
                            {/* Hover Badge Indicator */}
                            <span className={`recognition-badge-tag ${item.badge.toLowerCase()}`}>
                              {getBadgeIcon(item.badge)}
                              <span>{item.badge}</span>
                            </span>
                          </div>
                        </div>

                        <p className="recognition-desc">{item.description}</p>

                        {/* Archival Media Triggers (Photos / Certificates) */}
                        {item.media && item.media.length > 0 && (
                          <div className="recognition-proof-strip">
                            <span className="proof-label font-mono">ARCHIVAL PROOF:</span>
                            <div className="proof-buttons-list">
                              {item.media.map((mediaItem, mIdx) => (
                                <button
                                  key={mIdx}
                                  onClick={() => setSelectedMedia(mediaItem)}
                                  className="proof-pill-btn"
                                  title={`View ${mediaItem.title}`}
                                  aria-label={`View ${mediaItem.title}`}
                                >
                                  {mediaItem.type === 'photo' ? (
                                    <Image size={12} aria-hidden="true" />
                                  ) : (
                                    <FileText size={12} aria-hidden="true" />
                                  )}
                                  <span>{mediaItem.title}</span>
                                  <ArrowUpRight size={11} className="proof-arrow" aria-hidden="true" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox for Viewing Real Certificates and Event Photos */}
      <ArchivalLightbox
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
};
