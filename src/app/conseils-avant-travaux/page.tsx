import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Conseils avant travaux : checklist et étapes pour bien préparer son projet",
  description:
    "Préparez vos travaux sereinement : checklist complète, autorisations, choix des artisans, budget et erreurs à éviter avant de vous lancer.",
  alternates: { canonical: "/conseils-avant-travaux" },
};

const steps = [
  {
    number: "01",
    title: "Définir précisément votre projet",
    content:
      "Avant de contacter un artisan, listez vos besoins, vos envies et vos contraintes. Distinguez l'indispensable du souhaitable. Prenez des photos de l'existant et notez les dimensions.",
    tips: [
      "Créez un dossier avec photos, croquis et inspirations (Pinterest, magazines)",
      "Listez les pièces ou zones concernées par priorité",
      "Identifiez les contraintes : copropriété, mitoyenneté, accès chantier",
    ],
  },
  {
    number: "02",
    title: "Vérifier les autorisations nécessaires",
    content:
      "Selon la nature de vos travaux, une déclaration préalable ou un permis de construire peut être obligatoire. Renseignez-vous auprès de votre mairie avant de démarrer.",
    tips: [
      "Déclaration préalable : ravalement, clôture, fenêtres, terrasse < 20 m²",
      "Permis de construire : extension > 20 m², changement de destination, piscine > 100 m²",
      "En copropriété : accord de l'assemblée générale souvent requis",
    ],
  },
  {
    number: "03",
    title: "Établir un budget réaliste",
    content:
      "Chiffrez votre projet en vous appuyant sur des estimations fiables. Prévoyez toujours une marge de sécurité de 10 à 15 % pour les imprévus.",
    tips: [
      "Consultez notre guide des prix pour des fourchettes indicatives",
      "Renseignez-vous sur les aides financières (MaPrimeRénov', CEE, éco-PTZ)",
      "Comparez le coût des matériaux entre entrée de gamme et milieu de gamme",
    ],
    link: { href: "/guide-des-prix", label: "Consulter le guide des prix" },
  },
  {
    number: "04",
    title: "Choisir les bons professionnels",
    content:
      "Demandez au minimum 3 devis détaillés pour comparer les prestations, pas seulement les prix. Vérifiez les assurances et qualifications.",
    tips: [
      "Vérifiez l'assurance décennale et la garantie biennale",
      "Demandez des références et visitez des chantiers terminés si possible",
      "Privilégiez les artisans certifiés RGE pour les travaux énergétiques",
    ],
  },
  {
    number: "05",
    title: "Planifier le calendrier des travaux",
    content:
      "Certains travaux dépendent de la saison ou doivent être réalisés dans un ordre précis. Anticipez les délais de livraison des matériaux.",
    tips: [
      "Travaux extérieurs (terrasse, clôture) : privilégiez le printemps ou l'automne",
      "Isolation des combles : idéalement avant l'hiver",
      "Prévoyez 2 à 4 semaines pour la livraison de menuiseries sur mesure",
    ],
  },
  {
    number: "06",
    title: "Préparer le chantier",
    content:
      "Protégez vos meubles et sols, prévoyez un espace de stockage pour les matériaux et informez vos voisins si les travaux sont bruyants.",
    tips: [
      "Dégagez les zones de travail et protégez les sols avec des bâches",
      "Prévoyez un accès pour les livraisons (benne, palette de matériaux)",
      "Informez les voisins par courtoisie, surtout en copropriété",
    ],
  },
];

export default function ConseilsAvantTravaux() {
  return (
    <>
      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Conseils avant travaux" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
              Conseils avant travaux
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Bien préparer son projet, c&apos;est éviter 80 % des problèmes.
              Suivez notre checklist en 6 étapes pour vous lancer sereinement dans
              vos travaux de rénovation ou d&apos;aménagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-green-100 bg-white p-6 md:p-8 hover:border-green-200 transition-colors"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 font-heading text-lg font-bold text-green-700">
                  {step.number}
                </span>
                <div className="flex-1">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-green-900">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {step.content}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {step.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-0.5">&#10003;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                  {step.link && (
                    <Link
                      href={step.link.href}
                      className="inline-flex items-center mt-4 text-sm font-heading font-semibold text-green-600 hover:text-green-700 transition-colors"
                    >
                      {step.link.label}
                      <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-green-50/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>Les erreurs les plus courantes à éviter</h2>
            <ul>
              <li>
                <strong>Sous-estimer le budget</strong> — Prévoyez toujours 10 à 15 %
                de marge pour les imprévus (mauvaise surprise à la dépose, surcoût matériaux).
              </li>
              <li>
                <strong>Ne pas comparer les devis</strong> — Un seul devis ne vous donne
                aucun repère. Trois devis minimum pour juger des prix et prestations.
              </li>
              <li>
                <strong>Négliger les autorisations</strong> — Des travaux sans déclaration
                peuvent entraîner des amendes et l&apos;obligation de remise en état.
              </li>
              <li>
                <strong>Choisir uniquement sur le prix</strong> — L&apos;artisan le moins
                cher n&apos;est pas toujours le plus fiable. Vérifiez références et assurances.
              </li>
            </ul>
            <p>
              Besoin d&apos;estimer le coût de votre projet ? Consultez notre{" "}
              <Link href="/guide-des-prix">guide des prix</Link>. Pour des
              conseils sur un type de travaux précis, parcourez nos rubriques{" "}
              <Link href="/travaux-renovation">Travaux & Rénovation</Link> et{" "}
              <Link href="/energie-isolation">Énergie & Isolation</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
