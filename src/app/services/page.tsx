'use client';

import { motion, Variants } from 'framer-motion';
import {
  Map, Hotel, Car, Heart, Users, Compass, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants';

const services = [
  {
    icon: Map,
    title: 'Tour Packages',
    description: 'Curated fixed itineraries and fully custom tours across Kerala — from weekend getaways to week-long circuits covering hills, backwaters, beaches, and wildlife.',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description: 'Handpicked accommodations ranging from budget homestays to luxury 5-star resorts. We negotiate the best rates and ensure quality at every price point.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Airport pickups, station drops, and full-trip cab services with experienced local drivers. AC sedans, SUVs, and tempo travellers available.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: Heart,
    title: 'Honeymoon Packages',
    description: 'Romantic getaways designed with premium stays, private houseboats, candlelit dinners, and scenic destinations perfect for couples.',
    color: 'from-rose-500 to-rose-700',
  },
  {
    icon: Users,
    title: 'Group Tours',
    description: 'Organized group travel for families, corporate teams, and friend circles. Bulk pricing, coordinated logistics, and dedicated trip managers.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Compass,
    title: 'Custom Travel Planning',
    description: 'Tell us your dream trip and we\'ll build it from scratch. Flexible dates, unique experiences, off-the-beaten-path adventures — all personalized for you.',
    color: 'from-teal-500 to-teal-700',
  },
];

export default function ServicesPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2000&auto=format&fit=crop"
            alt="Kerala Backwaters"
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
              Our Services
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed">
              Beyond just tour packages — we offer complete travel solutions to make your Kerala experience seamless and memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-300/10 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Complete Travel Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg"
            >
              From planning to execution, we handle every detail so you can focus on enjoying your trip.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 border border-slate-100 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-[15px] flex-1">
                  {service.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors group/link"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-brand-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Need Something Custom?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Can&apos;t find what you&apos;re looking for? Tell us your requirements and we&apos;ll build a package just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppLink("Hi! I need a custom travel plan for Kerala.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all shadow-lg text-lg"
              >
                Send Enquiry
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
