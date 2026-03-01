import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919807912672";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to book a consultation.");
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}`;

const WhatsAppFAB = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppFAB;
