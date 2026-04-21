'use client';

import { motion, Variants } from 'framer-motion';
import {
  ShieldCheck, Compass, Settings2, HeartHandshake,
  Award, Users, MapPin, Calendar
} from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/constants';

const values = [
  {
    icon: Compass,
    title: 'Local Expertise',
    description: 'Born and raised in Kerala, our team knows every hidden gem, secret trail, and best-kept local experience across the state.',
  },
  {
    icon: Settings2,
    title: 'Custom Tours',
    description: 'Every itinerary is tailor-made to your preferences — adjust destinations, pace, hotels, and activities to create your perfect trip.',
  },
  {
    icon: HeartHandshake,
    title: '24/7 Support',
    description: 'From your first enquiry to your last day in Kerala, our team is available around the clock via WhatsApp and phone.',
  },
  {
    icon: ShieldCheck,
    title: 'Pricing Clarity',
    description: 'No hidden charges, no surprise fees. We believe in transparent, upfront pricing so you can plan with confidence.',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience', icon: Calendar },
  { value: '15,000+', label: 'Happy Travelers', icon: Users },
  { value: '50+', label: 'Destinations Covered', icon: MapPin },
  { value: '4.9★', label: 'Average Rating', icon: Award },
];

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
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
              About Keralamist
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed">
              Your trusted local partners for authentic Kerala travel experiences since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-5/12"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=800&auto=format&fit=crop"
                  alt="Kerala Culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="bg-brand-100 p-2.5 rounded-full">
                    <Award className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 leading-none">10<span className="text-brand-500">+</span></p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full lg:w-7/12"
            >
              <span className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Passionate About Sharing the Magic of Kerala
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                <p>
                  At Keralamist, we are a team of passionate locals who have dedicated ourselves to showing travelers the real Kerala — beyond the tourist brochures. Founded in Ernakulam, we bring deep knowledge of every corner of God&apos;s Own Country.
                </p>
                <p>
                  Whether you&apos;re seeking a peaceful retreat in the backwaters, a misty morning in Munnar, a wild adventure in Wayanad, or a heritage walk through Fort Kochi — we design every journey to be personal, comfortable, and truly unforgettable.
                </p>
              </div>
              <Link
                href="/packages"
                className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
              >
                Explore Our Packages
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Authentic Experiences, Honest Pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              Our mission is to make Kerala tourism accessible, authentic, and transparent. We believe every traveler deserves a personalized experience without inflated costs or hidden surprises. We connect you directly with local expertise, premium stays, and curated routes — ensuring your trip is as magical as Kerala itself.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-300/15 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            >
              What Sets Us Apart
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.1)] transition-all duration-500 border border-slate-100 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg bg-gradient-to-br from-brand-600 to-brand-700 border border-brand-500 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-white group-hover:text-accent-400 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-brand-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-brand-400" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Ready to Explore Kerala?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Let&apos;s plan your dream trip together. Reach out via WhatsApp for the fastest response.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={getWhatsAppLink("Hi! I'd like to plan a Kerala trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.168 2.282-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.804-8.066-7.118-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428.91-.604 1.214-.604.15 0 .284.008.406.014.432.018.648.044.934.724.358.85 1.228 2.998 1.336 3.216.108.216.216.504.072.804-.134.306-.252.442-.468.696-.216.252-.422.446-.638.72-.198.234-.42.486-.178.934.242.448 1.078 1.778 2.314 2.88 1.588 1.416 2.928 1.856 3.342 2.058.414.204.654.172.896-.1.248-.282 1.058-1.228 1.342-1.648.276-.42.56-.35.942-.21.386.136 2.444 1.152 2.862 1.362.42.21.698.314.8.49.1.172.1 1.01-.29 2.118z" />
                </svg>
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg text-lg"
              >
                Send Enquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
