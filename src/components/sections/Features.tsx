'use client';

import { motion, Variants } from 'framer-motion';
import { ShieldCheck, Compass, Settings2, HeartHandshake } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const featuresList = [
    {
      icon: ShieldCheck,
      title: t('feature_1_title'),
      description: t('feature_1_desc'),
    },
    {
      icon: Compass,
      title: t('feature_2_title'),
      description: t('feature_2_desc'),
    },
    {
      icon: Settings2,
      title: t('feature_3_title'),
      description: t('feature_3_desc'),
    },
    {
      icon: HeartHandshake,
      title: t('feature_4_title'),
      description: t('feature_4_desc'),
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="why-choose-us" className="py-24 relative bg-slate-50 border-y border-slate-100 overflow-hidden">
      {/* Decorative Gradient Backdrops */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-300/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-300/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
          >
            {t('why_choose_us')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            {t('advantage_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            {t('features_subtitle')}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="relative group bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 border border-white/60 overflow-hidden flex flex-col items-start"
            >
              {/* Ambient Hover Glow */}
              <div className="absolute -right-20 -top-20 w-56 h-56 bg-brand-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg bg-gradient-to-br from-brand-600 to-brand-700 border border-brand-500 group-hover:scale-110 transition-transform duration-[600ms] ease-out">
                <feature.icon className="w-6 h-6 text-white group-hover:text-accent-400 transition-colors duration-500 drop-shadow-md" />
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-[15px] relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
