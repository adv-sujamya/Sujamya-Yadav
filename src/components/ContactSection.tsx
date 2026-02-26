import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-navy text-cream">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-gold mb-16 text-center"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="font-heading text-2xl font-semibold text-cream">
            Advocate Sujamya Yadav
          </h3>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
            <p className="text-cream/80 text-sm leading-relaxed">
              Gate No - 3, Civil Court, Kaiserbagh, Lucknow
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-gold flex-shrink-0" />
            <a
              href="tel:+919807912672"
              className="text-cream/80 text-sm hover:text-gold transition-colors"
            >
              +91 9807912672
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-gold flex-shrink-0" />
            <a
              href="mailto:adv.sujamya15@gmail.com"
              className="text-cream/80 text-sm hover:text-gold transition-colors"
            >
              adv.sujamya15@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd07c7e0e3e5%3A0x2cf0fa1ec9a4e91e!2sCivil%20Court%2C%20Kaiserbagh%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
