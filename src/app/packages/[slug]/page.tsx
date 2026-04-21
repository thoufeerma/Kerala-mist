'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Clock, MapPin, Check, X, ChevronDown, ChevronUp,
  MessageCircle, Calendar
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getPackageBySlug } from '@/lib/packages';
import { getQuoteWhatsAppLink, PHONE_DISPLAY, PHONE_LINK } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n';

export default function PackageDetailPage() {
  const { t, language } = useTranslation();
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const pkg = getPackageBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(null);

  if (!pkg) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">{t('package_not_found')}</h1>
          <p className="text-slate-600 mb-8">{t('package_not_found_p')}</p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back_to_packages')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Image Gallery */}
      <section className="pt-20">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={pkg.gallery[selectedImage]}
                alt={`${pkg.title[language]} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Back button */}
          <Link
            href="/packages"
            className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('nav_packages')}
          </Link>

          {/* Title overlay */}
          <div className="absolute bottom-12 left-6 md:left-12 z-20 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-widest bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-3.5 h-3.5" />
                {pkg.duration[language]}
              </div>
              <div className="flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <MapPin className="w-3.5 h-3.5" />
                {t('location_kerala')}
              </div>
              {pkg.tag && (
                <div className="bg-brand-600/90 backdrop-blur-sm text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  {pkg.tag[language]}
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
              {pkg.title[language]}
            </h1>
          </div>

          {/* Thumbnail strip */}
          {pkg.gallery.length > 1 && (
            <div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-3">
              {pkg.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'w-20 h-14 md:w-24 md:h-16 rounded-2xl overflow-hidden border-2 transition-all relative',
                    selectedImage === idx
                      ? 'border-brand-500 shadow-2xl scale-110'
                      : 'border-white/20 opacity-60 hover:opacity-100 hover:scale-105'
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="flex-1 lg:max-w-3xl">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-12 bg-brand-600" />
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t('package_overview')}</h2>
                </div>
                <p className="text-slate-600 text-xl leading-loose font-medium">{pkg.overview[language]}</p>
              </motion.div>

              {/* Day-wise Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-brand-600" />
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {t('package_itinerary_title')}
                  </h2>
                </div>
                <div className="space-y-6">
                  {pkg.itinerary.map((day, idx) => {
                    const isOpen = openDay === idx;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          'rounded-3xl overflow-hidden transition-all duration-500 border',
                          isOpen
                            ? 'bg-white shadow-[0_40px_80px_rgba(0,0,0,0.08)] border-brand-200'
                            : 'bg-white shadow-sm border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-200/50'
                        )}
                      >
                        <button
                          onClick={() => setOpenDay(isOpen ? null : idx)}
                          className="w-full flex items-center gap-6 p-6 md:p-8 text-left focus:outline-none group"
                        >
                          <div
                            className={cn(
                              'w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 transition-all duration-500',
                              isOpen
                                ? 'bg-brand-600 shadow-xl shadow-brand-600/30'
                                : 'bg-brand-50 group-hover:bg-brand-100'
                            )}
                          >
                            <span className={cn('text-[10px] font-black uppercase tracking-widest', isOpen ? 'text-white/80' : 'text-brand-600')}>{t('package_day')}</span>
                            <span className={cn('text-2xl font-black leading-none', isOpen ? 'text-white' : 'text-brand-700')}>{day.day}</span>
                          </div>
                          <span
                            className={cn(
                              'font-black text-xl flex-1 transition-colors tracking-tight',
                              isOpen ? 'text-brand-700' : 'text-slate-900 group-hover:text-brand-700'
                            )}
                          >
                            {day.title[language]}
                          </span>
                          <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-all", isOpen ? "bg-brand-50" : "bg-slate-50")}>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-brand-600" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400" />
                            )}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="px-8 pb-10 pl-[6.5rem] md:pl-[8.5rem] text-slate-600 text-lg leading-relaxed border-t border-slate-50 pt-8 pr-8">
                                {day.description[language]}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Included / Excluded */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-brand-600" />
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t('package_details_title')}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included */}
                  <div className="bg-brand-50/50 rounded-3xl p-8 border border-brand-100">
                    <h3 className="font-black text-brand-800 mb-6 flex items-center gap-3 text-lg uppercase tracking-tight">
                      <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <Check className="w-5 h-5" />
                      </div>
                      {t('package_included')}
                    </h3>
                    <ul className="space-y-4">
                      {pkg.included[language].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-slate-700">
                          <Check className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                          <span className="text-lg font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Excluded */}
                  <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                    <h3 className="font-black text-red-800 mb-6 flex items-center gap-3 text-lg uppercase tracking-tight">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
                        <X className="w-5 h-5" />
                      </div>
                      {t('package_not_included')}
                    </h3>
                    <ul className="space-y-4">
                      {pkg.excluded[language].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-slate-700">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                          <span className="text-lg font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar — Pricing & Booking */}
            <div className="lg:w-[420px] shrink-0">
              <div className="lg:sticky lg:top-28">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 p-10 space-y-8"
                >
                  {/* Price Header Alternative */}
                  <div>
                    <span className="inline-block bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                      {t('package_bespoke_label')}
                    </span>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">
                      {t('get_quote')}
                    </h3>
                    <p className="text-slate-500 font-medium text-lg leading-snug">
                      {t('package_tailored_p')}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4 text-lg text-slate-600 font-medium">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-600">
                        <Calendar className="w-5 h-5" />
                      </div>
                      {pkg.duration[language]}
                    </div>
                    <div className="flex items-center gap-4 text-lg text-slate-600 font-medium">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-600">
                        <MapPin className="w-5 h-5" />
                      </div>
                      {t('location_kerala')}
                    </div>
                    <div className="flex items-start gap-4 text-lg text-slate-600 font-medium leading-tight">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-600 shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      {t('package_free_consultation')}
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    {/* Book Now - WhatsApp */}
                    <a
                      href={getQuoteWhatsAppLink(pkg.title[language])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-whatsapp text-white py-5 rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] transition-all hover:bg-whatsapp-dark hover:scale-[1.03] active:scale-95"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                      </svg>
                      {t('get_quote')}
                    </a>

                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-[2rem] font-black text-lg transition-all"
                    >
                      {t('package_other_enquiries')}
                    </Link>
                  </div>

                  <a
                    href={PHONE_LINK}
                    className="w-full block text-center text-slate-500 font-bold hover:text-brand-600 transition-colors text-sm"
                  >
                    {t('package_direct_call')}: {PHONE_DISPLAY}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Book Button */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[999] lg:hidden bg-white/80 backdrop-blur-2xl border-t border-slate-100 px-6 py-4 flex items-center gap-4 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
      >
        <div className="flex-1">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">{t('contact_price')}</span>
          <p className="text-xl font-black text-slate-900 tracking-tight">{t('nav_whatsapp')}</p>
        </div>
        <a
          href={getQuoteWhatsAppLink(pkg.title[language])}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-whatsapp/30"
        >
          <MessageCircle className="w-5 h-5" />
          {t('get_quote')}
        </a>
      </motion.div>
    </main>
  );
}
