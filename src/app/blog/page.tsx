import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tous nos articles et conseils pour l'aménagement, la rénovation et la décoration de votre maison et jardin.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Retrouvez tous nos articles, guides et conseils pour votre maison
              et votre jardin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ArticleCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  category={post.category}
                  date={post.date}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="text-5xl mb-4 block">📝</span>
              <h2 className="font-heading text-xl font-bold text-gray-700">
                Bientôt de nouveaux articles
              </h2>
              <p className="mt-2 text-gray-500">
                Notre équipe prépare du contenu de qualité. Revenez bientôt !
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
