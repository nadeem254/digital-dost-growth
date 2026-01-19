import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    icon: Lightbulb,
    category: "Strategy",
    title: "How Social Media Marketing Helps Local Businesses Grow",
    excerpt: "Discover proven strategies to increase your local business visibility and customer engagement through social media.",
  },
  {
    icon: TrendingUp,
    category: "Growth",
    title: "B2B Digital Marketing Strategies That Actually Work",
    excerpt: "Learn effective B2B marketing tactics that help you reach decision-makers and generate quality leads.",
  },
  {
    icon: Target,
    category: "Branding",
    title: "Why Brand Trust Matters in the Digital Age",
    excerpt: "Building trust online is crucial for business success. Here is how to establish credibility with your audience.",
  },
];

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-muted/30" id="insights">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Blog & Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Digital <span className="text-gradient">Insights</span> & Updates
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest trends, strategies, and insights in digital marketing and business growth.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <post.icon className="h-16 w-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </motion.div>
              </motion.div>
              <div className="p-6">
                <motion.span 
                  className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.12 + 0.3 }}
                >
                  {post.category}
                </motion.span>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/blog">
            <Button size="lg" variant="outline" className="px-8">
              View All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;
