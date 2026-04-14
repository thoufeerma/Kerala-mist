'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users } from 'lucide-react';

export default function About() {
  const points = [
    "Handpicked local heritage stays & premium resorts",
    "Eco-friendly and sustainable travel options",
    "Expert regional drivers matching concierge standards"
  ];

  return (
    <section id="about" className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Layout */}
          <div className="w-full lg:w-1/2 relative space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] lg:h-[550px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=800&auto=format&fit=crop" 
                alt="Kerala Tradition"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              
              {/* Premium Floating Stat Badge */}
              <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/40">
                 <div className="bg-brand-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-brand-600" />
                 </div>
                 <div>
                    <p className="text-2xl font-black text-slate-900 leading-none">10<span className="text-brand-500">+</span></p>
                    <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mt-1">Years Curating</p>
                 </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-10 -right-10 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-50 hidden md:block group"
            >
              <img 
                src="https://images.unsplash.com/photo-1514222026194-22b64d39fb99?q=80&w=500&auto=format&fit=crop" 
                alt="Kerala Landscape"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
              />
              
              {/* Secondary Floating Stat */}
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none">
                 <p className="text-3xl font-black text-white drop-shadow-lg">15,000<span className="text-amber-400">+</span></p>
                 <p className="text-xs font-bold text-white uppercase tracking-widest drop-shadow-md">Guests Hosted</p>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 mt-10 md:mt-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4"
            >
              Who We Are
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Passionate About Sharing The Magic of Kerala
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-slate-600 text-lg mb-8"
            >
              <p>
                At Kerala Mist Holidays, our mission is simple: to offer deeply personalized, high-quality, and authentic travel experiences across Kerala.
              </p>
              <p>
                Born out of a profound love for our homeland, our team possesses unmatched local expertise. We design custom itineraries that let you explore God’s Own Country at your own pace—whether you seek a peaceful retreat in the backwaters, a misty awakening in the hills, or a vibrant coastal adventure.
              </p>
            </motion.div>

            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
              }}
              className="space-y-4 mb-10"
            >
              {points.map((point, idx) => (
                <motion.li 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 font-semibold text-slate-800 bg-white/50 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-white/60 transition-transform cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <div className="bg-brand-50/80 backdrop-blur-sm p-2.5 rounded-xl shadow-inner border border-brand-100 relative z-10">
                     <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0 drop-shadow-sm" />
                  </div>
                  <span className="text-[17px] tracking-tight">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              href="#contact"
              className="inline-flex bg-slate-900 text-white px-10 py-4 lg:py-5 rounded-full font-bold hover:bg-brand-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              Start Your Journey
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
