import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-navy bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gold leading-tight max-w-3xl"
        >
          Resolute Advocacy.
          <br />
          Principled Representation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl font-body leading-relaxed"
        >
          Advocate Sujamya Yadav provides strategic, ethical, and results-driven
          legal counsel at the Lucknow Civil Court.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => scrollTo("#contact")}
          className="mt-10 inline-block px-8 py-4 bg-gold text-accent-foreground font-semibold text-sm tracking-wider rounded hover:bg-gold-light transition-colors"
        >
          Request a Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
