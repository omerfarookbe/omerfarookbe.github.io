import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../img/hero-portrait-tech-office.png";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium tracking-wide">
                PRINCIPAL SOFTWARE ENGINEER
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm{" "}
                <span className="text-gradient">
                  Omer Farook
                </span>
              </h1>
              <p className="text-xl md:text-xl text-muted-foreground min-h-[1.5em]">
                Cloud And Platform Architect | AI-Native Platform Engineering
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              18+ years of experience in leveraging technology for business solutions, specializing in architecture, modernization, innovation, automation, cloud-native application development, and AI-driven solutions including LLMs, RAG pipelines, and intelligent data platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/resume/Omer-Farook-Resume.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/omerfarookbe/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110">
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
              <a
                href="https://github.com/omerfarookbe"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110">
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
              <a
                href="mailto:omerfarookbe@gmail.com"
                className="group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow" />

              {/* Image container with glassmorphism and magic shimmer */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-card/30 backdrop-blur-sm p-2 shadow-2xl group">
                <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-shimmer" />
                </div>

                <img
                  src={heroImage}
                  alt="Omer Farook - Senior Software Engineer"
                  className="w-full h-full min-h-[500px] lg:h-[650px] rounded-2xl object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Extra magic corner glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-primary/20 shadow-xl animate-float">
                <p className="text-sm font-semibold text-primary">18+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-accent/20 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                <p className="text-sm font-semibold text-accent">.NET Expert</p>
                <p className="text-xs text-muted-foreground">Cloud Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}; 
