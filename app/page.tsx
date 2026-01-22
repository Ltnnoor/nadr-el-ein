"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const eyeRef = useRef<HTMLDivElement | null>(null);
  const pupilRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const eye = eyeRef.current;
    const pupil = pupilRef.current;
    if (!eye || !pupil) return;

    const onMove = (e: MouseEvent) => {
      const rect = eye.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const angle = Math.atan2(dy, dx);

      // Limit pupil movement
      const maxDistance = 5;
      const distance = Math.min(maxDistance, Math.sqrt(dx * dx + dy * dy) / 20);

      const px = Math.cos(angle) * distance;
      const py = Math.sin(angle) * distance;

      pupil.style.transform = `translate(${px}px, ${py}px)`;
    };

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="fullscreen">
      {/* World map background image (optional) */}
      <div className="backgroundMap" />

      {/* Background layers */}
      <div className="relief reliefA" />
      <div className="relief reliefB" />
      <div className="vignette" />

      {/* World map line art */}
      <svg
        className="world"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="worldLine"
          d="M150 290c30-70 90-120 170-135 60-11 90 8 130 25 30 13 62 20 95 16 45-6 72-28 105-35 42-9 72 18 105 38 38 23 86 38 140 34 70-5 120-52 165-58 45-5 85 22 115 55 28 30 45 70 38 115-10 64-72 104-140 106-55 2-100-19-145-44-30-17-62-31-98-28-38 3-68 23-95 47-40 36-76 60-135 66-75 8-135-30-180-76-22-23-46-43-78-50-45-10-95 5-140-8-55-16-95-62-92-133z"
        />
      </svg>
      {/* FOG MUST COME AFTER VIGNETTE */}
      {/* Fog / clouds */}
     <div className="fog fog1" aria-hidden="true" />
     <div className="fog fog2" aria-hidden="true" />
      {/* Top-left brand */}
      <div className="brandTopLeft">
        <svg
          className="brandEye"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="2.6" fill="white" />
        </svg>

        <span className="brandLabel">Nadr El Ein</span>
      </div>

      {/* Center headline */}
      <h1 className="headlineCenter">Maps for Good</h1>

      {/* Mouse-following eye */}
      <div ref={eyeRef} className="mouseEye" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle ref={pupilRef} className="pupil" cx="12" cy="12" r="2.6" fill="currentColor" />
        </svg>
      </div>

      {/* Popup layer (always on top) */}
      <div className="popupLayer">
        <div className="popup whoWeAre">WHO WE ARE</div>
        <div className="popup whatWeDo">WHAT WE DO</div>
         <div className="popup About">ABOUT</div>
      </div>
    </main>
  );
}