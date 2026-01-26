'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#F4F1EC] to-[#9BACD8]/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F98513]/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F98513]/10 text-[#F98513] text-sm font-semibold mb-6">
              Prêt à automatiser ?
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#223382] mb-6"
          >
            Transformez votre business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F98513] to-[#9BACD8]">
              dès aujourd&apos;hui
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#111144]/70 mb-8"
          >
            Bénéficiez d&apos;un audit gratuit et découvrez comment l&apos;IA peut révolutionner
            vos processus. Sans engagement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button href="mailto:contact@agentscium.com" variant="primary" size="lg">
              Obtenir un audit gratuit
            </Button>
            <Button href="#cas-usage" variant="outline" size="lg">
              Voir nos études de cas
            </Button>
          </motion.div>

          {/* Trust elements */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#111144]/60"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9AD1C8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Audit 100% gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9AD1C8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9AD1C8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Réponse sous 24h</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
