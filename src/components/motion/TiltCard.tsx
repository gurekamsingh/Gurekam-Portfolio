import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionTemplate,
} from "framer-motion";
import type { ReactNode, PointerEvent as ReactPointerEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis. Keep small (4–6) for refinement. */
  maxTilt?: number;
  /** Lift on hover, in pixels. */
  lift?: number;
}

/**
 * 3D card tilt that follows the cursor. Pure CSS perspective driven by
 * Framer Motion springs — no extra deps. A subtle radial highlight
 * tracks the cursor for the "glass under light" feel. Disables itself
 * for users who prefer reduced motion.
 */
const TiltCard = ({
  children,
  className,
  maxTilt = 5,
  lift = 6,
}: Props) => {
  const reduced = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const active = useMotionValue(0);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.4 };
  const sx = useSpring(x, springCfg);
  const sy = useSpring(y, springCfg);
  const sActive = useSpring(active, { stiffness: 180, damping: 24 });

  const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt]);
  const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt]);

  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(360px circle at ${glareX} ${glareY}, hsl(var(--devops-cyan) / 0.14), transparent 60%)`;
  const glareOpacity = sActive;

  const onEnter = () => active.set(1);
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
    active.set(0);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={{ y: -lift }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`relative ${className ?? ""}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: glareBg, opacity: glareOpacity }}
      />
      <div className="relative h-full" style={{ transform: "translateZ(0)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
