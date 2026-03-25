'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home',         href: '/' },
  { label: 'Services',     href: '/services' },
  { label: 'Care Options', href: '/care-options' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About',        href: '/about' },
  { label: 'Contact',      href: '/contact' },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();

  /* Add shadow + slight opacity once user scrolls */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-40 transition-all duration-300
        ${scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft'
          : 'bg-cream-50/80 backdrop-blur-sm'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-display text-2xl font-semibold tracking-tight
                         text-navy-700 group-hover:text-sage-600 transition-colors"
            >
              Prestwell
            </span>
            <span className="font-body text-xs tracking-[0.18em] uppercase text-slate-mid">
              Continuum
            </span>
          </Link>

          {/* ── Desktop Navigation ───────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium font-body transition-all
                    ${active
                      ? 'text-sage-700 bg-sage-50'
                      : 'text-slate-deep hover:text-sage-700 hover:bg-sage-50/60'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTA ──────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2566487702"
              className="flex items-center gap-2 text-sm font-body text-slate-mid
                         hover:text-sage-700 transition-colors"
              aria-label="Call us at 256-648-7702"
            >
              <Phone size={15} strokeWidth={1.8} />
              <span>256-648-7702</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-sage-600 hover:bg-sage-700 text-white text-sm
                         font-medium font-body rounded-xl shadow-soft transition-all
                         hover:shadow-warm hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* ── Mobile Hamburger ─────────────────────────────── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-deep hover:bg-cream-200 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}
          border-t border-cream-200 bg-cream-50/98 backdrop-blur-md
        `}
        aria-hidden={!open}
      >
        <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium font-body transition-all
                  ${active
                    ? 'text-sage-700 bg-sage-50'
                    : 'text-slate-deep hover:text-sage-700 hover:bg-sage-50'
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile contact info */}
          <div className="mt-3 pt-4 border-t border-cream-200 flex flex-col gap-3">
            <a
              href="tel:2566487702"
              className="flex items-center gap-2 px-4 text-sm font-body text-slate-mid"
            >
              <Phone size={14} strokeWidth={1.8} />
              256-648-7702
            </a>
            <Link
              href="/contact"
              className="mx-4 py-3 bg-sage-600 text-white text-sm font-medium
                         font-body rounded-xl text-center hover:bg-sage-700 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
