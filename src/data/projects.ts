export type ProjectStatus = "en_cours" | "livre";

export interface Typologie {
  code: string;
  surfaces: string;
}

export interface Project {
  slug: string;
  nom: string;
  localite: string;
  adresse: string;
  statut: ProjectStatus;
  progress: number;
  blocs: number;
  surfaceMin: number;
  surfaceMax: number;
  anneeLivraison: string;
  description: string;
  longDescription: string[];
  typologies: Typologie[];
  equipements: string[];
  featured: boolean;
}

export interface Localite {
  nom: string;
  description: string;
  lat: number;
  lon: number;
}

export const projects: Project[] = [
  {
    slug: "residence-saphir",
    nom: "Résidence Saphir",
    localite: "Hydra",
    adresse: "Chemin de la Madeleine, Hydra, Alger",
    statut: "en_cours",
    progress: 72,
    blocs: 5,
    surfaceMin: 64,
    surfaceMax: 168,
    anneeLivraison: "2027",
    description:
      "Notre signature : une adresse d'exception à Hydra, avec des finitions haut standing et une sécurité maximale.",
    longDescription: [
      "La Résidence Saphir est le fleuron de MOKRANI Promotion. Implantée dans l'un des quartiers les plus prisés d'Alger, elle réunit architecture contemporaine, matériaux nobles et prestations hôtelières.",
      "Des typologies généreuses, des espaces de vie baignés de lumière, un parking souterrain et une sécurité 24h/24 : tout est pensé pour votre confort quotidien.",
      "La livraison est prévue pour 2027. Les derniers lots sont disponibles.",
    ],
    typologies: [
      { code: "F2", surfaces: "64 m² à 72 m²" },
      { code: "F3", surfaces: "88 m² à 104 m²" },
      { code: "F4", surfaces: "118 m² à 138 m²" },
      { code: "F5", surfaces: "158 m² à 168 m²" },
    ],
    equipements: [
      "Sécurité 24h/24",
      "Parking souterrain",
      "Ascenseurs",
      "Chauffage central au sol",
      "Espaces verts",
    ],
    featured: true,
  },
  {
    slug: "residence-jade",
    nom: "Résidence Jade",
    localite: "Chéraga",
    adresse: "Chemin de l'Université, Chéraga, Alger",
    statut: "en_cours",
    progress: 35,
    blocs: 4,
    surfaceMin: 58,
    surfaceMax: 142,
    anneeLivraison: "2028",
    description:
      "Un écrin de verdure à Chéraga, pour des appartements lumineux et bien agencés.",
    longDescription: [
      "La Résidence Jade s'inscrit dans le paysage résidentiel paisible de Chéraga, l'une des communes les plus vertes de la capitale.",
      "Deux typologies généreuses, des espaces de vie ouverts sur la nature et un quartier calme : l'équilibre idéal entre ville et sérénité.",
    ],
    typologies: [
      { code: "F2", surfaces: "58 m² à 68 m²" },
      { code: "F3", surfaces: "82 m² à 96 m²" },
      { code: "F4", surfaces: "112 m² à 142 m²" },
    ],
    equipements: [
      "Sécurité 24h/24",
      "Parking",
      "Ascenseurs",
      "Espaces verts",
    ],
    featured: true,
  },
  {
    slug: "residence-grenat",
    nom: "Résidence Grenat",
    localite: "Birkhadem",
    adresse: "Route Nationale N°1, Birkhadem, Alger",
    statut: "livre",
    progress: 100,
    blocs: 3,
    surfaceMin: 60,
    surfaceMax: 143,
    anneeLivraison: "2023",
    description:
      "Résidence livrée : des appartements immédiatement habitables, au cœur de Birkhadem.",
    longDescription: [
      "La Résidence Grenat a été livrée avec succès, confirmant le savoir-faire de MOKRANI Promotion dans la construction de résidences haut standing.",
      "Son emplacement privilégié sur la Route Nationale N°1 la rend parfaitement accessible depuis toute la capitale, dans un cadre résidentiel paisible.",
    ],
    typologies: [
      { code: "F2", surfaces: "60 m² à 68 m²" },
      { code: "F3", surfaces: "85 m² à 98 m²" },
      { code: "F4", surfaces: "112 m² à 143 m²" },
    ],
    equipements: [
      "Sécurité 24h/24",
      "Parking",
      "Ascenseurs",
      "Copropriété gérée",
    ],
    featured: true,
  },
  {
    slug: "residence-onyx",
    nom: "Résidence Onyx",
    localite: "El Achour",
    adresse: "Cité El Badr, El Achour, Alger",
    statut: "en_cours",
    progress: 55,
    blocs: 2,
    surfaceMin: 55,
    surfaceMax: 118,
    anneeLivraison: "2027",
    description:
      "Une résidence raffinée et confidentielle, dans un quartier calme et recherché.",
    longDescription: [
      "La Résidence Onyx, installée dans le quartier paisible d'El Badr à El Achour, offre des appartements élégants aux volumes généreux.",
      "Une adresse confidentielle, proche de toutes les commodités, pour celles et ceux qui recherchent le calme sans renoncer à la ville.",
    ],
    typologies: [
      { code: "F2", surfaces: "55 m² à 62 m²" },
      { code: "F3", surfaces: "78 m² à 92 m²" },
      { code: "F4", surfaces: "104 m² à 118 m²" },
    ],
    equipements: [
      "Sécurité 24h/24",
      "Parking",
      "Ascenseurs",
    ],
    featured: true,
  },
  {
    slug: "residence-perle",
    nom: "Résidence Perle",
    localite: "Dely Ibrahim",
    adresse: "Chemin du Quartier des Oliviers, Dely Ibrahim, Alger",
    statut: "en_cours",
    progress: 20,
    blocs: 3,
    surfaceMin: 70,
    surfaceMax: 175,
    anneeLivraison: "2028",
    description:
      "Le futur grand ensemble résidentiel de Dely Ibrahim, au cœur d'un quartier verdoyant.",
    longDescription: [
      "Implantée à Dely Ibrahim, l'une des communes les plus prisées de l'ouest algérois, la Résidence Perle proposera des appartements spacieux et lumineux.",
      "Ce projet ambitieux réaffirme l'ambition de MOKRANI Promotion : bâtir des lieux de vie durables dans les quartiers les plus recherchés de la capitale.",
    ],
    typologies: [
      { code: "F2", surfaces: "70 m² à 78 m²" },
      { code: "F3", surfaces: "92 m² à 110 m²" },
      { code: "F4", surfaces: "122 m² à 150 m²" },
      { code: "F5", surfaces: "168 m² à 175 m²" },
    ],
    equipements: [
      "Sécurité 24h/24",
      "Parking souterrain",
      "Ascenseurs",
      "Espaces verts",
    ],
    featured: true,
  },
  {
    slug: "residence-smaragde",
    nom: "Résidence Smaragde",
    localite: "Kouba",
    adresse: "Rue Ahmed Bey, Kouba, Alger",
    statut: "livre",
    progress: 100,
    blocs: 2,
    surfaceMin: 52,
    surfaceMax: 110,
    anneeLivraison: "2025",
    description:
      "Une résidence élégante et centrale, au cœur de la vie animée de Kouba.",
    longDescription: [
      "La Résidence Smaragde, livrée en 2025, apporte une signature contemporaine au centre très vivant de Kouba.",
      "Une adresse centrale pour un quartier complet : commerces, transports et commodités à quelques pas.",
    ],
    typologies: [
      { code: "F2", surfaces: "52 m² à 58 m²" },
      { code: "F3", surfaces: "74 m² à 86 m²" },
      { code: "F4", surfaces: "96 m² à 110 m²" },
    ],
    equipements: [
      "Sécurité",
      "Parking",
      "Ascenseurs",
    ],
    featured: false,
  },
  {
    slug: "residence-rubis",
    nom: "Résidence Rubis",
    localite: "Birkhadem",
    adresse: "Les Camélias, Birkhadem, Alger",
    statut: "livre",
    progress: 100,
    blocs: 2,
    surfaceMin: 56,
    surfaceMax: 130,
    anneeLivraison: "2021",
    description:
      "Une première réalisation emblématique, désormais entièrement habitée.",
    longDescription: [
      "La Résidence Rubis est l'une des premières réalisations de MOKRANI Promotion, aujourd'hui entièrement habitée et appréciée de ses occupants.",
      "Elle témoigne de la constance de nos engagements : délais respectés, qualité de construction et suivi de la copropriété.",
    ],
    typologies: [
      { code: "F2", surfaces: "56 m² à 64 m²" },
      { code: "F3", surfaces: "78 m² à 96 m²" },
      { code: "F4", surfaces: "108 m² à 130 m²" },
    ],
    equipements: [
      "Sécurité",
      "Parking",
      "Espaces verts",
    ],
    featured: false,
  },
];

