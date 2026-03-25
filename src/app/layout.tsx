import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Prestwell Continuum | Private-Duty Nursing Care',
    template: '%s | Prestwell Continuum',
  },
  description:
    'Prestwell Continuum provides compassionate private-duty nursing in your home — clinical expertise with a human touch. Serving families who need more than insurance allows.',
  keywords: [
    'private duty nursing',
    'home nursing care',
    'concierge nursing',
    'private pay nursing',
    'skilled nursing at home',
    'care coordination',
    'Alabama home care',
  ],
  metadataBase: new URL('https://www.prestwellcontinuum.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.prestwellcontinuum.com',
    siteName: 'Prestwell Continuum',
    title: 'Prestwell Continuum | Private-Duty Nursing Care',
    description:
      'Clinical expertise. Personal presence. Care designed entirely around you.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${lora.variable}`}>
      <body className="bg-cream-50 text-slate-deep antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 
                     bg-sage-600 text-white px-4 py-2 rounded-lg z-50 text-sm font-body"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
