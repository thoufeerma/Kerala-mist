'use client';

import { motion, Variants } from 'framer-motion';
import {
  ShieldCheck, Compass, Settings2, HeartHandshake,
  Award, Users, MapPin, Calendar
} from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Compass,
      title: t('about_value_1_title'),
      description: t('about_value_1_desc'),
    },
    {
      icon: Settings2,
      title: t('about_value_2_title'),
      description: t('about_value_2_desc'),
    },
    {
      icon: HeartHandshake,
      title: t('about_value_3_title'),
      description: t('about_value_3_desc'),
    },
    {
      icon: ShieldCheck,
      title: t('about_value_4_title'),
      description: t('about_value_4_desc'),
    },
  ];

  const stats = [
    { value: '10+', label: t('about_stat_xp'), icon: Calendar },
    { value: '15,000+', label: t('about_stat_happy'), icon: Users },
    { value: '50+', label: t('about_stat_dest'), icon: MapPin },
    { value: '4.9★', label: t('about_stat_rating'), icon: Award },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop"
            alt="Kerala Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 to-brand-950/70" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              {t('nav_about')}
            </h1>
            <p className="text-slate-200 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-xl">
              {t('about_hero_p')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] h-[500px] lg:h-[650px] border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=800&auto=format&fit=crop"
                  alt="Kerala Culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl px-8 py-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-brand-100">
                  <div className="bg-brand-600 p-3.5 rounded-2xl shadow-lg shadow-brand-600/30 text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 leading-none">10<span className="text-brand-600">Yrs</span></p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">{t('location_kerala')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">
                {t('about_who_we_are')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                {t('about_heart_title')}
              </h2>
              <div className="space-y-6 text-slate-600 text-xl leading-relaxed mb-10 font-medium">
                <p>
                  {t('about_intro_1')}
                </p>
                <p>
                  {t('about_intro_2')}
                </p>
              </div>
              <Link
                href="/packages"
                className="inline-flex bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-brand-600 transition-all duration-500 shadow-2xl hover:shadow-brand-600/30 hover:scale-105 active:scale-95"
              >
                {t('cta_view_packages')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
            >
              {t('about_core_exp')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
            >
              {t('about_sets_us_apart')}
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-slate-50 p-10 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 border border-slate-100"
              >
                <div className="w-16 h-16 rounded-[1.25rem] mb-8 flex items-center justify-center bg-brand-600 text-white shadow-xl shadow-brand-600/20 group-hover:scale-110 transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-brand-950 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-brand-400">{stat.value}</div>
                <div className="h-0.5 w-12 bg-white/20 mb-4" />
                <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-brand-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none relative z-10">
              {t('about_transform_dreams')}
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              {t('about_transform_p')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a
                href={getWhatsAppLink("Hi! I'd like to plan a Kerala trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:bg-whatsapp-dark hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                </svg>
                {t('nav_whatsapp')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
