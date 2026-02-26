import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-cream-warm">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Advocate Sujamya Yadav
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Committed to upholding the highest standards of the legal profession,
            Advocate Sujamya Yadav provides dedicated legal representation in
            Lucknow. Operating with integrity and meticulous preparation, the
            focus is always on clear communication and a relentless pursuit of
            justice for every client.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted flex items-center justify-center">
            <Scale className="w-20 h-20 md:w-28 md:h-28 text-gold" strokeWidth={1} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
