'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import BrandLockup from '@/components/brand/BrandLockup';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-40 transition-all duration-300
        ${scrolled
          ? 'bg-cream-100/95 backdrop-blur-md shadow-soft'
          : 'bg-cream-100/90 backdrop-blur-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          <BrandLockup compact />

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-2.5 py-2 rounded-lg text-[13px] font-medium font-body transition-all whitespace-nowrap
                    ${active
                      ? 'text-navy-700 bg-gold-100'
                      : 'text-slate-deep hover:text-navy-700 hover:bg-cream-200'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-sm font-body text-slate-mid
                         hover:text-navy-700 transition-colors"
              aria-label={`Call us at ${SITE.phone}`}
            >
              <Phone size={15} strokeWidth={1.8} />
              <span>{SITE.phone}</span>
            </a>
            <Link
              href="/contact"
              className="px-4 py-2.5 bg-navy-700 hover:bg-navy-800 text-white text-sm
                         font-medium font-body rounded-xl shadow-soft transition-all
                         hover:shadow-warm hover:-translate-y-0.5 whitespace-nowrap"
            >
              Schedule a Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-lg text-navy-700 hover:bg-cream-200 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`
          xl:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'}
          border-t border-cream-300 bg-cream-100/98 backdrop-blur-md
        `}
        aria-hidden={!open}
      >
        <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium font-body transition-all
                  ${active
                    ? 'text-navy-700 bg-gold-100'
                    : 'text-slate-deep hover:text-navy-700 hover:bg-cream-200'
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-3 pt-4 border-t border-cream-300 flex flex-col gap-3">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 px-4 text-sm font-body text-slate-mid"
            >
              <Phone size={14} strokeWidth={1.8} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="mx-4 py-3 bg-navy-700 text-white text-sm font-medium
                         font-body rounded-xl text-center hover:bg-navy-800 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
