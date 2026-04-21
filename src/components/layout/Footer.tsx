import { Leaf, Globe, MessageCircle, Camera, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { PHONE_NUMBERS, EMAIL, ADDRESS, getWhatsAppLink } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-brand-500" />
            <span className="font-bold text-xl text-white tracking-tight">Kerala Mist</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Premium, locally-curated travel experiences across God&apos;s Own Country. Transparent pricing, local guides, and unforgettable journeys.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-whatsapp hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors" aria-label="Instagram">
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
            <li><Link href="/packages" className="hover:text-brand-400 transition-colors">Tour Packages</Link></li>
            <li><Link href="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Popular Packages */}
        <div>
          <h4 className="text-white font-semibold mb-6">Popular Tours</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/packages/munnar-hills-retreat" className="hover:text-brand-400 transition-colors">Munnar Hills Retreat</Link></li>
            <li><Link href="/packages/alleppey-backwaters" className="hover:text-brand-400 transition-colors">Alleppey Backwaters</Link></li>
            <li><Link href="/packages/wayanad-wilderness" className="hover:text-brand-400 transition-colors">Wayanad Wilderness</Link></li>
            <li><Link href="/packages/complete-kerala-circuit" className="hover:text-brand-400 transition-colors">Complete Kerala Circuit</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold mb-6">Reach Out</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            {PHONE_NUMBERS.map((phone, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href={`tel:${phone.raw}`} className="hover:text-brand-400 transition-colors">{phone.display}</a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-500 shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-brand-400 transition-colors">{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        &copy; {new Date().getFullYear()} Kerala Mist Holidays. All rights reserved.
      </div>
    </footer>
  );
}