export const localites: Localite[] = [
  {
    nom: "Hydra",
    description:
      "Quartier diplomatique et résidentiel de prestige, au cœur de la capitale.",
    lat: 36.7415,
    lon: 3.0505,
  },
  {
    nom: "Chéraga",
    description:
      "Commune résidentielle et verdoyante, l'une des plus recherchées de l'ouest algérois.",
    lat: 36.7672,
    lon: 2.9167,
  },
  {
    nom: "Birkhadem",
    description:
      "Ancien poumon vert d'Alger, aujourd'hui un quartier central et très bien desservi.",
    lat: 36.7264,
    lon: 3.0605,
  },
  {
    nom: "El Achour",
    description:
      "Quartier résidentiel calme et prisé, au sud de la capitale.",
    lat: 36.7329,
    lon: 2.9908,
  },
  {
    nom: "Dely Ibrahim",
    description:
      "Haute valeur résidentielle, entourée de verdure et proche de la baie d'Alger.",
    lat: 36.7557,
    lon: 2.9823,
  },
  {
    nom: "Kouba",
    description:
      "Commune centrale d'Alger, dynamique et proche de toutes les commodités.",
    lat: 36.7292,
    lon: 3.0884,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getLocalite(nom: string): Localite | undefined {
  return localites.find((l) => l.nom === nom);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function listLocalites(): string[] {
  return [...new Set(projects.map((p) => p.localite))].sort((a, b) =>
    a.localeCompare(b, "fr")
  );
}

export function listTypologies(): string[] {
  const codes = new Set<string>();
  projects.forEach((p) => p.typologies.forEach((t) => codes.add(t.code)));
  return Array.from(codes).sort((a, b) => a.localeCompare(b, "fr"));
}
