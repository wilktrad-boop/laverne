import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Quiz : quel projet maison vous correspond ?",
  description:
    "Répondez à 5 questions pour découvrir le projet qui vous correspond et accédez à des conseils personnalisés pour vos travaux.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <>
      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Quiz" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
              Quel projet maison vous correspond ?
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              5 questions pour vous orienter vers les bons conseils et les bons
              guides. Répondez en moins d&apos;une minute !
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Quiz />
        </div>
      </section>
    </>
  );
}
