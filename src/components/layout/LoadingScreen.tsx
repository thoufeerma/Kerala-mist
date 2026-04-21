'use client';

import { useState, useEffect, useCallback } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  /** Minimum display time in ms (default 2000) */
  minDuration?: number;
  /** Maximum display time in ms (default 3000) */
  maxDuration?: number;
  /** Called when loader finishes and fades out */
  onComplete?: () => void;
}

export default function LoadingScreen({
  minDuration = 2000,
  maxDuration = 3000,
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  const finish = useCallback(() => {
    setProgress(100);
    // Allow the bar to reach 100% visually before fading
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setHidden(true);
        onComplete?.();
      }, 500); // matches CSS fade-out duration
    }, 200);
  }, [onComplete]);

  useEffect(() => {
    const startTime = Date.now();
    const targetDuration = minDuration + Math.random() * (maxDuration - minDuration);

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / targetDuration) * 100, 100);

      // Ease-out curve for natural feel
      const eased = 100 * (1 - Math.pow(1 - rawProgress / 100, 3));
      setProgress(Math.min(eased, 99));

      if (elapsed >= targetDuration) {
        clearInterval(interval);
        finish();
      }
    }, 30);

    // Hard cap — never exceed maxDuration
    const hardCap = setTimeout(() => {
      clearInterval(interval);
      finish();
    }, maxDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(hardCap);
    };
  }, [minDuration, maxDuration, finish]);

  if (hidden) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'loader-fade-out' : ''}`}>
      {/* Ambient glow blobs */}
      <div className="loader-bg-glow loader-bg-glow-1" />
      <div className="loader-bg-glow loader-bg-glow-2" />

      <div className="loader-content">
        {/* Logo */}
        <div className="loader-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="loader-logo-icon"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span className="loader-logo-text">Kerala Mist</span>
        </div>

        {/* Tagline */}
        <p className="loader-tagline">Preparing your Kerala journey…</p>

        {/* Progress bar */}
        <div className="loader-progress-track">
          <div
            className="loader-progress-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="loader-progress-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="loader-percentage">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
