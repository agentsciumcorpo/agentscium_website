'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
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

const CopyIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const N8nLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#EA4B71" />
    <path d="M8 16h4m4 0h4m4 0h4M12 12v8M20 12v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function WorkflowDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  const otherWorkflows = workflows.filter((w) => w.slug !== slug).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 mb-6 text-[#111144]/80">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-[#223382] mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-[#223382] mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        currentList.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine.match(/^\d+\.\s/)) {
        flushList();
        elements.push(
          <p key={index} className="text-[#111144]/80 mb-2 pl-4">
            {trimmedLine}
          </p>
        );
      } else if (trimmedLine.startsWith('`') && trimmedLine.endsWith('`')) {
        flushList();
        elements.push(
          <code key={index} className="block bg-[#1a1a2e] text-[#EA4B71] px-4 py-2 rounded-lg mb-4 font-mono text-sm">
            {trimmedLine.replace(/`/g, '')}
          </code>
        );
      } else if (trimmedLine) {
        flushList();
        elements.push(
          <p key={index} className="text-[#111144]/80 mb-4 leading-relaxed">
            {trimmedLine}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#111144]/60 mb-8">
              <Link href="/" className="hover:text-[#EA4B71]">Accueil</Link>
              <span>/</span>
              <Link href="/workflows" className="hover:text-[#EA4B71]">Workflows</Link>
              <span>/</span>
              <span className="text-[#223382]">{workflow.title}</span>
            </nav>

            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <N8nLogo />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#EA4B71]/10 text-[#EA4B71] rounded-full text-sm font-medium">
                    {workflow.categoryLabel}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[workflow.difficulty]}`}>
                    {workflow.difficultyLabel}
                  </span>
                  <span className="flex items-center gap-1 text-[#111144]/60 text-sm">
                    <ClockIcon />
                    {workflow.estimatedTime}
                  </span>
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold text-[#223382] mb-4"
                >
                  {workflow.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-[#111144]/70"
                >
                  {workflow.description}
                </motion.p>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[#111144]/60 text-sm mr-2">Outils utilises :</span>
              {workflow.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-white border border-[#223382]/20 rounded-full text-sm text-[#223382]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-[#EA4B71] text-white font-medium rounded-xl hover:bg-[#EA4B71]/90 transition-colors shadow-lg shadow-[#EA4B71]/25">
                <DownloadIcon />
                Telecharger le workflow (.json)
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#223382] text-white font-medium rounded-xl hover:bg-[#223382]/90 transition-colors">
                <CopyIcon />
                Copier le lien
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="prose prose-lg max-w-none"
                >
                  {renderContent(workflow.content)}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="sticky top-24 space-y-6"
                >
                  {/* Quick info card */}
                  <div className="bg-[#F4F1EC] rounded-2xl p-6">
                    <h3 className="font-bold text-[#223382] mb-4">Informations</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[#111144]/60">Difficulte</span>
                        <span className="font-medium text-[#223382]">{workflow.difficultyLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111144]/60">Temps d'installation</span>
                        <span className="font-medium text-[#223382]">{workflow.estimatedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111144]/60">Categorie</span>
                        <span className="font-medium text-[#223382]">{workflow.categoryLabel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111144]/60">Publie le</span>
                        <span className="font-medium text-[#223382]">
                          {new Date(workflow.publishedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Prerequisites checklist */}
                  <div className="bg-white border-2 border-[#223382]/10 rounded-2xl p-6">
                    <h3 className="font-bold text-[#223382] mb-4">Prerequis</h3>
                    <div className="space-y-3">
                      {workflow.tools.map((tool) => (
                        <div key={tool} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckIcon />
                          </div>
                          <span className="text-[#111144]/80">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Help card */}
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-2xl p-6 text-white">
                    <h3 className="font-bold mb-2">Besoin d'aide ?</h3>
                    <p className="text-white/70 text-sm mb-4">
                      Notre equipe peut vous aider a installer et personnaliser ce workflow.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center px-4 py-2 bg-[#EA4B71] rounded-lg font-medium hover:bg-[#EA4B71]/90 transition-colors"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other workflows */}
      {otherWorkflows.length > 0 && (
        <section className="py-16 bg-[#F4F1EC]">
          <Container>
            <h2 className="text-2xl font-bold text-[#223382] mb-8 text-center">
              Autres workflows
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherWorkflows.map((w) => (
                <Link key={w.slug} href={`/workflows/${w.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-[#EA4B71]/10 text-[#EA4B71] rounded text-xs font-medium">
                        {w.categoryLabel}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[w.difficulty]}`}>
                        {w.difficultyLabel}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#223382] mb-2">{w.title}</h3>
                    <p className="text-sm text-[#111144]/60 line-clamp-2">{w.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/workflows"
                className="inline-flex items-center gap-2 text-[#EA4B71] font-medium hover:underline"
              >
                Voir tous les workflows &rarr;
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
