import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseLightEffect from "@/components/MouseLightEffect";
import BackgroundFX from "@/components/BackgroundFX";
import MetricsStrip from "@/components/MetricsStrip";
import TechMarquee from "@/components/TechMarquee";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundFX />
      <MouseLightEffect />
      <ScrollProgress />
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <MetricsStrip />
        <Experience />
        <Skills />
        <TechMarquee />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
