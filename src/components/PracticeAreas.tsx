import { motion } from "framer-motion";
import { Gavel, Landmark, ShieldCheck, FileText } from "lucide-react";

const areas = [
  {
    icon: Gavel,
    title: "Civil & Criminal Matters",
    subtitle: "Protecting your rights, assets, and liberty with vigorous representation.",
    items: [
      "Civil Litigation: Injunctions, recovery suits, tenant-landlord disputes & eviction petitions.",
      "Criminal Defense: Bail matters (Regular, Anticipatory, Interim), FIR quashing in High Court, cheque bounce cases (Section 138 NI Act), and comprehensive trial advocacy.",
    ],
  },
  {
    icon: Landmark,
    title: "Property Matters",
    subtitle: "Securing your investments and resolving complex real estate conflicts.",
    items: [
      "Property Suits: Title suits, partition suits, and possession disputes.",
      "Real Estate Law: Protecting property status and ensuring your rights as an owner or buyer are firmly established.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Matrimonial Disputes",
    subtitle: "Sensitive, discreet, and empathetic handling of family matters.",
    items: [
      "Divorce Proceedings: Mutual consent and contested divorces.",
      "Family Rights: Child custody, guardianship, visitation rights, maintenance & alimony.",
      "Domestic Violence: Protection orders and 498A matters, prioritizing safety and dignity.",
    ],
  },
  {
    icon: FileText,
    title: "Legal Documentation & Advisory",
    subtitle: "A strong legal case starts with flawless paperwork.",
    items: [
      "Drafting & Review: Wills, testaments, sale deeds, rent agreements, and gift deeds.",
      "Legal Notices: Expert drafting of and replying to formal legal notices.",
    ],
  },
];

const PracticeAreas = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="practice" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas of Practice
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Legal Support — Providing dedicated legal assistance across a
            wide range of disciplines at the Lucknow District &amp; Sessions Court.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-card rounded-lg p-8 border border-border hover:border-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <area.icon className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 italic">{area.subtitle}</p>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-gold mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-navy rounded-lg p-8 text-center"
        >
          <p className="text-cream/80 text-sm md:text-base">
            Not sure which category your case falls under?{" "}
            <button
              onClick={() => scrollTo("#contact")}
              className="text-gold underline underline-offset-4 hover:text-gold-light transition-colors font-medium"
            >
              Schedule a brief consultation
            </button>{" "}
            to discuss your situation in confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
