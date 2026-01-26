'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { guarantees } from '@/data/guarantees';

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const icons = [<ShieldIcon key="shield" />, <ClockIcon key="clock" />, <TrendingUpIcon key="trending" />];
const rotations = [-3, 2, -2];
const colors = ['#F98513', '#9BACD8', '#9AD1C8'];

export default function GuaranteesSection() {
  return (
    <section id="garanties" className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionTitle
          title="Nos Engagements"
          subtitle="Ce qui fait la difference Agentscium"
        />

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.id}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: rotations[index]
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative w-full md:w-80"
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-xl border-2 transition-shadow duration-300 hover:shadow-2xl"
                style={{ borderColor: colors[index] }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${colors[index]}20`, color: colors[index] }}
                >
                  {icons[index]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#223382] mb-3">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-[#111144]/70 text-sm leading-relaxed">
                  {guarantee.description}
                </p>

                {/* Decorative corner */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${colors[index]} 0%, transparent 60%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
