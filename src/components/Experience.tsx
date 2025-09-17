import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Alpha Tickets Ltd.",
    location: "Toronto, ON",
    period: "November 2023 - Present",
    achievements: [
      "Architected and deployed a high-performance ticketing platform on Azure AKS with Docker containers, handling concurrent users during peak events and ensuring 99.9% uptime",
      "Automated CI/CD pipelines using Azure DevOps and Github Actions, accelerating releases and minimizing errors",
      "Developed & deployed ETL/ELT pipelines using Azure Data Factory, ingesting REST API & structured sources into Azure Data Lake for reporting",
      "Built Spark-based data transformation pipelines in Azure Databricks, processing logs and transactional data using PySpark and SQL",
      "Created version-controlled notebooks using Spark & Hive for data wrangling & enrichment, supporting downstream BI workloads & Tableau dashboards",
      "Designed and integrated REST APIs with Spring Boot for external data ingestion, automating periodic fetch and transformation",
      "Built Node.js utilities for processing ticketing data streams and wrote optimized SQL queries to support analytics and reporting",
      "Developed custom scripts and tools using Python and PowerShell to automate routine DevOps tasks, saving 10 hours per week",
      "Configured Prometheus and Grafana on Azure for real-time monitoring and alerting, reducing MTTD by 50%"
    ],
    tags: ["Azure", "Kubernetes", "Docker", "CI/CD", "Python", "Prometheus", "Grafana"]
  },
  {
    title: "DevOps Engineer",
    company: "Paytm (One97 Communications Ltd.)",
    location: "Noida, India",
    period: "January 2022 - June 2023",
    achievements: [
      "Automated AWS infrastructure provisioning with Terraform modules for EC2, S3, VPC, SG, and EMR, reducing setup time by 50%",
      "Implemented Prometheus, Grafana, and ELK stack for proactive monitoring and centralized logging; established Telegraf and kube-state-metrics",
      "Led CI/CD pipeline migration using Jenkins with Helm charts and ArgoCD on EKS, cutting deployment failures by 70%",
      "Developed data ingestion pipelines from AWS and on-prem VMware assets to MongoDB for real-time inventory tracking",
      "Drove cost optimization initiatives leveraging Kubecost, cutting AWS expenses by 30% across 10 accounts",
      "Led on-call support via PagerDuty, ensuring 99.9% uptime through rapid incident resolution and RCA"
    ],
    tags: ["AWS", "Terraform", "Jenkins", "EKS", "MongoDB", "ELK Stack", "ArgoCD"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Building scalable infrastructure and automation solutions across leading tech companies
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass border-devops-blue/20 hover:border-devops-blue/40 transition-all duration-400 hover:shadow-soft hover:scale-102 transform perspective">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-devops-cyan font-semibold">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-devops-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-devops-blue/10 text-devops-blue border-devops-blue/20 hover:bg-devops-blue/20 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;