'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

// Icons
const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const useCases = [
  {
    id: 'chatbot',
    title: 'Chatbot',
    icon: <ChatIcon />,
    color: '#F98513',
    description: 'Un assistant intelligent qui conseille vos clients 24/7',
  },
  {
    id: 'leads',
    title: 'Capture de Leads',
    icon: <TargetIcon />,
    color: '#9BACD8',
    description: 'Qualification et enrichissement automatique de vos prospects',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: <ServerIcon />,
    color: '#9AD1C8',
    description: 'Dashboard de pilotage et reporting automatise',
  },
];

// Chat demo messages for abrasive industrial example
const chatMessages = [
  { role: 'bot', text: 'Bonjour ! Je suis votre assistant specialise en abrasifs industriels. Comment puis-je vous aider ?' },
  { role: 'user', text: 'Je cherche un abrasif pour du meulage sur acier inoxydable' },
  { role: 'bot', text: 'Pour l\'acier inoxydable, je vous recommande nos disques en zirconium grain 60-80. Quelle est l\'epaisseur de la piece a travailler ?' },
  { role: 'user', text: 'Environ 5mm' },
  { role: 'bot', text: 'Parfait ! Pour 5mm d\'inox, le disque ZK60 diametre 125mm sera ideal. Il offre une duree de vie 3x superieure aux abrasifs standards. Voulez-vous un devis ?' },
];

// Leads demo content
const leadsContent = {
  stats: [
    { label: 'Leads captures/mois', value: '+340%' },
    { label: 'Temps de qualification', value: '-85%' },
    { label: 'Taux de conversion', value: '+45%' },
  ],
  features: [
    'Formulaires intelligents adaptatifs',
    'Scoring automatique des prospects',
    'Enrichissement via LinkedIn & bases',
    'Relances personnalisees',
  ],
};

// Dashboard KPIs for marketing agency
const dashboardKPIs = [
  { label: 'Visiteurs', value: '24,847', change: '+12.5%', positive: true, icon: 'users' },
  { label: 'Conversions', value: '1,429', change: '+8.2%', positive: true, icon: 'target' },
  { label: 'Taux rebond', value: '32.4%', change: '-5.1%', positive: true, icon: 'bounce' },
  { label: 'CA Mensuel', value: '47.2K', change: '+18.7%', positive: true, icon: 'euro' },
];

// Chart data points for visitor curve
const visitorData = [
  { day: 'Lun', value: 3200 },
  { day: 'Mar', value: 2800 },
  { day: 'Mer', value: 4100 },
  { day: 'Jeu', value: 3900 },
  { day: 'Ven', value: 4800 },
  { day: 'Sam', value: 3100 },
  { day: 'Dim', value: 2900 },
];

// Conversion funnel data
const funnelData = [
  { stage: 'Visiteurs', value: 24847, percent: 100 },
  { stage: 'Engages', value: 8920, percent: 36 },
  { stage: 'Leads', value: 2156, percent: 9 },
  { stage: 'Clients', value: 428, percent: 2 },
];

// Top campaigns
const topCampaigns = [
  { name: 'Google Ads - Brand', leads: 847, cpa: '12.40', status: 'active' },
  { name: 'Meta - Retargeting', leads: 623, cpa: '8.90', status: 'active' },
  { name: 'LinkedIn - B2B', leads: 412, cpa: '24.50', status: 'active' },
];

// Animated line chart component
const LineChart = ({ data, color }: { data: typeof visitorData; color: string }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d.value - minValue) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `0,100 ${points} 100,100`;

  return (
    <svg className="w-full h-32" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Gradient fill */}
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <motion.polygon
        points={areaPoints}
        fill="url(#chartGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Line */}
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Data points */}
      {data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((d.value - minValue) / range) * 80 - 10;
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
          />
        );
      })}
    </svg>
  );
};

// Mini sparkline component
const Sparkline = ({ trend }: { trend: 'up' | 'down' }) => {
  const points = trend === 'up'
    ? "0,80 20,70 40,75 60,50 80,40 100,20"
    : "0,20 20,30 40,25 60,50 80,60 100,80";

  return (
    <svg className="w-16 h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.polyline
        points={points}
        fill="none"
        stroke={trend === 'up' ? '#22c55e' : '#ef4444'}
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
    </svg>
  );
};

