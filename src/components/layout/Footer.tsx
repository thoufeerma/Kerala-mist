import { Leaf, Globe, MessageCircle, Camera, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

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
            Premium, highly-curated travel experiences redefining exploration across God's Own Country.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors">
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#home" className="hover:text-brand-400 transition-colors">Home</Link></li>
            <li><Link href="#features" className="hover:text-brand-400 transition-colors">Why Us</Link></li>
            <li><Link href="#services" className="hover:text-brand-400 transition-colors">Our Packages</Link></li>
            <li><Link href="#pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
            <li><Link href="#faq" className="hover:text-brand-400 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-brand-400 transition-colors">Cancellation Rules</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold mb-6">Reach Out</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
              <span>Marine Drive, Ernakulam,<br/>Kerala, 682031</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-500 shrink-0" />
              <span>+91 98470 06294</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-500 shrink-0" />
              <span>hello@keralamist.com</span>
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
