import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import { SITE } from '@/lib/site';
import {
  whoWeServe,
  whyFamiliesChoose,
  servicesPreview,
  testimonials,
} from '@/content/siteContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description:
    'Personalized concierge nursing and care management designed to help older adults remain healthy, independent, and confident in the comfort of home.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[100svh] flex items-center overflow-hidden"
        aria-label="Welcome to Prestwell Continuum"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/landing-hero.png"
            alt="Nurse providing compassionate care to an older adult at home"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(11, 31, 58, 0.82) 0%, rgba(11, 31, 58, 0.55) 42%, rgba(11, 31, 58, 0.28) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="font-display text-gold-300 text-2xl sm:text-3xl mb-3 animate-fade-up">
              Prestwell Continuum
            </p>
            <h1
              className="font-display font-medium text-white leading-[1.08] mb-5 animate-fade-up animate-delay-100"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}
            >
              RN-Led Concierge Care Management
            </h1>
            <p className="font-body text-gold-200 text-lg sm:text-xl mb-6 animate-fade-up animate-delay-200">
              {SITE.motto}
            </p>
            <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed mb-4 max-w-xl animate-fade-up animate-delay-300">
              Personalized concierge nursing and care management designed to help older adults
              remain healthy, independent, and confident in the comfort of home.
            </p>
            <p className="font-body text-white/60 text-sm mb-10 animate-fade-up animate-delay-300">
              Serving seniors and families throughout {SITE.serviceArea}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-400">
              <Button href="/contact" variant="gold" size="lg">
                Schedule a Complimentary Consultation
              </Button>
              <Button
                href="/contact?intent=info"
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/10"
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Welcome"
            heading="Personalized Nursing Beyond the Doctor's Office"
            align="left"
          />
          <div className="mt-8 space-y-5 font-body text-slate-mid text-lg leading-relaxed">
            <p>
              At Prestwell Continuum, we believe healthcare should be personal, proactive, and
              relationship-centered.
            </p>
            <p>
              Our RN-led concierge care management services bridge the gap between physician
              appointments and everyday wellness by providing personalized nursing oversight,
              healthcare advocacy, and care coordination.
            </p>
            <p>
              Whether you are caring for an aging parent, recovering from hospitalization, or
              simply seeking trusted support, our mission is to provide exceptional care that
              promotes independence while offering families peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Who We Serve" heading="Care designed around real lives" />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {whoWeServe.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-navy-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Families Choose */}
      <section className="section-padding px-6 bg-navy-700">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Why Families Choose Us"
            heading="Why Families Choose Prestwell Continuum"
            light
          />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFamiliesChoose.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-white/90 bg-white/5 rounded-xl px-4 py-3"
              >
                <Check className="text-gold-400 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Our Services" heading="Our Services Preview" />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {servicesPreview.map((service) => (
              <div
                key={service.id}
                className="border-t-2 border-gold-500 pt-6"
              >
                <h3 className="font-display text-2xl text-navy-700 mb-3">{service.title}</h3>
                <p className="font-body text-slate-mid leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Reviews"
            heading="What Families Are Saying"
            subheading="Words from clients and caregivers across Madison, Huntsville, Athens, and North Alabama."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {testimonials.map((review) => (
              <blockquote
                key={review.name}
                className="border-l-2 border-gold-500 pl-6"
              >
                <p className="font-display text-xl sm:text-2xl text-navy-700 leading-snug italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic font-body text-sm font-medium text-navy-700">
                    {review.name}
                  </cite>
                  <p className="font-body text-xs tracking-wide text-slate-mid mt-1">
                    {review.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Experience personalized healthcare with a trusted nursing professional."
        subheading="Compassionate Care. Professional Advocacy. Peace of Mind."
        primaryLabel="Schedule Your Consultation Today"
        primaryHref="/contact"
        variant="navy"
      />
    </>
  );
}
