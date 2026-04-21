'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jane',
    location: 'London, UK',
    initials: 'SJ',
    color: 'from-rose-400 to-pink-500',
    feedback:
      'Absolutely magical! The Alleppey houseboat experience was straight out of a dream. Perfect arrangements from start to finish. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rahul Mehra',
    location: 'Mumbai, India',
    initials: 'RM',
    color: 'from-blue-400 to-indigo-500',
    feedback:
      'Everything from our pickup at Kochi airport to the Munnar stay was flawlessly managed. Incredible hospitality and local knowledge.',
    rating: 5,
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    initials: 'DC',
    color: 'from-amber-400 to-orange-500',
    feedback:
      'Our honeymoon in Wayanad was made so special thanks to Kerala Mist. The premium resorts they suggested were breathtaking. We will return!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-brand-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-amber-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-700 font-extrabold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            What Our Guests Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Real experiences from travelers who explored Kerala with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 border border-slate-100 relative flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-accent-400">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8 flex-1">
                &ldquo;{test.feedback}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar with initials */}
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${test.color} flex items-center justify-center shadow-lg shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{test.initials}</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">{test.name}</h4>
                  <span className="text-slate-500 text-sm">{test.location}</span>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="absolute top-6 right-6 text-brand-100 text-7xl font-serif pointer-events-none leading-none select-none">
                &ldquo;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
