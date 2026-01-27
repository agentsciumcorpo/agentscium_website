'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import { getWorkflowBySlug, workflows, difficultyColors } from '@/data/workflows';
import { notFound } from 'next/navigation';

// Icons
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function WorkflowDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  const otherWorkflows = workflows.filter((w) => w.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#111144]/60 mb-8">
              <Link href="/" className="hover:text-[#F98513]">Accueil</Link>
              <span>/</span>
              <Link href="/workflows" className="hover:text-[#F98513]">Workflows</Link>
              <span>/</span>
              <span className="text-[#223382] truncate">{workflow.title}</span>
            </nav>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{workflow.categoryLabel}</Badge>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[workflow.difficulty]}`}>
                {workflow.difficultyLabel}
              </span>
              <span className="flex items-center gap-1 text-[#111144]/50">
                <ClockIcon />
                {workflow.estimatedTime}
              </span>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#223382] mb-6"
            >
              {workflow.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#111144]/70 mb-8"
            >
              {workflow.description}
            </motion.p>

            {/* Tools */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-[#111144]/60">Outils :</span>
              {workflow.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-white border border-[#223382]/20 rounded-full text-sm text-[#223382]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Download button */}
            {workflow.downloadUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href={workflow.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F98513] text-white font-medium rounded-xl hover:bg-[#e07610] transition-colors shadow-lg shadow-[#F98513]/25"
                >
                  <DownloadIcon />
                  Telecharger le workflow (.json)
                </a>
              </motion.div>
            )}

            {/* Author & Date */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#223382]/10">
              <div className="w-12 h-12 rounded-full bg-[#9AD1C8] flex items-center justify-center">
                <span className="text-[#223382] font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-medium text-[#223382]">Equipe Agentscium</p>
                <p className="text-sm text-[#111144]/60">
                  Experts en automatisation &bull;{' '}
                  {new Date(workflow.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <Container>
          <article className="max-w-3xl mx-auto">
            <MarkdownRenderer content={workflow.content} />
          </article>
        </Container>
      </section>

      {/* Share & Back */}
      <section className="py-8 bg-[#F4F1EC]">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4">
            {workflow.downloadUrl && (
              <a
                href={workflow.downloadUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F98513] text-white font-medium rounded-lg hover:bg-[#e07610] transition-colors"
              >
                <DownloadIcon />
                Telecharger
              </a>
            )}
            <Button href="/workflows" variant="outline">
              &larr; Retour aux workflows
            </Button>
          </div>
        </Container>
      </section>

      {/* Related Workflows */}
      {otherWorkflows.length > 0 && (
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-2xl font-bold text-[#223382] text-center mb-12">
              Autres workflows
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherWorkflows.map((w) => (
                <Link key={w.slug} href={`/workflows/${w.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#F4F1EC] rounded-2xl p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{w.categoryLabel}</Badge>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[w.difficulty]}`}>
                        {w.difficultyLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#223382] mb-2">{w.title}</h3>
                    <p className="text-[#111144]/70 text-sm mb-4 line-clamp-2">{w.description}</p>
                    <span className="text-[#F98513] font-medium hover:underline">
                      Voir le workflow &rarr;
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#223382]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin d'aide pour installer ce workflow ?
            </h2>
            <p className="text-white/70 mb-8">
              Notre equipe peut vous aider a l'adapter a vos besoins specifiques.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Demander un accompagnement
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
