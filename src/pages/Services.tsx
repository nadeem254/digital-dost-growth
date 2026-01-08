import { motion } from "framer-motion";
import { 
  Instagram, 
  BarChart3, 
  Video, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Building2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Instagram,
    title: "Social Media Marketing",
    subtitle: "(Instagram & Facebook)",
    description: "We manage and grow your social media presence with a clear strategy, not random posting.",
    features: [
      "Profile optimization (bio, highlights, branding)",
      "Content planning & calendar",
      "Professional post creation",
      "Consistent posting & engagement strategy",
      "Organic growth approach",
    ],
    benefits: [
      "Builds brand visibility",
      "Creates trust and credibility",
      "Keeps your business active & relevant",
      "Attracts the right audience",
    ],
  },
  {
    icon: BarChart3,
    title: "Complete Digital Marketing",
    subtitle: "",
    description: "We design digital strategies that focus on business growth, not just traffic.",
    features: [
      "Paid ads strategy (Meta & Google)",
      "Lead-focused campaign planning",
      "Funnel-based approach",
      "Performance optimization",
    ],
    benefits: [
      "Converts attention into inquiries",
      "Improves ROI",
      "Brings measurable results",
    ],
  },
  {
    icon: Video,
    title: "Influencer & Video Marketing",
    subtitle: "",
    description: "People trust people — not ads. We use video and influencer-style content to humanize your brand.",
    features: [
      "Professional business reels",
      "Customer review videos",
      "Product & service showcase videos",
      "Brand storytelling through short videos",
    ],
    benefits: [
      "Builds instant trust",
      "Increases engagement",
      "Improves conversion rate",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "(Static & Business Websites)",
    description: "Your website is your digital office — it must look professional and work fast.",
    features: [
      "Clean, modern website design",
      "Mobile-responsive layout",
      "SEO-friendly structure",
      "Fast loading speed",
    ],
    benefits: [
      "Strong first impression",
      "24/7 digital presence",
      "Higher trust for international clients",
    ],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    subtitle: "",
    description: "We build practical applications that simplify business operations.",
    features: [
      "Business apps",
      "CRM-based systems",
      "Customer interaction tools",
    ],
    benefits: [
      "Saves time",
      "Improves workflow",
      "Enhances customer experience",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Management",
    subtitle: "",
    description: "Marketing without tracking is guessing. We focus on continuous improvement.",
    features: [
      "Business analysis",
      "Monthly performance review",
      "Strategy refinement",
      "Growth planning",
    ],
    benefits: [
      "Consistent progress",
      "Better decision-making",
      "Long-term stability",
    ],
  },
  {
    icon: Palette,
    title: "Brand Building",
    subtitle: "",
    description: "A strong brand is remembered — and trusted.",
    features: [
      "Brand positioning",
      "Visual identity guidance",
      "Messaging & tone consistency",
    ],
    benefits: [
      "Creates authority",
      "Differentiates you from competitors",
      "Builds long-term value",
    ],
  },
  {
    icon: Building2,
    title: "B2B Marketing Expertise",
    subtitle: "",
    description: "We understand how B2B buying works.",
    features: [
      "Manufacturers",
      "Wholesalers",
      "Exporters",
      "Service providers",
    ],
    benefits: [
      "Targets decision-makers",
      "Improves quality leads",
      "Builds international credibility",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Digital Marketing Services for Business Growth
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Digital Dost Media, we provide end-to-end digital marketing services designed to help businesses grow locally, nationally, and internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      {service.subtitle && (
                        <p className="text-muted-foreground">{service.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-muted/30 rounded-2xl p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">What we do:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-foreground mb-4">How it benefits you:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent">✓</span>
                            <span className="text-foreground font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals.
            </p>
            <a
              href="https://wa.me/918866724780?text=Hi%2C%20I'm%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
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

export default Services;
