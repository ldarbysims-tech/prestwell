import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import BrandLockup from '@/components/brand/BrandLockup';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white">
      <div className="bg-gold-500 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center
                        justify-between gap-4">
          <p className="font-display text-xl text-navy-800 italic">
            {SITE.motto}
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 bg-navy-700 text-white text-sm
                       font-medium font-body rounded-xl hover:bg-navy-800
                       transition-colors shadow-soft"
          >
            Schedule a Complimentary Consultation
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <BrandLockup light />
            <p className="font-body text-sm text-white/65 leading-relaxed max-w-sm mt-5">
              {SITE.tagline}
            </p>
            <p className="font-body text-sm text-white/55 leading-relaxed max-w-sm mt-2">
              {SITE.motto}
            </p>
            <p className="font-body text-sm text-gold-300 mt-4">
              Serving {SITE.serviceAreaShort}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20
                                  flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={14} />
                </span>
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20
                                  flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={14} />
                </span>
                {SITE.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </span>
                North Alabama
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.18em] uppercase text-gold-300 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.18em] uppercase text-gold-300 mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/65 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/65 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="pt-3">
                <Link href="/privacy-policy" className="font-body text-sm text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="font-body text-sm text-white/50 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/hipaa-notice" className="font-body text-sm text-white/50 hover:text-white transition-colors">
                  HIPAA Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row
                        items-center justify-between gap-3 text-xs font-body text-white/40">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Private-pay concierge nursing & care management</p>
        </div>
      </div>
    </footer>
  );
}
