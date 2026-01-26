export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogSEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  publishedAt: string;
  category: string;
  readTime: string;
  image?: string;
  seo?: BlogSEO;
  draft?: boolean;
}

export interface BlogPostFrontmatter {
  title: string;
  excerpt: string;
  slug: string;
  author: BlogAuthor;
  publishedAt: string;
  category: string;
  readTime: string;
  image?: string;
  seo?: BlogSEO;
  draft?: boolean;
}
