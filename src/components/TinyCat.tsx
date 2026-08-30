import React, { useState } from 'react';

export const TinyCat: React.FC = () => {
  const [isInteracted, setIsInteracted] = useState(false);

  const handleToggle = () => {
    setIsInteracted((prev) => !prev);
  };

  return (
    <div
      className={`tiny-cat-anchor ${isInteracted ? 'is-active' : ''}`}
      onMouseEnter={() => setIsInteracted(true)}
      onMouseLeave={() => setIsInteracted(false)}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-label="Tiny cat mascot. Hover or tap to greet."
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {/* Speech Bubble */}
      <div className={`cat-speech-bubble ${isInteracted ? 'show' : ''}`} role="status">
        <span className="speech-text font-mono">welcome here :)</span>
        <span className="speech-tail" aria-hidden="true" />
      </div>

      {/* Editorial Minimalist Cat SVG Illustration */}
      <div className="cat-svg-box">
        <svg
          viewBox="0 0 64 64"
          width="46"
          height="46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cat-svg-art"
        >
          {/* Subtle Shadow Base */}
          <ellipse cx="32" cy="56" rx="20" ry="4" className="cat-shadow-fill" />

          {/* Cat Tail (Gentle Sway) */}
          <path
            d="M44 48C49 46 54 41 53 35C52 30 47 31 46 34"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="cat-tail-path"
          />

          {/* Cat Body */}
          <path
            d="M20 52C20 40 25 32 32 32C39 32 44 40 44 52C44 54 42 55 32 55C22 55 20 54 20 52Z"
            className="cat-body-fill"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Cat Head */}
          <circle
            cx="32"
            cy="24"
            r="13"
            className="cat-head-fill"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* Left Ear */}
          <path
            d="M21 20L23 10L30 15"
            className="cat-ear-left"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Right Ear */}
          <path
            d="M43 20L41 10L34 15"
            className="cat-ear-right"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Tiny Burgundy Accent Collar */}
          <path
            d="M24 33C27 35 37 35 40 33"
            className="cat-collar-path"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="35.5" r="1.5" className="cat-collar-bell" />

          {/* Eyes (Gentle Blink Animation) */}
          <g className="cat-eyes-group">
            <ellipse cx="27.5" cy="23" rx="1.5" ry="2" className="cat-eye-fill" />
            <ellipse cx="36.5" cy="23" rx="1.5" ry="2" className="cat-eye-fill" />
          </g>

          {/* Nose & Mouth */}
          <path
            d="M32 26.5L31 28H33L32 26.5Z"
            className="cat-nose-fill"
          />
          <path
            d="M30 29.5C31 30.5 32 30.5 32 29.5C32 30.5 33 30.5 34 29.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Whiskers */}
          <path
            d="M23 26L16 25M23 28L15 29M41 26L48 25M41 28L49 29"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};
