import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    provider: "Microsoft",
    category: "Cloud Platforms",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    code: "AZ-104",
    provider: "Microsoft",
    category: "Cloud Administration",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CCP",
    provider: "Amazon Web Services",
    category: "Cloud Platforms",
  },
  {
    title: "Certified Kubernetes Administrator",
    code: "CKA",
    provider: "The Linux Foundation · CNCF",
    category: "Container Orchestration",
  },
];

const Certifications = () => {
  const reduced = useReducedMotion();

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
          <motion.div
            key={index}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.08,
            }}
          >
            <Card className="glass border-devops-blue/20 hover:border-devops-cyan/40 transition-all duration-400 hover:shadow-soft hover:-translate-y-1 group bg-card/40 h-full">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
