'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import {
  PHONE_NUMBERS,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
  getWhatsAppLink,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n';
import ReachOut from '@/components/sections/ReachOut';

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img
            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2000&auto=format&fit=crop"
            alt="Kerala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 to-brand-950/70" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              {t('nav_contact')}
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {t('contact_hero_p')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 lg:max-w-2xl bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-slate-100"
            >
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                {t('contact_form_title')}
              </h2>
              <p className="text-slate-500 mb-10 font-medium">
                {t('contact_form_p')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-slate-500">
                      {t('contact_full_name')} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-bold"
                      placeholder={t('contact_full_name')}
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="contact-phone" className="text-xs font-black uppercase tracking-widest text-slate-500">
                      {t('contact_phone_number')} *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-bold"
                      placeholder="+91 98470 06295"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="contact-date" className="text-xs font-black uppercase tracking-widest text-slate-500">
                    {t('contact_travel_date')} *
                  </label>
                  <input
                    type="date"
                    id="contact-date"
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-bold"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-widest text-slate-500">
                    {t('contact_message_label')} <span className="text-slate-400 font-normal">{t('contact_message_optional')}</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-bold resize-none"
                    placeholder={t('contact_message_placeholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full py-5 rounded-2xl font-black flex justify-center items-center gap-3 transition-all duration-300 shadow-xl text-xl uppercase tracking-widest',
                    isSuccess
                      ? 'bg-green-500 text-white'
                      : 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-brand-600/30'
                  )}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-7 h-7 border-4 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      {t('contact_submit_success')}
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      {t('nav_contact')}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-[450px] shrink-0 space-y-8"
            >
              {/* WhatsApp Card — Primary Contact */}
              <a
                href={getWhatsAppLink("Hi! I'd like to enquire about a Kerala tour package.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-whatsapp/10 border-2 border-whatsapp/30 rounded-[2.5rem] p-10 hover:bg-whatsapp/15 transition-all group shadow-2xl shadow-whatsapp/5"
              >
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-whatsapp rounded-3xl flex items-center justify-center shadow-2xl shadow-whatsapp/50 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-10 h-10">
                      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-2xl tracking-tight">{t('nav_whatsapp')}</p>
                    <p className="text-brand-700 font-bold text-lg">
                      {t('contact_fastest_response')}
                    </p>
                  </div>
                </div>
              </a>

              {/* Contact Details */}
              <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_40px_rgba(0,0,0,0.04)] p-10 space-y-8">
                <h3 className="font-black text-slate-900 text-2xl tracking-tight">{t('contact_info_title')}</h3>

                {/* Phone Numbers */}
                {PHONE_NUMBERS.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-6 text-slate-600 hover:text-brand-600 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-100 transition-all">
                      <Phone className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">
                        {t('contact_phone_label')} {idx + 1}
                      </p>
                      <p className="font-black text-slate-900 text-xl">{phone.display}</p>
                    </div>
                  </a>
                ))}

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-6 text-slate-600 hover:text-brand-600 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-100 transition-all">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{t('contact_email_label')}</p>
                    <p className="font-black text-slate-900 text-xl">{EMAIL}</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-6 text-slate-600">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{t('contact_address_label')}</p>
                    <p className="font-black text-slate-900 text-lg leading-snug">{ADDRESS}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-6 text-slate-600">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{t('contact_availability_label')}</p>
                    <p className="font-black text-slate-900 text-lg">{WORKING_HOURS}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ReachOut />
    </main>
  );
}
