'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CTASection from '@/components/home/CTASection';
import { caseStudies, clientLogos } from '@/data/case-studies';

// Icons
const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Company Logos
const CompanyLogos: Record<string, React.FC<{ className?: string }>> = {
  'menuiserie-kermene': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#F98513" />
      <path d="M12 36V16L24 8L36 16V36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 36V26H28V36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 20H20M28 20H32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  'nettoyage-du-poher': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9BACD8" />
      <circle cx="24" cy="20" r="8" stroke="white" strokeWidth="2.5" />
      <path d="M16 32C16 32 18 28 24 28C30 28 32 32 32 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 14L34 10M34 14L30 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'armortech-metal': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9AD1C8" />
      <path d="M24 10L38 18V30L24 38L10 30V18L24 10Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 10V38M10 18L38 30M38 18L10 30" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
    </svg>
  ),
  'celtik-pack': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#F98513" />
      <rect x="12" y="14" width="24" height="20" rx="2" stroke="white" strokeWidth="2.5" />
      <path d="M12 20H36" stroke="white" strokeWidth="2.5" />
      <path d="M20 20V34M28 20V34" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="24" cy="17" r="1.5" fill="white" />
    </svg>
  ),
  'montreal-micromeca': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9BACD8" />
      <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="white" />
      <path d="M24 8V12M24 36V40M8 24H12M36 24H40" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'nordfroid-systems': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9AD1C8" />
      <path d="M24 8V40M16 12L24 20L32 12M16 36L24 28L32 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 24H38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2" />
    </svg>
  ),
  'triskel-growth': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#6366F1" />
      <path d="M12 32L20 24L28 28L36 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="16" r="3" fill="white" />
      <path d="M12 12V36H36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  ),
  'atelier-northstar': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#EC4899" />
      <path d="M24 10L28 18H36L30 24L32 32L24 27L16 32L18 24L12 18H20L24 10Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="white" fillOpacity="0.2" />
    </svg>
  ),
  'immopulse-media': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#14B8A6" />
      <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2.5" />
      <path d="M26 26L34 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 18L36 14M36 18L32 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="16" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  ),
};

