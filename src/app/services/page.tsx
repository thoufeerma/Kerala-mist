'use client';

import { motion, Variants } from 'framer-motion';
import {
  Map, Hotel, Car, Heart, Users, Compass, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

export default function ServicesPage() {
  const { t } = useTranslation();

  const servicesList = [
    {
      icon: Map,
      title: t('services_1_title'),
      description: t('services_1_desc'),
      color: 'from-brand-600 to-brand-800',
    },
    {
      icon: Hotel,
      title: t('services_2_title'),
      description: t('services_2_desc'),
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Car,
      title: t('services_3_title'),
      description: t('services_3_desc'),
      color: 'from-amber-600 to-amber-800',
    },
    {
      icon: Heart,
      title: t('services_4_title'),
      description: t('services_4_desc'),
      color: 'from-rose-600 to-rose-800',
    },
    {
      icon: Users,
      title: t('services_5_title'),
      description: t('services_5_desc'),
      color: 'from-purple-600 to-purple-800',
    },
    {
      icon: Compass,
      title: t('services_6_title'),
      description: t('services_6_desc'),
      color: 'from-teal-600 to-teal-800',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img
            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2000&auto=format&fit=crop"
            alt="Kerala Backwaters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 to-brand-950/70" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              {t('nav_services')}
            </h1>
            <p className="text-slate-200 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-xl">
              {t('services_hero_p')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-400/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
            >
              {t('services_our_offerings')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
              {t('services_title_main')}
            </h2>
            <p className="text-slate-600 text-xl font-medium">
              {t('services_subtitle_main')}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {servicesList.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-white rounded-[2.5rem] p-10 shadow-[0_4px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl mb-8 flex items-center justify-center shadow-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-lg flex-1">
                  {service.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-50">
                  <a
                    href={getWhatsAppLink(`Hi! I'm interested in ${service.title}. Can you help?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-600 font-black text-sm uppercase tracking-widest hover:text-brand-800 transition-colors group/link"
                  >
                    {t('services_enquire_whatsapp')}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-brand-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              {t('services_unique_title')}
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium leading-relaxed">
              {t('services_unique_p')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={getWhatsAppLink("Hi! I need a custom travel plan for Kerala.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:bg-whatsapp-dark hover:scale-105 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                </svg>
                {t('services_chat_consultant')}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-[2rem] font-black text-xl transition-all shadow-2xl"
              >
                {t('services_send_request')}
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
