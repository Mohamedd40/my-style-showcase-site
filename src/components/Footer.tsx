import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform inline-block mb-4"
            >
              Alex.dev
            </button>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
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

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Alex
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="hover:text-primary"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;