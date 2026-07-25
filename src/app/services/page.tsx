import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import { serviceSections } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Concierge nursing, care management, hospital-to-home transition, physician care plan follow-through, and family support.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Concierge Nursing & Care Management"
        description="Personalized clinical oversight, advocacy, and coordination designed for older adults and the families who love them."
      />

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto space-y-16">
          {serviceSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              <SectionHeader heading={section.title} align="left" showRule />
              {section.description && (
                <p className="mt-2 font-body text-lg text-slate-mid leading-relaxed max-w-3xl">
                  {section.description}
                </p>
              )}
              {section.items.length > 0 && (
                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-navy-700 bg-white rounded-xl px-4 py-3 shadow-soft"
                    >
                      <Check className="text-gold-500 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="Ready for personalized nursing support?"
        subheading="Let's talk about the right level of care for you or your loved one."
        primaryLabel="Schedule a Complimentary Consultation"
      />
    </>
  );
}
