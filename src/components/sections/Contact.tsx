'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 isolate min-h-[900px] flex items-center overflow-hidden">
      {/* Premium Full-width HD Background Landscape */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <Image 
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop" 
          alt="Kerala Munnar Mountains Contact Background" 
          fill 
          className="object-cover opacity-50 md:opacity-60"
        />
        {/* Dual Gradient Overlay to force sharp text readability regardless of image lightness */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-900/20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Typography & Branding Meta block */}
          <div className="w-full xl:w-5/12 text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight drop-shadow-lg"
            >
              Plan Your <br/><span className="text-brand-400">Legacy.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-200 text-xl mb-12 max-w-lg leading-relaxed font-semibold drop-shadow"
            >
              Reach out to our elite concierges. Whether you know exactly what you want or need us to construct a masterpiece from scratch, we’re ready.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
               <div className="flex items-center gap-4 text-slate-200 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-fit">
                  <div className="bg-brand-500/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">24/7 Priority Line</p>
                    <p className="text-lg font-black tracking-wide">+91 98765 43210</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-slate-200 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 w-fit">
                  <div className="bg-brand-500/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Direct Email</p>
                    <p className="text-lg font-black tracking-wide">concierge@keralamist.com</p>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Elevated Glassmorphism High-Contrast Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full xl:w-7/12"
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-2xl p-8 md:p-12 lg:p-14 rounded-[3rem] shadow-2xl border border-white/20 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:bg-white/10 focus:ring-2 focus:ring-brand-400/50 outline-none transition-all duration-300 font-medium"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:bg-white/10 focus:ring-2 focus:ring-brand-400/50 outline-none transition-all duration-300 font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-300">Travel Requirements</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:bg-white/10 focus:ring-2 focus:ring-brand-400/50 outline-none transition-all duration-300 font-medium resize-none"
                  placeholder="Tell us about the dates, group size, and what you're dreaming of..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full py-5 rounded-2xl font-bold flex justify-center items-center gap-3 transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] text-lg border border-white/10",
                  isSuccess 
                    ? "bg-green-500 text-white" 
                    : "bg-brand-600 text-white hover:bg-white hover:text-slate-900"
                )}
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Reservation Request Sent
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
