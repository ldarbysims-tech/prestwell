import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Personalized RN-led concierge nursing and care management helping older adults remain healthy, independent, and confident at home. Serving Madison, Huntsville, Athens, and North Alabama.',
  keywords: [
    'concierge nursing',
    'care management',
    'RN-led care',
    'aging in place',
    'hospital to home',
    'North Alabama',
    'Madison AL',
    'Huntsville',
    'Athens AL',
  ],
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.motto,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-cream-100 text-navy-700 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                     bg-navy-700 text-white px-4 py-2 rounded-lg z-50 text-sm font-body"
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
