import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock } from "lucide-react";
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
          Dedicated Legal Representation in Lucknow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl font-body leading-relaxed"
        >
          Simplifying complex legal matters across Civil, Criminal, Property, and
          Family Law. Providing honest, transparent, and effective legal counsel
          with a steadfast, client-first approach.
        </motion.p>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 text-cream/70 text-sm"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            Gate No - 3, Civil Court, Kaiserbagh, Lucknow
          </span>
          <span className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gold" />
            Civil, Criminal, Property & Family Law
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            By Appointment
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 bg-gold text-accent-foreground font-semibold text-sm tracking-wider rounded hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="px-8 py-4 border border-gold text-gold font-semibold text-sm tracking-wider rounded hover:bg-gold/10 transition-colors"
          >
            Learn More About Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
