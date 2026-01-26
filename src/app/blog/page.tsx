import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { getAllPosts } from '@/lib/blog';
import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description:
    "Actualites, guides et conseils sur l'automatisation IA pour les PME. Decouvrez comment transformer votre entreprise avec l'intelligence artificielle.",
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

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
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#223382] mb-6">
              Blog
            </h1>
            <p className="text-xl text-[#111144]/70">
              Guides, conseils et actualites sur l'automatisation IA pour les PME.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                {post.image ? (
                  <div className="h-48 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#223382] to-[#9BACD8] flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-[#111144]/50">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#223382] mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-[#111144]/70 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#9AD1C8] flex items-center justify-center">
                        <span className="text-[#223382] font-bold text-sm">
                          {post.author.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-[#111144]/60">{post.author.name}</span>
                    </div>
                    <time className="text-sm text-[#111144]/50">
                      {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="block mt-4 text-[#F98513] font-medium hover:underline"
                  >
                    Lire l'article &rarr;
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#111144]/60">
                Aucun article pour le moment. Revenez bientot !
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#223382]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez informe
            </h2>
            <p className="text-white/70 mb-8">
              Recevez nos derniers articles et conseils sur l'automatisation IA
              directement dans votre boite mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#F98513]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F98513] text-white font-medium rounded-lg hover:bg-[#F98513]/90 transition-colors"
              >
                S'inscrire
              </button>
            </form>
            <p className="text-white/50 text-sm mt-4">
              Pas de spam, desabonnement en un clic.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
