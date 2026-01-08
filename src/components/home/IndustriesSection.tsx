import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Scissors,
  Car,
  Factory,
  Package,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Briefcase,
  Truck,
  Dumbbell,
  UserCog,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Stethoscope, name: "Clinics & Healthcare", desc: "Digital visibility & patient trust" },
  { icon: Scissors, name: "Salons & Beauty", desc: "Brand growth & local reach" },
  { icon: Car, name: "Automobile Services", desc: "Customer engagement & leads" },
  { icon: Factory, name: "Manufacturing", desc: "B2B marketing & exports" },
  { icon: Package, name: "B2B & Wholesale", desc: "Decision-maker targeting" },
  { icon: ShoppingBag, name: "E-commerce & D2C", desc: "Sales & conversions" },
  { icon: Building2, name: "Real Estate", desc: "Lead generation & trust" },
  { icon: UtensilsCrossed, name: "Restaurants & Cafes", desc: "Local visibility & orders" },
  { icon: GraduationCap, name: "Education & Coaching", desc: "Student acquisition" },
  { icon: Briefcase, name: "Corporate & Startups", desc: "Brand positioning" },
  { icon: Truck, name: "Logistics & Warehousing", desc: "B2B lead generation" },
  { icon: Dumbbell, name: "Gyms & Fitness", desc: "Member acquisition" },
  { icon: UserCog, name: "Professional Services", desc: "Authority building" },
  { icon: Camera, name: "Content Creators", desc: "Audience growth" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-muted/30" id="industries">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Helping Businesses Across <span className="text-gradient">Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From local businesses to international enterprises — we adapt our strategy to your industry needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="group p-4 bg-card rounded-xl border border-border/50 text-center hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{industry.name}</h3>
              <p className="text-xs text-muted-foreground">{industry.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 p-8 bg-background rounded-2xl border border-border/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg mb-4">
            Not sure if your industry fits? <strong>We customize strategies for every business.</strong>
          </p>
          <a
            href="https://wa.me/918866724780?text=Hi%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-gradient-primary">
              Get Free Consultation
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
