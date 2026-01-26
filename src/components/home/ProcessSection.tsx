'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/process';

// Icons
const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PenToolIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  search: <SearchIcon />,
  'pen-tool': <PenToolIcon />,
  code: <CodeIcon />,
  rocket: <RocketIcon />,
  activity: <ActivityIcon />,
};

// Curved SVG path connecting steps (right to left direction)
const CurvedPath = ({ index, isVisible }: { index: number; isVisible: boolean }) => {
  const isEven = index % 2 === 0;

  return (
    <svg
      className="absolute top-1/2 -translate-y-1/2 w-full h-24 pointer-events-none"
      style={{ left: 0 }}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d={isEven
          ? "M 0 50 Q 100 0 200 50"
          : "M 0 50 Q 100 100 200 50"
        }
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F98513" />
          <stop offset="50%" stopColor="#9BACD8" />
          <stop offset="100%" stopColor="#9AD1C8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="processus" className="py-24 bg-[#111144] relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F98513] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9BACD8] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Comment ca marche ?"
          subtitle="Un processus eprouve pour des resultats garantis"
          className="text-white [&_h2]:text-white [&_p]:text-[#9BACD8]"
        />

        <div className="mt-16">
          {/* Desktop Timeline - Vertical with alternating sides */}
          <div className="hidden md:block max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={step.id} className="relative">
                  {/* Curved connector to next step */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-32 h-20 z-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 120 80"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d={isLeft
                            ? "M 60 0 Q 100 40 60 80"
                            : "M 60 0 Q 20 40 60 80"
                          }
                          fill="none"
                          stroke="url(#processGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="8 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: isInView ? 1 : 0,
                            opacity: isInView ? 1 : 0
                          }}
                          transition={{ duration: 0.6, delay: index * 0.4 + 0.5 }}
                        />
                        <defs>
                          <linearGradient id="processGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#F98513" />
                            <stop offset="100%" stopColor="#9BACD8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}

                  {/* Step row */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : (isLeft ? -50 : 50)
                    }}
                    transition={{ duration: 0.6, delay: index * 0.4 }}
                    className={`flex items-center gap-8 mb-20 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className="bg-[#F98513] text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                        Etape {step.id}
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#9BACD8] text-sm max-w-xs inline-block">
                        {step.description}
                      </p>
                    </div>

                    {/* Center icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.4 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="relative z-10"
                    >
                      <div className="w-16 h-16 bg-[#223382] rounded-full flex items-center justify-center text-white border-4 border-[#F98513] shadow-lg shadow-[#F98513]/30">
                        {icons[step.icon]}
                      </div>
                    </motion.div>

                    {/* Empty space for alignment */}
                    <div className="flex-1" />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 30
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                {/* Icon and line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                    className="w-12 h-12 bg-[#223382] rounded-full flex items-center justify-center text-white border-2 border-[#F98513]"
                  >
                    {icons[step.icon]}
                  </motion.div>
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: isInView ? 64 : 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-0.5 bg-gradient-to-b from-[#F98513] to-[#9BACD8] my-2"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="bg-[#F98513] text-white text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-2">
                    Etape {step.id}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#9BACD8] text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
