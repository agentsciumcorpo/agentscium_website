import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentscium.com"),
  title: {
    default: "Agentscium | Agence d'Automatisation IA Sur-Mesure",
    template: "%s | Agentscium",
  },
  description:
    "Agence d'automatisation IA qui construit des systèmes sur-mesure pour PME industrielles, BTP et agences. Rentable en 2 mois. Disponible 24/7.",
  keywords: [
    "automatisation IA",
    "intelligence artificielle",
    "PME",
    "BTP",
    "agence marketing",
    "workflow",
    "chatbot",
    "leads",
    "agents IA",
    "automatisation processus",
  ],
  authors: [{ name: "Agentscium" }],
  creator: "Agentscium",
  publisher: "Agentscium",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Agentscium | Agence d'Automatisation IA Sur-Mesure",
    description:
      "Systèmes d'automatisation IA pour PME industrielles, BTP et agences. Rentable en 2 mois.",
    type: "website",
    locale: "fr_FR",
    url: "https://agentscium.com",
    siteName: "Agentscium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentscium | Agence d'Automatisation IA Sur-Mesure",
    description:
      "Systèmes d'automatisation IA pour PME industrielles, BTP et agences.",
  },
  alternates: {
    canonical: "https://agentscium.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agentscium",
              url: "https://agentscium.com",
              description:
                "Agence d'automatisation IA qui construit des systèmes sur-mesure pour PME industrielles, BTP et agences.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["French"],
              },
              areaServed: "FR",
              serviceType: [
                "Automatisation IA",
                "Workflows intelligents",
                "Chatbots IA",
                "Systèmes IA sur-mesure",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
