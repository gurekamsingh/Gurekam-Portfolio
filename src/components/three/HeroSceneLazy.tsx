import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

/**
 * Loads the WebGL hero scene only when:
 *   - the user hasn't requested reduced motion
 *   - the viewport is wide enough that the scene reads (skip on phones)
 *
 * Falls back to a CSS gradient + grid that fills the same space, so the
 * Hero looks intentional even when WebGL never mounts.
 */
const HeroSceneLazy = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    setEnabled(!reducedMotion && wideEnough);
  }, []);

  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,hsl(var(--devops-blue)/0.18),transparent_55%)]"
      />
      {enabled && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}
    </div>
  );
};

export default HeroSceneLazy;
