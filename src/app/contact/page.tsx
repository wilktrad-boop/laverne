import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez notre équipe pour toute question sur l'aménagement, la rénovation ou la décoration de votre maison.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
              Contactez-nous
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Une question, une suggestion ou une proposition de partenariat ?
              Écrivez-nous.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-heading font-medium text-gray-700 mb-1.5"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-green-200 px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-heading font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-green-200 px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                placeholder="votre@email.fr"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-heading font-medium text-gray-700 mb-1.5"
              >
                Sujet
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-green-200 px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all bg-white"
              >
                <option>Question générale</option>
                <option>Partenariat</option>
                <option>Suggestion d&apos;article</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-heading font-medium text-gray-700 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-green-200 px-4 py-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-500 px-6 py-3 font-heading font-semibold text-sm text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25"
            >
              Envoyer le message
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Vous pouvez aussi nous écrire directement à{" "}
              <a
                href="mailto:contact@visibilite-en-ligne.store"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                contact@visibilite-en-ligne.store
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
