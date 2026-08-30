import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ProfileStrip: React.FC = () => {
  return (
    <section className="profile-strip-section" aria-label="Profile Quick Summary">
      <div className="container">
        <div className="profile-strip-grid">
          {PERSONAL_INFO.profileStrip.map((item, index) => (
            <div key={index} className="profile-strip-item">
              <span className="strip-item-label">{item.label}</span>
              <span className="strip-item-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
