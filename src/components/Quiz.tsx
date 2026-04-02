"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  question: string;
  options: { label: string; icon: string; tags: string[] }[];
}

const questions: Question[] = [
  {
    question: "Quelle est votre priorité actuelle ?",
    options: [
      { label: "Aménager mon extérieur", icon: "🌳", tags: ["exterieur"] },
      { label: "Rénover mon intérieur", icon: "🔨", tags: ["renovation"] },
      { label: "Réduire mes factures d'énergie", icon: "⚡", tags: ["energie"] },
      { label: "Refaire ma décoration", icon: "🎨", tags: ["deco"] },
    ],
  },
  {
    question: "Quel budget envisagez-vous ?",
    options: [
      { label: "Moins de 2 000 €", icon: "💰", tags: ["petit-budget"] },
      { label: "Entre 2 000 et 10 000 €", icon: "💰💰", tags: ["budget-moyen"] },
      { label: "Plus de 10 000 €", icon: "💰💰💰", tags: ["gros-budget"] },
      { label: "Je ne sais pas encore", icon: "🤔", tags: ["budget-inconnu"] },
    ],
  },
  {
    question: "Vous êtes plutôt…",
    options: [
      { label: "Bricoleur, je fais moi-même", icon: "🛠️", tags: ["diy"] },
      { label: "Je fais appel à un professionnel", icon: "👷", tags: ["pro"] },
      { label: "Un mix des deux selon les travaux", icon: "🤝", tags: ["mixte"] },
    ],
  },
  {
    question: "Votre logement est…",
    options: [
      { label: "Une maison avec jardin", icon: "🏡", tags: ["maison-jardin"] },
      { label: "Une maison sans jardin", icon: "🏠", tags: ["maison"] },
      { label: "Un appartement", icon: "🏢", tags: ["appartement"] },
    ],
  },
  {
    question: "Quel sujet vous intéresse le plus ?",
    options: [
      { label: "Terrasse & jardin", icon: "🌿", tags: ["exterieur", "terrasse"] },
      { label: "Salle de bain & cuisine", icon: "🚿", tags: ["renovation", "sdb"] },
      { label: "Isolation & chauffage", icon: "🔥", tags: ["energie", "isolation"] },
      { label: "Peinture & déco salon", icon: "🖌️", tags: ["deco", "salon"] },
    ],
  },
];

interface Result {
  title: string;
  description: string;
  category: { label: string; href: string; icon: string };
  articles: { label: string; href: string }[];
  priceLink: boolean;
}

