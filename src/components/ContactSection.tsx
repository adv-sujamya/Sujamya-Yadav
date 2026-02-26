import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.caseType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const message = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "N/A"}\nCase Type: ${form.caseType}\nDetails: ${form.description || "N/A"}`
    );
    window.open(`https://wa.me/919807912672?text=${message}`, "_blank");
    toast.success("Redirecting to WhatsApp…");
  };

  return (
    <section id="contact" className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cream/60 text-center mb-16 max-w-xl mx-auto text-sm"
        >
          Have a legal matter to discuss? Schedule an appointment or reach out directly.
          All consultations are strictly confidential.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Details + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-semibold text-cream mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-cream/80 text-sm leading-relaxed">
                    Gate No - 3, Civil Court, Kaiserbagh, Lucknow, Uttar Pradesh
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
              </div>
            </div>

            {/* Chamber Timings */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-cream mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                Chamber Timings
              </h4>
              <div className="text-cream/70 text-sm space-y-1">
                <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
                <p>Court Days: By Appointment</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd07c7e0e3e5%3A0x2cf0fa1ec9a4e91e!2sCivil%20Court%2C%20Kaiserbagh%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-semibold text-cream mb-6">
              Request an Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-cream/70 text-xs mb-1 block">Full Name *</label>
                <Input
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="bg-navy-light border-navy-light text-cream placeholder:text-cream/40"
                />
              </div>
              <div>
                <label className="text-cream/70 text-xs mb-1 block">Phone Number *</label>
                <Input
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={15}
                  className="bg-navy-light border-navy-light text-cream placeholder:text-cream/40"
                />
              </div>
              <div>
                <label className="text-cream/70 text-xs mb-1 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="bg-navy-light border-navy-light text-cream placeholder:text-cream/40"
                />
              </div>
              <div>
                <label className="text-cream/70 text-xs mb-1 block">Type of Case *</label>
                <Select
                  value={form.caseType}
                  onValueChange={(v) => setForm({ ...form, caseType: v })}
                >
                  <SelectTrigger className="bg-navy-light border-navy-light text-cream">
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Civil & Criminal Matters">Civil &amp; Criminal Matters</SelectItem>
                    <SelectItem value="Property Matters">Property Matters</SelectItem>
                    <SelectItem value="Matrimonial Disputes">Matrimonial Disputes</SelectItem>
                    <SelectItem value="Legal Documentation">Legal Documentation</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-cream/70 text-xs mb-1 block">Brief Description</label>
                <Textarea
                  placeholder="Briefly describe your legal matter…"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  maxLength={1000}
                  rows={4}
                  className="bg-navy-light border-navy-light text-cream placeholder:text-cream/40"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold text-accent-foreground font-semibold text-sm tracking-wider rounded hover:bg-gold-light transition-colors"
              >
                Submit Consultation Request
              </button>
              <p className="text-cream/40 text-xs text-center">
                Your information is kept strictly confidential and will only be used to
                respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
