import { CheckCircle2, Compass, Eye, Flag, HeartHandshake, Users } from "lucide-react";
import { CTA } from "../components/CTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { audiences, values } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const missionCards = [
  {
    title: "Missão",
    icon: Flag,
    text: "Promover conhecimento, prevenção de acidentes e conscientização ambiental sobre animais peçonhentos.",
  },
  {
    title: "Visão",
    icon: Eye,
    text: "Ser referência regional em educação pública sobre ofidismo e animais de importância médica.",
  },
  {
    title: "Propósito",
    icon: HeartHandshake,
    text: "Conectar ciência e comunidade para reduzir riscos, preservar vidas e valorizar a fauna brasileira.",
  },
];

export function Sobre() {
  usePageMeta(
    "Sobre",
    "Conheça a história, missão, visão, valores e áreas de atuação do Ofidismo Educacional.",
  );

  return (
    <main>
      <section className="bg-ofd-deep py-20 text-ofd-paper">
        <div className="container-page">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Sobre o projeto</p>
            <h1 className="text-5xl font-black leading-none sm:text-6xl">Educação presencial, gratuita e conectada à realidade local.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
              O Ofidismo Educacional realiza palestras, capacitações e ações educativas sobre animais peçonhentos,
              atendendo escolas, instituições públicas e população em geral.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeader
              eyebrow="História"
              title="Um projeto social criado para levar informação onde ela faz diferença."
              copy="A atuação presencial permite adaptar a linguagem para cada público: crianças, professores, equipes de emergência, instituições ambientais e comunidades rurais."
            />
          </Reveal>
          <Reveal delay={0.1} className="card p-7">
            <p className="text-lg leading-8 text-ofd-muted">
              O projeto nasce da necessidade de orientar a população sobre prevenção de acidentes, importância
              ecológica dos animais peçonhentos e condutas corretas em situações de risco. A proposta une educação
              ambiental, saúde pública e divulgação científica em ações gratuitas e acessíveis.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-lg bg-ofd-cream p-4 font-bold">
                  <CheckCircle2 className="text-ofd-forest" size={20} />
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ofd-paper py-20">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-3">
            {missionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={index * 0.06} className="card p-7">
                  <Icon className="text-ofd-amber" size={32} />
                  <h2 className="mt-8 text-2xl font-black">{card.title}</h2>
                  <p className="mt-4 leading-7 text-ofd-muted">{card.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Áreas de atuação"
              title="Instituições, escolas e comunidade."
              copy="A equipe adapta o formato da atividade para o público atendido, respeitando o nível de conhecimento, objetivo da ação e contexto local."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Reveal key={audience.title} delay={index * 0.04} className="card p-5">
                  <Icon className="text-ofd-forest" size={26} />
                  <h3 className="mt-6 text-lg font-black">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ofd-muted">{audience.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <Reveal className="rounded-lg bg-ofd-forest p-8 text-ofd-paper shadow-soft lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Compass size={34} className="text-ofd-amber" />
              <h2 className="mt-6 text-3xl font-black">Equipe</h2>
            </div>
            <p className="text-lg leading-8 text-white/78">
              Esta seção está preparada para receber fotos, nomes, formações e funções da equipe do projeto.
              A estrutura permite expansão sem alterar o restante do site.
            </p>
          </div>
        </Reveal>
      </section>

      <CTA />
    </main>
  );
}
