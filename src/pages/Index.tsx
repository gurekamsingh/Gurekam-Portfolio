import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseLightEffect from "@/components/MouseLightEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MouseLightEffect />
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
