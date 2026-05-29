import { useMemo, useState } from "react";
import { AnimalCard } from "../components/AnimalCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { animals, categories, type AnimalCategory } from "../data/animals";
import { usePageMeta } from "../hooks/usePageMeta";

const filters: Array<AnimalCategory | "Todos"> = ["Todos", ...categories];

export function Animais() {
  const [active, setActive] = useState<AnimalCategory | "Todos">("Todos");

  usePageMeta(
    "Animais",
    "Catálogo educativo de serpentes, escorpiões, aranhas, lagartas e outros animais de importância médica.",
  );

  const filteredAnimals = useMemo(() => {
    if (active === "Todos") return animals;
    return animals.filter((animal) => animal.category === active);
  }, [active]);

  return (
    <main>
      <section className="bg-ofd-deep py-20 text-ofd-paper">
        <div className="container-page">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Catálogo educativo</p>
            <h1 className="text-5xl font-black leading-none sm:text-6xl">Animais peçonhentos e de importância médica.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
              Informações gerais sobre características, habitat, identificação, risco, curiosidades e importância ecológica.
              A identificação precisa deve ser feita por profissionais capacitados.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="sticky top-[72px] z-20 flex flex-wrap gap-2 rounded-lg border border-ofd-line bg-ofd-paper p-2 shadow-card">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`min-h-[42px] rounded-lg px-4 text-sm font-black transition ${
                active === filter ? "bg-ofd-forest text-ofd-paper" : "text-ofd-ink hover:bg-ofd-cream"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <SectionHeader
          eyebrow="Consulta rápida"
          title={active === "Todos" ? "Todos os grupos" : active}
          copy="Os cards foram pensados para educação e prevenção, não para captura, manejo ou identificação definitiva em campo."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredAnimals.map((animal, index) => (
            <Reveal key={`${animal.category}-${animal.name}`} delay={index * 0.03}>
              <AnimalCard animal={animal} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
