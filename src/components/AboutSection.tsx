import { motion } from "framer-motion";
import { Search, MessageSquare, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Thorough Research",
    text: "Strategic planning for a personalized defense strategy.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Explaining your rights without the confusing legal jargon.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Assessment",
    text: "Straightforward advice with realistic expectations and no false promises.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-cream-warm">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          About Advocate Sujamya Yadav
        </h2>
        <p className="text-muted-foreground text-sm">
          Counsel at District &amp; Sessions Court | Civil Court, Kaiserbagh, Lucknow
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg"
      >
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
          Navigating the Legal System with Clarity &amp; Integrity
        </h3>
        <p>
          Navigating the legal system can be overwhelming. Whether you are dealing with a
          complex property dispute, a sensitive family matter, or a criminal charge, having
          the right counsel by your side makes all the difference. My ultimate goal is to
          provide legal representation that is not only highly effective but also accessible
          and transparent.
        </p>
        <p>
          Based in Lucknow, I am a practicing Advocate at the District &amp; Sessions Court
          (Civil Court, Kaiserbagh). With a dedicated focus on Civil &amp; Criminal Matters,
          Property Disputes, and Matrimonial Law, I have committed my practice to helping
          individuals and families secure justice.
        </p>
        <p>
          My approach to law is rooted in exhaustive research and strategic planning. I
          believe that every case is unique and deserves a meticulously personalized defense
          strategy. I work closely with my clients, ensuring they understand their legal
          standing at every single step of the process.
        </p>
      </motion.div>

      {/* Pillars */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
            </div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
              {p.title}
            </h4>
            <p className="text-muted-foreground text-sm">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
