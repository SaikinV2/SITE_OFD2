import { Download, ExternalLink } from "lucide-react";
import { CTA } from "../components/CTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { learningModules } from "../data/learning";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function Aprendizado() {
  usePageMeta(
    "Aprendizado",
    "Conteúdo educativo sobre prevenção de acidentes, primeiros socorros, mitos e boas práticas ambientais.",
  );

  return (
    <main>
      <section className="bg-ofd-deep py-20 text-ofd-paper">
        <div className="container-page">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Aprendizado</p>
            <h1 className="text-5xl font-black leading-none sm:text-6xl">Prevenção, primeiros passos e boas práticas.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
              Conteúdo organizado para apoiar escolas, campanhas públicas, treinamentos e ações comunitárias.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Conteúdo educativo"
          title="Informação clara para situações reais."
          copy="Os módulos abaixo reúnem orientações gerais. Em caso de acidente, o atendimento médico deve ser procurado imediatamente."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {learningModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Reveal key={module.title} delay={index * 0.04} className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ofd-forest text-ofd-paper">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-black">{module.title}</h2>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-ofd-muted">
                      {module.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ofd-amber" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ofd-paper py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Materiais educativos"
                title="Área preparada para cartilhas, banners e slides."
                copy="A próxima etapa pode incluir arquivos em PDF, materiais para impressão e conteúdo segmentado por idade ou instituição."
              />
            </Reveal>
            <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
              {["Cartilha escolar", "Slides de palestra", "Banner de prevenção", "Checklist institucional"].map((item) => (
                <div key={item} className="card flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-black">{item}</h3>
                    <p className="mt-1 text-sm text-ofd-muted">Em breve</p>
                  </div>
                  <Download className="text-ofd-forest" size={22} />
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal className="card grid gap-8 p-8 lg:grid-cols-[1fr_0.7fr] lg:p-10">
          <div>
            <p className="eyebrow">Redes sociais</p>
            <h2 className="text-3xl font-black leading-tight">Acompanhe conteúdos curtos no Instagram.</h2>
            <p className="mt-4 text-ofd-muted">
              O perfil oficial reúne publicações educativas, registros do projeto e orientações para a comunidade.
            </p>
          </div>
          <div className="flex items-end">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-primary w-full">
              Abrir Instagram <ExternalLink size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      <CTA />
    </main>
  );
}
