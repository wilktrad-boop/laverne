import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "2025-01-01",
      category: data.category || "Général",
      image: data.image || undefined,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "2025-01-01",
    category: data.category || "Général",
    image: data.image || undefined,
    content,
  };
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

const STOPWORDS = new Set([
  "avec", "sans", "pour", "dans", "quand", "comment", "guide", "complet",
  "tout", "tous", "faire", "bien", "plus", "quel", "quelle", "quels",
  "quelles", "votre", "notre", "leur", "ceux", "celle", "elle", "aussi",
  "entre", "chez", "vers", "sous", "meme", "toute", "toutes", "peut",
  "faut", "etre", "avoir", "cette", "les", "des", "une", "sur",
]);

function tokenize(text: string): Set<string> {
  const words = text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));
  return new Set(words);
}

function relevance(a: Post, b: Post): number {
  const tokensA = tokenize(`${a.slug} ${a.title}`);
  const tokensB = tokenize(`${b.slug} ${b.title}`);
  let shared = 0;
  for (const token of tokensB) if (tokensA.has(token)) shared++;
  return shared * 3 + (a.category === b.category ? 1 : 0);
}

// Related posts used to be "the 3 most recent of the same category", which let a
// handful of recent posts absorb every internal link while 19 of 34 posts got
// none. Links are now assigned globally: each post picks the candidate with the
// best relevance score, minus a penalty for how many links that candidate has
// already received. Relevance still wins for strong topical matches, but link
// equity spreads across the whole blog instead of pooling on the newest posts.
const LINK_SPREAD_PENALTY = 1.5;

let relatedMapCache: Map<string, Post[]> | null = null;

function buildRelatedMap(limit: number): Map<string, Post[]> {
  const posts = [...getAllPosts()].sort((a, b) => a.slug.localeCompare(b.slug));
  const related = new Map<string, Post[]>(posts.map((p) => [p.slug, []]));
  const inbound = new Map<string, number>(posts.map((p) => [p.slug, 0]));

  for (let round = 0; round < limit; round++) {
    for (const post of posts) {
      const picked = related.get(post.slug)!;
      const taken = new Set(picked.map((p) => p.slug));

      let best: Post | null = null;
      let bestScore = -Infinity;

      for (const candidate of posts) {
        if (candidate.slug === post.slug || taken.has(candidate.slug)) continue;
        const score =
          relevance(post, candidate) -
          LINK_SPREAD_PENALTY * (inbound.get(candidate.slug) ?? 0);
        if (score > bestScore) {
          bestScore = score;
          best = candidate;
        }
      }

      if (best) {
        picked.push(best);
        inbound.set(best.slug, (inbound.get(best.slug) ?? 0) + 1);
      }
    }
  }

  return related;
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  if (!relatedMapCache) relatedMapCache = buildRelatedMap(limit);
  return relatedMapCache.get(currentSlug) ?? [];
}
