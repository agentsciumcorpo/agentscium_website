'use client';

import { motion } from 'framer-motion';
import { cardHover, fadeInUp } from '@/lib/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  animated?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverable = true,
  animated = true
}: CardProps) {
  const baseStyles = 'bg-white rounded-2xl p-6 shadow-lg';

  if (animated) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        variants={hoverable ? cardHover : fadeInUp}
        initial={hoverable ? 'rest' : 'hidden'}
        whileHover={hoverable ? 'hover' : undefined}
        whileInView={!hoverable ? 'visible' : undefined}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}
