'use client';

import { motion, Variants } from 'framer-motion';
import { Package, Settings2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Choose a Package',
    description: 'Browse our curated collection of Kerala tour packages and find the one that speaks to you.',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Customize It',
    description: 'Adjust dates, hotels, destinations, and activities — make it truly your trip.',
  },
  {
    number: '03',
    title: 'Book via WhatsApp',
    description: 'Confirm your trip instantly through WhatsApp. No forms, no wait — just a quick chat.',
    isWhatsApp: true,
  },
];

export default function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-400 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg"
          >
            Planning your dream Kerala trip takes just three simple steps.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-[72px] left-[calc(33.33%+8px)] right-[calc(33.33%+8px)] z-0">
            <div className="w-full border-t-[3px] border-dashed border-brand-600/40" />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="relative mb-6">
                <div className="w-[88px] h-[88px] rounded-full bg-white/5 border-2 border-brand-500/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.3)]">
                    {step.isWhatsApp ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-7 h-7">
                        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                      </svg>
                    ) : (
                      step.icon && <step.icon className="w-7 h-7 text-white" />
                    )}
                  </div>
                </div>
                {/* Step number */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-400 text-slate-900 text-xs font-black flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
