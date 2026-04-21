'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import {
  PHONE_NUMBERS,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
  getWhatsAppLink,
} from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2000&auto=format&fit=crop"
            alt="Kerala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 to-brand-950/70" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Ready to plan your dream Kerala trip? Send us an enquiry or reach out directly via WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 lg:max-w-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                Send an Enquiry
              </h2>
              <p className="text-slate-500 mb-8">
                Fill in the form below and we&apos;ll get back to you within a few hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-medium"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-bold text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-date" className="text-sm font-bold text-slate-700">
                    Preferred Travel Date *
                  </label>
                  <input
                    type="date"
                    id="contact-date"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-slate-700">
                    Message <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 outline-none transition-all font-medium resize-none"
                    placeholder="Tell us about your travel plans — group size, destinations you're interested in, etc."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full py-4 rounded-xl font-bold flex justify-center items-center gap-3 transition-all duration-300 shadow-lg text-lg',
                    isSuccess
                      ? 'bg-green-500 text-white'
                      : 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-xl'
                  )}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Enquiry Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-[400px] shrink-0 space-y-6"
            >
              {/* WhatsApp Card — Primary Contact */}
              <a
                href={getWhatsAppLink("Hi! I'd like to enquire about a Kerala tour package.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-whatsapp/10 border-2 border-whatsapp/30 rounded-2xl p-6 hover:bg-whatsapp/15 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-7 h-7">
                      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Chat on WhatsApp</p>
                    <p className="text-brand-700 font-semibold text-sm">
                      Fastest way to reach us →
                    </p>
                  </div>
                </div>
              </a>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
                <h3 className="font-bold text-slate-900 text-lg">Contact Details</h3>

                {/* Phone Numbers */}
                {PHONE_NUMBERS.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-4 text-slate-600 hover:text-brand-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <Phone className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        Phone {idx + 1}
                      </p>
                      <p className="font-bold text-slate-900">{phone.display}</p>
                    </div>
                  </a>
                ))}

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 text-slate-600 hover:text-brand-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email</p>
                    <p className="font-bold text-slate-900">{EMAIL}</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Address</p>
                    <p className="font-bold text-slate-900">{ADDRESS}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Working Hours</p>
                    <p className="font-bold text-slate-900">{WORKING_HOURS}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
