import { AlertTriangle, CheckCircle2, FileText, HeartPulse, HelpCircle, Leaf } from "lucide-react";

export const learningModules = [
  {
    title: "Prevenção de acidentes",
    icon: CheckCircle2,
    items: [
      "Use calçados fechados em áreas de mata, quintais e terrenos.",
      "Evite acúmulo de entulho, madeira, telhas e lixo.",
      "Verifique roupas, botas, luvas e toalhas antes de usar.",
      "Mantenha quintais limpos e controle fontes de alimento para roedores e insetos.",
    ],
  },
  {
    title: "O que fazer em caso de acidente",
    icon: HeartPulse,
    items: [
      "Mantenha a pessoa em repouso e procure atendimento imediatamente.",
      "Lave o local apenas com água e sabão, se possível.",
      "Retire anéis, pulseiras ou objetos que possam apertar com o inchaço.",
      "Se for seguro, registre foto do animal à distância para auxiliar a equipe de saúde.",
    ],
  },
  {
    title: "O que não fazer",
    icon: AlertTriangle,
    items: [
      "Não faça torniquete.",
      "Não corte, fure ou sugue o local.",
      "Não aplique substâncias caseiras.",
      "Não tente capturar ou matar o animal.",
    ],
  },
  {
    title: "Mitos e verdades",
    icon: HelpCircle,
    items: [
      "Nem toda cobra colorida é coral-verdadeira, e nem toda falsa-coral é fácil de reconhecer.",
      "Serpentes não perseguem pessoas; a maioria dos acidentes ocorre por contato acidental.",
      "Animais peçonhentos também têm papel ecológico e não devem ser eliminados por medo.",
    ],
  },
  {
    title: "Boas práticas ambientais",
    icon: Leaf,
    items: [
      "Preserve áreas naturais e respeite a fauna local.",
      "Oriente crianças a não tocar em animais desconhecidos.",
      "Acione órgãos competentes quando houver animal em área urbana de risco.",
    ],
  },
  {
    title: "Materiais educativos",
    icon: FileText,
    items: [
      "Cartilhas para escolas.",
      "Slides para capacitação.",
      "Postagens educativas para redes sociais.",
      "Protocolos de orientação para campanhas públicas.",
    ],
  },
];
