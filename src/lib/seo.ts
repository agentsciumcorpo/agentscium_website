import { Metadata } from "next";

const siteUrl = "https://agentscium.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Agentscium",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function generatePageMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const siteConfig = {
  name: "Agentscium",
  url: siteUrl,
  description:
    "Agence d'automatisation IA qui construit des systèmes sur-mesure pour PME industrielles, BTP et agences.",
  email: "contact@agentscium.com",
  phone: "",
  address: {
    country: "France",
  },
  socialLinks: {
    linkedin: "",
    twitter: "",
  },
};
