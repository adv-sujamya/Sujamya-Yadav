import { motion } from "framer-motion";
import { Gavel, Landmark, ShieldCheck } from "lucide-react";

const areas = [
  {
    icon: Gavel,
    title: "Civil & Criminal Matters",
    text: "Comprehensive legal representation in civil disputes and robust defense strategies for criminal matters. We ensure your constitutional rights are fiercely protected at every stage of the legal process.",
  },
  {
    icon: Landmark,
    title: "Property Matters",
    text: "Expert counsel on property disputes, title verification, partition suits, and real estate litigation. We help navigate the complexities of property law to secure your assets.",
  },
  {
    icon: ShieldCheck,
    title: "Matrimonial Disputes",
    text: "Empathetic, highly discreet legal support for sensitive family matters. We handle marital disputes, custody, and resolutions with the utmost confidentiality and care.",
  },
];

const PracticeAreas = () => (
  <section id="practice" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
      >
        Practice Areas
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group bg-card rounded-lg p-8 border border-border hover:border-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <area.icon
              className="w-10 h-10 text-gold mb-6"
              strokeWidth={1.5}
            />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              {area.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {area.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
