import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Scissors, 
  Car, 
  Factory, 
  Building, 
  ShoppingCart, 
  Home, 
  Utensils, 
  GraduationCap, 
  Briefcase, 
  Truck, 
  Dumbbell, 
  Users, 
  Camera,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const industries = [
  {
    icon: Stethoscope,
    name: "Clinics & Healthcare",
    description: "Clinics, dentists, hospitals, medical professionals",
    benefit: "Digital visibility & patient trust",
  },
  {
    icon: Scissors,
    name: "Salons & Beauty Businesses",
    description: "Salons, spas, beauty brands",
    benefit: "Brand awareness & bookings",
  },
  {
    icon: Car,
    name: "Automobile & Car Service",
    description: "Car repair, service centers, workshops",
    benefit: "Local visibility & lead growth",
  },
  {
    icon: Factory,
    name: "Manufacturing & Factories",
    description: "Textile, lace, garment, industrial manufacturing",
    benefit: "B2B lead generation",
  },
  {
    icon: Building,
    name: "B2B & Wholesale Businesses",
    description: "Distributors, traders, exporters",
    benefit: "International credibility",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & D2C Brands",
    description: "Online stores, product brands",
    benefit: "Sales & brand growth",
  },
  {
    icon: Home,
    name: "Real Estate & Construction",
    description: "Builders, brokers, property consultants",
    benefit: "Quality lead generation",
  },
  {
    icon: Utensils,
    name: "Restaurants, Cafes & Food",
    description: "Restaurants, cafes, food brands",
    benefit: "Local visibility & orders",
  },
  {
    icon: GraduationCap,
    name: "Education & Coaching",
    description: "Institutes, tutors, online educators",
    benefit: "Student enrollment",
  },
  {
    icon: Briefcase,
    name: "Corporate & Startups",
    description: "IT firms, SaaS, startups",
    benefit: "Brand positioning & growth",
  },
  {
    icon: Truck,
    name: "Logistics & Warehousing",
    description: "Logistics companies, warehouses",
    benefit: "B2B partnerships",
  },
  {
    icon: Dumbbell,
    name: "Gyms, Fitness & Wellness",
    description: "Gyms, fitness studios, wellness centers",
    benefit: "Membership growth",
  },
  {
    icon: Users,
    name: "Professional Services",
    description: "Consultants, agencies, freelancers",
    benefit: "Client acquisition",
  },
  {
    icon: Camera,
    name: "Content Creators & Influencers",
    description: "YouTubers, Instagram creators, personal brands",
    benefit: "Audience & brand growth",
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Helping Businesses Across Industries
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Growing digitally — locally and globally. We customize strategies for every business type.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-background border border-border/50 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <industry.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {industry.description}
                </p>
                <p className="text-sm font-medium text-accent">
                  {industry.benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure If Your Industry Fits?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We customize strategies for every business. Let's discuss your specific needs.
            </p>
            <a
              href="https://wa.me/918866724780?text=Hi%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20industry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
