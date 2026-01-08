import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto prose prose-lg"
          >
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-foreground m-0">
                Digital Dost Media respects your privacy and is committed to protecting the personal information you share with us.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect personal information such as name, email address, phone number, business details, and any information shared through contact forms, WhatsApp, or email communication.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">Information is used to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and requests</li>
              <li>Communicate service-related updates</li>
              <li>Improve website experience and marketing performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Protection & Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect personal information from unauthorized access, misuse, or disclosure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies & Tracking</h2>
            <p className="text-muted-foreground">
              Our website may use cookies to improve user experience, analyze traffic, and enhance performance.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use trusted third-party tools (such as analytics, advertising platforms, and communication tools) that follow standard data protection practices.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent personal data to third parties.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
            <p className="text-muted-foreground">
              Users may request access, correction, or deletion of their personal data by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Policy Updates</h2>
            <p className="text-muted-foreground">
              This privacy policy may be updated periodically to reflect changes in legal or business requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground">
              For privacy-related concerns, contact us at:{" "}
              <a href="mailto:teamdigitaldost@gmail.com" className="text-primary hover:underline">
                teamdigitaldost@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
