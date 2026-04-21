'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

export default function Hero() {
  const { t } = useTranslation();
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop"
          alt="Kerala Backwaters Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/60 to-brand-950/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] mb-8 transition-colors hover:bg-white/20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
            <span className="text-xs font-black tracking-[0.2em] text-white uppercase drop-shadow-md">
              {t('hero_badge')}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
          >
            {t('hero_title_1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400">
              {t('hero_title_2')}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl font-medium leading-relaxed drop-shadow-lg"
          >
            {t('hero_p')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
            <Link href="/packages">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 bg-brand-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:bg-brand-500 transition-all cursor-pointer"
              >
                {t('cta_view_packages')}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </motion.span>
            </Link>
            <motion.a
              href={getWhatsAppLink("Hi! I'm interested in planning a Kerala trip. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
              </svg>
              {t('nav_whatsapp')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">Experience</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-[2px] h-14 bg-gradient-to-b from-brand-400 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
