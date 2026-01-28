// Donnees mock pour le blog
// Ces donnees seront remplacees par Sanity une fois configure

export interface MockBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  category: string;
  readTime: string;
  image?: string;
}

export const mockBlogPosts: MockBlogPost[] = [];

export function getPostBySlug(slug: string): MockBlogPost | undefined {
  return mockBlogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return mockBlogPosts.map((post) => post.slug);
}
