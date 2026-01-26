'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/home/CTASection';
import { accompagnementSteps, servicesDetail } from '@/data/services-detail';
import { serviceFAQs } from '@/data/faqs';

const service = servicesDetail['accompagnement'];

// Icons
const icons: Record<string, React.ReactNode> = {
  search: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  book: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  cog: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  map: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
};

const colors = ['#F98513', '#9BACD8', '#9AD1C8', '#F98513', '#9BACD8', '#9AD1C8'];

export default function AccompagnementPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#111144]/60 mb-8">
              <Link href="/" className="hover:text-[#F98513]">Accueil</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#F98513]">Services</Link>
              <span>/</span>
              <span className="text-[#223382]">{service.title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#9AD1C8] to-[#223382] rounded-xl flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#223382]">
                  {service.title}
                </h1>
                <p className="text-xl text-[#9AD1C8] font-medium">{service.subtitle}</p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#111144]/70 mb-8"
            >
              {service.longDescription}
            </motion.p>

            {/* Timeline overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#223382] text-white rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <div className="text-white/60 text-sm">Duree totale du programme</div>
                <div className="text-3xl font-bold">3 mois</div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                {accompagnementSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: colors[idx] }}
                    >
                      {idx + 1}
                    </div>
                    {idx < accompagnementSteps.length - 1 && (
                      <div className="w-8 h-0.5 bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Zigzag Steps Section */}
      <section ref={containerRef} className="py-20 bg-white overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto">
            {accompagnementSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={step.id} className="relative">
                  {/* Connecting line */}
                  {index < accompagnementSteps.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full h-20 z-0">
                      <svg className="w-40 h-20" viewBox="0 0 160 80">
                        <motion.path
                          d={isLeft
                            ? "M 80 0 Q 140 40 80 80"
                            : "M 80 0 Q 20 40 80 80"
                          }
                          fill="none"
                          stroke={colors[index]}
                          strokeWidth="3"
                          strokeDasharray="8 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8 }}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Step content */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`flex items-center gap-8 mb-28 ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content card */}
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border-2 inline-block max-w-md"
                        style={{ borderColor: colors[index] }}
                      >
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span
                            className="px-3 py-1 rounded-full text-white text-sm font-bold"
                            style={{ backgroundColor: colors[index] }}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#223382] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[#111144]/70">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="relative z-10 flex-shrink-0"
                    >
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg"
                        style={{ backgroundColor: colors[index] }}
                      >
                        {icons[step.icon]}
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: '#223382' }}
                      >
                        {index + 1}
                      </div>
                    </motion.div>

                    {/* Empty space for layout */}
                    <div className="flex-1" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[#111144]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12"
            >
              A la fin du programme
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '100%', label: 'Equipes formees', color: '#F98513' },
                { value: '+40%', label: 'Productivite gagnee', color: '#9BACD8' },
                { value: '1 an', label: 'Roadmap claire', color: '#9AD1C8' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 rounded-2xl p-8"
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-[#F4F1EC]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#223382] text-center mb-12">
              Ce qui est inclus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-10 h-10 bg-[#9AD1C8]/20 rounded-lg flex items-center justify-center text-[#223382]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#111144] font-medium">{deliverable.item}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions sur l'Accompagnement"
        faqs={serviceFAQs}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
