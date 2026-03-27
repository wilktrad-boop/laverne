import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  image?: string;
  articleCount?: number;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon,
  image,
  articleCount,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-green-100 bg-white overflow-hidden hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all duration-300"
    >
      {image ? (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <span className="absolute bottom-3 left-3 text-2xl drop-shadow-md">
            {icon}
          </span>
        </div>
      ) : (
        <div className="px-6 pt-6">
          <span className="text-3xl mb-4 block">{icon}</span>
        </div>
      )}
      <div className="p-6 pt-4">
        <h3 className="font-heading text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
        {articleCount !== undefined && (
          <span className="mt-4 inline-block text-xs font-heading font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
            {articleCount} article{articleCount > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </Link>
  );
}
