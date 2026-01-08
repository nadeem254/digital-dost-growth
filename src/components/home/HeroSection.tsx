import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Globe, text: "Global Client Support" },
  { icon: Users, text: "B2B & B2C Experts" },
  { icon: Target, text: "Results-Focused Strategy" },
  { icon: Award, text: "Trusted Growth Partner" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Your Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Grow Your Business{" "}
            <span className="text-gradient">Digitally</span> —{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-accent">Without Limits</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help businesses build visibility, trust, and growth through strategic digital marketing, influencer videos, and future-ready automation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://wa.me/918866724780?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-primary text-primary-foreground px-8 py-6 text-lg">
                Get Free Consultation
              </Button>
            </a>
            <a
              href="https://wa.me/918866724780"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={badge.text}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 shadow-sm"
              >
                <badge.icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-center">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
