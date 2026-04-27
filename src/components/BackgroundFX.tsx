/**
 * Site-wide ambient background:
 *   - subtle SVG grid (network / infrastructure feel)
 *   - two slow-drifting blurred orbs (colour without WebGL cost)
 *   - top + bottom vignettes to keep edges clean
 *
 * Pure CSS / SVG — no JS, no WebGL.
 */
const BackgroundFX = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="bgfx-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="hsl(var(--devops-blue))"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="bgfx-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="bgfx-mask">
            <rect width="100%" height="100%" fill="url(#bgfx-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#bgfx-grid)"
          mask="url(#bgfx-mask)"
        />
      </svg>

      {/* Drifting orbs */}
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-devops-blue/15 blur-3xl animate-drift-slow" />
      <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] rounded-full bg-devops-purple/10 blur-3xl animate-drift-slower" />

      {/* Top + bottom fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default BackgroundFX;
