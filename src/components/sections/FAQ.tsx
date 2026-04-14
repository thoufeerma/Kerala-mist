'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "When is the best time to visit Kerala?",
    answer: "The best time to visit is generally between September and March when the weather is comfortable and dry (winter/spring). However, monsoon season (June to August) is also beautiful for Ayurveda treatments and witnessing lush greenery."
  },
  {
    question: "Are your packages customizable?",
    answer: "Absolutely! We specialize in tailored itineraries. While we show standard packages, every aspect including duration, hotel classes, and specific destinations can be swapped around your preferences."
  },
  {
    question: "Do you provide airport transfers?",
    answer: "Yes, all our multi-day packages include seamless pickup and drop-off from major hubs like Kochi (COK), Trivandrum (TRV), or Calicut (CCJ) airports using private air-conditioned vehicles."
  },
  {
    question: "What is the payment policy?",
    answer: "We typically require a 30% advance to secure hotel and houseboat reservations. The remaining balance can be paid 7 days prior to arrival or upon reaching Kerala, depending on the agreed terms."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative bg-[#f8fafc] overflow-hidden">
      {/* Decorative Matrix Background */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-brand-50/40 rounded-l-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left Column Context */}
          <div className="w-full lg:w-4/12 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-brand-200"
            >
              <MessageCircleQuestion className="w-8 h-8 text-brand-600" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Have <br className="hidden lg:block"/> Questions?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg font-medium leading-relaxed mb-8"
            >
              Find answers to common queries about our premium packages, itineraries, and booking policies. Need more specific assistance? Our concierge is always on call.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="#contact" 
              className="inline-flex font-bold text-brand-700 bg-white border border-brand-200 px-8 py-3.5 rounded-full hover:bg-brand-50 hover:shadow-lg transition-all"
            >
              Contact Support
            </motion.a>
          </div>

          {/* Right Column Accordion Stack */}
          <div className="w-full lg:w-8/12 space-y-6">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "rounded-[2rem] overflow-hidden transition-all duration-300",
                    isOpen 
                      ? "bg-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-brand-200 scale-[1.02]" 
                      : "bg-white shadow-sm border border-slate-200 hover:border-brand-300 hover:shadow-md"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-8 md:p-10 text-left focus:outline-none group"
                  >
                    <span className={cn(
                      "font-extrabold text-xl md:text-2xl transition-colors pr-6", 
                      isOpen ? "text-brand-700" : "text-slate-900 group-hover:text-brand-600"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                      isOpen ? "bg-brand-100" : "bg-slate-100 group-hover:bg-brand-50"
                    )}>
                      {isOpen ? (
                        <Minus className="w-6 h-6 text-brand-600" />
                      ) : (
                        <Plus className="w-6 h-6 text-slate-500 group-hover:text-brand-600" />
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
                        <div className="px-8 md:px-10 pb-10 text-slate-600 text-lg md:text-xl font-medium leading-relaxed border-t border-slate-100 pt-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
