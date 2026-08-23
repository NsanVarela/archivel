import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "archivel — Diaspora · Tech · Cap-Vert",
  description: "Uma letra par mois. Entre l'archipel et le monde. Communauté éditoriale pour la diaspora capverdienne dans le numérique.",
  openGraph: {
    title: "archivel",
    description: "Pour ceux qui ont entendu l'appel de l'archipel.",
    url: "https://archivel.tech",
    siteName: "archivel",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "archivel",
    description: "Uma letra par mois. Entre l'archipel et le monde.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
