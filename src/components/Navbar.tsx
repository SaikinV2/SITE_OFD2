import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { site } from "../data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Animais", to: "/animais" },
  { label: "Aprendizado", to: "/aprendizado" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ofd-forest/30 bg-gradient-to-r from-ofd-forest/82 via-ofd-moss/76 to-ofd-sage/68 text-ofd-paper shadow-card backdrop-blur-xl">
      <nav className="container-page flex min-h-[72px] items-center justify-between gap-4">
        <NavLink to="/" className="flex min-w-0 items-center gap-3 font-black" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-ofd-amber/25 bg-ofd-forest">
            <img src="/logo.svg" alt="" className="h-full w-full object-cover" />
          </span>
          <span className="truncate">{site.name}</span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-bold transition ${
                  isActive ? "bg-ofd-amber text-ofd-deep" : "text-white/84 hover:bg-ofd-deep/55 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 text-sm font-bold text-white/84 transition hover:bg-ofd-deep/55 hover:text-white">
            Instagram
          </a>
          <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="ml-2 inline-flex min-h-10 items-center rounded-lg bg-ofd-amber px-4 text-sm font-black text-ofd-deep">
            Agendar palestra
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-ofd-amber/35 bg-ofd-deep/35 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ofd-amber/20 bg-ofd-deep lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className="rounded-lg px-3 py-3 font-bold text-white/84" onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-3 font-bold text-white/84">
              Instagram
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-2">
              Agendar palestra
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
