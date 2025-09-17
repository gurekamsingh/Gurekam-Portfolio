import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DevOps Incident Center",
    description: "A self-hosted incident dashboard that ingests Prometheus alerts, tracks service health, and visualizes open & resolved incidents in real-time. Built with FastAPI, React, Prometheus, Grafana, and Kubernetes.",
    technologies: ["FastAPI", "React", "Prometheus", "Grafana", "Kubernetes", "Docker", "Python"],
    highlights: [
      "Real-time incident tracking and visualization",
      "Prometheus alerts integration",
      "Service health monitoring dashboard",
      "Kubernetes-native deployment"
    ],
    category: "DevOps & Monitoring",
    github: "https://github.com/gurekamsingh/DevOps-Incident-Center"
  },
  {
    title: "Real-time Collaborative Spreadsheet",
    description: "Developed a real-time collaborative spreadsheet application with Flask and Socket.IO for instant updates across users. Implemented Redis-based write access control and session-based authentication.",
    technologies: ["Flask", "Redis", "Socket.IO", "AWS EKS", "Python", "GitHub Actions", "DuckDB"],
    highlights: [
      "Real-time collaboration with Socket.IO",
      "Redis-based access control with timeout handling",
      "Deployed on AWS EKS with Karpenter for dynamic scaling",
      "CI/CD pipelines via GitHub Actions"
    ],
    category: "Full-Stack Development",
    github: "https://github.com/gurekamsingh/spreadsheetApplication"
  },
  {
    title: "EcoExchange Auction Platform",
    description: "Architected containerized Django microservices with Redis real-time bidding, reducing latency by 40% through WebSocket optimization and implementing comprehensive CI/CD automation.",
    technologies: ["Django", "Redis", "Stripe API", "SQLite", "JavaScript", "WebSocket", "GitHub Actions"],
    highlights: [
      "40% latency reduction through WebSocket optimization",
      "Real-time auction updates using Redis Channels",
      "Integrated Stripe API for secure payments",
      "Automated CI/CD with rigorous testing"
    ],
    category: "Microservices Architecture",
    github: "https://github.com/pooja-vish/EcoExchange"
  },
  {
    title: "Infrastructure Automation at Paytm",
    description: "Led large-scale infrastructure automation initiatives, implementing Terraform modules for AWS services and establishing comprehensive monitoring with Prometheus, Grafana, and ELK stack.",
    technologies: ["Terraform", "AWS", "Prometheus", "Grafana", "ELK Stack", "Jenkins", "ArgoCD", "Kubernetes"],
    highlights: [
      "50% reduction in infrastructure setup time",
      "70% decrease in deployment failures",
      "30% cost optimization across 10 AWS accounts",
      "99.9% uptime through proactive monitoring"
    ],
    category: "Infrastructure & Monitoring"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Showcasing innovative solutions in cloud infrastructure, automation, and scalable application development
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="glass border-devops-blue/20 hover:border-devops-blue/40 transition-all duration-400 hover:shadow-soft group h-full flex flex-col perspective hover:rotate-y-6 hover:scale-105 transform-3d">
            <div className="p-6 flex-1">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-devops-purple/10 text-devops-purple border-devops-purple/20 mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-3 group-hover:text-devops-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-devops-cyan rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-devops-blue/30 text-devops-blue hover:bg-devops-blue/10 transition-colors text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex space-x-3">
                {project.github && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 glass border-devops-blue/30 hover:border-devops-blue hover:shadow-soft transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                )}
                <Button size="sm" variant="outline" className="flex-1 glass border-devops-cyan/30 hover:border-devops-cyan hover:shadow-soft transition-all duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;