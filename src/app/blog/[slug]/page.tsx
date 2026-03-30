import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { categories } from "@/lib/categories";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Agence Laverne",
    },
    publisher: {
      "@type": "Organization",
      name: "Agence Laverne",
      url: "https://www.agencelavernepaysagistes.fr",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-leaf-pattern py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const cat = categories.find(
                  (c) => c.title.toLowerCase() === post.category.toLowerCase()
                );
                return cat ? (
                  <Link
                    href={`/${cat.slug}`}
                    className="text-xs font-heading font-medium text-green-600 bg-green-100 px-2.5 py-1 rounded-full hover:bg-green-200 transition-colors"
                  >
                    {post.category}
                  </Link>
                ) : (
                  <span className="text-xs font-heading font-medium text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                );
              })()}
              <time className="text-sm text-gray-400" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-green-900 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {post.image && (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mb-4 pt-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <RelatedArticles currentSlug={slug} category={post.category} />
    </>
  );
}
