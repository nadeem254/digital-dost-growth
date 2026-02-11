import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Briefcase, Globe, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 500, suffix: "+", label: "Projects Delivered" },
  { icon: Globe, value: 12, suffix: "+", label: "Countries Served" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Client Retention" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="h-7 w-7 text-primary" />
              </motion.div>
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
