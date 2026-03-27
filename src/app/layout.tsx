import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maison & Travaux | Conseils aménagement, rénovation et jardin",
    template: "%s | Maison & Travaux",
  },
  description:
    "Découvrez nos conseils d'experts pour l'aménagement extérieur, la rénovation, la décoration intérieure et l'énergie de votre maison.",
  metadataBase: new URL("https://agencelavernepaysagistes.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Maison & Travaux",
  },
  alternates: {
    canonical: "https://agencelavernepaysagistes.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
