import { motion } from "framer-motion";
import { 
  Zap, 
  MessageSquare, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Calculator, 
  UserCheck, 
  MapPin, 
  Factory, 
  GraduationCap,
  Camera,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const automationCategories = [
  {
    icon: Zap,
    title: "Marketing & Growth Automation",
    types: ["Social Media Automation", "Lead Capture Automation", "Email Marketing Automation", "Ad Funnel Automation"],
    useCases: [
      "Auto-post content on Instagram, Facebook, LinkedIn",
      "Capture leads from ads → send to CRM → auto WhatsApp reply",
      "Email drip campaigns for new leads",
      "Retarget users automatically based on behavior",
    ],
    bestFor: "Digital agencies, coaches, startups, influencers, e-commerce businesses",
  },
  {
    icon: BarChart3,
    title: "Sales & Lead Management",
    types: ["CRM Automation", "Follow-up Automation", "Sales Pipeline Automation"],
    useCases: [
      "Lead comes in → auto-assign to sales team",
      "Automatic WhatsApp/email follow-ups after inquiry",
      "Deal stage auto-update",
      "Call & meeting reminders",
    ],
    bestFor: "Real estate, service businesses, B2B companies",
  },
  {
    icon: MessageSquare,
    title: "Customer Support Automation",
    types: ["Chatbot Automation", "Ticketing Automation", "Feedback Automation"],
    useCases: [
      "WhatsApp & website chatbots for FAQs",
      "Auto ticket creation from email or chat",
      "Automated replies for common issues",
      "Customer feedback collection after service",
    ],
    bestFor: "E-commerce, SaaS, service providers, clinics",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Automation",
    types: ["Order Automation", "Inventory Automation", "Customer Journey Automation"],
    useCases: [
      "Order confirmation via email & WhatsApp",
      "Inventory auto-update after purchase",
      "Abandoned cart recovery",
      "Shipping & delivery notifications",
    ],
    bestFor: "Online stores, D2C brands, dropshipping businesses",
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    types: ["Invoice Automation", "Payment Reminder Automation", "Expense Tracking Automation"],
    useCases: [
      "Auto invoice generation",
      "Payment reminders via WhatsApp/email",
      "Monthly expense & revenue reports",
      "GST / tax reminders",
    ],
    bestFor: "SMEs, agencies, freelancers, enterprises",
  },
  {
    icon: UserCheck,
    title: "HR & Recruitment",
    types: ["Hiring Automation", "Employee Onboarding Automation", "Attendance Automation"],
    useCases: [
      "Resume screening using AI",
      "Interview scheduling",
      "Offer letter & onboarding emails",
      "Attendance & leave approval automation",
    ],
    bestFor: "Corporate offices, startups, staffing agencies",
  },
  {
    icon: MapPin,
    title: "Local Business Automation",
    types: ["Appointment Automation", "Review Automation", "Local Lead Automation"],
    useCases: [
      "Online appointment booking",
      "Appointment reminders",
      "Automated Google review requests",
      "Auto inquiry response",
    ],
    bestFor: "Salons, clinics, gyms, restaurants",
  },
  {
    icon: Factory,
    title: "Manufacturing & Logistics",
    types: ["Inventory Automation", "Production Tracking", "Logistics Automation"],
    useCases: [
      "Raw material stock alerts",
      "Production status tracking",
      "Vendor communication automation",
      "Delivery & shipment updates",
    ],
    bestFor: "Factories, warehouses, distributors",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    types: ["Student Management", "Course Delivery Automation", "Payment Automation"],
    useCases: [
      "Auto enrollment after payment",
      "Course access emails",
      "Assignment & class reminders",
      "Certificate generation",
    ],
    bestFor: "Coaching centers, online educators, institutes",
  },
  {
    icon: Camera,
    title: "Content Creators & Influencers",
    types: ["Content Scheduling", "Audience Engagement", "Revenue Automation"],
    useCases: [
      "Auto content scheduling",
      "Comment & DM automation",
      "Link-in-bio automation",
      "Brand inquiry automation",
    ],
    bestFor: "YouTubers, Instagram creators, personal brands",
  },
];

const highDemandFeatures = [
  "WhatsApp automation",
  "Lead to CRM to Follow-up automation",
  "Appointment booking systems",
  "Google review automation",
  "Invoice & payment reminder automation",
];

const Automation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Automation Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Smart automation systems designed to reduce manual work, improve efficiency, and scale businesses faster.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              "Less manual work. More efficiency. Smarter growth."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              At Digital Dost Media, we are building advanced, ready-made and custom automation solutions designed for modern businesses.
            </p>
            <p className="text-lg text-muted-foreground">
              These systems are ideal for businesses that want faster response times, better lead handling, and scalable growth. Our automation solutions are especially designed for high-growth businesses and international clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Automation Categories */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Automation Categories & Use Cases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Types:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.types.map((type, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Use Cases:</p>
                    <ul className="space-y-1">
                      {category.useCases.slice(0, 3).map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">Best for: </span>
                      <span className="text-muted-foreground">{category.bestFor}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High Demand Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  High-Demand Automation Solutions
                </h2>
                <p className="text-muted-foreground">
                  These automation systems are in highest demand and easiest to implement:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highDemandFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl"
                  >
                    <Zap className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-xl font-semibold text-foreground mb-6">
                  "Automate your business. Scale smarter."
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/918866724780?text=Hi%2C%20I'm%20interested%20in%20automation%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Request Automation Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/918866724780?text=Hi%2C%20I%20want%20to%20talk%20to%20an%20automation%20expert"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline">
                      Talk to Automation Expert
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Positioning */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-accent" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our automation solutions are currently under development and will be launched in phases. These solutions are specially designed for premium and international clients who want advanced systems and faster growth.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Automation;
