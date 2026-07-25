import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Heart } from 'lucide-react';

/**
 * Hero
 * The homepage hero — emotional, trust-building, warm.
 * Designed to immediately comfort families in a difficult decision moment.
 */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden texture-bg"
      aria-label="Welcome to Prestwell Continuum"
    >
      {/* ── Background decorative elements ─────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        {/* Warm gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-50 to-sage-50/40" />

        {/* Large soft circle — top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px]
                        rounded-full bg-sage-100/40 blur-3xl" />

        {/* Medium circle — bottom left */}
        <div className="absolute -bottom-24 -left-16 w-[400px] h-[400px]
                        rounded-full bg-navy-100/30 blur-3xl" />

        {/* Subtle vertical rule */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cream-300/40
                        hidden xl:block" />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-sage-100 border border-sage-200 mb-6
                            animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
              <span className="font-body text-xs font-medium text-sage-700 tracking-wide">
                Private-Duty Nursing · No Insurance Required
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-medium leading-[1.06] tracking-tight
                         text-navy-700 mb-6 animate-fade-up animate-delay-100"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
            >
              Care That Comes
              <br />
              <span className="italic text-sage-600">Home to You.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg sm:text-xl text-slate-mid leading-relaxed
                          max-w-lg mb-8 animate-fade-up animate-delay-200">
              Expert private-duty nursing delivered with genuine human presence —
              designed around your family, not insurance limitations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10
                            animate-fade-up animate-delay-300">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2
                           px-7 py-4 bg-sage-600 hover:bg-sage-700 text-white
                           font-medium font-body rounded-xl shadow-soft
                           hover:shadow-warm hover:-translate-y-0.5 transition-all"
              >
                Schedule a Consultation
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2
                           px-7 py-4 border border-cream-300 text-slate-deep
                           hover:border-sage-300 hover:bg-sage-50 font-medium
                           font-body rounded-xl transition-all"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap gap-6 animate-fade-up animate-delay-400">
              {[
                { icon: ShieldCheck, label: 'Registered Nurses Only' },
                { icon: Clock,       label: 'Flexible Scheduling' },
                { icon: Heart,       label: 'Continuity of Care' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-slate-mid">
                  <Icon size={15} className="text-sage-500" strokeWidth={1.8} />
                  <span className="font-body text-sm">{label}</span>
                </div>
              ))}
            </div>

            {/* Learn More */}
            <div className="flex flex-col items-center gap-2 mt-8 animate-fade-up animate-delay-500">
              <span className="font-body text-xs text-slate-mid tracking-widest uppercase">
                Learn More
              </span>
              <div className="w-px h-10 bg-gradient-to-b from-slate-mid/40 to-transparent" />
            </div>
          </div>

          {/* Right: visual card stack */}
          <div
            className="relative lg:flex hidden items-center justify-center
                       animate-fade-up animate-delay-200"
            aria-hidden="true"
          >
            {/* Background card */}
            <div className="absolute top-8 right-0 w-72 h-80 rounded-3xl
                            bg-cream-200/60 rotate-3 shadow-soft" />

            {/* Main card */}
            <div className="relative z-10 w-80 rounded-3xl bg-white shadow-lifted
                            overflow-hidden border border-cream-200/60 -rotate-1">
              {/* Card header */}
              <div className="bg-sage-600 px-6 py-5">
                <p className="font-display text-white text-lg font-medium">
                  A Different Kind of Care
                </p>
                <p className="font-body text-sm text-white/70 mt-1">
                  Built entirely around you
                </p>
              </div>

              {/* Card body */}
              <div className="px-6 py-5 flex flex-col gap-4">
                {[
                  { title: 'Clinical Excellence',   desc: 'Licensed RNs with specialized training' },
                  { title: 'True Continuity',        desc: 'The same nurse, every visit' },
                  { title: 'Transparent Pricing',    desc: 'No hidden fees, no surprise bills' },
                  { title: 'Your Schedule',          desc: 'Daily, weekly, or custom cadence' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sage-100 flex items-center
                                    justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-navy-700">{title}</p>
                      <p className="font-body text-xs text-slate-mid">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 bg-cream-100 border-t border-cream-200">
                <p className="font-body text-xs text-slate-mid text-center">
                  Call us today:{' '}
                  <a href="tel:2562489616" className="text-sage-600 font-medium hover:underline">
                    256-248-9616
                  </a>
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl
                            shadow-warm px-4 py-3 border border-cream-200/80
                            flex items-center gap-3 rotate-1">
              <div className="w-9 h-9 rounded-xl bg-navy-100 flex items-center justify-center">
                <Heart size={16} className="text-navy-600" />
              </div>
              <div>
                <p className="font-body text-xs font-medium text-navy-700">Private Pay</p>
                <p className="font-body text-[11px] text-slate-mid">No insurance needed</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
