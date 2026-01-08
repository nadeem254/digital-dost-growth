import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, Sparkles, Bot, Clock, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const automationFeatures = [
  { icon: Zap, text: "Automatic lead capture" },
  { icon: Bot, text: "Lead-to-call conversion" },
  { icon: Clock, text: "Automated follow-ups" },
  { icon: Users, text: "Appointment scheduling" },
  { icon: Building2, text: "CRM-based client delivery" },
];

const idealFor = ["Clinics", "Dentists", "Service Businesses", "International Enterprises"];

const AutomationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" id="automation">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-primary/20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              AI-Powered <span className="text-accent">Automation</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We are developing advanced automation systems designed for high-growth businesses and international clients. Reduce manual work. Increase efficiency. Scale smarter.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {automationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <feature.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/automation">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn More About Automation
              </Button>
            </Link>
          </motion.div>

          {/* Ideal For Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Ideal For</h3>
              <div className="space-y-4 mb-8">
                {idealFor.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="p-6 rounded-xl bg-accent/20 border border-accent/30">
                <p className="text-accent font-medium text-center">
                  "Less manual work. More efficiency. Smarter growth."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
