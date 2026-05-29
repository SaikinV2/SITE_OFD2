export type AnimalCategory = "Serpentes" | "Escorpiões" | "Aranhas" | "Lagartas" | "Outros";

export type Animal = {
  name: string;
  scientificName: string;
  category: AnimalCategory;
  risk: "Alto" | "Moderado" | "Variável";
  image: string;
  habitat: string;
  characteristics: string;
  identification: string;
  ecologicalRole: string;
  curiosity: string;
};

export const animals: Animal[] = [
  {
    name: "Jararaca",
    scientificName: "Bothrops jararaca",
    category: "Serpentes",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bothrops%20jararaca.jpg?width=900",
    habitat: "Mata Atlântica, bordas de mata, áreas úmidas e ambientes alterados próximos à vegetação.",
    characteristics: "Serpente de camuflagem marrom ou acinzentada, associada a boa parte dos acidentes ofídicos no Brasil.",
    identification: "Cabeça triangular, desenhos laterais e comportamento geralmente defensivo quando ameaçada.",
    ecologicalRole: "Controla populações de pequenos vertebrados, especialmente roedores.",
    curiosity: "Seu veneno teve importância histórica em pesquisas farmacológicas no Brasil.",
  },
  {
    name: "Cascavel",
    scientificName: "Crotalus durissus",
    category: "Serpentes",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crotalus%20durissus%20-%20Flickr%20-%20Dick%20Culbert%20%281%29.jpg?width=900",
    habitat: "Cerrados, campos, áreas abertas, regiões secas e ambientes rurais.",
    characteristics: "Reconhecida pelo chocalho na ponta da cauda e por evitar florestas densas.",
    identification: "Corpo robusto, losangos no dorso e cauda com guizo visível em adultos.",
    ecologicalRole: "Ajuda no equilíbrio ecológico ao predar pequenos mamíferos.",
    curiosity: "O chocalho é formado por segmentos de queratina acumulados após mudas de pele.",
  },
  {
    name: "Surucucu-pico-de-jaca",
    scientificName: "Lachesis muta",
    category: "Serpentes",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lachesis%20muta%20muta.jpg?width=900",
    habitat: "Florestas úmidas, Amazônia e remanescentes de Mata Atlântica.",
    characteristics: "Maior serpente peçonhenta das Américas, de hábitos discretos e associada a ambientes preservados.",
    identification: "Corpo grande, desenhos em losango e escamas com aspecto áspero.",
    ecologicalRole: "Predadora de mamíferos de pequeno e médio porte, contribuindo para o equilíbrio das florestas.",
    curiosity: "Apesar do tamanho, costuma evitar contato humano quando não é perturbada.",
  },
  {
    name: "Coral-verdadeira",
    scientificName: "Micrurus corallinus",
    category: "Serpentes",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cobra-Coral_%28Micrurus_corallinus%29.jpg?width=900",
    habitat: "Folhiço, solo, áreas florestais e locais com cobertura vegetal.",
    characteristics: "Serpente de anéis coloridos, hábitos discretos e importância médica.",
    identification: "A identificação por sequência de anéis não é segura para leigos, pois há falsas-corais semelhantes.",
    ecologicalRole: "Preda pequenos répteis e serpentes, integrando cadeias alimentares naturais.",
    curiosity: "A melhor resposta ao encontro é manter distância, sem tentar confirmar se é verdadeira ou falsa.",
  },
  {
    name: "Escorpião-amarelo",
    scientificName: "Tityus serrulatus",
    category: "Escorpiões",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tityus%20serrulatus%20%28Escorpi%C3%A3o-amarelo%29.jpg?width=900",
    habitat: "Ambientes urbanos, entulhos, frestas, redes de esgoto e locais com alimento disponível.",
    characteristics: "Espécie adaptada a cidades e de grande importância para saúde pública.",
    identification: "Coloração amarelada e serrilha nos segmentos da cauda.",
    ecologicalRole: "Preda insetos e outros pequenos artrópodes.",
    curiosity: "A prevenção envolve manejo ambiental, limpeza e controle de abrigo e alimento.",
  },
  {
    name: "Aranha-armadeira",
    scientificName: "Phoneutria nigriventer",
    category: "Aranhas",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Phoneutria%20nigriventer%20%28armed%20spider%29.jpg?width=900",
    habitat: "Áreas florestais, bananais, quintais e locais escuros com abrigo.",
    characteristics: "Aranha ativa, de comportamento defensivo quando se sente ameaçada.",
    identification: "Postura de defesa com pernas anteriores erguidas e corpo robusto.",
    ecologicalRole: "Controle natural de insetos e pequenos invertebrados.",
    curiosity: "Verificar calçados, roupas e caixas reduz o risco de acidentes domésticos.",
  },
  {
    name: "Aranha-marrom",
    scientificName: "Loxosceles spp.",
    category: "Aranhas",
    risk: "Moderado",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Loxosceles%20laeta.jpg?width=900",
    habitat: "Locais secos, escuros e pouco movimentados, como atrás de móveis e caixas.",
    characteristics: "Pequena, discreta e associada a acidentes quando comprimida contra o corpo.",
    identification: "Cor marrom uniforme e hábitos reclusos.",
    ecologicalRole: "Preda pequenos insetos em ambientes naturais e urbanos.",
    curiosity: "Sacudir roupas, toalhas e calçados guardados é medida preventiva simples.",
  },
  {
    name: "Lagarta Lonomia",
    scientificName: "Lonomia obliqua",
    category: "Lagartas",
    risk: "Alto",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lonomia%20obliqua%20larvae.jpg?width=900",
    habitat: "Troncos de árvores, áreas rurais, pomares e fragmentos florestais.",
    characteristics: "Lagarta urticante associada a acidentes por contato com cerdas.",
    identification: "Agrupamentos sobre troncos e coloração que camufla com a casca.",
    ecologicalRole: "Fase larval de mariposas, participante de ciclos ecológicos naturais.",
    curiosity: "O contato pode causar quadro grave; procurar atendimento é fundamental.",
  },
];

export const categories: AnimalCategory[] = ["Serpentes", "Escorpiões", "Aranhas", "Lagartas", "Outros"];
