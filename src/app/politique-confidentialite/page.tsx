import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Politique de Confidentialite',
  description: 'Politique de confidentialite et protection des donnees personnelles du site Agentscium.',
  path: '/politique-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#223382] mb-8">Politique de Confidentialite</h1>

          <div className="prose prose-lg text-[#111144]/80 space-y-8">
            <p className="text-lg">
              Derniere mise a jour : Janvier 2026
            </p>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Introduction</h2>
              <p>
                Agentscium s'engage a proteger la vie privee des utilisateurs de son site web.
                Cette politique de confidentialite explique comment nous collectons, utilisons
                et protegeons vos donnees personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Donnees collectees</h2>
              <p>Nous pouvons collecter les types de donnees suivants :</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Donnees d'identification</strong> : nom, prenom, email, telephone (lors de la prise de contact)</li>
                <li><strong>Donnees de connexion</strong> : adresse IP, type de navigateur, pages visitees</li>
                <li><strong>Donnees de navigation</strong> : cookies techniques et analytiques</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Utilisation des donnees</h2>
              <p>Vos donnees sont utilisees pour :</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Repondre a vos demandes de contact</li>
                <li>Vous fournir nos services</li>
                <li>Ameliorer notre site web et nos services</li>
                <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Base legale du traitement</h2>
              <p>Le traitement de vos donnees repose sur :</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Votre consentement</li>
                <li>L'execution d'un contrat</li>
                <li>Notre interet legitime a ameliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Conservation des donnees</h2>
              <p>
                Vos donnees personnelles sont conservees pendant une duree n'excedant pas celle
                necessaire aux finalites pour lesquelles elles sont collectees et traitees.
                Les donnees de prospection sont conservees 3 ans a compter du dernier contact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Vos droits</h2>
              <p>Conformement au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Droit d'acces a vos donnees</li>
                <li>Droit de rectification</li>
                <li>Droit a l'effacement</li>
                <li>Droit a la limitation du traitement</li>
                <li>Droit a la portabilite</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous a : contact@agentscium.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Cookies</h2>
              <p>
                Notre site utilise des cookies pour ameliorer votre experience de navigation.
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela
                peut affecter certaines fonctionnalites du site.
              </p>
              <p className="mt-4">Types de cookies utilises :</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Cookies techniques</strong> : necessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques</strong> : mesure d'audience anonyme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Securite</h2>
              <p>
                Nous mettons en oeuvre des mesures de securite techniques et organisationnelles
                appropriees pour proteger vos donnees personnelles contre la destruction accidentelle
                ou illicite, la perte, l'alteration, la divulgation ou l'acces non autorises.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#223382] mb-4">Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialite,
                vous pouvez nous contacter a : contact@agentscium.com
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
