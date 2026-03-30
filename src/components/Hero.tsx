import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Maison avec jardin paysager"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100/90 text-green-700 text-sm font-heading font-medium mb-6">
            🌱 Votre guide maison & jardin
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
            Aménagez, rénovez,{" "}<span className="text-green-500">transformez</span>{" "}votre espace de vie
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Conseils d&apos;experts pour l&apos;aménagement extérieur, la
            rénovation, la décoration et les économies d&apos;énergie. Faites de
            votre maison un lieu qui vous ressemble.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/amenagement-exterieur"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-green-500 text-white font-heading font-semibold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25"
            >
              Aménagement extérieur
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/travaux-renovation"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/90 text-green-700 font-heading font-semibold text-sm hover:bg-white transition-colors border border-green-200"
            >
              Travaux & Rénovation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
