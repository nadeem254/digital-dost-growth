import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Target,
  Video,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Instagram & Facebook management with strategic content, engagement, and organic growth.",
    benefits: ["Brand visibility", "Trust & credibility", "Right audience"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Target,
    title: "Complete Digital Marketing",
    description: "Paid ads strategy, funnel planning, and lead generation for measurable business growth.",
    benefits: ["Better ROI", "Qualified leads", "Data-driven growth"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Video,
    title: "Influencer & Video Marketing",
    description: "Professional business reels, customer testimonials, and brand storytelling videos.",
    benefits: ["Higher trust", "Better conversions", "Social proof"],
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Clean, modern, mobile-responsive, SEO-friendly websites that convert visitors.",
    benefits: ["Strong first impression", "24/7 presence", "International trust"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Business apps, CRM-based systems, and customer interaction tools.",
    benefits: ["Saves time", "Better workflow", "Enhanced experience"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Growth Management",
    description: "Business analysis, monthly performance review, strategy refinement, and growth planning.",
    benefits: ["Consistent progress", "Better decisions", "Long-term stability"],
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: Palette,
    title: "Brand Building",
    description: "Brand positioning, visual identity guidance, and messaging consistency.",
    benefits: ["Creates authority", "Differentiates you", "Long-term value"],
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Briefcase,
    title: "B2B Marketing Expertise",
    description: "Specialized strategies for manufacturers, wholesalers, exporters, and service providers.",
    benefits: ["Target decision-makers", "Quality leads", "International credibility"],
    color: "bg-rose-500/10 text-rose-600",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="section-padding" id="services">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We Do & How It <span className="text-gradient">Benefits You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end digital marketing services designed to help your business grow locally, nationally, and internationally.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <motion.div 
                    key={benefit} 
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.08 + benefitIndex * 0.05 + 0.3 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/services">
            <Button size="lg" variant="outline" className="px-8">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
