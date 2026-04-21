import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/Features';
import FeaturedPackages from '@/components/sections/FeaturedPackages';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip bg-slate-50">
      <Hero />
      <WhyChooseUs />
      <FeaturedPackages />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
