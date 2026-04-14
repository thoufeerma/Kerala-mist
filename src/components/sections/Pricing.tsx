'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const tiers = [
    {
      name: "Essential",
      price: "₹15,000",
      description: "Perfect for budget-conscious couples seeking core experiences.",
      features: [
        "3 Star Hotel Accommodation",
        "Standard Sedan Transport",
        "Complimentary Breakfast",
        "2 Major Destinations",
        "Standard Houseboat (Shared)"
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "₹35,000",
      description: "Our signature package balancing incredible luxury and value.",
      features: [
        "4 Star Premium Resorts",
        "Private SUV Transport (Innova)",
        "Breakfast & Dinner included",
        "4 Major Destinations",
        "Private Premium Houseboat",
        "Dedicated Guide Services"
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "₹75,000",
      description: "The absolute pinnacle of Kerala hospitality and exclusivity.",
      features: [
        "5 Star Luxury Properties (Taj, CGH)",
        "Premium Luxury Transport",
        "All Meals + Premium Dining",
        "Custom Flexible Itinerary",
        "Private Ultra-Luxury Houseboat",
        "Helicopter Charter (Optional Add-on)"
      ],
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Transparent Tiering
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Find Your Perfect Package
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Prices are structured per couple for a standard 4N/5D trip to establish a baseline. We will completely customize these values!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
              className={cn(
                "rounded-3xl p-8 relative transition-shadow duration-300 bg-white",
                tier.popular 
                  ? "border-2 border-brand-500 shadow-2xl md:-mt-8 md:-mb-8 z-10" 
                  : "border border-slate-200 shadow-lg"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500 font-medium">/trip</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0", tier.popular ? "text-brand-500" : "text-slate-400")} />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={cn(
                  "block w-full text-center py-4 rounded-xl font-bold transition-colors",
                  tier.popular 
                    ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg" 
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                )}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
