import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import AppShell from '@/components/layout/AppShell';
import { LanguageProvider } from '@/lib/i18n';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Kerala Mist | Explore Kerala with Local Experts',
  description: 'Custom tour packages covering Munnar, Alleppey, Kochi, Wayanad & more. Transparent pricing, local guides, and customizable itineraries across God\'s Own Country.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased selection:bg-brand-500 selection:text-white`}>
        <LanguageProvider>
          <AppShell>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppFloat />
          </AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