export default function UseCasesSection() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const toggleCase = (id: string) => {
    setActiveCase(activeCase === id ? null : id);
  };

  const renderContent = (id: string) => {
    switch (id) {
      case 'chatbot':
        return (
          <div className="bg-[#111144] rounded-2xl p-6 max-w-md mx-auto">
            <div className="space-y-4">
              {chatMessages.map((msg, idx) => (
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
                        ? 'bg-[#F98513] text-white rounded-br-md'
                        : 'bg-white/10 text-white rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Ecrivez votre message..."
                className="flex-1 bg-transparent text-white/60 text-sm outline-none"
                disabled
              />
              <div className="w-8 h-8 bg-[#F98513] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </div>
        );

      case 'leads':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#9BACD8]/20 to-white rounded-2xl p-6">
              <h4 className="font-semibold text-[#223382] mb-4">Resultats clients</h4>
              <div className="space-y-4">
                {leadsContent.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-[#111144]/70 text-sm">{stat.label}</span>
                    <span className="text-[#223382] font-bold text-lg">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#9BACD8]/30">
              <h4 className="font-semibold text-[#223382] mb-4">Fonctionnalites</h4>
              <ul className="space-y-3">
                {leadsContent.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex items-center gap-3 text-sm text-[#111144]"
                  >
                    <div className="w-2 h-2 bg-[#9BACD8] rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'infrastructure':
        return (
          <div className="bg-[#0f1629] rounded-2xl overflow-hidden">
            {/* Browser header */}
            <div className="bg-[#1a2234] px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#0f1629] px-4 py-1 rounded-md text-white/40 text-xs font-mono">
                  analytics.agence-marketing.fr
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <motion.h4
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white font-semibold text-lg"
                  >
                    Agence DigitalBoost
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/40 text-sm"
                  >
                    Tableau de bord - Janvier 2025
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  En direct
                </motion.div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {dashboardKPIs.map((kpi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/50 text-xs">{kpi.label}</span>
                      <Sparkline trend={kpi.positive ? 'up' : 'down'} />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-white font-bold text-xl">{kpi.value}</span>
                      <span className={`text-xs flex items-center gap-0.5 ${kpi.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {kpi.positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        {kpi.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Visitor chart */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/70 text-sm font-medium">Visiteurs (7 derniers jours)</span>
                    <span className="text-[#F98513] text-xs bg-[#F98513]/10 px-2 py-1 rounded">+12.5%</span>
                  </div>
                  <LineChart data={visitorData} color="#F98513" />
                  <div className="flex justify-between mt-2">
                    {visitorData.map((d, i) => (
                      <span key={i} className="text-white/30 text-xs">{d.day}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Conversion funnel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/5 rounded-xl p-4"
                >
                  <span className="text-white/70 text-sm font-medium">Funnel de conversion</span>
                  <div className="mt-4 space-y-2">
                    {funnelData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-white/50 text-xs w-16">{item.stage}</span>
                        <div className="flex-1 h-6 bg-white/5 rounded overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percent}%` }}
                            transition={{ delay: 0.8 + idx * 0.15, duration: 0.6 }}
                            className="h-full rounded"
                            style={{
                              background: `linear-gradient(90deg, #9BACD8 0%, #9AD1C8 100%)`,
                              opacity: 1 - idx * 0.2
                            }}
                          />
                        </div>
                        <span className="text-white text-xs w-14 text-right">{item.value.toLocaleString()}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Top campaigns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white/5 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70 text-sm font-medium">Top Campagnes</span>
                  <span className="text-white/30 text-xs">CPA moyen: 15.27</span>
                </div>
                <div className="space-y-2">
                  {topCampaigns.map((campaign, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-white text-sm">{campaign.name}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-white/60 text-sm">{campaign.leads} leads</span>
                        <span className="text-[#9AD1C8] text-sm font-medium">{campaign.cpa} CPA</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="cas-usage" className="py-24 bg-[#F4F1EC]">
      <Container>
        <SectionTitle
          title="Cas d'Usage Concrets"
          subtitle="Decouvrez comment l'IA peut transformer votre quotidien"
        />

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {useCases.map((useCase) => (
            <div key={useCase.id}>
              {/* Accordion Header */}
              <motion.button
                onClick={() => toggleCase(useCase.id)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 ${
                  activeCase === useCase.id
                    ? 'bg-white shadow-lg'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${useCase.color}20`, color: useCase.color }}
                  >
                    {useCase.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#223382] text-lg">{useCase.title}</h3>
                    <p className="text-[#111144]/60 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeCase === useCase.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#223382]"
                >
                  <ChevronDownIcon />
                </motion.div>
              </motion.button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeCase === useCase.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2">
                      {renderContent(useCase.id)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
