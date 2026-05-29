import { AlertTriangle, Leaf, MapPin } from "lucide-react";
import type { Animal } from "../data/animals";

type AnimalCardProps = {
  animal: Animal;
};

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <article className="card group flex h-full min-w-0 flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden">
        <img src={animal.image} alt={`${animal.name} - ${animal.scientificName}`} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-md bg-ofd-deep/80 px-3 py-1 text-xs font-black text-ofd-paper backdrop-blur">
          {animal.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black leading-tight">{animal.name}</h3>
            <p className="mt-1 text-sm font-bold italic text-ofd-moss">{animal.scientificName}</p>
          </div>
          <span className="rounded-md bg-ofd-danger/10 px-2 py-1 text-xs font-black text-ofd-danger">{animal.risk}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-ofd-muted">{animal.characteristics}</p>

        <div className="mt-5 grid gap-3 text-sm">
          <p className="flex gap-2 text-ofd-muted">
            <MapPin className="mt-0.5 shrink-0 text-ofd-clay" size={16} />
            {animal.habitat}
          </p>
          <p className="flex gap-2 text-ofd-muted">
            <AlertTriangle className="mt-0.5 shrink-0 text-ofd-amber" size={16} />
            {animal.identification}
          </p>
          <p className="flex gap-2 text-ofd-muted">
            <Leaf className="mt-0.5 shrink-0 text-ofd-moss" size={16} />
            {animal.ecologicalRole}
          </p>
        </div>
      </div>
    </article>
  );
}
