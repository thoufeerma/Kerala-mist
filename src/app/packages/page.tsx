'use client';

import { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Clock, Filter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { packages } from '@/lib/packages';
import { cn } from '@/lib/utils';

type DurationFilter = 'all' | 'short' | 'medium' | 'long';
type BudgetFilter = 'all' | 'budget' | 'mid' | 'premium';

export default function PackagesPage() {
  const [durationFilter, setDurationFilter] = useState<DurationFilter>('all');
  const [budgetFilter, setBudgetFilter] = useState<BudgetFilter>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      // Duration filter
      if (durationFilter === 'short' && pkg.days > 2) return false;
      if (durationFilter === 'medium' && (pkg.days < 3 || pkg.days > 4)) return false;
      if (durationFilter === 'long' && pkg.days < 5) return false;

      // Budget filter
      if (budgetFilter === 'budget' && pkg.price > 7000) return false;
      if (budgetFilter === 'mid' && (pkg.price < 7000 || pkg.price > 15000)) return false;
      if (budgetFilter === 'premium' && pkg.price < 15000) return false;

      return true;
    });
  }, [durationFilter, budgetFilter]);

  const hasActiveFilters = durationFilter !== 'all' || budgetFilter !== 'all';

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
              Our Tour Packages
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed">
              Handpicked experiences across Kerala — from misty hills to serene backwaters.
              Every package is fully customizable.
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
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </button>

            <div className={cn(
              'flex flex-wrap gap-6 items-start',
              showFilters ? 'block' : 'hidden md:flex'
            )}>
              {/* Duration */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                  Duration
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all' as DurationFilter, label: 'All' },
                    { value: 'short' as DurationFilter, label: '1–2 Days' },
                    { value: 'medium' as DurationFilter, label: '3–4 Days' },
                    { value: 'long' as DurationFilter, label: '5+ Days' },
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

              {/* Budget */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                  Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all' as BudgetFilter, label: 'All' },
                    { value: 'budget' as BudgetFilter, label: 'Under ₹7,000' },
                    { value: 'mid' as BudgetFilter, label: '₹7K – ₹15K' },
                    { value: 'premium' as BudgetFilter, label: '₹15K+' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setBudgetFilter(option.value)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                        budgetFilter === option.value
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
                    setBudgetFilter('all');
                  }}
                  className="flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-600 mt-6 md:mt-auto"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-slate-500 text-sm font-medium mb-6">
            Showing {filteredPackages.length} of {packages.length} packages
          </p>

          {/* Package Grid */}
          {filteredPackages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg font-medium mb-4">
                No packages match your filters.
              </p>
              <button
                onClick={() => {
                  setDurationFilter('all');
                  setBudgetFilter('all');
                }}
                className="text-brand-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${durationFilter}-${budgetFilter}`}
            >
              {filteredPackages.map((pkg) => (
                <motion.div
                  key={pkg.slug}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {pkg.tag && (
                      <div className="absolute top-4 left-4 bg-brand-600/90 backdrop-blur-sm text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                        {pkg.tag}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                      {pkg.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {pkg.overview}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 font-medium">Starting from</span>
                        <p className="text-2xl font-black text-slate-900">
                          {pkg.priceLabel}
                          <span className="text-sm font-medium text-slate-500 ml-1">/person</span>
                        </p>
                      </div>
                      <Link
                        href={`/packages/${pkg.slug}`}
                        className="flex items-center gap-1.5 bg-brand-600 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-brand-700 transition-colors shadow-md group/btn"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
