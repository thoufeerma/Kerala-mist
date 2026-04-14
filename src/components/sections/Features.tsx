'use client';

import { motion, Variants } from 'framer-motion';
import { Compass, ShieldCheck, HeartHandshake, Map, Star, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Service',
    description: 'Years of authentic, highly-rated experiences with secure bookings and absolute peace of mind.'
  },
  {
    icon: Compass,
    title: 'Local Expertise',
    description: 'We know the hidden gems of God’s Own Country, offering routes far beyond ordinary tourist trails.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Trips',
    description: 'Custom itineraries meticulously tailored to your specific needs, pace, and lifestyle.'
  },
  {
    icon: Award,
    title: 'Affordable Luxury',
    description: 'Premium resort stays and transport experiences designed without the excessive premium price tag.'
  },
  {
    icon: Map,
    title: 'Seamless Logistics',
    description: 'From airport pickup to final drop-off, every transit is pre-planned for absolute comfort.'
  },
  {
    icon: Star,
    title: '24/7 Concierge Support',
    description: 'We stay on standby throughout your entire journey to ensure unparalleled on-ground assistance.'
  }
];

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="features" className="py-24 relative bg-slate-50 border-y border-slate-100 overflow-hidden">
      {/* Decorative Gradient Backdrops to Activate Glassmorphism */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-300/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-300/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-accent-300/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            The Kerala Mist Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            We go beyond just booking hotels; we curate holistic, unforgettable journeys heavily focused on authentic local culture and absolute luxury.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="relative group bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 border border-white/60 overflow-hidden flex flex-col items-start z-10"
            >
              {/* Ambient Hover Graphic Mesh */}
              <div className="absolute -right-20 -top-20 w-56 h-56 bg-brand-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Premium Icon Rig */}
              <div className="relative w-16 h-16 rounded-2xl mb-8 flex items-center justify-center shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 group-hover:scale-110 transition-transform duration-[600ms] ease-out">
                <feature.icon className="w-7 h-7 text-white group-hover:text-amber-400 transition-colors duration-500 drop-shadow-md" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors duration-300 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium text-[17px] relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
