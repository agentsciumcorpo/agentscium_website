'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/home/CTASection';
import { infrastructureSteps, servicesDetail } from '@/data/services-detail';
import { systemesIAFAQs } from '@/data/faqs';

const service = servicesDetail['infrastructure-ia'];

// N8N Workflow Demo
const N8NDemo = () => (
  <div className="bg-[#1a1a2e] rounded-2xl p-6 h-full">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 bg-[#FF6D5A] rounded-lg flex items-center justify-center text-white font-bold text-xs">n8n</div>
      <span className="text-white/60 text-sm">Workflow - Synchronisation CRM</span>
    </div>
    <div className="flex items-center justify-between gap-4">
      {/* Nodes */}
      {['Webhook', 'Transform', 'Filter', 'Supabase', 'Slack'].map((node, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.15 }}
          className="flex flex-col items-center"
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xs font-medium ${
            idx === 0 ? 'bg-purple-500' :
            idx === 1 ? 'bg-blue-500' :
            idx === 2 ? 'bg-yellow-500' :
            idx === 3 ? 'bg-green-500' :
            'bg-pink-500'
          }`}>
            {node.slice(0, 2)}
          </div>
          <span className="text-white/40 text-xs mt-2">{node}</span>
        </motion.div>
      ))}
    </div>
    {/* Connection lines */}
    <svg className="w-full h-4 mt-[-30px] mb-4" viewBox="0 0 400 20">
      <motion.path
        d="M 40 10 L 90 10 M 110 10 L 160 10 M 180 10 L 230 10 M 250 10 L 300 10"
        stroke="#FF6D5A"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
    <div className="bg-white/5 rounded-xl p-4 mt-4">
      <div className="flex justify-between text-sm">
        <span className="text-white/60">Executions aujourd&apos;hui</span>
        <span className="text-green-400 font-bold">1,247</span>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <span className="text-white/60">Taux de succes</span>
        <span className="text-green-400 font-bold">99.8%</span>
      </div>
    </div>
  </div>
);

// Supabase Demo
const SupabaseDemo = () => (
  <div className="bg-[#1a1a2e] rounded-2xl p-6 h-full">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 bg-[#3ECF8E] rounded-lg flex items-center justify-center text-white font-bold text-xs">SB</div>
      <span className="text-white/60 text-sm">Database - Tables</span>
    </div>
    <div className="space-y-3">
      {[
        { name: 'clients', rows: '2,847', color: '#3ECF8E' },
        { name: 'commandes', rows: '12,456', color: '#9BACD8' },
        { name: 'produits', rows: '847', color: '#F98513' },
        { name: 'factures', rows: '8,234', color: '#9AD1C8' },
      ].map((table, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-center justify-between bg-white/5 rounded-lg p-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: table.color }} />
            <span className="text-white text-sm font-mono">{table.name}</span>
          </div>
          <span className="text-white/40 text-xs">{table.rows} rows</span>
        </motion.div>
      ))}
    </div>
    <div className="mt-4 bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 rounded-xl p-4">
      <div className="text-[#3ECF8E] text-xs font-medium mb-1">API Ready</div>
      <code className="text-white/60 text-xs">GET /rest/v1/clients?limit=10</code>
    </div>
  </div>
);

// Dashboard Demo
const DashboardDemo = () => (
  <div className="bg-[#0f1629] rounded-2xl overflow-hidden h-full">
    <div className="bg-[#1a2234] px-4 py-2 flex items-center gap-2">
      <div className="w-3 h-3 bg-red-500 rounded-full" />
      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />
    </div>
    <div className="p-4">
      {/* Mini KPIs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: 'CA', value: '127K', change: '+12%' },
          { label: 'Clients', value: '2,847', change: '+8%' },
          { label: 'Commandes', value: '456', change: '+23%' },
        ].map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 rounded-lg p-3"
          >
            <div className="text-white/40 text-xs">{kpi.label}</div>
            <div className="text-white font-bold">{kpi.value}</div>
            <div className="text-green-400 text-xs">{kpi.change}</div>
          </motion.div>
        ))}
      </div>
      {/* Mini chart */}
      <div className="bg-white/5 rounded-lg p-3">
        <svg className="w-full h-16" viewBox="0 0 200 60">
          <motion.path
            d="M 0 50 Q 30 45 50 35 T 100 30 T 150 20 T 200 15"
            fill="none"
            stroke="#F98513"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F98513" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F98513" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

const demos = {
  automatisation: <N8NDemo />,
  database: <SupabaseDemo />,
  interface: <DashboardDemo />,
};

export default function InfrastructureIAPage() {
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#9BACD8] to-[#223382] rounded-xl flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" strokeWidth="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#223382]">
                  {service.title}
                </h1>
                <p className="text-xl text-[#9BACD8] font-medium">{service.subtitle}</p>
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

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {infrastructureSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-8 items-center mb-20 last:mb-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-[#9BACD8] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <div className="bg-[#F4F1EC] px-3 py-1 rounded-full text-sm text-[#223382] font-medium">
                      {step.tool}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-[#223382] mb-2">
                    {step.title}
                  </h2>
                  <p className="text-lg text-[#9BACD8] font-medium mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-[#111144]/70 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#111144]">
                        <svg className="w-5 h-5 text-[#9AD1C8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Demo */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  {demos[step.id as keyof typeof demos]}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Connection visual */}
      <section className="py-12 bg-[#111144]">
        <Container>
          <div className="flex items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-[#FF6D5A] rounded-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold">n8n</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-[#FF6D5A] to-[#3ECF8E]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-20 h-20 bg-[#3ECF8E] rounded-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">Supabase</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-[#3ECF8E] to-[#F98513]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-20 h-20 bg-[#F98513] rounded-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold text-xs">Dashboard</span>
            </motion.div>
          </div>
          <p className="text-white/60 text-center mt-6">
            Une infrastructure complete, connectee et scalable
          </p>
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
                  <div className="w-10 h-10 bg-[#9BACD8]/20 rounded-lg flex items-center justify-center text-[#223382]">
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
        title="Questions sur l'Infrastructure IA"
        faqs={systemesIAFAQs}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
