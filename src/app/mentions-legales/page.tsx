import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mentions Legales',
  description: 'Mentions legales du site Agentscium - Agence d\'automatisation IA.',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#223382] mb-8">Mentions Legales</h1>

          <div className="prose prose-lg text-[#111144]/80 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Editeur du site</h2>
              <p>
                Le site agentscium.com est edite par :<br />
                <strong>Agentscium</strong><br />
                {/* TODO: Ajouter les informations legales */}
                Adresse : [A completer]<br />
                SIRET : [A completer]<br />
                Email : contact@agentscium.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Directeur de la publication</h2>
              <p>[Nom du directeur de publication a completer]</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Hebergement</h2>
              <p>
                Le site est heberge par :<br />
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, USA
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Propriete intellectuelle</h2>
              <p>
                L'ensemble du contenu du site agentscium.com (textes, images, videos, logos, icones, etc.)
                est protege par le droit d'auteur et est la propriete exclusive d'Agentscium,
                sauf mention contraire.
              </p>
              <p>
                Toute reproduction, representation, modification, publication, adaptation de tout ou partie
                des elements du site, quel que soit le moyen ou le procede utilise, est interdite,
                sauf autorisation ecrite prealable d'Agentscium.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Limitation de responsabilite</h2>
              <p>
                Agentscium s'efforce de fournir sur le site des informations aussi precises que possible.
                Toutefois, Agentscium ne pourra etre tenue responsable des omissions, des inexactitudes
                et des carences dans la mise a jour, qu'elles soient de son fait ou du fait des tiers
                partenaires qui lui fournissent ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Droit applicable</h2>
              <p>
                Les presentes mentions legales sont regies par le droit francais. En cas de litige,
                les tribunaux francais seront seuls competents.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
