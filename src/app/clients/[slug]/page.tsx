'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CTASection from '@/components/home/CTASection';
import { getCaseStudyBySlug, caseStudies } from '@/data/case-studies';
import { notFound } from 'next/navigation';

// Icons
const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// Company Logos
const CompanyLogos: Record<string, React.FC<{ className?: string }>> = {
  'menuiserie-kermene': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#F98513" />
      <path d="M12 36V16L24 8L36 16V36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 36V26H28V36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 20H20M28 20H32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  'nettoyage-du-poher': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9BACD8" />
      <circle cx="24" cy="20" r="8" stroke="white" strokeWidth="2.5" />
      <path d="M16 32C16 32 18 28 24 28C30 28 32 32 32 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 14L34 10M34 14L30 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'armortech-metal': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9AD1C8" />
      <path d="M24 10L38 18V30L24 38L10 30V18L24 10Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M24 10V38M10 18L38 30M38 18L10 30" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
    </svg>
  ),
  'celtik-pack': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#F98513" />
      <rect x="12" y="14" width="24" height="20" rx="2" stroke="white" strokeWidth="2.5" />
      <path d="M12 20H36" stroke="white" strokeWidth="2.5" />
      <path d="M20 20V34M28 20V34" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="24" cy="17" r="1.5" fill="white" />
    </svg>
  ),
  'montreal-micromeca': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9BACD8" />
      <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="white" />
      <path d="M24 8V12M24 36V40M8 24H12M36 24H40" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'nordfroid-systems': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#9AD1C8" />
      <path d="M24 8V40M16 12L24 20L32 12M16 36L24 28L32 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 24H38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2" />
    </svg>
  ),
  'triskel-growth': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#6366F1" />
      <path d="M12 32L20 24L28 28L36 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="16" r="3" fill="white" />
      <path d="M12 12V36H36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  ),
  'atelier-northstar': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#EC4899" />
      <path d="M24 10L28 18H36L30 24L32 32L24 27L16 32L18 24L12 18H20L24 10Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="white" fillOpacity="0.2" />
    </svg>
  ),
  'immopulse-media': ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#14B8A6" />
      <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2.5" />
      <path d="M26 26L34 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 18L36 14M36 18L32 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="16" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  ),
};

