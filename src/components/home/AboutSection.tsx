import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Globe, Lightbulb, Zap } from "lucide-react";

const differentiators = [
  { icon: Lightbulb, text: "We think like business owners, not just marketers" },
  { icon: Globe, text: "We understand B2B and B2C growth models" },
  { icon: Zap, text: "We focus on strategy + creativity + execution" },
  { icon: CheckCircle, text: "We build systems that are future-ready and automation-friendly" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding bg-muted/30" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Digital Dost Media</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">We don&apos;t just manage social media.</strong> We build brands, drive growth, and create digital systems that work for your business.
              </p>
              <p>
                Digital Dost Media is a full-service digital marketing agency designed for businesses that want more than likes and followers — they want visibility, trust, leads, and long-term growth.
              </p>
              <p>
                From local businesses in India to international clients across global markets, we partner with brands to create a strong digital presence that speaks professionally, performs consistently, and scales confidently.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="font-semibold text-lg mb-2 text-primary">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To help businesses grow digitally with clarity, consistency, and confidence.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="font-semibold text-lg mb-2 text-accent">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To become a trusted global digital growth partner with automation-driven solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 bg-background rounded-2xl border border-border/50 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">What Makes Us Different?</h3>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Global Vision Box */}
            <div className="p-6 bg-gradient-primary text-primary-foreground rounded-2xl">
              <h4 className="font-semibold text-lg mb-3">🌍 Global Vision. Local Understanding.</h4>
              <p className="text-sm opacity-90">
                Our strategies are designed to meet global standards while understanding local markets, customer psychology, and buying behavior.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
