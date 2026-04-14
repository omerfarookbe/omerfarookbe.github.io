import { Progress } from "@/components/ui/progress";
import aboutImage from "../img/about-portrait-tech-pro.png";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/img">
              <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-shimmer" />
              </div>
              <img
                src={aboutImage}
                alt="Omer Farook"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wider uppercase">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                18+ Years Experience
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Designing and delivering high-performance, 
                cloud-native applications using .NET Core, C#, microservices, serverless, and Azure.
              </p>
              <p>
                Specialize in modernizing legacy systems, implementing CI/CD pipelines, containerization, 
                event-driven architectures, and automation to drive digital transformation.
              </p>
              <p>
                Ships AI as a real platform capability: RAG pipelines, LLM orchestration, model evaluation harnesses,
                 and CI/CD-integrated AI workflows that cut analyst effort by 75%.
              </p>
              <p>
                Proven technical leader with experience managing teams of up to 30 engineers - driving roadmaps, 
                aligning cross-functional stakeholders, and mentoring engineers at all levels while staying deeply hands-on.                
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Back-End Development</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Cloud Development</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Web Development</span>
                  <span>80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Winform Development</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>AI & Machine Learning</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>              
            </div>

            <div className="pt-0">
              <a 
                href="https://github.com/omerfarookbe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
