import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  /** How many decimal places to display in the count-up. */
  decimals?: number;
}

const metrics: Metric[] = [
  { value: 4, suffix: "+ yrs", label: "DevOps experience" },
  { value: 99.9, suffix: "%", label: "Production uptime", decimals: 1 },
  { value: 30, suffix: "%", label: "AWS cost reduction" },
  { value: 70, suffix: "%", label: "Fewer deploy failures" },
];

const Counter = ({
  value,
  suffix,
  decimals = 0,
  active,
}: Metric & { active: boolean }) => {
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => v.toFixed(decimals));
  const [text, setText] = useState(reduced ? value.toFixed(decimals) : "0");

  useEffect(() => {
    if (reduced) {
      setText(value.toFixed(decimals));
      return;
    }
    if (!active) return;
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = display.on("change", (v) => setText(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [active, value, decimals, reduced, mv, display]);

  return (
    <span className="tabular-nums">
      {text}
      {suffix}
    </span>
  );
};

const MetricsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding !py-12">
      <div className="glass border border-devops-blue/20 rounded-2xl bg-card/30 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-devops-blue/15">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="px-6 py-7 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                <Counter {...m} active={inView} />
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
