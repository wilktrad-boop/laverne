import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez notre équipe de passionnés dédiée à vous accompagner dans tous vos projets maison, jardin et rénovation.",
  alternates: { canonical: "/a-propos" },
};

export default function APropos() {
  return (
    <>
      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "À propos" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
              À propos
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Une équipe de passionnés au service de votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images/about.webp"
              alt="Notre équipe de spécialistes maison et jardin"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="prose">
            <h2>Notre mission</h2>
            <p>
              Nous sommes une équipe de professionnels de l&apos;habitat, réunissant
              des compétences en paysagisme, architecture, rénovation et
              décoration intérieure. Notre objectif : vous fournir des conseils
              fiables et pratiques pour tous vos projets maison.
            </p>

            <h2>Notre expertise</h2>
            <p>
              Forts de plusieurs années d&apos;expérience dans le domaine de
              l&apos;aménagement et de la construction, nous partageons nos
              connaissances à travers des guides détaillés, des comparatifs et
              des retours d&apos;expérience terrain.
            </p>

            <h2>Nos valeurs</h2>
            <ul>
              <li>
                <strong>Qualité</strong> — Des contenus vérifiés par des
                professionnels du bâtiment et du paysagisme.
              </li>
              <li>
                <strong>Accessibilité</strong> — Des explications claires, que
                vous soyez bricoleur débutant ou expert confirmé.
              </li>
              <li>
                <strong>Durabilité</strong> — Une attention particulière aux
                solutions écologiques et aux matériaux responsables.
              </li>
            </ul>

            <h2>Nous contacter</h2>
            <p>
              Une question, une suggestion ou un partenariat ? N&apos;hésitez pas
              à nous écrire via notre{" "}
              <a href="/contact">page de contact</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
