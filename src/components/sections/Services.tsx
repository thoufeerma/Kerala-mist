'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    image: '/assets/packages/munnar.png',
    title: 'Munnar Hills',
    duration: '3 Days / 2 Nights',
    description: 'Experience the misty tea gardens, serene waterfalls, and breathtaking viewpoints in the Kashmir of South India.',
    tag: 'Best Seller',
    color: 'bg-green-500/20'
  },
  {
    image: '/assets/packages/alleppey.png',
    title: 'Alleppey Houseboat',
    duration: '2 Days / 1 Night',
    description: 'Cruise through the calm emerald backwaters in a traditional premium houseboat and enjoy authentic Kerala cuisine.',
    color: 'bg-blue-500/20'
  },
  {
    image: '/assets/packages/wayanad.png',
    title: 'Wayanad Wilds',
    duration: '4 Days / 3 Nights',
    description: 'Dive into lush forests, ancient caves, serene lakes, and high-altitude mountain passes.',
    color: 'bg-amber-500/20'
  },
  {
    image: '/assets/packages/kochi.png',
    title: 'Kochi Heritage',
    duration: '2 Days / 1 Night',
    description: 'Discover the historical trails, colonial architecture, and iconic Chinese fishing nets.',
    color: 'bg-rose-500/20'
  }
];

interface CardProps {
  pkg: typeof packages[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Card = ({ pkg, index, total, progress }: CardProps) => {
  const getTransforms = () => {
    // Defines exactly segment blocks for scrub binding without overlap lags
    const totalSteps = Math.max(1, total - 1);
    const input = Array.from({ length: total }, (_, i) => i / totalSteps);
    
    const y = [];
    const scale = [];
    const rotate = [];
    
    // Reverse sequentially map stack ordering natively
    const revIdx = total - 1 - index;
    const baseRot = (index % 2 === 0 ? 1 : -1) * (1 + index * 0.4);

    for (let i = 0; i < total; i++) {
      if (i < revIdx) {
        // Firmly positioned off-screen below ready to spring smoothly directly to 0
        y.push(1000);
        scale.push(1);
        rotate.push(0);
      } else if (i === revIdx) {
        // Firm active spot completely 100% visible front layer
        y.push(0);
        scale.push(1);
        rotate.push(0); 
      } else {
        // Subtly scaled backward allowing realistic non-faded depth
        const depth = i - revIdx;
        y.push(-depth * 50);
        scale.push(1 - depth * 0.04);
        rotate.push(baseRot * depth);
      }
    }
    return { input, y, scale, rotate };
  };

  const transforms = getTransforms();
  
  // Exclusively tied to strict un-sprung Scroll progress ensuring zero lag or leaky movements 
  const y = useTransform(progress, transforms.input, transforms.y);
  const scale = useTransform(progress, transforms.input, transforms.scale);
  const rotate = useTransform(progress, transforms.input, transforms.rotate);

  return (
    // Fixed anchor constraint forcing absolute alignments securely natively 
    <div 
      className="absolute top-1/2 left-1/2 w-[90vw] md:w-[85vw] max-w-[1400px] h-[70vh] min-h-[600px] max-h-[850px]"
      style={{ transform: 'translate(-50%, -50%)', zIndex: 10 + (total - index) * 10 }}
    >
      {/* 60FPS Hardware isolation utilizing strictly transform parameters */}
      <motion.div 
        style={{ y, scale, rotate, willChange: 'transform' }}
        className="w-full h-full origin-bottom"
      >
        {/* Solid Premium Full-Bleed Imagery wrapper */}
        <div className="w-full h-full relative group overflow-hidden rounded-[2.5rem] bg-slate-900 border-2 border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] transition-all duration-[800ms]">
          
          {/* Native optimized heavy image backing */}
          <div className="absolute inset-0 z-0">
             <Image 
               src={pkg.image} 
               alt={pkg.title}
               fill
               priority={index === total - 1}
               className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05] opacity-90"
             />
          </div>
          
          {/* Deep Ambient Contrast Gradient for rigorous typography readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />

          {/* Floating Glassmorphism Content Panel anchored bottom left */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:w-[75%] lg:w-[60%] p-8 flex flex-col justify-end z-20 transition-all duration-500">
            <div className="flex flex-col gap-4">
               {/* Metadata Badges */}
               <div className="flex flex-wrap items-center gap-3 mb-2">
                 <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest bg-white/15 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-lg">
                   <Clock className="w-4 h-4" />
                   <span>{pkg.duration}</span>
                 </div>
                 <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg">
                   <MapPin className="w-4 h-4" />
                   <span>Kerala, India</span>
                 </div>
               </div>
               
               {/* Heavy Typography */}
               <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight drop-shadow-2xl leading-[1.1] mb-2">{pkg.title}</h3>
               
               {/* Content Description */}
               <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-medium mb-8 max-w-2xl drop-shadow-md">
                 {pkg.description}
               </p>
               
               {/* Interactive Action */}
               <div>
                 <a href="#contact" className="inline-flex items-center justify-center bg-white text-slate-900 font-extrabold px-10 py-4 rounded-full hover:bg-brand-50 hover:scale-[1.02] transition-all shadow-2xl text-lg relative overflow-hidden group/btn">
                   <span className="relative z-10">Discover Experience</span>
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent translate-x-[-100%] group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                 </a>
               </div>
            </div>
          </div>
          
          {/* Top Right Heavy Accent Tag */}
          {pkg.tag && (
            <div className="absolute top-8 right-8 z-30 bg-brand-600/90 backdrop-blur-xl text-white px-8 py-3 text-sm font-black rounded-full shadow-2xl uppercase tracking-widest border border-brand-400/30">
              {pkg.tag}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef(null);
  
  // Directly targeting start/end to strictly lock the 300vh scrub bounds eliminating all loose leakage natively
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Height implicitly dictates exact frame lock duration structurally leveraging scroll physics safely
    <section id="services" ref={containerRef} className="relative h-[300vh] w-full isolate bg-slate-50">
      
      {/* Absolute pinned parent completely freezing viewport exactly identically to GSAP pin: true */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* Soft Ambient Overlay Background Matrix */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply" />

        <div className="text-center w-full z-10 absolute top-[8vh] md:top-[12vh] left-0 pointer-events-none px-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-600 font-extrabold tracking-[0.25em] uppercase text-sm mb-4"
          >
            Curated Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter"
          >
            The Collection
          </motion.h2>
        </div>

        {/* Anchored sub-boundary constraining layout seamlessly rendering cards overtop flawlessly */}
        <div className="relative w-full h-[70vh] min-h-[600px] max-h-[850px] mx-auto z-20 mt-16 md:mt-24">
          {packages.map((pkg, idx) => (
            <Card 
              key={idx} 
              index={idx} 
              pkg={pkg} 
              total={packages.length} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
