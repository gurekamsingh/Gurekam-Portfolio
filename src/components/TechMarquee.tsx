import { useReducedMotion } from "framer-motion";
import { BRAND_ICONS } from "@/components/icons/brands";

/**
 * Auto-scrolling row of brand-correct tech icons. Runs as a pure CSS
 * animation, with edge fades for a clean look. Pauses on reduced-motion
 * (renders a static, evenly-spaced row instead).
 */
const TechMarquee = () => {
  const reduced = useReducedMotion();
  const items = [...BRAND_ICONS, ...BRAND_ICONS]; // duplicate for seamless loop

  return (
    <section
      aria-label="Technology stack"
      className="relative overflow-hidden py-14 border-y border-devops-blue/10 bg-card/20"
    >
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"
      />

      {reduced ? (
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 px-6">
          {BRAND_ICONS.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-muted-foreground"
              title={name}
            >
              <Icon style={{ color }} width={24} height={24} aria-hidden />
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex w-max animate-marquee gap-12 will-change-transform">
          {items.map(({ name, Icon, color }, i) => (
            <div
              key={`${name}-${i}`}
              className="group flex items-center gap-3 px-2"
              title={name}
            >
              <Icon
                style={{ color }}
                width={28}
                height={28}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TechMarquee;
