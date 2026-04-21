'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Clock, MapPin, Check, X, ChevronDown, ChevronUp,
  IndianRupee, Calendar
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getPackageBySlug } from '@/lib/packages';
import { getPackageWhatsAppLink, PHONE_DISPLAY, PHONE_LINK } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function PackageDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const pkg = getPackageBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(0);

  if (!pkg) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Package Not Found</h1>
          <p className="text-slate-600 mb-8">The tour package you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Packages
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Image Gallery */}
      <section className="pt-20">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-slate-900">
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
                alt={`${pkg.title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Back button */}
          <Link
            href="/packages"
            className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold transition-colors border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            All Packages
          </Link>

          {/* Title overlay */}
          <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-white text-xs font-bold bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                <Clock className="w-3.5 h-3.5" />
                {pkg.duration}
              </div>
              <div className="flex items-center gap-1.5 text-white text-xs font-bold bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                <MapPin className="w-3.5 h-3.5" />
                Kerala, India
              </div>
              {pkg.tag && (
                <div className="bg-brand-600/90 backdrop-blur-sm text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  {pkg.tag}
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
              {pkg.title}
            </h1>
          </div>

          {/* Thumbnail strip */}
          {pkg.gallery.length > 1 && (
            <div className="absolute bottom-8 right-6 md:right-12 z-20 flex gap-2">
              {pkg.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all',
                    selectedImage === idx
                      ? 'border-white shadow-lg scale-105'
                      : 'border-white/30 opacity-60 hover:opacity-100'
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 lg:max-w-3xl">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Overview</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{pkg.overview}</p>
              </motion.div>

              {/* Day-wise Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day, idx) => {
                    const isOpen = openDay === idx;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          'rounded-2xl overflow-hidden transition-all duration-300 border',
                          isOpen
                            ? 'bg-white shadow-lg border-brand-200'
                            : 'bg-white shadow-sm border-slate-200 hover:border-brand-300 hover:shadow-md'
                        )}
                      >
                        <button
                          onClick={() => setOpenDay(isOpen ? null : idx)}
                          className="w-full flex items-center gap-4 p-5 md:p-6 text-left focus:outline-none group"
                        >
                          <div
                            className={cn(
                              'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-sm transition-colors',
                              isOpen
                                ? 'bg-brand-600 text-white'
                                : 'bg-brand-50 text-brand-700 group-hover:bg-brand-100'
                            )}
                          >
                            Day {day.day}
                          </div>
                          <span
                            className={cn(
                              'font-bold text-lg flex-1 transition-colors',
                              isOpen ? 'text-brand-700' : 'text-slate-900'
                            )}
                          >
                            {day.title}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-brand-600 shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                          )}
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="px-5 md:px-6 pb-6 pl-[4.5rem] md:pl-[5.5rem] text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {day.description}
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
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included */}
                  <div className="bg-brand-50/50 rounded-2xl p-6 border border-brand-100">
                    <h3 className="font-bold text-brand-800 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-brand-600" />
                      Included
                    </h3>
                    <ul className="space-y-3">
                      {pkg.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Excluded */}
                  <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {pkg.excluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar — Pricing & Booking */}
            <div className="lg:w-[380px] shrink-0">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-slate-100 p-8 space-y-6"
                >
                  {/* Price */}
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-4xl font-black text-slate-900">{pkg.priceLabel}</span>
                      <span className="text-slate-500 font-medium">/person</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      *GST (5%) applicable extra. Prices may vary based on season and customization.
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Calendar className="w-4 h-4 text-brand-500" />
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-brand-500" />
                      <span className="font-medium">Kerala, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <IndianRupee className="w-4 h-4 text-brand-500" />
                      <span className="font-medium">30% advance to confirm</span>
                    </div>
                  </div>

                  {/* Book Now - WhatsApp */}
                  <a
                    href={getPackageWhatsAppLink(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-[1.02]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                    </svg>
                    Book via WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Enquiry
                  </Link>

                  <a
                    href={PHONE_LINK}
                    className="w-full flex items-center justify-center gap-2 text-slate-600 font-semibold hover:text-brand-600 transition-colors text-sm"
                  >
                    Or call us: {PHONE_DISPLAY}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Book Button */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] lg:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgb(0,0,0,0.1)]">
        <div className="flex-1">
          <span className="text-xs text-slate-500 font-medium">From</span>
          <p className="text-xl font-black text-slate-900">{pkg.priceLabel}</p>
        </div>
        <a
          href={getPackageWhatsAppLink(pkg.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-full font-bold shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
          </svg>
          Book Now
        </a>
      </div>
    </main>
  );
}
