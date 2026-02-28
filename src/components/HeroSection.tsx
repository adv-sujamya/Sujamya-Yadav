import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { User } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dotted background pattern */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsla(0,0%,100%,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Left — text */}
        <div className="flex-1">
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

        {/* Right — profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="bg-card/80 backdrop-blur border border-border p-8 flex flex-col items-center w-72">
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary mb-6 shadow-[0_0_30px_hsla(24,100%,50%,0.25)] bg-muted flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground" strokeWidth={1} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground text-center">
              Sujamya Yadav
            </h3>
            <div className="w-8 h-0.5 bg-primary my-3" />
            <p className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">
              Advocate
            </p>
            <p className="text-muted-foreground text-xs mt-2 text-center leading-relaxed">
              District & Sessions Court
              <br />
              Lucknow
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
