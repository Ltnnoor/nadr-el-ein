export default function Home() {
  return (
    <main className="fullscreen">
      {/* World map background */}
      <div className="backgroundMap" />

      {/* Background layers */}
      <div className="relief reliefA" />
      <div className="relief reliefB" />
      <div className="vignette" />

      {/* World map */}
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

      {/* Top-left brand (ON TOP) */}
      <div className="brandTopLeft">
  <svg
    className="brandEye"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
</div>

      {/* Center headline */}
      <h1 className="headlineCenter">Maps for Good</h1>

      {/* Mouse-following eye */}
      <div id="eye" className="mouseEye">
        <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" stroke="currentColor" strokeWidth="1" />
          <circle className="pupil" cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
        <div className="popup whoWeAre">Who we are</div>
        <div className="popup whatWeDo">What we do</div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const eye = document.getElementById('eye');
            const pupil = eye.querySelector('.pupil');
            document.addEventListener('mousemove', (e) => {
              const eyeRect = eye.getBoundingClientRect();
              const eyeCenterX = eyeRect.left + eyeRect.width / 2;
              const eyeCenterY = eyeRect.top + eyeRect.height / 2;
              const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
              const maxDistance = 5; // limit pupil movement
              const distance = Math.min(maxDistance, Math.sqrt((e.clientX - eyeCenterX)**2 + (e.clientY - eyeCenterY)**2) / 20);
              const pupilX = Math.cos(angle) * distance;
              const pupilY = Math.sin(angle) * distance;
              pupil.style.transform = \`translate(\${pupilX}px, \${pupilY}px)\`;
            });
          });
        `
      }} />
    </main>
  );
}
