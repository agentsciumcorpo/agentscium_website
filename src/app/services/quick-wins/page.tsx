'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/home/CTASection';
import { quickWinsItems, servicesDetail } from '@/data/services-detail';
import { quickWinsFAQs } from '@/data/faqs';

// Icons
const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CogIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const icons = {
  chatbot: <ChatIcon />,
  'agent-ia': <BrainIcon />,
  automatisation: <CogIcon />,
};

const service = servicesDetail['quick-wins'];

export default function QuickWinsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % quickWinsItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + quickWinsItems.length) % quickWinsItems.length);
  };

  const activeItem = quickWinsItems[activeIndex];

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
              <div className="w-16 h-16 bg-gradient-to-br from-[#F98513] to-[#223382] rounded-xl flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#223382]">
                  {service.title}
                </h1>
                <p className="text-xl text-[#F98513] font-medium">{service.subtitle}</p>
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
          </div>
        </Container>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <Container>
          {/* Navigation tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {quickWinsItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#F98513] text-white shadow-lg'
                    : 'bg-[#F4F1EC] text-[#223382] hover:bg-[#F98513]/10'
                }`}
              >
                {icons[item.id as keyof typeof icons]}
                <span className="hidden md:inline">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Carousel content */}
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#223382] hover:bg-[#F98513] hover:text-white transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-[#223382] hover:bg-[#F98513] hover:text-white transition-colors"
            >
              <ChevronRightIcon />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Left - Info */}
                <div className="bg-[#F4F1EC] rounded-3xl p-8">
                  <div className="w-14 h-14 bg-[#F98513] rounded-xl flex items-center justify-center text-white mb-6">
                    {icons[activeItem.id as keyof typeof icons]}
                  </div>
                  <h2 className="text-3xl font-bold text-[#223382] mb-4">
                    {activeItem.title}
                  </h2>
                  <p className="text-[#111144]/70 mb-6">
                    {activeItem.description}
                  </p>
                  <ul className="space-y-3">
                    {activeItem.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#111144]">
                        <svg className="w-5 h-5 text-[#9AD1C8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - Demo */}
                <div className="bg-[#111144] rounded-3xl p-6 min-h-[400px]">
                  {activeItem.demo.type === 'chat' && (
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="ml-2 text-white/40 text-sm">Chat Demo</span>
                      </div>
                      <div className="space-y-4">
                        {activeItem.demo.messages?.map((msg, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.3 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                                msg.role === 'user'
                                  ? 'bg-[#F98513] text-white'
                                  : 'bg-white/10 text-white'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeItem.demo.type === 'agent' && (
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="ml-2 text-white/40 text-sm">Agent IA - Taches en cours</span>
                      </div>
                      <div className="space-y-4">
                        {activeItem.demo.tasks?.map((task, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium">{task.name}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                task.status === 'completed'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-[#F98513]/20 text-[#F98513]'
                              }`}>
                                {task.status === 'completed' ? 'Termine' : 'En cours'}
                              </span>
                            </div>
                            <p className="text-white/60 text-sm">{task.result}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeItem.demo.type === 'workflow' && (
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="ml-2 text-white/40 text-sm">Workflow automatise</span>
                      </div>
                      <div className="flex items-center justify-between py-8">
                        {activeItem.demo.steps?.map((step, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col items-center"
                          >
                            <div className="w-14 h-14 bg-[#F98513] rounded-xl flex items-center justify-center text-white mb-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white text-xs text-center">{step.name}</span>
                            {idx < (activeItem.demo.steps?.length || 0) - 1 && (
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 40 }}
                                transition={{ delay: idx * 0.2 + 0.3 }}
                                className="absolute h-0.5 bg-[#F98513]"
                                style={{ left: `calc(${(idx + 0.5) * 25}% + 28px)`, top: '50%' }}
                              />
                            )}
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-8 bg-white/5 rounded-xl p-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Temps economise</span>
                          <span className="text-[#9AD1C8] font-bold">4h/jour</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {quickWinsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#F98513] w-8' : 'bg-[#223382]/20'
                  }`}
                />
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
        title="Questions sur les Quick Wins"
        faqs={quickWinsFAQs}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
