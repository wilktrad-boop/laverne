import Link from "next/link";

const categories = [
  { name: "Aménagement extérieur", href: "/amenagement-exterieur" },
  { name: "Travaux & Rénovation", href: "/travaux-renovation" },
  { name: "Décoration intérieure", href: "/decoration-interieure" },
  { name: "Énergie & Isolation", href: "/energie-isolation" },
];

const links = [
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-heading text-lg font-bold text-white">
                Agence Laverne
              </span>
            </Link>
            <p className="text-sm text-green-300 leading-relaxed">
              Votre guide pour l&apos;aménagement, la rénovation et
              l&apos;embellissement de votre maison et de votre jardin.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Catégories
            </h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-green-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-green-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-green-800 text-center text-sm text-green-400">
          &copy; {new Date().getFullYear()} agencelavernepaysagistes.fr — Tous
          droits réservés
        </div>
      </div>
    </footer>
  );
}
