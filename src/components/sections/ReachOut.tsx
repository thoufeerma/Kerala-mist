'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';
import { getWhatsAppLink, INSTAGRAM_URL } from '@/lib/constants';

const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function ReachOut() {
  const { t } = useTranslation();

  return (
    <section id="reach-out" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand-400 font-extrabold tracking-[0.2em] uppercase text-xs mb-4 inline-block">
            {t('reach_out')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            {t('reach_out_title')}
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            {t('reach_out_p')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href={getWhatsAppLink("Hi! I'd like to get a custom quote for a Kerala trip.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-whatsapp text-white px-10 py-5 rounded-[2rem] text-xl font-black shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all hover:bg-whatsapp-dark"
            >
              <MessageCircleIcon className="w-6 h-6" />
              {t('nav_whatsapp')}
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </motion.a>

            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-[2rem] text-xl font-black border border-white/10 hover:bg-white/10 transition-all"
            >
              <InstagramIcon className="w-6 h-6" />
              Instagram
            </motion.a>
          </div>

          <p className="mt-12 text-slate-500 font-medium">
            {t('reach_out_footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
