'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { offers } from '@/data/offers';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// Icons
const ZapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  zap: <ZapIcon />,
  cpu: <CpuIcon />,
};

const colorClasses: Record<string, string> = {
  'jodhpur-tan': 'bg-[#9AD1C8]',
  'aster-blue': 'bg-[#9BACD8]',
};

export default function OffersSection() {
  return (
    <section id="offres" className="py-24 bg-white">
      <Container>
        <SectionTitle
          title="Nos 2 Offres Principales"
          subtitle="Des solutions adaptées à chaque étape de votre transformation digitale"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={fadeInUp}
              className="group relative bg-[#F4F1EC] rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 ${colorClasses[offer.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 ${colorClasses[offer.color]} rounded-2xl flex items-center justify-center text-white mb-6`}>
                {icons[offer.icon]}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#223382] mb-2">
                {offer.title}
              </h3>
              <p className="text-[#F98513] font-semibold mb-4">
                {offer.subtitle}
              </p>

              {/* Description */}
              <p className="text-[#111144]/70 mb-6">
                {offer.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {offer.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#F98513] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#111144]">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button href="#contact" variant="outline">
                {offer.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
