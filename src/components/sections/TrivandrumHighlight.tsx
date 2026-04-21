'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

export default function TrivandrumHighlight() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&auto=format&fit=crop"
          alt="Padmanabhaswamy Temple Trivandrum"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-400 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
          >
            {t('cultural_masterpiece')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            {t('trivandrum_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8"
          >
            {t('trivandrum_p')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20"
          >
            <div className="text-3xl font-bold text-brand-400">1000+</div>
            <div className="text-sm font-medium text-slate-100">{t('years_legacy')}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
