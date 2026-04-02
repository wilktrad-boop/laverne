import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Guide des prix travaux & aménagement 2026",
  description:
    "Estimez le budget de vos travaux : prix au m² pour terrasse, clôture, isolation, salle de bain, peinture et plus. Tarifs indicatifs actualisés en 2026.",
  alternates: { canonical: "/guide-des-prix" },
};

const priceSections = [
  {
    title: "Aménagement extérieur",
    icon: "🌳",
    href: "/amenagement-exterieur",
    items: [
      { label: "Terrasse en bois (pose comprise)", low: "80", high: "200", unit: "m²" },
      { label: "Terrasse en dalles / carrelage", low: "60", high: "150", unit: "m²" },
      { label: "Clôture en panneaux rigides", low: "50", high: "120", unit: "ml" },
      { label: "Clôture en bois composite", low: "100", high: "250", unit: "ml" },
      { label: "Création de jardin paysager", low: "30", high: "80", unit: "m²" },
      { label: "Éclairage extérieur (borne solaire)", low: "20", high: "80", unit: "unité" },
    ],
  },
  {
    title: "Travaux & Rénovation",
    icon: "🔨",
    href: "/travaux-renovation",
    items: [
      { label: "Rénovation salle de bain complète", low: "4 000", high: "12 000", unit: "pièce" },
      { label: "Rénovation cuisine", low: "5 000", high: "20 000", unit: "pièce" },
      { label: "Peinture intérieure", low: "20", high: "45", unit: "m²" },
      { label: "Remplacement fenêtres (double vitrage)", low: "300", high: "800", unit: "unité" },
      { label: "Réfection toiture", low: "100", high: "250", unit: "m²" },
      { label: "Carrelage sol (fourni posé)", low: "50", high: "120", unit: "m²" },
    ],
  },
  {
    title: "Énergie & Isolation",
    icon: "⚡",
    href: "/energie-isolation",
    items: [
      { label: "Isolation des combles perdus", low: "20", high: "50", unit: "m²" },
      { label: "Isolation thermique par l'extérieur (ITE)", low: "100", high: "200", unit: "m²" },
      { label: "Pompe à chaleur air-eau", low: "8 000", high: "18 000", unit: "installation" },
      { label: "Panneaux solaires (3 kWc)", low: "7 000", high: "12 000", unit: "installation" },
      { label: "VMC double flux", low: "3 000", high: "7 000", unit: "installation" },
      { label: "Chaudière gaz à condensation", low: "3 000", high: "6 000", unit: "installation" },
    ],
  },
  {
    title: "Décoration intérieure",
    icon: "🎨",
    href: "/decoration-interieure",
    items: [
      { label: "Parquet massif (fourni posé)", low: "60", high: "150", unit: "m²" },
      { label: "Papier peint (pose comprise)", low: "15", high: "50", unit: "m²" },
      { label: "Faux plafond", low: "30", high: "70", unit: "m²" },
      { label: "Dressing sur mesure", low: "800", high: "3 000", unit: "unité" },
      { label: "Béton ciré sol", low: "80", high: "160", unit: "m²" },
      { label: "Verrière intérieure", low: "400", high: "1 200", unit: "unité" },
    ],
  },
];

export default function GuidePrix() {
  return (
    <>
      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Guide des prix" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
              Guide des prix travaux & aménagement
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Estimez le budget de vos projets grâce à nos fourchettes de prix
              indicatives, actualisées en 2026. Les tarifs varient selon la
              région, les matériaux choisis et la complexité du chantier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {priceSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-900">
                  <Link href={section.href} className="hover:text-green-600 transition-colors">
                    {section.title}
                  </Link>
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-green-200">
                      <th className="text-left py-3 pr-4 font-heading font-semibold text-green-800">
                        Prestation
                      </th>
                      <th className="text-right py-3 px-4 font-heading font-semibold text-green-800">
                        Prix bas
                      </th>
                      <th className="text-right py-3 px-4 font-heading font-semibold text-green-800">
                        Prix haut
                      </th>
                      <th className="text-right py-3 pl-4 font-heading font-semibold text-green-800">
                        Unité
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((item) => (
                      <tr
                        key={item.label}
                        className="border-b border-green-50 hover:bg-green-50/50 transition-colors"
                      >
                        <td className="py-3 pr-4 text-gray-700">{item.label}</td>
                        <td className="py-3 px-4 text-right font-medium text-green-700">
                          {item.low} &euro;
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-green-700">
                          {item.high} &euro;
                        </td>
                        <td className="py-3 pl-4 text-right text-gray-500">
                          / {item.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-green-50/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>Comment utiliser ce guide des prix ?</h2>
            <p>
              Ces tarifs sont des fourchettes indicatives basées sur les prix
              moyens constatés en France métropolitaine en 2026. Le prix final
              de vos travaux dépendra de plusieurs facteurs :
            </p>
            <ul>
              <li>La <strong>région</strong> et l&apos;accessibilité du chantier</li>
              <li>La <strong>qualité des matériaux</strong> choisis (entrée de gamme, milieu ou haut de gamme)</li>
              <li>La <strong>complexité technique</strong> du projet (dépose, état existant, contraintes)</li>
              <li>Le <strong>recours à un professionnel</strong> ou la réalisation en autoconstruction</li>
            </ul>
            <p>
              Pour un chiffrage précis, nous vous recommandons de demander
              au moins 3 devis auprès d&apos;artisans qualifiés. Consultez nos{" "}
              <Link href="/conseils-avant-travaux">conseils avant travaux</Link>{" "}
              pour bien préparer votre projet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
