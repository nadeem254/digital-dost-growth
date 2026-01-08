import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, Globe, Award, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const differentiators = [
    { icon: Lightbulb, text: "We think like business owners, not just marketers" },
    { icon: Users, text: "We understand B2B and B2C growth models" },
    { icon: Target, text: "We focus on strategy + creativity + execution" },
    { icon: Globe, text: "We build systems that are future-ready and automation-friendly" },
  ];

  const clientBenefits = [
    "Look professional to international buyers",
    "Stay relevant to local customers",
    "Build trust faster",
    "Scale smarter",
  ];

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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Digital Dost Media
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Your Digital Growth Partner — Across the Globe
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don't just manage social media. We build brands, drive growth, and create digital systems that work for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Digital Dost Media is a full-service digital marketing agency designed for businesses that want more than likes and followers — they want visibility, trust, leads, and long-term growth.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-foreground font-medium text-xl mb-2">
                  In today's digital world, attention is currency.
                </p>
                <p className="text-muted-foreground">
                  We help you earn it, keep it, and convert it.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                From local businesses in India to international clients across global markets, we partner with brands to create a strong digital presence that speaks professionally, performs consistently, and scales confidently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto"
          >
            Whether you're a clinic, manufacturer, service provider, exporter, or growing brand — we adapt our strategy to your business goals, not generic templates.
          </motion.p>
        </div>
      </section>

      {/* Global Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Global Vision. Local Understanding.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We work with businesses across India and internationally. Our strategies are designed to meet global standards, while still understanding local markets, customer psychology, and buying behavior.
              </p>
              <p className="text-muted-foreground mb-6">
                This balance helps our clients:
              </p>
              <ul className="space-y-3">
                {clientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-primary text-primary-foreground rounded-xl text-center">
                <Globe className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold">Global Reach</p>
              </div>
              <div className="p-6 bg-secondary text-secondary-foreground rounded-xl text-center">
                <Users className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold">Local Expertise</p>
              </div>
              <div className="p-6 bg-accent text-accent-foreground rounded-xl text-center">
                <Award className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold">Premium Quality</p>
              </div>
              <div className="p-6 bg-charcoal text-white rounded-xl text-center">
                <Target className="h-10 w-10 mx-auto mb-3" />
                <p className="font-semibold">Results Focused</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90">
                To help businesses grow digitally with clarity, consistency, and confidence — without confusion, wasted budgets, or random marketing efforts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <Eye className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90">
                To become a trusted global digital growth partner, offering not just marketing, but automation-driven, scalable solutions for modern businesses.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-2xl font-semibold">
              "Grow with us. Take your business to the next level."
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
