import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-ofd-forest text-ofd-paper shadow-soft transition hover:-translate-y-1 hover:bg-ofd-deep"
      aria-label="Abrir contato pelo WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}
