import ArticleCard from "@/components/ArticleCard";
import { getPostsByCategory } from "@/lib/blog";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
}

export default function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const related = getPostsByCategory(category)
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-12 bg-green-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-green-900 mb-8">
          Articles sur le même thème
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((post) => (
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
  );
}
