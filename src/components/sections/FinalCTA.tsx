'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2000&auto=format&fit=crop"
          alt="Kerala Backwaters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 to-brand-900/80" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">
              Limited Slots Available
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Plan Your Kerala <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-400">
              Trip Today
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Don&apos;t just dream about Kerala — experience it. Reach out now and let us craft your perfect itinerary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={getWhatsAppLink("Hi! I'd like to plan my Kerala trip. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:scale-105 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
              </svg>
              WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 text-lg"
            >
              Send Enquiry
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
