import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import { getPostsByCategory } from "@/lib/blog";
import type { Category } from "@/lib/categories";

interface CategoryPageProps {
  category: Category;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const posts = getPostsByCategory(category.title);

  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        {category.image && (
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
          </div>
        )}
        <div className={`relative py-12 md:py-16 ${!category.image ? "bg-leaf-pattern" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: category.title }]} />
            <div className="mt-6 max-w-3xl">
              <span className="text-4xl mb-4 block">{category.icon}</span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
                {category.heroTitle}
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {category.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-900 mb-8">
            Nos thématiques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-green-100 bg-white p-6 hover:border-green-200 transition-colors"
              >
                <h3 className="font-heading text-lg font-bold text-green-800">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      {posts.length > 0 && (
        <section className="py-16 bg-green-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-900 mb-8">
              Articles récents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  category={post.category}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
