import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Briefcase, Building2, Zap, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Industries", href: "/industries", icon: Building2 },
  { name: "Automation", href: "/automation", icon: Zap },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling past 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] hidden lg:block"
        >
          <nav className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-full px-2 py-2 shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link key={item.name} to={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden xl:inline">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="floating-nav-indicator"
                          className="absolute inset-0 bg-primary rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
              
              <a
                href="https://wa.me/918866724780?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Digital%20Dost%20Media%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <Button 
                  size="sm" 
                  className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Contact
                </Button>
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
