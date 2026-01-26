import { client } from './client';

// Types
export interface Author {
  name: string;
  image?: string;
  bio?: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  author: Author;
  mainImage?: string;
  categories: Category[];
  publishedAt: string;
  excerpt: string;
  body: unknown[]; // Portable Text
  seoTitle?: string;
  seoDescription?: string;
}

// Queries GROQ
const postFields = `
  _id,
  title,
  "slug": slug.current,
  "author": author->{name, "image": image.asset->url, bio},
  "mainImage": mainImage.asset->url,
  "categories": categories[]->{title, "slug": slug.current},
  publishedAt,
  excerpt,
  body,
  seoTitle,
  seoDescription
`;

// Recuperer tous les articles
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  }`;

  return client.fetch(query);
}

// Recuperer tous les slugs (pour generateStaticParams)
export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"].slug.current`;
  return client.fetch(query);
}

// Recuperer un article par slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }`;

  return client.fetch(query, { slug });
}

// Recuperer les articles par categorie
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const query = `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    ${postFields}
  }`;

  return client.fetch(query, { categorySlug });
}

// Recuperer les articles recents (pour la sidebar ou homepage)
export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
    ${postFields}
  }`;

  return client.fetch(query, { limit });
}

// Recuperer toutes les categories
export async function getAllCategories(): Promise<Category[]> {
  const query = `*[_type == "category"] {
    title,
    "slug": slug.current
  }`;

  return client.fetch(query);
}
