import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to discuss your next DevOps project or explore collaboration opportunities
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass border-devops-blue/20 hover:border-devops-blue/40 transition-all duration-400 hover:shadow-soft group">
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-devops-blue/10 rounded-full group-hover:bg-devops-blue/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-devops-blue" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Let's discuss your project</p>
              <Button 
                variant="outline" 
                className="glass border-devops-blue/30 hover:border-devops-blue hover:shadow-soft transition-all duration-300"
                onClick={() => window.open('mailto:gurekamsinghbedi@gmail.com')}
              >
                Send Email
              </Button>
            </div>
          </Card>

          <Card className="glass border-devops-cyan/20 hover:border-devops-cyan/40 transition-all duration-400 hover:shadow-soft group">
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-devops-cyan/10 rounded-full group-hover:bg-devops-cyan/20 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-devops-cyan" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Toronto, ON, Canada</p>
              <p className="text-sm text-muted-foreground">Available for remote opportunities</p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="https://github.com/gurekamsingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-muted-foreground hover:text-devops-blue transition-colors duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>GitHub Portfolio</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/gurekam-singh-bedi-0a0ba1239/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-muted-foreground hover:text-devops-cyan transition-colors duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-400 animate-glow"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Gurekam_Resume_DevOps_N3.pdf';
              link.download = 'Gurekam_Resume_DevOps_N3.pdf';
              link.click();
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;