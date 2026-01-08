import { motion } from "framer-motion";
import logo from "@/assets/digital-dost-media-logo.png";

const AnimatedLogo = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Ambient glow background */}
      <motion.div
        className="absolute inset-0 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main logo container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Logo image */}
        <motion.img
          src={logo}
          alt="Digital Dost Media Logo"
          className="h-80 w-80 object-contain sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem]"
          initial={{ filter: "brightness(0)" }}
          animate={{ filter: "brightness(1)" }}
          transition={{ duration: 2, delay: 0.3 }}
        />

        {/* Golden light sweep effect */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 0.8, 0] }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.4) 50%, transparent 100%)",
            transform: "skewX(-20deg)",
          }}
        />

        {/* Subtle glow pulse */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.2] }}
          transition={{
            duration: 3,
            delay: 2.5,
            ease: "easeOut",
          }}
          style={{
            boxShadow: "0 0 80px 20px rgba(212, 175, 55, 0.3)",
          }}
        />
      </motion.div>

      {/* Sparkle accents */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-yellow-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            delay: 2 + i * 0.3,
            ease: "easeOut",
          }}
          style={{
            top: `${30 + i * 15}%`,
            left: `${45 + i * 5}%`,
            boxShadow: "0 0 10px 2px rgba(255, 215, 0, 0.8)",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLogo;
