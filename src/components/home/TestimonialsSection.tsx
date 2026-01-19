import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Manufacturing Business Owner",
    role: "Industrial Manufacturing",
    content: "Digital Dost Media helped us build a strong online presence. Their approach is professional, clear, and results-focused. Highly recommended.",
    rating: 5,
  },
  {
    name: "Clinic Owner",
    role: "Healthcare Services",
    content: "We saw a noticeable improvement in engagement and inquiries after working with Digital Dost Media. The team understands business needs very well.",
    rating: 5,
  },
  {
    name: "Export Business Client",
    role: "International Trade",
    content: "Very professional service. Their social media strategy helped our brand look premium and trustworthy, especially for international clients.",
    rating: 5,
  },
  {
    name: "Service Business Owner",
    role: "Professional Services",
    content: "Great communication, consistent work, and clear planning. Digital Dost Media feels more like a growth partner than a marketing agency.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-padding" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from real businesses we have helped grow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-8 bg-card rounded-2xl border border-border/50 shadow-sm relative overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 + 0.2 }}
                  >
                    <Star className="h-5 w-5 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <motion.p 
                className="text-foreground mb-6 relative z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
              >
                &ldquo;{testimonial.content}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            Trusted by businesses across India and internationally
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
