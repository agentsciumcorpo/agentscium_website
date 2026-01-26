'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/home/CTASection';
import { servicesOverview } from '@/data/services-detail';
import { serviceFAQs } from '@/data/faqs';

// Icons for services
const ZapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" strokeWidth="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" strokeWidth="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" strokeWidth="2" />
    <line x1="6" x2="6.01" y1="18" y2="18" strokeWidth="2" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const icons = [<ZapIcon key="zap" />, <ServerIcon key="server" />, <UsersIcon key="users" />];
const rotations = [-8, 0, 8];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#223382] mb-6"
            >
              Nos Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#111144]/70"
            >
              Trois approches pour integrer l&apos;IA dans votre entreprise
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services Cards - Fan Layout */}
      <section className="py-20 bg-white overflow-hidden">
        <Container>
          <div className="flex justify-center items-end gap-[-20px] md:gap-4 perspective-1000">
            {servicesOverview.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: rotations[index],
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -30,
                  rotate: 0,
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                className="relative"
                style={{ zIndex: index === 1 ? 2 : 1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div
                    className="w-72 md:w-80 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer border-2"
                    style={{ borderColor: service.color }}
                  >
                    {/* Header with color */}
                    <div
                      className="h-32 flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: service.color, color: 'white' }}
                      >
                        {icons[index]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-[#223382] mb-1">
                        {service.title}
                      </h2>
                      <p
                        className="text-sm font-medium mb-4"
                        style={{ color: service.color }}
                      >
                        {service.subtitle}
                      </p>
                      <p className="text-[#111144]/70 text-sm mb-6 min-h-[60px]">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[#111144]">
                            <svg
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: service.color }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div
                        className="w-full py-3 rounded-xl text-center font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: service.color }}
                      >
                        {service.cta}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Questions frequentes"
        subtitle="Tout ce que vous devez savoir sur nos services"
        faqs={serviceFAQs}
      />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
