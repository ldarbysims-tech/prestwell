import Link from 'next/link';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const footerLinks = {
  care: [
    { label: 'Services',       href: '/services' },
    { label: 'Care Options',   href: '/care-options' },
    { label: 'How It Works',   href: '/how-it-works' },
  ],
  company: [
    { label: 'About Us',   href: '/about' },
    { label: 'Contact',    href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">

      {/* ── Top CTA strip ──────────────────────────────────── */}
      <div className="bg-sage-600 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center
                        justify-between gap-4">
          <p className="font-display text-xl text-white/90 italic">
            "Let us bear some of the heaviness."
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 bg-white text-sage-700 text-sm
                       font-medium font-body rounded-xl hover:bg-cream-100
                       transition-colors shadow-soft"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>

      {/* ── Main footer content ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-display text-2xl font-medium text-white">
                Prestwell
              </span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/50">
                Continuum
              </span>
            </Link>
            <p className="font-body text-sm text-white/65 leading-relaxed max-w-xs mt-4">
              Private-duty nursing designed around you. We bring clinical excellence 
              and genuine compassion directly into your home — without the limitations 
              of insurance.
            </p>

            {/* Contact info */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:2566487702"
                className="flex items-center gap-3 text-sm text-white/70
                           hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20
                                  flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={14} />
                </span>
                256-648-7702
              </a>
              <a
                href="mailto:care@prestwellcontinuum.com"
                className="flex items-center gap-3 text-sm text-white/70
                           hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20
                                  flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={14} />
                </span>
                care@prestwellcontinuum.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/55">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center
                                  justify-center flex-shrink-0">
                  <MapPin size={14} />
                </span>
                Serving Northern Alabama
              </div>
            </div>
          </div>

          {/* Care links */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-white/40 mb-4">
              Our Care
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.care.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-white/40 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Private pay badge */}
            <div className="mt-8 p-3 rounded-xl bg-white/8 border border-white/10">
              <p className="text-xs text-white/50 font-body leading-relaxed">
                <span className="text-sage-300 font-medium block mb-0.5">
                  Private Pay Service
                </span>
                No insurance required. Transparent, flexible pricing designed around your family.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-xs text-white/35 font-body">
            © {new Date().getFullYear()} Prestwell Continuum. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 font-body transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/40 hover:text-white/70 font-body transition-colors">
              Terms of Service
            </Link>
            <Link href="/hipaa-notice" className="text-xs text-white/40 hover:text-white/70 font-body transition-colors">
              HIPAA Notice
            </Link>
          </div>

          <p className="text-xs text-white/30 font-body flex items-center gap-1.5">
            Built with <Heart size={10} className="text-sage-400" fill="currentColor" /> for families who deserve better care
          </p>
        </div>
      </div>
    </footer>
  );
}
