import {
  Ambulance,
  BookOpen,
  GraduationCap,
  Landmark,
  Leaf,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";

export const site = {
  name: "Ofidismo Educacional",
  instagram: "https://www.instagram.com/ofidismo_educacional/",
  instagramHandle: "@ofidismo_educacional",
  whatsappUrl:
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20palestra%20do%20Ofidismo%20Educacional.",
  location: "Rondonópolis - MT",
  tagline: "Educação ambiental, prevenção de acidentes e conscientização sobre animais peçonhentos.",
};

export const audiences = [
  { title: "Corpo de Bombeiros", icon: Siren, text: "Conteúdo preventivo para equipes de resposta e orientação comunitária." },
  { title: "SAMU e saúde", icon: Ambulance, text: "Condutas seguras, primeiros passos e comunicação objetiva em acidentes." },
  { title: "Órgãos públicos", icon: Landmark, text: "Apoio educativo para campanhas, capacitações e ações intersetoriais." },
  { title: "Escolas", icon: GraduationCap, text: "Palestras e atividades de educação ambiental para estudantes e professores." },
  { title: "Comunidades", icon: Users, text: "Informação acessível para famílias, áreas rurais e população em geral." },
  { title: "Meio ambiente", icon: Leaf, text: "Valorização ecológica dos animais e redução de mortes por medo ou desinformação." },
];

export const values = [
  "Educação gratuita",
  "Rigor científico",
  "Prevenção de acidentes",
  "Conservação ambiental",
  "Linguagem acessível",
  "Responsabilidade pública",
];

export const impactStats = [
  { value: "100%", label: "ações educativas gratuitas" },
  { value: "4", label: "grupos de serpentes de importância médica abordados" },
  { value: "32 mil+", label: "acidentes com serpentes registrados no Brasil em 2023" },
  { value: "0", label: "incentivo à captura ou manejo por leigos" },
];

export const highlights = [
  {
    title: "Prevenção antes do acidente",
    icon: ShieldCheck,
    text: "Orientações sobre cuidados em residências, escolas, áreas rurais e ambientes de trabalho.",
  },
  {
    title: "Conhecimento que reduz medo",
    icon: BookOpen,
    text: "Conteúdo visual para combater mitos e aproximar a comunidade da ciência.",
  },
  {
    title: "Atuação presencial",
    icon: Users,
    text: "Palestras, capacitações e ações educativas para públicos de diferentes níveis de formação.",
  },
];
