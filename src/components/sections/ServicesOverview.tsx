import Link from 'next/link';
import { Brain, Heart, Stethoscope, ClipboardList, Pill, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    icon: Brain,
    title: 'Cognitive & Emotional Support',
    description:
      'Thoughtful care for patients experiencing memory changes, anxiety, or emotional distress — delivered with patience and clinical understanding.',
    color: 'sage',
  },
  {
    icon: ClipboardList,
    title: 'Care Coordination & Advocacy',
    description:
      'We serve as your family\'s advocate — coordinating with physicians, specialists, and care teams so nothing falls through the cracks.',
    color: 'navy',
  },
  {
    icon: Stethoscope,
    title: 'Advanced Medical Tasks',
    description:
      'From wound care to IV therapy and catheter management, our RNs perform complex clinical procedures safely in your home.',
    color: 'sage',
  },
  {
    icon: Heart,
    title: 'Clinical Monitoring',
    description:
      'Regular vital assessment, symptom tracking, and early intervention — your loved one\'s condition closely watched by a trained eye.',
    color: 'navy',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description:
      'Comprehensive medication reconciliation, administration, and education so your family understands exactly what is being given and why.',
    color: 'sage',
  },
];

const colorMap = {
  sage: {
    icon: 'bg-sage-100 text-sage-600',
    border: 'border-sage-200/60 hover:border-sage-300',
    tag: 'bg-sage-50 text-sage-700',
  },
  navy: {
    icon: 'bg-navy-100 text-navy-600',
    border: 'border-navy-200/40 hover:border-navy-300',
    tag: 'bg-navy-50 text-navy-700',
  },
};

/**
 * ServicesOverview
 * A card grid preview of our service categories.
 * Links to /services for the full breakdown.
 */
export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white px-6" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          eyebrow="What We Offer"
          heading="Care That Goes Beyond the Basics"
          subheading="We provide the full spectrum of skilled nursing — the kind of attentive, expert care that hospitals discharge patients needing, but families struggle to find."
          className="mb-14"
        />

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon   = svc.icon;
            const colors = colorMap[svc.color as keyof typeof colorMap];
            return (
              <div
                key={svc.title}
                className={`
                  group p-6 rounded-2xl bg-cream-50 border ${colors.border}
                  transition-all duration-300 hover:shadow-warm hover:-translate-y-1
                  ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
                `}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${colors.icon} flex items-center
                                 justify-center mb-4 transition-transform
                                 group-hover:scale-110`}>
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <h3 className="font-body text-base font-semibold text-navy-700 mb-2">
                  {svc.title}
                </h3>
                <p className="font-body text-sm text-slate-mid leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="p-6 rounded-2xl bg-sage-600 flex flex-col justify-between">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-white/60 mb-3">
                Full Service List
              </p>
              <p className="font-display text-2xl text-white font-medium leading-snug mb-3">
                See everything we can do for your family.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-body text-sm font-medium
                         text-white border border-white/30 px-4 py-2.5 rounded-xl
                         hover:bg-white/10 transition-all group w-fit"
            >
              View All Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
