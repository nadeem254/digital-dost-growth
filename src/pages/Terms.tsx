import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Terms = () => {
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
              Terms & Conditions
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
                These terms govern the use of services provided by Digital Dost Media.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Agreement</h2>
            <p className="text-muted-foreground">
              All services are provided based on the selected package and agreed scope of work.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Payments</h2>
            <p className="text-muted-foreground">
              All services are offered on an advance payment basis unless agreed otherwise.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Advertising Budget</h2>
            <p className="text-muted-foreground">
              Any paid advertising budget (Facebook, Instagram, Google, etc.) is separate and paid directly by the client.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Performance Disclaimer</h2>
            <p className="text-muted-foreground">
              While we follow best-practice strategies, results may vary depending on market conditions, competition, pricing, and customer response.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Content & Approvals</h2>
            <p className="text-muted-foreground">
              Clients are responsible for timely approvals, product information, and communication.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Any work outside the agreed scope will be charged separately.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All creative assets remain the property of Digital Dost Media until full payment is received.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Termination</h2>
            <p className="text-muted-foreground">
              Either party may discontinue services with prior notice as per agreement terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by applicable laws of India.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground">
              For any questions about these terms, contact us at:{" "}
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

export default Terms;
