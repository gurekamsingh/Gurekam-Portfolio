import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-devops-blue/10 via-transparent to-devops-purple/10" />
      
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-devops-cyan rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-devops-purple rounded-full animate-float-delay" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-devops-blue rounded-full animate-pulse delay-1000" />
      </div>

      <div className="section-padding text-center z-10">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Gurekam Singh Bedi
          </h1>
        </div>
        
        <div className="animate-fade-up-delay">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            DevOps Engineer with 4+ years of experience delivering scalable cloud infrastructure 
            and automation pipelines in <span className="text-devops-cyan">AWS</span> and <span className="text-devops-blue">Azure</span> environments
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up-delay">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-400"
            onClick={() => window.open('mailto:gurekamsinghbedi@gmail.com')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button asChild variant="outline" size="lg" className="glass border-devops-blue/30 hover:border-devops-blue hover:shadow-soft transition-all duration-400">
            <a
              href={`${window.location.origin}${import.meta.env.BASE_URL}Gurekam_Resume_DevOps.pdf`}
              download="Gurekam_Resume_DevOps.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 animate-fade-up-delay">
          <a 
            href="https://github.com/gurekamsingh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-devops-blue transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/gurekam-singh-bedi-0a0ba1239/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-devops-cyan transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;