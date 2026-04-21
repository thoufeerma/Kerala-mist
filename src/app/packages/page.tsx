'use client';

import { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Clock, Filter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { packages } from '@/lib/packages';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n';

type DurationFilter = 'all' | 'short' | 'medium' | 'long';

export default function PackagesPage() {
  const { t, language } = useTranslation();
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      // Duration filter
      if (durationFilter === 'short' && pkg.days > 2) return false;
      if (durationFilter === 'medium' && (pkg.days < 3 || pkg.days > 4)) return false;
      if (durationFilter === 'long' && pkg.days < 5) return false;
      return true;
    });
  }, [durationFilter]);

  const hasActiveFilters = durationFilter !== 'all';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop"
            alt="Kerala Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 to-brand-950/70" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              {t('nav_packages')}
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed">
              {t('packages_hero_p')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Filter Controls */}
          <div className="mb-10">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-slate-700 font-semibold mb-4 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200"
            >
              <Filter className="w-4 h-4" />
              {t('packages_filter_duration')}
              {hasActiveFilters && (
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </button>

            <div className={cn(
              'flex flex-wrap gap-6 items-end',
              showFilters ? 'block' : 'hidden md:flex'
            )}>
              {/* Duration */}
              <div className="flex-1 min-w-[200px]">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                  {t('packages_filter_duration')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all' as DurationFilter, label: t('filter_all') },
                    { value: 'short' as DurationFilter, label: t('filter_short') },
                    { value: 'medium' as DurationFilter, label: t('filter_medium') },
                    { value: 'long' as DurationFilter, label: t('filter_long') },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setDurationFilter(option.value)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                        durationFilter === option.value
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    setDurationFilter('all');
                  }}
                  className="flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-600 mb-2"
                >
                  <X className="w-4 h-4" />
                  {t('filter_clear')}
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-slate-500 text-sm font-medium mb-6">
            {t('packages_showing')} {filteredPackages.length} {t('packages_of')} {packages.length} {t('nav_packages')}
          </p>

          {/* Package Grid */}
          {filteredPackages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg font-medium mb-4">
                {t('packages_no_match')}
              </p>
              <button
                onClick={() => {
                  setDurationFilter('all');
                }}
                className="text-brand-600 font-bold hover:underline"
              >
                {t('packages_clear_all_filters')}
              </button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={durationFilter}
            >
              {filteredPackages.map((pkg) => (
                <motion.div
                  key={pkg.slug}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title[language]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {pkg.tag && (
                      <div className="absolute top-5 left-5 bg-brand-600/90 backdrop-blur-sm text-white px-4 py-1.5 text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                        {pkg.tag[language]}
                      </div>
                    )}
                    <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration[language]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">
                      {pkg.title[language]}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights[language].slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {pkg.overview[language]}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">
                          {t('contact_price')}
                        </span>
                        <span className="text-brand-700 font-black text-lg leading-none">
                          {t('get_quote')}
                        </span>
                      </div>
                      <Link
                        href={`/packages/${pkg.slug}`}
                        className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/10 hover:shadow-brand-600/20 group/btn"
                      >
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
