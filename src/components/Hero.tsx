import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import HeroSceneLazy from "@/components/three/HeroSceneLazy";
import { RESUME_FILENAME } from "@/lib/resume";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const reduced = useReducedMotion();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL scene (lazy, desktop, motion-respectful) */}
      <HeroSceneLazy />

      {/* Vignette so foreground text always reads */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]"
      />

      <motion.div
        className="section-padding text-center z-10"
        variants={container}
        initial={reduced ? false : "hidden"}
        animate="show"
      >
        <motion.span
          variants={item}
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase border border-devops-blue/30 bg-devops-blue/5 text-devops-cyan/90 backdrop-blur-sm"
        >
          DevOps · Cloud · Platform Engineering
        </motion.span>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Gurekam Singh Bedi
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          DevOps Engineer with 4+ years building scalable cloud infrastructure
          and automation pipelines across{" "}
          <span className="text-devops-cyan">AWS</span> and{" "}
          <span className="text-devops-blue">Azure</span>.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-primary text-background hover:shadow-glow transition-all duration-400"
            onClick={() => scrollTo("projects")}
          >
            View Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass border-devops-blue/30 hover:border-devops-blue hover:shadow-soft transition-all duration-400"
          >
            <a
              href={`${import.meta.env.BASE_URL}${RESUME_FILENAME}`}
              download={RESUME_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => window.open("mailto:gurekamsinghbedi@gmail.com")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in touch
          </Button>
        </motion.div>

        <motion.div variants={item} className="flex justify-center space-x-6">
          <a
            href="https://github.com/gurekamsingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-devops-blue transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/gurekam-bedi-0a0ba1239/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-devops-cyan transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-7 w-7" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "loop" }}
        >
          Scroll
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