export default function ClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#223382] mb-6"
            >
              Ils nous font confiance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#111144]/70 mb-12"
            >
              Des entreprises industrielles qui ont automatise leurs process avec Agentscium
            </motion.p>

            {/* Social Proof Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-[#F98513]">+10</div>
                <div className="text-[#111144]/60 text-sm">Clients accompagnes</div>
              </div>
              <div className="w-px h-12 bg-[#223382]/10" />
              <div className="text-center">
                <div className="text-5xl font-bold text-[#223382]">100%</div>
                <div className="text-[#111144]/60 text-sm">Satisfaits</div>
              </div>
              <div className="w-px h-12 bg-[#223382]/10" />
              <div className="text-center">
                <div className="text-5xl font-bold text-[#9AD1C8]">2 mois</div>
                <div className="text-[#111144]/60 text-sm">ROI moyen</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Logos Carousel */}
      <section className="py-8 bg-white border-b border-[#223382]/10 overflow-hidden">
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-[#F4F1EC] rounded-lg text-[#223382] font-semibold whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/clients/${study.slug}`}>
                  <div
                    className={`relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-[#F4F1EC]' : 'bg-white border-2 border-[#223382]/10'
                    }`}
                  >
                    <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Left - Content */}
                      <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="px-3 py-1 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: study.color }}
                          >
                            {study.sectorLabel}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#223382]/10 text-[#223382] text-sm font-medium">
                            {study.serviceType === 'quick-wins' ? 'Quick Wins' : 'Infrastructure IA'}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                          {CompanyLogos[study.slug] && (
                            <div className="flex-shrink-0">
                              {(() => {
                                const LogoComponent = CompanyLogos[study.slug];
                                return <LogoComponent className="w-12 h-12" />;
                              })()}
                            </div>
                          )}
                          <h2 className="text-2xl md:text-3xl font-bold text-[#223382]">
                            {study.client}
                          </h2>
                        </div>
                        <div className="flex items-center gap-1 text-[#111144]/60 text-sm mb-4">
                          <MapPinIcon />
                          {study.location}
                        </div>

                        <p
                          className="text-lg font-medium mb-4"
                          style={{ color: study.color }}
                        >
                          {study.tagline}
                        </p>

                        <p className="text-[#111144]/70 mb-6">
                          {study.challenge}
                        </p>

                        {/* Results preview */}
                        <div className="flex gap-6 mb-6">
                          {study.results.slice(0, 2).map((result, i) => (
                            <div key={i}>
                              <div className="text-2xl font-bold text-[#223382]">{result.value}</div>
                              <div className="text-sm text-[#111144]/60">{result.metric}</div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
                          style={{ color: study.color }}
                        >
                          Voir le projet <ArrowRightIcon />
                        </div>
                      </div>

                      {/* Right - Visual */}
                      <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div
                          className="h-full min-h-[250px] rounded-2xl p-6 flex items-center justify-center"
                          style={{ backgroundColor: `${study.color}15` }}
                        >
                          {/* Dynamic illustration based on designStyle */}
                          {study.designStyle === 'dashboard' && (
                            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-4">
                              <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-red-400 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                <div className="w-3 h-3 bg-green-400 rounded-full" />
                              </div>
                              <div className="grid grid-cols-3 gap-2 mb-3">
                                <div className="bg-[#F4F1EC] rounded-lg p-2 text-center">
                                  <div className="text-lg font-bold text-[#223382]">247</div>
                                  <div className="text-xs text-[#111144]/60">Clients</div>
                                </div>
                                <div className="bg-[#F4F1EC] rounded-lg p-2 text-center">
                                  <div className="text-lg font-bold text-[#F98513]">+12%</div>
                                  <div className="text-xs text-[#111144]/60">Prod</div>
                                </div>
                                <div className="bg-[#F4F1EC] rounded-lg p-2 text-center">
                                  <div className="text-lg font-bold text-[#9AD1C8]">89</div>
                                  <div className="text-xs text-[#111144]/60">Devis</div>
                                </div>
                              </div>
                              <div className="h-16 bg-gradient-to-r from-[#F98513]/20 to-[#F98513]/5 rounded-lg" />
                            </div>
                          )}

                          {study.designStyle === 'chat' && (
                            <div className="w-full max-w-sm bg-[#111144] rounded-xl p-4">
                              <div className="space-y-3">
                                <div className="flex justify-start">
                                  <div className="bg-white/10 text-white text-sm rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%]">
                                    Bonjour, je cherche un devis pour...
                                  </div>
                                </div>
                                <div className="flex justify-end">
                                  <div className="text-white text-sm rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]" style={{ backgroundColor: study.color }}>
                                    Bien sur ! Pour quel type de prestation ?
                                  </div>
                                </div>
                                <div className="flex justify-start">
                                  <div className="bg-white/10 text-white text-sm rounded-2xl rounded-bl-md px-4 py-2">
                                    Nettoyage bureaux 500m2
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {study.designStyle === 'workflow' && (
                            <div className="flex items-center gap-3">
                              {['Mail', 'Tri', 'Fiche', 'Notif'].map((step, i) => (
                                <div key={i} className="flex items-center">
                                  <div className="w-14 h-14 bg-white rounded-xl shadow flex items-center justify-center text-xs font-medium text-[#223382]">
                                    {step}
                                  </div>
                                  {i < 3 && (
                                    <div className="w-6 h-0.5" style={{ backgroundColor: study.color }} />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {study.designStyle === 'terminal' && (
                            <div className="w-full max-w-sm bg-[#1a1a2e] rounded-xl p-4 font-mono text-sm">
                              <div className="text-green-400 mb-2">$ analyse-bat rapport_v3.pdf</div>
                              <div className="text-white/60 mb-1">Verification mentions legales... OK</div>
                              <div className="text-white/60 mb-1">Verification EAN... OK</div>
                              <div className="text-white/60 mb-1">Verification format... OK</div>
                              <div className="text-green-400 mt-2">Resultat: VALIDE</div>
                            </div>
                          )}

                          {study.designStyle === 'metrics' && (
                            <div className="w-full max-w-sm">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white rounded-xl p-4 text-center shadow">
                                  <div className="text-2xl font-bold" style={{ color: study.color }}>-35%</div>
                                  <div className="text-xs text-[#111144]/60">Rebuts</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center shadow">
                                  <div className="text-2xl font-bold text-green-500">98.2%</div>
                                  <div className="text-xs text-[#111144]/60">Conformite</div>
                                </div>
                              </div>
                              <div className="bg-white rounded-xl p-3 mt-3 shadow">
                                <div className="h-12 flex items-end gap-1">
                                  {[40, 35, 45, 30, 25, 20, 18].map((h, i) => (
                                    <div
                                      key={i}
                                      className="flex-1 rounded-t"
                                      style={{ height: `${h}%`, backgroundColor: study.color }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {study.designStyle === 'timeline' && (
                            <div className="w-full max-w-sm space-y-3">
                              {['Diagnostic', 'Formation', 'Deploy'].map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                    style={{ backgroundColor: study.color }}
                                  >
                                    {i + 1}
                                  </div>
                                  <div className="flex-1 bg-white rounded-lg px-4 py-2 shadow">
                                    <span className="font-medium text-[#223382]">{step}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial preview */}
                    {study.testimonial && (
                      <div className="px-8 pb-8">
                        <div className="bg-white rounded-xl p-4 border-l-4" style={{ borderColor: study.color }}>
                          <p className="text-[#111144]/80 italic mb-2">
                            &ldquo;{study.testimonial.quote}&rdquo;
                          </p>
                          <p className="text-sm text-[#111144]/60">
                            <span className="font-semibold text-[#223382]">{study.testimonial.author}</span>, {study.testimonial.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
