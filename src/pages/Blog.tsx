import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SocialMediaGrid from "@/components/SocialMediaGrid";

const blogPosts = [
  {
    id: 1,
    title: "How Social Media Marketing Helps Local Businesses Grow",
    excerpt: "Discover the power of consistent social media presence and how it can transform your local business visibility and customer engagement.",
    category: "Social Media",
    date: "January 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "B2B Digital Marketing Strategies That Actually Work",
    excerpt: "Learn proven B2B marketing strategies that help manufacturers, exporters, and service providers reach decision-makers effectively.",
    category: "B2B Marketing",
    date: "January 3, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Why Brand Trust Matters in the Digital Age",
    excerpt: "Building trust online is crucial for business success. Here's how to establish credibility and authority in your industry.",
    category: "Branding",
    date: "December 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "How Automation is Changing Business Operations",
    excerpt: "From lead capture to customer follow-ups, automation is revolutionizing how businesses operate. Learn what's possible.",
    category: "Automation",
    date: "December 22, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Instagram Marketing Tips for Service Businesses",
    excerpt: "Maximize your Instagram presence with these practical tips specifically designed for service-based businesses.",
    category: "Social Media",
    date: "December 18, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Digital Marketing for International Clients: What Works Best",
    excerpt: "Expanding globally? Here's how to adapt your digital marketing strategy for international markets.",
    category: "Global Marketing",
    date: "December 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=800&auto=format&fit=crop&q=60",
  },
];

const Blog = () => {
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
              Digital Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Digital Insights & Business Growth Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, strategies, and insights in digital marketing, branding, automation, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Content Grid */}
      <SocialMediaGrid />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want Personalized Growth Strategies?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert advice tailored to your business needs.
            </p>
            <a
              href="https://wa.me/918866724780?text=Hi%2C%20I%20want%20to%20discuss%20growth%20strategies%20for%20my%20business"
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

export default Blog;
