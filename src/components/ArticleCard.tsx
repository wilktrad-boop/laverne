import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  image?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  category,
  date,
  image,
}: ArticleCardProps) {
  return (
    <article className="group rounded-2xl border border-green-100 bg-white overflow-hidden hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300">
      {image ? (
        <Link href={`/blog/${slug}`} className="block relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      ) : (
        <div className="h-1.5 bg-gradient-to-r from-green-400 to-green-500" />
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-heading font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
            {category}
          </span>
          <time className="text-xs text-gray-400" dateTime={date}>
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <Link href={`/blog/${slug}`}>
          <h3 className="font-heading text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors leading-snug">
            {title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="mt-4 inline-flex items-center text-sm font-heading font-medium text-green-600 hover:text-green-800 transition-colors"
        >
          Lire la suite
          <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
