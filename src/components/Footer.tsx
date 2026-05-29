import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-ofd-line bg-ofd-paper">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3 font-black">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-lg bg-ofd-forest">
              <img src="/logo.svg" alt="" className="h-full w-full object-cover" />
            </span>
            {site.name}
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-ofd-muted">{site.tagline}</p>
          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-ofd-forest">
            <MapPin size={17} /> {site.location}
          </p>
        </div>

        <div>
          <h3 className="font-black">Navegação</h3>
          <div className="mt-4 grid gap-2 text-sm text-ofd-muted">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/animais">Animais</Link>
            <Link to="/aprendizado">Aprendizado</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black">Contato</h3>
          <div className="mt-4 grid gap-3 text-sm text-ofd-muted">
            <a className="flex items-center gap-2" href={site.instagram} target="_blank" rel="noreferrer">
              <Instagram size={17} /> {site.instagramHandle}
            </a>
            <a className="flex items-center gap-2" href={site.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <span className="flex items-center gap-2">
              <Mail size={17} /> Canal oficial do projeto
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-ofd-line py-5">
        <div className="container-page flex flex-col justify-between gap-2 text-sm text-ofd-muted sm:flex-row">
          <span>© 2026 Ofidismo Educacional</span>
          <span>Material educativo. Não substitui atendimento médico.</span>
        </div>
      </div>
    </footer>
  );
}
