import Link from "next/link";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.scss";

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/910000000000" // Replace with actual number
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
