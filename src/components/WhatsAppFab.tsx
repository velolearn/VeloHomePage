import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "./EnrollForm";

export function WhatsAppFab() {
  const text = encodeURIComponent(
    "Hi VeloLearn! I'd like to know more about the next Agentic AI cohort.",
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 240, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_oklch(0.38_0.13_255/0.5)]"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary-foreground/60 pulse-dot" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-foreground" />
      </span>
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}