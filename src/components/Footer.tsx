import { Github, Linkedin, Mail, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/omerfarookbe", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/omerfarook", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/omerfarookbe", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/omerfarookbe", label: "GitHub" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:omerfarookbe@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-background border-t border-white/5 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter">
              <span className="text-gradient">OMER FAROOK MOHIDEEN ABDUL KADER</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Cloud And Platform Architect | AI-Native Platform Engineering
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center border border-white/10 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 shadow-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
              &copy; {currentYear} Omer Farook. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#publications" className="hover:text-primary transition-colors">Publications</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
