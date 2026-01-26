'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { workflows, categoryLabels, difficultyColors, WorkflowCategory } from '@/data/workflows';
import { useState } from 'react';

// Icons
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const N8nLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#EA4B71" />
    <path d="M8 16h4m4 0h4m4 0h4M12 12v8M20 12v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function WorkflowsPage() {
  const [selectedCategory, setSelectedCategory] = useState<WorkflowCategory | 'all'>('all');

  const filteredWorkflows = selectedCategory === 'all'
    ? workflows
    : workflows.filter((w) => w.category === selectedCategory);

  const categories: (WorkflowCategory | 'all')[] = [
    'all',
    'prospection',
    'support-client',
    'marketing',
    'productivite',
    'data',
    'integration',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F4F1EC] to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#EA4B71] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#223382] rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-8"
            >
              <N8nLogo />
              <span className="text-[#223382] font-semibold">Workflows n8n gratuits</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#223382] mb-6"
            >
              Bibliotheque de Workflows
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#111144]/70 mb-8"
            >
              Des workflows n8n prets a l'emploi pour automatiser votre business.
              <br />
              <span className="text-[#F98513] font-medium">100% gratuits, 100% open-source.</span>
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EA4B71]">{workflows.length}</div>
                <div className="text-[#111144]/60 text-sm">Workflows</div>
              </div>
              <div className="w-px h-10 bg-[#223382]/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#223382]">Gratuit</div>
                <div className="text-[#111144]/60 text-sm">Toujours</div>
              </div>
              <div className="w-px h-10 bg-[#223382]/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#9AD1C8]">n8n</div>
                <div className="text-[#111144]/60 text-sm">Compatible</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-[#223382]/10 sticky top-0 z-40">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#223382] text-white shadow-lg'
                    : 'bg-[#F4F1EC] text-[#223382] hover:bg-[#223382]/10'
                }`}
              >
                {cat === 'all' ? 'Tous' : categoryLabels[cat]}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflows Grid */}
      <section className="py-20 bg-white">
        <Container>
          {filteredWorkflows.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorkflows.map((workflow, index) => (
                <motion.div
                  key={workflow.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/workflows/${workflow.slug}`}>
                    <div className="group bg-white rounded-2xl border-2 border-[#223382]/10 overflow-hidden hover:border-[#EA4B71] hover:shadow-xl transition-all duration-300">
                      {/* Header with n8n style */}
                      <div className="h-40 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] p-6 relative overflow-hidden">
                        {/* n8n-style nodes decoration */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-[#EA4B71]" />
                          <div className="absolute top-8 left-20 w-12 h-12 rounded-lg bg-[#9AD1C8]" />
                          <div className="absolute top-4 right-8 w-12 h-12 rounded-lg bg-[#F98513]" />
                          <div className="absolute bottom-4 left-8 w-12 h-12 rounded-lg bg-[#9BACD8]" />
                          <div className="absolute bottom-8 right-4 w-12 h-12 rounded-lg bg-[#223382]" />
                          {/* Connection lines */}
                          <svg className="absolute inset-0 w-full h-full">
                            <line x1="40" y1="28" x2="104" y2="40" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                            <line x1="104" y1="40" x2="180" y2="28" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                            <line x1="56" y1="100" x2="200" y2="80" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
                          </svg>
                        </div>

                        {/* Category badge */}
                        <div className="relative z-10">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                            {workflow.categoryLabel}
                          </span>
                        </div>

                        {/* n8n logo */}
                        <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                          <N8nLogo />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[workflow.difficulty]}`}>
                            {workflow.difficultyLabel}
                          </span>
                          <span className="flex items-center gap-1 text-[#111144]/50 text-sm">
                            <ClockIcon />
                            {workflow.estimatedTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#223382] mb-2 group-hover:text-[#EA4B71] transition-colors">
                          {workflow.title}
                        </h3>

                        <p className="text-[#111144]/70 text-sm mb-4 line-clamp-2">
                          {workflow.description}
                        </p>

                        {/* Tools */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {workflow.tools.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 bg-[#F4F1EC] rounded text-xs text-[#223382]"
                            >
                              {tool}
                            </span>
                          ))}
                          {workflow.tools.length > 3 && (
                            <span className="px-2 py-1 bg-[#F4F1EC] rounded text-xs text-[#223382]">
                              +{workflow.tools.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#223382]/10">
                          <span className="text-[#EA4B71] font-medium text-sm group-hover:underline">
                            Voir le workflow &rarr;
                          </span>
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-[#223382] text-white rounded-lg text-sm hover:bg-[#EA4B71] transition-colors">
                            <DownloadIcon />
                            JSON
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-[#F4F1EC] rounded-full flex items-center justify-center">
                <N8nLogo />
              </div>
              <h3 className="text-2xl font-bold text-[#223382] mb-2">
                Workflows a venir
              </h3>
              <p className="text-[#111144]/60 max-w-md mx-auto">
                Nous preparons de nouveaux workflows pour cette categorie.
                Revenez bientot ou inscrivez-vous pour etre notifie !
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#EA4B71]/20 text-[#EA4B71] px-4 py-2 rounded-full mb-6">
              <N8nLogo />
              <span className="font-medium">Besoin d'un workflow sur mesure ?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              On peut vous aider a automatiser
            </h2>
            <p className="text-white/70 mb-8">
              Nos workflows gratuits ne couvrent pas votre besoin ?
              Contactez-nous pour un workflow personnalise adapte a votre business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#EA4B71] text-white font-medium rounded-xl hover:bg-[#EA4B71]/90 transition-colors shadow-lg shadow-[#EA4B71]/25"
              >
                Demander un workflow sur mesure
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
