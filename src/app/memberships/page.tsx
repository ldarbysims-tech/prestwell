import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import Button from '@/components/ui/Button';
import { memberships, addOnServices } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'Memberships',
  description:
    'Heritage, Signature, and Prestige concierge memberships with personalized nursing oversight, advocacy, and compassionate support.',
};

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Concierge Memberships"
        description="Every membership includes personalized nursing oversight, healthcare advocacy, and compassionate support."
      />

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-body text-lg text-slate-mid leading-relaxed">
            A minimum four-month commitment is required. Annual memberships are available with
            exclusive benefits.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {memberships.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex flex-col rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-navy-700 text-white shadow-lifted ring-2 ring-gold-400'
                  : 'bg-white text-navy-700 shadow-soft'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold-500 text-navy-900 text-xs font-body font-medium tracking-wide rounded-full">
                  Most Popular
                </span>
              )}
              <h2 className="font-display text-2xl mb-2">{tier.name}</h2>
              <p
                className={`font-body text-sm mb-6 ${
                  tier.popular ? 'text-white/70' : 'text-slate-mid'
                }`}
              >
                {tier.tagline}
              </p>
              <p
                className={`font-body text-xs tracking-widest uppercase mb-4 ${
                  tier.popular ? 'text-gold-300' : 'text-gold-600'
                }`}
              >
                Includes
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-sm">
                    <Check
                      className={`flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'text-gold-400' : 'text-gold-500'
                      }`}
                      size={16}
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact?intent=consultation"
                variant={tier.popular ? 'gold' : 'primary'}
                className="w-full"
              >
                Inquire About {tier.name.replace(' Membership', '')}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Add-Ons"
            heading="Concierge Add-On Services"
            subheading="Enhance any membership with additional support tailored to your needs."
          />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOnServices.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-navy-700 border border-cream-300 rounded-xl px-4 py-3"
              >
                <Check className="text-gold-500 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        heading="Find the membership that fits your life"
        subheading="We'll help you choose the right level of support—no pressure, just clarity."
        primaryLabel="Schedule a Complimentary Consultation"
      />
    </>
  );
}
