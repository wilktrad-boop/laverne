import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/lib/categories";

const category = getCategoryBySlug("decoration-interieure")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "/decoration-interieure" },
};

export default function DecorationInterieure() {
  return <CategoryPage category={category} />;
}
