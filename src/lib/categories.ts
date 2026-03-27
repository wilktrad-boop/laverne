export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  topics: { title: string; description: string }[];
}

export const categories: Category[] = [
  {
    slug: "amenagement-exterieur",
    title: "Aménagement extérieur",
    icon: "🌳",
    image: "/images/categories/amenagement-exterieur.webp",
    description: "Jardin, terrasse, paysagisme et espaces verts",
    heroTitle: "Aménagement extérieur",
    heroDescription:
      "Transformez votre jardin et vos espaces extérieurs en véritables lieux de vie. Du paysagisme à la terrasse, en passant par les clôtures et l'éclairage, découvrez nos conseils d'experts.",
    metaTitle: "Aménagement extérieur : jardin, terrasse et paysagisme",
    metaDescription:
      "Conseils et guides pour aménager votre jardin, créer une terrasse, choisir vos plantes et transformer vos espaces extérieurs.",
    topics: [
      { title: "Paysagisme & design de jardin", description: "Création de massifs, choix des végétaux, plans d'aménagement et harmonisation des espaces verts." },
      { title: "Terrasses & revêtements", description: "Bois, composite, pierre naturelle ou carrelage : choisir et poser le revêtement idéal pour votre terrasse." },
      { title: "Clôtures & délimitations", description: "Panneaux, grillages, haies végétales et murs de soutènement pour structurer votre extérieur." },
      { title: "Éclairage extérieur", description: "Spots, bornes, guirlandes et éclairage solaire pour sublimer votre jardin à la tombée de la nuit." },
      { title: "Piscine & bassin", description: "Construction, entretien, traitement de l'eau et aménagement des abords de votre piscine." },
      { title: "Potager & permaculture", description: "Créer et entretenir un potager productif, techniques de permaculture et jardinage biologique." },
    ],
  },
  {
    slug: "travaux-renovation",
    title: "Travaux & Rénovation",
    icon: "🔨",
    image: "/images/categories/travaux-renovation.webp",
    description: "Gros œuvre, second œuvre et rénovation",
    heroTitle: "Travaux & Rénovation",
    heroDescription:
      "Rénovez, agrandissez ou transformez votre habitat. Du gros œuvre au second œuvre, nos guides vous accompagnent à chaque étape de vos projets de construction et rénovation.",
    metaTitle: "Travaux & Rénovation : guides pour rénover votre maison",
    metaDescription:
      "Guides complets pour vos travaux de rénovation : gros œuvre, plomberie, électricité, toiture et aménagement intérieur.",
    topics: [
      { title: "Gros œuvre & structure", description: "Fondations, murs porteurs, charpente et toiture : les bases solides de votre maison." },
      { title: "Plomberie & sanitaires", description: "Installation, rénovation et dépannage de vos canalisations, robinetterie et équipements sanitaires." },
      { title: "Électricité", description: "Mise aux normes, tableaux électriques, prises et éclairage pour une installation sûre et performante." },
      { title: "Menuiserie & fenêtres", description: "Portes, fenêtres, volets et menuiseries intérieures pour l'isolation et le style de votre habitat." },
      { title: "Toiture & couverture", description: "Rénovation de toiture, étanchéité, isolation des combles et choix des matériaux de couverture." },
      { title: "Sols & carrelage", description: "Parquet, carrelage, vinyle et béton ciré : poser et rénover vos sols intérieurs." },
    ],
  },
  {
    slug: "decoration-interieure",
    title: "Décoration intérieure",
    icon: "🎨",
    image: "/images/categories/decoration-interieure.webp",
    description: "Déco, couleurs, mobilier et agencement",
    heroTitle: "Décoration intérieure",
    heroDescription:
      "Créez un intérieur qui vous ressemble. Tendances déco, choix des couleurs, agencement des pièces et sélection de mobilier pour un habitat harmonieux et personnalisé.",
    metaTitle: "Décoration intérieure : tendances, couleurs et agencement",
    metaDescription:
      "Inspirations et conseils pour la décoration intérieure : tendances, choix des couleurs, mobilier et aménagement de chaque pièce.",
    topics: [
      { title: "Tendances & styles", description: "Scandinave, industriel, bohème, japandi : décryptage des styles déco et comment les adopter chez vous." },
      { title: "Couleurs & peinture", description: "Harmonies colorées, choix des peintures et techniques d'application pour transformer vos pièces." },
      { title: "Mobilier & rangement", description: "Sélection de meubles, optimisation des espaces et solutions de rangement malines." },
      { title: "Cuisine & salle de bain", description: "Aménagement, choix des matériaux et idées déco pour vos pièces d'eau et votre cuisine." },
      { title: "Éclairage intérieur", description: "Suspensions, appliques, lampadaires et LED pour créer l'ambiance parfaite dans chaque pièce." },
      { title: "Textiles & accessoires", description: "Rideaux, coussins, tapis et objets déco pour apporter la touche finale à votre intérieur." },
    ],
  },
  {
    slug: "energie-isolation",
    title: "Énergie & Isolation",
    icon: "⚡",
    image: "/images/categories/energie-isolation.webp",
    description: "Économies d'énergie, isolation et chauffage",
    heroTitle: "Énergie & Isolation",
    heroDescription:
      "Réduisez votre empreinte énergétique et vos factures. Isolation thermique, chauffage performant, énergies renouvelables et aides financières pour une maison économe.",
    metaTitle: "Énergie & Isolation : économies et performance énergétique",
    metaDescription:
      "Guides pour l'isolation thermique, le chauffage, les panneaux solaires et les aides financières pour améliorer la performance énergétique de votre maison.",
    topics: [
      { title: "Isolation thermique", description: "ITE, ITI, combles et planchers : toutes les techniques pour une isolation performante." },
      { title: "Chauffage & climatisation", description: "Pompes à chaleur, chaudières, poêles à bois et climatisation réversible pour votre confort." },
      { title: "Panneaux solaires", description: "Photovoltaïque, thermique et autoconsommation : produire votre propre énergie." },
      { title: "Ventilation", description: "VMC simple flux, double flux et ventilation naturelle pour un air intérieur sain." },
      { title: "Aides & subventions", description: "MaPrimeRénov', CEE, éco-PTZ et aides locales pour financer vos travaux énergétiques." },
      { title: "DPE & audit énergétique", description: "Comprendre votre diagnostic de performance énergétique et planifier vos améliorations." },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
