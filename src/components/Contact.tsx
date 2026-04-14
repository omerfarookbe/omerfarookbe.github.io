import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-card border border-white/10 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href="mailto:omerfarookbe@gmail.com" className="font-semibold hover:text-primary transition-colors">
                    omerfarookbe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="font-semibold">United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Professional</p>
                  <p className="font-semibold">Senior Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-card border border-white/10 shadow-xl">
              <form action="https://formspree.io/f/xkndnldo" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium pl-1">Full Name</label>
                    <Input 
                      id="name" 
                      name="fullName" 
                      placeholder="John Doe" 
                      required 
                      className="rounded-xl border-white/10 bg-secondary/50 focus:border-primary/50 transition-all py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium pl-1">Email Address</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="rounded-xl border-white/10 bg-secondary/50 focus:border-primary/50 transition-all py-6"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium pl-1">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    required 
                    className="min-h-[150px] rounded-2xl border-white/10 bg-secondary/50 focus:border-primary/50 transition-all p-4"
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto px-8 py-6 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
