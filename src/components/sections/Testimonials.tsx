'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jane",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/150?img=1",
    feedback: "Absolutely magical! The Alleppey houseboat experience was straight out of a dream. Perfect arrangements from start to finish. Highly recommended!",
    rating: 5
  },
  {
    name: "Rahul Mehra",
    location: "Mumbai, India",
    avatar: "https://i.pravatar.cc/150?img=11",
    feedback: "Everything from our pick up at Kochi airport to the Munnar stay was flawlessly managed by the local team. Incredible hospitality and local knowledge.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Singapore",
    avatar: "https://i.pravatar.cc/150?img=68",
    feedback: "Our honeymoon in Wayanad was made so special thanks to Kerala Mist. The premium resorts they suggested were breathtaking. We will return!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-400 font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-6 text-accent-400">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 text-lg font-light leading-relaxed mb-8 italic">
                "{test.feedback}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={test.avatar} 
                  alt={test.name}
                  className="w-14 h-14 rounded-full border-2 border-brand-500 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{test.name}</h4>
                  <span className="text-slate-400 text-sm">{test.location}</span>
                </div>
              </div>
              
              {/* Massive decorative quote mark */}
              <div className="absolute top-6 right-6 text-brand-500/20 text-7xl font-serif pointer-events-none leading-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