// Dynamic illustrations - Professional Quality
const DashboardIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50" />

    {/* Main dashboard container */}
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold">Tableau de bord</div>
            <div className="text-slate-400 text-sm">Vue d'ensemble</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">En direct</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="relative grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Clients actifs', value: '247', change: '+12%', icon: 'users', gradient: 'from-blue-500 to-cyan-400' },
          { label: 'Devis en cours', value: '89', change: '+34%', icon: 'doc', gradient: 'from-violet-500 to-purple-400' },
          { label: 'Production', value: '12.4K', change: '+8%', icon: 'chart', gradient: 'from-emerald-500 to-teal-400' },
          { label: 'CA mensuel', value: '156K€', change: '+15%', icon: 'euro', gradient: 'from-orange-500 to-amber-400' },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {kpi.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                {kpi.icon === 'doc' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                {kpi.icon === 'chart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                {kpi.icon === 'euro' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4" />}
              </svg>
            </div>
            <div className="text-slate-400 text-sm mb-1">{kpi.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-white font-bold text-2xl">{kpi.value}</div>
              <div className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                {kpi.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-white font-semibold">Evolution de l'activite</div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
                <span className="text-slate-400">Devis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                <span className="text-slate-400">Commandes</span>
              </div>
            </div>
          </div>
          <svg className="w-full h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 80 Q 50 60 100 65 T 200 45 T 300 35 T 400 20"
              fill="url(#chartGradient1)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            />
            <motion.path
              d="M 0 80 Q 50 60 100 65 T 200 45 T 300 35 T 400 20"
              fill="none"
              stroke="url(#lineGradient1)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              style={{ stroke: '#F97316' }}
            />
            <motion.path
              d="M 0 90 Q 50 75 100 70 T 200 55 T 300 50 T 400 30"
              fill="url(#chartGradient2)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.path
              d="M 0 90 Q 50 75 100 70 T 200 55 T 300 50 T 400 30"
              fill="none"
              stroke="#10B981"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </svg>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="text-white font-semibold mb-4">Activite recente</div>
          <div className="space-y-4">
            {[
              { type: 'devis', text: 'Devis #247 envoye', value: '4 250 €', time: '2 min' },
              { type: 'commande', text: 'Commande #89 validee', value: '1 890 €', time: '15 min' },
              { type: 'facture', text: 'Facture #156 payee', value: '6 540 €', time: '1h' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  item.type === 'devis' ? 'bg-violet-500/20 text-violet-400' :
                  item.type === 'commande' ? 'bg-emerald-500/20 text-emerald-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm truncate">{item.text}</div>
                  <div className="text-slate-500 text-xs">{item.time}</div>
                </div>
                <div className="text-emerald-400 font-medium text-sm">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const ChatIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative max-w-lg mx-auto"
  >
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50" />

    {/* Phone Frame */}
    <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border border-slate-700">
      {/* Screen */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-8 py-3 bg-slate-800/50">
          <span className="text-white text-sm font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
            </svg>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <div className="w-6 h-3 bg-white rounded-sm ml-1" />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-slate-800/30">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900" />
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold text-lg">Assistant IA</div>
            <div className="text-emerald-400 text-sm flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              En ligne - Repond instantanement
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="px-4 py-6 space-y-4 min-h-[320px]">
          {[
            { role: 'bot', text: 'Bonjour ! Je suis l\'assistant de l\'entreprise. Comment puis-je vous aider aujourd\'hui ?' },
            { role: 'user', text: 'J\'aurais besoin d\'un devis pour du nettoyage' },
            { role: 'bot', text: 'Bien sur ! Pour vous etablir un devis precis, pouvez-vous me donner quelques informations ?' },
            { role: 'user', text: 'Bureaux de 350m2, nettoyage 2x/semaine' },
            { role: 'bot', text: 'Parfait ! Je transmets votre demande. Un conseiller vous contactera sous 24h avec un devis personnalise.' },
          ].map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex-shrink-0 mr-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              <div
                className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl rounded-br-md shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 backdrop-blur-sm text-white rounded-2xl rounded-bl-md border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-bl-md px-4 py-3 border border-white/5">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Input */}
        <div className="px-4 pb-6">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-3 border border-white/10">
            <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex-1 text-white/40 text-sm">Ecrivez votre message...</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center mt-2">
        <div className="w-32 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  </motion.div>
);

const WorkflowIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20 blur-3xl opacity-50" />

    {/* Main container */}
    <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-slate-900 font-bold text-xl mb-1">Workflow automatise</h3>
          <p className="text-slate-500">De la demande client a la fiche affaire</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Actif
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-200" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 origin-left"
        />

        <div className="relative grid grid-cols-4 gap-4">
          {[
            { name: 'Mail entrant', icon: 'mail', desc: 'Capture automatique', gradient: 'from-blue-500 to-indigo-500' },
            { name: 'Tri & Classement', icon: 'folder', desc: 'Plans, DXF, PDF...', gradient: 'from-violet-500 to-purple-500' },
            { name: 'Fiche affaire', icon: 'file', desc: 'Creation auto', gradient: 'from-emerald-500 to-teal-500' },
            { name: 'Notification', icon: 'bell', desc: 'Slack / Teams', gradient: 'from-orange-500 to-amber-500' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Icon container */}
              <div className="relative mb-4">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {step.icon === 'mail' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                    {step.icon === 'folder' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />}
                    {step.icon === 'file' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                    {step.icon === 'bell' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />}
                  </svg>
                </div>
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 font-bold text-sm border border-slate-100">
                  {i + 1}
                </div>
              </div>
              <div className="text-center">
                <div className="text-slate-900 font-semibold mb-1">{step.name}</div>
                <div className="text-slate-500 text-sm">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-10 pt-6 border-t border-slate-100 grid grid-cols-3 gap-6"
      >
        {[
          { label: 'Mails traites', value: '1,247', icon: 'mail' },
          { label: 'Fiches creees', value: '892', icon: 'file' },
          { label: 'Temps economise', value: '45h/mois', icon: 'clock' },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {stat.icon === 'mail' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                {stat.icon === 'file' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                {stat.icon === 'clock' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
              </svg>
            </div>
            <div>
              <div className="text-slate-900 font-bold">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

const TerminalIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 blur-3xl opacity-50" />

    {/* Main container - Modern App Window */}
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
      {/* Window header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="flex items-center gap-2 ml-4 px-4 py-1.5 bg-slate-700/50 rounded-lg">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white/80 text-sm font-medium">Agent BAT - Controle qualite</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-sm">Analyse en cours</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* File upload area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 mb-6"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-white font-medium">packaging_emballage_v2.pdf</div>
            <div className="text-slate-400 text-sm">2.4 MB - Uploade il y a 12s</div>
          </div>
          <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
            Analyse terminee
          </div>
        </motion.div>

        {/* Check results */}
        <div className="space-y-3 mb-6">
          {[
            { label: 'Mentions legales obligatoires', status: 'ok', detail: 'Toutes presentes' },
            { label: 'Zone de distribution', status: 'ok', detail: 'France - Conforme' },
            { label: 'Code EAN-13', status: 'ok', detail: '3760123456789 - Valide' },
            { label: 'Format & dimensions', status: 'ok', detail: '210x297mm - Conforme' },
            { label: 'Marges et fonds perdus', status: 'ok', detail: '3mm - Conforme' },
            { label: 'Taille police allergenes', status: 'warning', detail: '1.1mm - Minimum 1.2mm requis' },
          ].map((check, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                check.status === 'ok' ? 'bg-emerald-500/20' : 'bg-amber-500/20'
              }`}>
                {check.status === 'ok' ? (
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">{check.label}</div>
                <div className="text-slate-400 text-xs">{check.detail}</div>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                check.status === 'ok' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {check.status === 'ok' ? 'OK' : 'A VERIFIER'}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="text-amber-400 font-semibold">1 point a verifier</div>
              <div className="text-slate-400 text-sm">Le BAT peut etre valide apres correction</div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow">
            Telecharger le rapport
          </button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const MetricsIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl opacity-50" />

    {/* Main container */}
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-1">Tableau de bord Qualite</h3>
          <p className="text-slate-400">Suivi en temps reel de la production</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white/5 text-white/80 text-sm rounded-lg px-3 py-2 border border-white/10">
            <option>6 derniers mois</option>
          </select>
          <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-2 rounded-lg text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Live
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="relative grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Taux de rebuts', value: '2.1%', change: '-35%', changeLabel: 'vs mois dernier', icon: 'trash', gradient: 'from-red-500 to-rose-500', good: true },
          { label: 'Conformite', value: '98.2%', change: '+4.2%', changeLabel: 'vs mois dernier', icon: 'check', gradient: 'from-emerald-500 to-teal-500', good: true },
          { label: 'Lots a risque', value: '3', change: '-12', changeLabel: 'alertes actives', icon: 'alert', gradient: 'from-amber-500 to-orange-500', good: true },
          { label: 'Temps audit', value: '-80%', change: '2h', changeLabel: 'au lieu de 10h', icon: 'clock', gradient: 'from-indigo-500 to-purple-500', good: true },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {kpi.icon === 'trash' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />}
                  {kpi.icon === 'check' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {kpi.icon === 'alert' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />}
                  {kpi.icon === 'clock' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                </svg>
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${kpi.good ? 'text-emerald-400' : 'text-red-400'}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={kpi.good ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
                </svg>
                {kpi.change}
              </div>
            </div>
            <div className="text-white font-bold text-3xl mb-1">{kpi.value}</div>
            <div className="text-slate-400 text-sm">{kpi.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-white font-semibold">Evolution du taux de rebuts</div>
            <div className="text-emerald-400 text-sm font-medium">-35% ce mois</div>
          </div>
          <div className="relative h-40">
            <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="metricsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="0" y1="60" x2="300" y2="60" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
              <line x1="0" y1="90" x2="300" y2="90" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

              {/* Area fill */}
              <motion.path
                d="M 0 20 L 50 30 L 100 45 L 150 55 L 200 70 L 250 85 L 300 95 L 300 120 L 0 120 Z"
                fill="url(#metricsGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />

              {/* Line */}
              <motion.path
                d="M 0 20 L 50 30 L 100 45 L 150 55 L 200 70 L 250 85 L 300 95"
                fill="none"
                stroke="#818CF8"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />

              {/* Data points */}
              {[[0, 20], [50, 30], [100, 45], [150, 55], [200, 70], [250, 85], [300, 95]].map(([x, y], i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#818CF8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                />
              ))}
            </svg>
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 -ml-8">
              <span>8%</span>
              <span>6%</span>
              <span>4%</span>
              <span>2%</span>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-xs text-slate-500">
            {['Aout', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </motion.div>

        {/* Alert List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-white font-semibold">Alertes qualite</div>
            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium">3 actives</span>
          </div>
          <div className="space-y-3">
            {[
              { lot: 'LOT-2024-0892', issue: 'Cote X proche tolerance', level: 'warning', time: '2h' },
              { lot: 'LOT-2024-0891', issue: 'Derive temperature detectee', level: 'warning', time: '4h' },
              { lot: 'LOT-2024-0889', issue: 'Maintenance preventive', level: 'info', time: '1j' },
            ].map((alert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  alert.level === 'warning' ? 'bg-amber-500/20' : 'bg-blue-500/20'
                }`}>
                  <svg className={`w-5 h-5 ${alert.level === 'warning' ? 'text-amber-400' : 'text-blue-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {alert.level === 'warning' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium truncate">{alert.issue}</div>
                  <div className="text-slate-500 text-xs">{alert.lot}</div>
                </div>
                <div className="text-slate-400 text-xs">{alert.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// SEO Dashboard Illustration - Marketing
const SeoDashboardIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 blur-3xl opacity-50" />

    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-lg">Client Dashboard</div>
            <div className="text-slate-400 text-sm">Acme Corp - SEO Performance</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg text-sm font-medium shadow-lg">
            Exporter PDF
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Trafic organique', value: '45.2K', change: '+23%', icon: 'users' },
          { label: 'Mots-cles Top 10', value: '127', change: '+18', icon: 'key' },
          { label: 'Backlinks', value: '892', change: '+45', icon: 'link' },
          { label: 'Score SEO', value: '94', change: '+7', icon: 'star' },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {kpi.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                  {kpi.icon === 'key' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />}
                  {kpi.icon === 'link' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />}
                  {kpi.icon === 'star' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
                </svg>
              </div>
              <span className="text-emerald-400 text-xs font-medium">{kpi.change}</span>
            </div>
            <div className="text-white font-bold text-2xl mb-1">{kpi.value}</div>
            <div className="text-slate-400 text-xs">{kpi.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-semibold">Top Pages</div>
            <span className="text-emerald-400 text-sm">+15% ce mois</span>
          </div>
          <div className="space-y-3">
            {[
              { page: '/services', visits: '12.4K', trend: '+24%' },
              { page: '/produits/seo', visits: '8.7K', trend: '+18%' },
              { page: '/blog/guide-seo', visits: '6.2K', trend: '+45%' },
              { page: '/contact', visits: '4.1K', trend: '+12%' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1 bg-white/5 rounded-lg h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${100 - i * 20}%` }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                  />
                </div>
                <span className="text-white text-sm w-16">{item.visits}</span>
                <span className="text-emerald-400 text-xs w-12">{item.trend}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-semibold">Priorites ce mois</div>
            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs">Auto-genere</span>
          </div>
          <div className="space-y-3">
            {[
              { task: 'Optimiser meta /services', priority: 'high' },
              { task: 'Creer contenu "guide SEO 2024"', priority: 'high' },
              { task: 'Corriger liens casses (12)', priority: 'medium' },
              { task: 'Accelerer page /produits', priority: 'medium' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-3 p-2 rounded-lg bg-white/5"
              >
                <div className={`w-2 h-2 rounded-full ${item.priority === 'high' ? 'bg-red-400' : 'bg-amber-400'}`} />
                <span className="text-white text-sm">{item.task}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// Creative Automation Illustration - Marketing
const CreativeAutomationIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-fuchsia-500/20 blur-3xl opacity-50" />

    <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-slate-900 font-bold text-xl mb-1">Creative Factory</h3>
          <p className="text-slate-500">Generation automatique de declinaisons</p>
        </div>
        <div className="flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          24 visuels generes
        </div>
      </div>

      {/* Workflow */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-100 rounded-2xl p-5"
        >
          <div className="text-slate-600 text-sm font-medium mb-4">Fiche produit</div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xs text-slate-400 mb-1">Produit</div>
              <div className="text-slate-900 font-medium">Sneakers Pro Max</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xs text-slate-400 mb-1">Promo</div>
              <div className="text-pink-600 font-bold">-30% Black Friday</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xs text-slate-400 mb-1">Langues</div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-slate-100 rounded text-xs">FR</span>
                <span className="px-2 py-1 bg-slate-100 rounded text-xs">EN</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Processing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-pink-500/25 mb-4">
            <svg className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '3s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="text-slate-900 font-semibold mb-2">IA Creative</div>
          <div className="text-slate-500 text-sm text-center">Generation des<br/>variantes en cours</div>
        </motion.div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-100 rounded-2xl p-5"
        >
          <div className="text-slate-600 text-sm font-medium mb-4">Visuels generes</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { format: '1080x1080', label: 'Insta' },
              { format: '1200x628', label: 'FB' },
              { format: '1080x1920', label: 'Story' },
              { format: '300x250', label: 'Display' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-gradient-to-br from-pink-400 to-fuchsia-500 rounded-lg p-3 text-white text-center"
              >
                <div className="text-xs opacity-80">{item.format}</div>
                <div className="font-medium text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Generated visuals preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-slate-100 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-slate-700 font-medium">Apercu des visuels</div>
          <button className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-lg text-sm font-medium">
            Telecharger tout
          </button>
        </div>
        <div className="flex gap-3 overflow-hidden">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="flex-shrink-0 w-32 h-32 rounded-xl bg-gradient-to-br from-pink-100 to-fuchsia-100 flex items-center justify-center border-2 border-dashed border-pink-300"
            >
              <div className="text-center">
                <div className="text-pink-600 font-bold text-lg">-30%</div>
                <div className="text-pink-400 text-xs">Black Friday</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// Prospecting Illustration - Marketing
const ProspectingIllustration = ({ color }: { color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-cyan-500/20 blur-3xl opacity-50" />

    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-1">Pipeline Commercial</h3>
          <p className="text-slate-400">Prospection automatisee - Semaine 4</p>
        </div>
        <div className="flex items-center gap-2 bg-teal-500/20 text-teal-400 px-3 py-2 rounded-lg text-sm font-medium">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          12 RDV cette semaine
        </div>
      </div>

      {/* Pipeline funnel */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { stage: 'Prospects', count: 847, color: 'from-slate-500 to-slate-600' },
          { stage: 'Contactes', count: 234, color: 'from-teal-500 to-emerald-500' },
          { stage: 'Interesses', count: 67, color: 'from-emerald-500 to-green-500' },
          { stage: 'RDV pris', count: 12, color: 'from-green-500 to-lime-500' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="text-center"
          >
            <div className={`h-24 rounded-2xl bg-gradient-to-b ${item.color} flex items-center justify-center mb-3`} style={{ width: `${100 - i * 10}%`, margin: '0 auto' }}>
              <span className="text-white font-bold text-2xl">{item.count}</span>
            </div>
            <div className="text-slate-400 text-sm">{item.stage}</div>
          </motion.div>
        ))}
      </div>

      {/* Stats and recent activity */}
      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="text-white font-semibold mb-4">Performance par secteur</div>
          <div className="space-y-3">
            {[
              { sector: 'Immobilier residentiel', rate: '34%', leads: 28 },
              { sector: 'Immobilier commercial', rate: '28%', leads: 19 },
              { sector: 'Promoteurs', rate: '22%', leads: 15 },
              { sector: 'Investisseurs', rate: '16%', leads: 5 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">{item.sector}</span>
                    <span className="text-teal-400">{item.rate}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: item.rate }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
        >
          <div className="text-white font-semibold mb-4">Sequences actives</div>
          <div className="space-y-3">
            {[
              { name: 'Sequence Promoteurs Q1', status: 'active', sent: 145, replies: 23 },
              { name: 'Follow-up Investisseurs', status: 'active', sent: 89, replies: 12 },
              { name: 'Relance Agences', status: 'paused', sent: 234, replies: 34 },
            ].map((seq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
              >
                <div className={`w-2 h-2 rounded-full ${seq.status === 'active' ? 'bg-emerald-400' : 'bg-slate-400'}`} />
                <div className="flex-1">
                  <div className="text-white text-sm">{seq.name}</div>
                  <div className="text-slate-500 text-xs">{seq.sent} envoyes - {seq.replies} reponses</div>
                </div>
                <div className="text-teal-400 text-sm font-medium">
                  {Math.round(seq.replies / seq.sent * 100)}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const illustrations: Record<string, React.ReactNode> = {
    dashboard: <DashboardIllustration color={study.color} />,
    chat: <ChatIllustration color={study.color} />,
    workflow: <WorkflowIllustration color={study.color} />,
    terminal: <TerminalIllustration color={study.color} />,
    metrics: <MetricsIllustration color={study.color} />,
    'seo-dashboard': <SeoDashboardIllustration color={study.color} />,
    'creative-automation': <CreativeAutomationIllustration color={study.color} />,
    'prospecting': <ProspectingIllustration color={study.color} />,
  };

  const otherStudies = caseStudies.filter(s => s.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F4F1EC] to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-[#111144]/60 mb-8">
              <Link href="/" className="hover:text-[#F98513]">Accueil</Link>
              <span>/</span>
              <Link href="/clients" className="hover:text-[#F98513]">Clients</Link>
              <span>/</span>
              <span className="text-[#223382]">{study.client}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-4 py-1 rounded-full text-white font-medium"
                style={{ backgroundColor: study.color }}
              >
                {study.sectorLabel}
              </span>
              <span className="px-4 py-1 rounded-full bg-[#223382]/10 text-[#223382] font-medium">
                {study.serviceType === 'quick-wins' ? 'Quick Wins' : 'Infrastructure IA'}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-5 mb-4"
            >
              {CompanyLogos[study.slug] && (
                <div className="flex-shrink-0">
                  {(() => {
                    const LogoComponent = CompanyLogos[study.slug];
                    return <LogoComponent className="w-16 h-16 md:w-20 md:h-20" />;
                  })()}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-[#223382]">
                {study.client}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 text-[#111144]/60 mb-6"
            >
              <MapPinIcon />
              {study.location}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-medium mb-8"
              style={{ color: study.color }}
            >
              {study.tagline}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Illustration Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {illustrations[study.designStyle]}
          </div>
        </Container>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[#223382] mb-6">Le probleme</h2>
                <p className="text-[#111144]/70 text-lg">
                  {study.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[#223382] mb-6">La solution</h2>
                <p className="text-[#111144]/70 text-lg mb-6">
                  {study.solution}
                </p>
                <ul className="space-y-3">
                  {study.solutionHighlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${study.color}20`, color: study.color }}
                      >
                        <CheckIcon />
                      </div>
                      <span className="text-[#111144]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#111144]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Les resultats</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {study.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ color: study.color }}
                  >
                    {result.value}
                  </div>
                  <div className="text-white font-medium mb-2">{result.metric}</div>
                  <div className="text-white/60 text-sm">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-20 bg-[#F4F1EC]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6" style={{ color: study.color, opacity: 0.3 }}>
                <QuoteIcon />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-[#223382] italic mb-8"
              >
                &ldquo;{study.testimonial.quote}&rdquo;
              </motion.p>
              <div>
                <div className="font-bold text-[#223382]">{study.testimonial.author}</div>
                <div className="text-[#111144]/60">{study.testimonial.role}</div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Other Case Studies */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-[#223382] text-center mb-12">
            Autres projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherStudies.map((other) => (
              <Link key={other.slug} href={`/clients/${other.slug}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#F4F1EC] rounded-2xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-white text-sm"
                      style={{ backgroundColor: other.color }}
                    >
                      {other.sectorLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#223382] mb-2">{other.client}</h3>
                  <p className="text-[#111144]/60 text-sm">{other.tagline}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
