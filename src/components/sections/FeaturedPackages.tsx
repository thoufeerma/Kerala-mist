'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { packages } from '@/lib/packages';

export default function FeaturedPackages() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Tour Packages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Featured Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Hand-picked packages designed for every kind of traveler. Each one fully customizable to your preferences.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {packages.map((pkg, idx) => (
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Tag */}
                {pkg.tag && (
                  <div className="absolute top-4 left-4 bg-brand-600/90 backdrop-blur-sm text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    {pkg.tag}
                  </div>
                )}

                {/* Duration badge */}
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

                {/* Highlights */}
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

                {/* Price & CTA */}
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
                    className="flex items-center gap-1.5 text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors group/btn"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
          >
            View All Packages
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
