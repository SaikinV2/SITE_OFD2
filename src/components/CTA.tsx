import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { site } from "../data/site";

export function CTA() {
  return (
    <section className="container-page py-16">
      <div className="overflow-hidden rounded-lg bg-ofd-deep text-ofd-paper shadow-soft">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:p-12">
          <div>
            <p className="eyebrow">Agendamento e parcerias</p>
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Leve educação sobre animais peçonhentos para sua instituição.
            </h2>
            <p className="mt-5 max-w-2xl text-white/76">
              O projeto realiza ações presenciais gratuitas para escolas, órgãos públicos, equipes de campo e comunidade.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 sm:flex-row lg:flex-col">
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-ofd-amber px-5 font-black text-ofd-deep">
              <MessageCircle size={18} /> Chamar no WhatsApp
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/20 px-5 font-black text-white">
              <Instagram size={18} /> Ver Instagram <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
