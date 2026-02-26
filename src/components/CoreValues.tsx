import { motion } from "framer-motion";
import { MessageSquareText, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    text: "I avoid unnecessary legal jargon. I explain the law in a language you understand, ensuring you are never left in the dark about the progress of your case.",
  },
  {
    icon: Eye,
    title: "Integrity & Transparency",
    text: "You will always receive an honest assessment of your legal standing. I believe in setting realistic expectations from day one — no false promises.",
  },
  {
    icon: Heart,
    title: "Personal Dedication",
    text: "From the drafting of the first petition to the final closing argument, I am personally involved in every detail. Your case is my priority.",
  },
];

const CoreValues = () => (
  <section id="values" className="py-24 bg-cream-warm">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Clients Trust Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          In the legal profession, trust is everything. My practice is built on a
          foundation of transparency, dedication, and genuine care for my clients'
          well-being.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-card rounded-lg p-8 border border-border text-center"
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-5">
              <v.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
              {v.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto text-center"
      >
        <p className="font-heading text-xl md:text-2xl italic text-foreground leading-relaxed">
          "Every case deserves dedicated attention, and every client deserves to
          understand their rights."
        </p>
        <cite className="block mt-4 text-gold text-sm font-medium not-italic">
          — Advocate Sujamya Yadav
        </cite>
      </motion.blockquote>
    </div>
  </section>
);

export default CoreValues;
