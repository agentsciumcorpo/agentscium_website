import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostFrontmatter } from '@/types/blog';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIRECTORY);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(BLOG_DIRECTORY, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const frontmatter = data as BlogPostFrontmatter;

      return {
        slug: frontmatter.slug,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        content,
        author: frontmatter.author,
        publishedAt: frontmatter.publishedAt,
        category: frontmatter.category,
        readTime: frontmatter.readTime,
        image: frontmatter.image,
        seo: frontmatter.seo,
        draft: frontmatter.draft,
      } as BlogPost;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}

export function getRelatedPosts(slug: string, limit: number = 2): BlogPost[] {
  const posts = getAllPosts();
  const currentPost = posts.find((post) => post.slug === slug);

  if (!currentPost) {
    return posts.slice(0, limit);
  }

  // Prioritize posts in the same category
  const sameCategoryPosts = posts.filter(
    (post) => post.slug !== slug && post.category === currentPost.category
  );

  const otherPosts = posts.filter(
    (post) => post.slug !== slug && post.category !== currentPost.category
  );

  return [...sameCategoryPosts, ...otherPosts].slice(0, limit);
}
