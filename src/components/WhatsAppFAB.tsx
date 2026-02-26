import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => (
  <a
    href="https://wa.me/919807912672?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppFAB;
