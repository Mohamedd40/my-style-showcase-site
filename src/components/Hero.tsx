import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I craft beautiful, functional web applications with modern technologies. 
              Passionate about clean code, user experience, and solving complex problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow"></div>
            <img
              src={heroPortrait}
              alt="Alex - Full Stack Developer"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-card shadow-card animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;