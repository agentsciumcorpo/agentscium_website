import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Article non trouve' };
  }

  const seoTitle = post.seo?.metaTitle || post.title;
  const seoDescription = post.seo?.metaDescription || post.excerpt;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: post.seo?.keywords,
    openGraph: {
      title: `${seoTitle} | Agentscium`,
      description: seoDescription,
      url: `https://agentscium.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      title: seoTitle,
      description: seoDescription,
      images: post.image ? [post.image] : undefined,
    },
    alternates: {
      canonical: `https://agentscium.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 2);

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Accueil', url: 'https://agentscium.com' },
              { name: 'Blog', url: 'https://agentscium.com/blog' },
              { name: post.title, url: `https://agentscium.com/blog/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: post.title,
              description: post.excerpt,
              author: post.author.name,
              datePublished: post.publishedAt,
              url: `https://agentscium.com/blog/${slug}`,
              image: post.image,
            })
          ),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#111144]/60 mb-8">
              <Link href="/" className="hover:text-[#F98513]">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#F98513]">Blog</Link>
              <span>/</span>
              <span className="text-[#223382] truncate">{post.title}</span>
            </nav>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-[#111144]/50">{post.readTime} de lecture</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#223382] mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-[#111144]/70 mb-8">{post.excerpt}</p>

            {/* Author & Date */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#9AD1C8] flex items-center justify-center">
                <span className="text-[#223382] font-bold text-lg">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-[#223382]">{post.author.name}</p>
                <p className="text-sm text-[#111144]/60">
                  {post.author.role} &bull;{' '}
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cover Image */}
      {post.image && (
        <section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                className="rounded-2xl w-full h-auto"
                priority
              />
            </div>
          </Container>
        </section>
      )}

      {/* Content */}
      <section className="py-12 bg-white">
        <Container>
          <article className="max-w-3xl mx-auto">
            <MarkdownRenderer content={post.content} />
          </article>
        </Container>
      </section>

      {/* Share & Tags */}
      <section className="py-8 bg-[#F4F1EC]">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[#111144]/60">Partager :</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://agentscium.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#223382] hover:bg-[#F98513] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://agentscium.com/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#223382] hover:bg-[#F98513] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <Button href="/blog" variant="outline">
              &larr; Retour au blog
            </Button>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-2xl font-bold text-[#223382] text-center mb-12">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((related) => (
                <div
                  key={related.slug}
                  className="bg-[#F4F1EC] rounded-2xl p-6"
                >
                  <Badge variant="secondary" className="mb-4">
                    {related.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-[#223382] mb-2">
                    {related.title}
                  </h3>
                  <p className="text-[#111144]/70 text-sm mb-4 line-clamp-2">
                    {related.excerpt}
                  </p>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="text-[#F98513] font-medium hover:underline"
                  >
                    Lire l'article &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#223382]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pret a automatiser votre entreprise ?
            </h2>
            <p className="text-white/70 mb-8">
              Discutons de vos besoins lors d'un diagnostic gratuit de 30 minutes.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Prendre rendez-vous
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
