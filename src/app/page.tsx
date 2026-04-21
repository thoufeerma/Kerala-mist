'use client';

import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/Features';
import FeaturedPackages from '@/components/sections/FeaturedPackages';
import PopularDestinations from '@/components/sections/PopularDestinations';
import TrivandrumHighlight from '@/components/sections/TrivandrumHighlight';
import Testimonials from '@/components/sections/Testimonials';
import ReachOut from '@/components/sections/ReachOut';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip bg-slate-50">
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <FeaturedPackages />
      <TrivandrumHighlight />
      <Testimonials />
      <ReachOut />
    </main>
  );
}

