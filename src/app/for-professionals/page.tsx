import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import { partnerTypes, contractServices } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'For Professionals',
  description:
    'Partner with Prestwell Continuum for customized concierge nursing services that enhance resident wellness and continuity of care.',
};

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Professionals"
        title="Partner with Prestwell Continuum"
        description="We proudly partner with healthcare professionals, senior living communities, businesses, and organizations to provide concierge nursing services that enhance resident wellness and support continuity of care."
      />

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Collaboration" heading="We Partner With" />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {partnerTypes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-navy-700 bg-white rounded-xl px-4 py-3 shadow-soft"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Contract Services"
            heading="Customized private contracts available for"
            subheading="Flexible programs designed around your community or organization's goals."
          />
          <ul className="mt-12 grid sm:grid-cols-2 gap-3">
            {contractServices.map((item) => (
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
        heading="Request a Professional Consultation"
        subheading="Tell us about your community or practice—we'll design a concierge nursing partnership that fits."
        primaryLabel="Request a Professional Consultation"
        primaryHref="/contact?intent=professional"
      />
    </>
  );
}
