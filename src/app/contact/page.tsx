import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import CalendlyWidget from '@/components/contact/CalendlyWidget';
import FAQSection from '@/components/sections/FAQSection';
import { contactFAQs } from '@/data/faqs';
import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description:
    "Prenez rendez-vous pour un diagnostic gratuit de vos besoins en automatisation IA. Echange de 30 minutes sans engagement pour evaluer vos opportunites.",
  path: '/contact',
});

// TODO: Replace with your actual Calendly URL
const CALENDLY_URL = 'https://calendly.com/agentscium/diagnostic';

export default function ContactPage() {
  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Accueil', url: 'https://agentscium.com' },
              { name: 'Contact', url: 'https://agentscium.com/contact' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#223382] mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-[#111144]/70">
              Prenez rendez-vous pour un diagnostic gratuit de 30 minutes.
              Nous analyserons ensemble vos besoins en automatisation IA.
            </p>
          </div>
        </Container>
      </section>

      {/* Calendly Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#223382] mb-6">
                Diagnostic gratuit
              </h2>
              <p className="text-[#111144]/70 mb-8">
                Lors de cet echange de 30 minutes, nous aborderons :
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#9AD1C8]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#223382]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#223382]">Vos processus actuels</h3>
                    <p className="text-sm text-[#111144]/60">Comprendre votre fonctionnement et vos outils</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#9AD1C8]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#223382]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#223382]">Opportunites d'automatisation</h3>
                    <p className="text-sm text-[#111144]/60">Identifier les quick wins et les projets a fort impact</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#9AD1C8]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#223382]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#223382]">Estimation du ROI</h3>
                    <p className="text-sm text-[#111144]/60">Evaluer le retour sur investissement potentiel</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#9AD1C8]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#223382]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#223382]">Prochaines etapes</h3>
                    <p className="text-sm text-[#111144]/60">Definir un plan d'action concret</p>
                  </div>
                </li>
              </ul>

              {/* Contact Info */}
              <div className="border-t border-[#9BACD8]/30 pt-8">
                <h3 className="font-medium text-[#223382] mb-4">Autres moyens de contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:contact@agentscium.com"
                    className="flex items-center gap-3 text-[#111144]/70 hover:text-[#F98513] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@agentscium.com
                  </a>
                  <a
                    href="https://linkedin.com/company/agentscium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#111144]/70 hover:text-[#F98513] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly */}
            <div className="lg:col-span-2">
              <CalendlyWidget url={CALENDLY_URL} height="700px" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Questions frequentes"
        subtitle="Tout savoir sur notre processus de contact"
        faqs={contactFAQs}
      />
    </>
  );
}
