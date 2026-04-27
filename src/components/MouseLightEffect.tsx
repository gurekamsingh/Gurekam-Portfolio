import { useEffect } from "react";

/**
 * Soft cursor-tracking spotlight that sits above the background but
 * below content. Uses a CSS variable updated on mousemove — no React
 * re-renders, no extra paints.
 */
const MouseLightEffect = () => {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let nextX = 0;
    let nextY = 0;

    const onMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${nextX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${nextY}px`);
        raf = 0;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(560px at var(--mouse-x, -200px) var(--mouse-y, -200px), hsl(var(--devops-cyan) / 0.10), transparent 70%)",
      }}
    />
  );
};

export default MouseLightEffect;
