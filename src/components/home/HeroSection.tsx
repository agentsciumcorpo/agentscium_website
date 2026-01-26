'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F4F1EC] via-[#F4F1EC] to-[#9BACD8]/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#F98513]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#9BACD8]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9AD1C8]/10 rounded-full blur-3xl" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#223382 1px, transparent 1px), linear-gradient(90deg, #223382 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#223382]/10 text-[#223382] text-sm font-medium">
              <span className="w-2 h-2 bg-[#F98513] rounded-full mr-2 animate-pulse" />
              Agence d&apos;automatisation IA sur-mesure
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#223382] mb-6 leading-tight"
          >
            Automatisez votre business avec{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F98513] to-[#9BACD8]">
              l&apos;IA sur-mesure
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-[#111144]/70 mb-8 max-w-2xl mx-auto"
          >
            Systèmes d&apos;automatisation IA pour PME industrielles, BTP et agences.{' '}
            <span className="text-[#F98513] font-semibold">Rentable en 2 mois.</span>{' '}
            Disponible 24/7.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#contact" variant="primary" size="lg">
              Obtenir un diagnostic gratuit
            </Button>
            <Button href="#offres" variant="outline" size="lg">
              Découvrir nos solutions
            </Button>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
