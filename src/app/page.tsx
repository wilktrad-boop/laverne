import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/blog";

const categories = [
  {
    title: "Aménagement extérieur",
    description:
      "Jardin, terrasse, paysagisme, clôtures et aménagement de vos espaces extérieurs pour créer un cadre de vie agréable.",
    href: "/amenagement-exterieur",
    icon: "🌳",
    image: "/images/categories/amenagement-exterieur.webp",
  },
  {
    title: "Travaux & Rénovation",
    description:
      "Gros œuvre, second œuvre, isolation, toiture et tous les travaux pour rénover et améliorer votre habitat.",
    href: "/travaux-renovation",
    icon: "🔨",
    image: "/images/categories/travaux-renovation.webp",
  },
  {
    title: "Décoration intérieure",
    description:
      "Tendances déco, choix des couleurs, mobilier et astuces pour créer un intérieur qui vous ressemble.",
    href: "/decoration-interieure",
    icon: "🎨",
    image: "/images/categories/decoration-interieure.webp",
  },
  {
    title: "Énergie & Isolation",
    description:
      "Pompes à chaleur, isolation thermique, panneaux solaires et solutions pour réduire votre facture énergétique.",
    href: "/energie-isolation",
    icon: "⚡",
    image: "/images/categories/energie-isolation.webp",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maison & Travaux",
  url: "https://agencelavernepaysagistes.fr",
  description:
    "Conseils d'experts pour l'aménagement, la rénovation et la décoration de votre maison et jardin.",
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-green-900">
              Nos univers
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Explorez nos conseils par thématique pour trouver l&apos;inspiration
              et les solutions adaptées à vos projets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.href} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      {latestPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-green-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-green-900">
                Derniers articles
              </h2>
              <p className="mt-3 text-gray-500">
                Nos conseils les plus récents pour votre maison et votre jardin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  category={post.category}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-green-500 to-green-700 p-8 md:p-12 text-center text-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Un projet maison en tête ?
            </h2>
            <p className="mt-3 text-green-100 max-w-xl mx-auto">
              Parcourez nos guides complets pour chaque étape de vos travaux,
              de la conception à la réalisation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/blog"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-green-700 font-heading font-semibold text-sm hover:bg-green-50 transition-colors"
              >
                Parcourir le blog
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-green-600 text-white font-heading font-semibold text-sm hover:bg-green-800 transition-colors border border-green-400/30"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
