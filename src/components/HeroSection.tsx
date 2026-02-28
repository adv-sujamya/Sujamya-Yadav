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
        className="absolute inset-0 bg-background bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-1 bg-primary mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] max-w-4xl uppercase"
        >
          Dedicated Legal
          <br />
          <span className="text-primary">Representation</span>
          <br />
          in Lucknow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-muted-foreground text-base md:text-lg max-w-2xl font-body leading-relaxed"
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
          className="mt-8 flex flex-col sm:flex-row gap-6 text-muted-foreground text-xs tracking-wide uppercase"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Civil Court, Kaiserbagh, Lucknow
          </span>
          <span className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            Civil, Criminal, Property & Family Law
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
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
            className="px-10 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="px-10 py-4 border border-foreground/30 text-foreground font-heading font-semibold text-sm tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-colors"
          >
            Learn More About Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
