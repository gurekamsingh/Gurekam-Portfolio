import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Database, Monitor, Settings, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "Databricks", "Kafka", "Flink", "Athena", "Dataflow"],
    color: "devops-blue"
  },
  {
    title: "Infrastructure as Code",
    icon: Settings,
    skills: ["Terraform", "Chef", "Ansible", "CloudFormation", "CDK", "End-to-End (e2e)"],
    color: "devops-cyan"
  },
  {
    title: "Containerization & Version Control",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "Git", "GitHub"],
    color: "devops-purple"
  },
  {
    title: "CI/CD",
    icon: Settings,
    skills: ["Jenkins", "ArgoCD", "GitHub Actions", "Maven", "Artifactory"],
    color: "devops-green"
  },
  {
    title: "Monitoring & Alerting",
    icon: Monitor,
    skills: ["Prometheus", "Grafana", "Telegraf", "CloudWatch", "OpenTelemetry", "Splunk", "Dynatrace"],
    color: "devops-blue"
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Bash", "Java", "C", "Node.js", "Express.js", "React", "Spring Boot", "GoLang", "C++"],
    color: "devops-cyan"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Oracle", "MongoDB", "PostgreSQL", "NoSQL"],
    color: "devops-purple"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive skill set spanning cloud infrastructure, automation, and modern DevOps practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card key={index} className="glass border-devops-blue/20 hover:border-devops-blue/40 transition-all duration-400 hover:shadow-soft group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className={`bg-${category.color}/10 text-${category.color} border-${category.color}/20 hover:bg-${category.color}/20 transition-colors`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;