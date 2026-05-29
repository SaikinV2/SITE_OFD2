import { ArrowRight, BookOpen, Instagram, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { CTA } from "../components/CTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { highlights, impactStats, site, audiences } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(
    "Home",
    "Site oficial do Ofidismo Educacional: ações educativas gratuitas, prevenção de acidentes e conscientização ambiental.",
  );

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ofd-deep text-ofd-paper">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(17,27,15,.96), rgba(36,64,26,.78), rgba(36,64,26,.28)), url('https://commons.wikimedia.org/wiki/Special:FilePath/Crotalus%20durissus.jpg?width=1600')",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ofd-deep to-transparent" />

        <div className="container-page grid min-h-[calc(100vh-72px)] items-end gap-10 py-16 lg:grid-cols-[1fr_420px] lg:py-24">
          <Reveal>
            <p className="eyebrow">Projeto social presencial e gratuito</p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
              Educação sobre animais peçonhentos com responsabilidade pública.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              O Ofidismo Educacional promove palestras, capacitações e ações educativas para escolas,
              órgãos públicos, equipes de emergência e população em geral.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/animais" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-ofd-amber px-5 font-black text-ofd-deep">
                Explorar animais <ArrowRight size={18} />
              </Link>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-ofd-amber/55 bg-ofd-deep/90 px-5 font-black text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ofd-forest">
                <Instagram size={18} /> {site.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-lg border border-ofd-amber/45 bg-ofd-deep/95 p-6 shadow-soft ring-1 ring-black/20">
            <div className="absolute left-0 top-0 h-1 w-full bg-ofd-amber" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-[0.08em] text-ofd-amber">Canal oficial</span>
            <h2 className="mt-3 text-3xl font-black leading-tight">Prevenção, identificação geral e conduta segura.</h2>
            <p className="mt-4 text-white/74">
              Conteúdo pensado para instrução pública, sem incentivo ao manejo de animais por leigos.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-bold text-white">
              <span className="rounded-md border border-white/12 bg-white/8 px-3 py-2">{site.location}</span>
              <span className="rounded-md border border-white/12 bg-white/8 px-3 py-2">Escolas, bombeiros, SAMU, Defesa Civil e órgãos ambientais</span>
              <span className="rounded-md border border-white/12 bg-white/8 px-3 py-2">Instruções gratuitas</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page -mt-10 relative z-10">
        <div className="grid overflow-hidden rounded-lg border border-ofd-line bg-ofd-paper shadow-soft md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="border-b border-ofd-line p-6 md:border-b-0 md:border-r last:border-r-0">
              <strong className="block text-3xl font-black text-ofd-forest">{stat.value}</strong>
              <p className="mt-2 text-sm leading-6 text-ofd-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Apresentação"
              title="Um projeto para transformar medo em conhecimento."
              copy="A proposta é aproximar ciência, educação ambiental e saúde pública por meio de comunicação clara, presencial e acessível."
            />
            <Link to="/sobre" className="btn-secondary mt-7">
              Conhecer o projeto <ArrowRight size={17} />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="card p-5">
                  <Icon className="text-ofd-forest" size={28} />
                  <h3 className="mt-8 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ofd-muted">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ofd-paper py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Público atendido"
            title="Conteúdo para quem orienta, protege e educa."
            copy="A linguagem visual e técnica atende instituições formais sem perder acessibilidade para a comunidade."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Reveal key={audience.title} delay={index * 0.04} className="card p-6">
                  <Icon className="text-ofd-amber" size={28} />
                  <h3 className="mt-7 text-xl font-black">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ofd-muted">{audience.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="card overflow-hidden">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Bothrops%20jararaca.jpg?width=1200"
                alt="Serpente brasileira em ambiente natural"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="card flex flex-col justify-between p-7">
            <div>
              <p className="eyebrow">Destaques educativos</p>
              <h2 className="text-3xl font-black leading-tight">Catálogo, prevenção e mitos em um só lugar.</h2>
              <p className="mt-4 text-ofd-muted">
                A primeira versão já organiza conteúdo para animais, aprendizado e contato institucional.
              </p>
            </div>
            <div className="mt-8 grid gap-3">
              <Link to="/animais" className="btn-primary">
                <ShieldCheck size={18} /> Ver catálogo
              </Link>
              <Link to="/aprendizado" className="btn-secondary">
                <BookOpen size={18} /> Aprender prevenção
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
