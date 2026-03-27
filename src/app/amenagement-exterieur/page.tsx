import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/lib/categories";

const category = getCategoryBySlug("amenagement-exterieur")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "/amenagement-exterieur" },
};

export default function AmenagementExterieur() {
  return <CategoryPage category={category} />;
}