function getResult(answers: number[]): Result {
  const allTags: string[] = [];
  answers.forEach((answerIdx, questionIdx) => {
    if (questions[questionIdx]?.options[answerIdx]) {
      allTags.push(...questions[questionIdx].options[answerIdx].tags);
    }
  });

  const count = (tag: string) => allTags.filter((t) => t === tag).length;

  const scores = {
    exterieur: count("exterieur") + count("terrasse") + count("maison-jardin") * 0.5,
    renovation: count("renovation") + count("sdb"),
    energie: count("energie") + count("isolation"),
    deco: count("deco") + count("salon"),
  };

  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const hasBudgetQuestion = allTags.includes("budget-inconnu") || allTags.includes("gros-budget");

  const results: Record<string, Result> = {
    exterieur: {
      title: "Votre projet : aménager vos espaces extérieurs",
      description:
        "Terrasse, jardin, clôture… Vous avez envie de profiter pleinement de votre extérieur. Voici nos ressources pour vous lancer.",
      category: { label: "Aménagement extérieur", href: "/amenagement-exterieur", icon: "🌳" },
      articles: [
        { label: "Comment aménager un petit jardin", href: "/blog/amenager-petit-jardin" },
        { label: "Terrasse en bois : quel bois choisir", href: "/blog/terrasse-bois-guide" },
        { label: "Quelle clôture de jardin choisir", href: "/blog/cloture-jardin-guide" },
      ],
      priceLink: true,
    },
    renovation: {
      title: "Votre projet : rénover votre intérieur",
      description:
        "Salle de bain, cuisine, sols… Vous êtes prêt à donner un coup de neuf à votre habitat. Nos guides vous accompagnent.",
      category: { label: "Travaux & Rénovation", href: "/travaux-renovation", icon: "🔨" },
      articles: [
        { label: "Rénover sa salle de bain petit budget", href: "/blog/renover-salle-de-bain-budget" },
        { label: "Quel dallage pour sa terrasse", href: "/blog/dallage-terrasse-guide" },
        { label: "Terrasse en bois : guide complet", href: "/blog/terrasse-bois-guide" },
      ],
      priceLink: true,
    },
    energie: {
      title: "Votre projet : améliorer votre performance énergétique",
      description:
        "Isolation, chauffage, aides financières… Réduisez vos factures et améliorez votre confort thermique.",
      category: { label: "Énergie & Isolation", href: "/energie-isolation", icon: "⚡" },
      articles: [
        { label: "Comment isoler les combles", href: "/blog/isoler-combles-guide" },
        { label: "Pompe à chaleur : bien choisir", href: "/blog/pompe-a-chaleur-guide" },
        { label: "Laine de verre ou laine de roche", href: "/blog/laine-verre-laine-roche-comparatif" },
      ],
      priceLink: true,
    },
    deco: {
      title: "Votre projet : relooker votre intérieur",
      description:
        "Couleurs, mobilier, ambiance… Vous avez envie de changement. Découvrez nos inspirations déco.",
      category: { label: "Décoration intérieure", href: "/decoration-interieure", icon: "🎨" },
      articles: [
        { label: "Idées déco salon : tendances 2026", href: "/blog/idees-deco-salon" },
        { label: "Décoration murale : 15 idées originales", href: "/blog/decoration-murale-salon" },
        { label: "Rénover sa salle de bain petit budget", href: "/blog/renover-salle-de-bain-budget" },
      ],
      priceLink: false,
    },
  };

  const result = results[top] || results.exterieur;
  if (hasBudgetQuestion) result.priceLink = true;
  return result;
}

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult(answers);
    return (
      <div className="space-y-8">
        {/* Result header */}
        <div className="text-center">
          <span className="text-5xl mb-4 block">{result.category.icon}</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-900">
            {result.title}
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {result.description}
          </p>
        </div>

        {/* Category link */}
        <div className="flex justify-center">
          <Link
            href={result.category.href}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-green-500 text-white font-heading font-semibold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25"
          >
            Explorer : {result.category.label}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Recommended articles */}
        <div className="rounded-2xl border border-green-100 bg-white p-6">
          <h3 className="font-heading text-lg font-bold text-green-900 mb-4">
            Articles recommandés pour vous
          </h3>
          <ul className="space-y-3">
            {result.articles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-100 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{article.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Extra links */}
        {result.priceLink && (
          <div className="text-center">
            <Link
              href="/guide-des-prix"
              className="text-sm font-heading font-semibold text-green-600 hover:text-green-700 transition-colors"
            >
              Consultez aussi notre guide des prix →
            </Link>
          </div>
        )}

        {/* Restart */}
        <div className="text-center pt-4">
          <button
            onClick={restart}
            className="text-sm text-gray-400 hover:text-green-600 transition-colors"
          >
            Recommencer le questionnaire
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentStep];

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-heading font-medium text-gray-400">
          {currentStep + 1} / {questions.length}
        </span>
        <div className="flex-1 h-2 bg-green-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-900 text-center">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option, idx) => (
          <button
            key={option.label}
            onClick={() => handleAnswer(idx)}
            className="flex items-center gap-4 rounded-2xl border-2 border-green-100 bg-white p-5 text-left hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10 transition-all group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {option.icon}
            </span>
            <span className="font-heading font-semibold text-gray-700 group-hover:text-green-700 transition-colors">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
