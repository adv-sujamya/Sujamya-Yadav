import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DisclaimerModal = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="bg-card border border-border shadow-2xl max-w-lg w-full p-8"
        >
          <div className="w-12 h-1 bg-primary mb-6" />
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Disclaimer
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            As per the rules of the Bar Council of India, advocates are
            prohibited from soliciting work or advertising. By clicking 'I Agree',
            you acknowledge that there has been no solicitation, invitation, or
            inducement of any sort from Advocate Sujamya Yadav. The information
            provided on this website is at your specific request for
            informational purposes only and does not create a lawyer-client
            relationship.
          </p>
          <button
            onClick={() => setAccepted(true)}
            className="w-full py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors"
          >
            I Agree & Enter
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DisclaimerModal;
