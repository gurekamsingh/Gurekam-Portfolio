import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    provider: "Microsoft",
    category: "Cloud Platforms"
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    code: "AZ-104",
    provider: "Microsoft",
    category: "Cloud Administration"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CCP",
    provider: "Amazon Web Services",
    category: "Cloud Platforms"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional certifications validating expertise in cloud platforms and DevOps practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="glass border-devops-blue/20 hover:border-devops-blue/40 transition-all duration-400 hover:shadow-soft group hover:scale-105 transform perspective">
            <div className="p-6 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-devops-blue/10 rounded-full group-hover:bg-devops-blue/20 transition-colors duration-300">
                  <Award className="w-8 h-8 text-devops-blue" />
                </div>
              </div>
              
              <Badge variant="secondary" className="bg-devops-cyan/10 text-devops-cyan border-devops-cyan/20 mb-3">
                {cert.category}
              </Badge>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-devops-cyan transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-center space-x-2 mb-3">
                <CheckCircle className="w-4 h-4 text-devops-green" />
                <span className="text-sm font-semibold text-devops-blue">{cert.code}</span>
              </div>
              
              <p className="text-sm text-muted-foreground">{cert.provider}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;