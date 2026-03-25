import type { Metadata } from 'next';
import { Brain, Heart, Stethoscope, ClipboardList, Pill, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full-spectrum private-duty nursing — cognitive support, care coordination, advanced medical tasks, clinical monitoring, and medication management delivered in your home.',
};

const serviceCategories = [
  {
    id: 'cognitive',
    icon: Brain,
    eyebrow: 'Category 01',
    title: 'Cognitive, Emotional & Relational Support',
    intro:
      'For patients navigating memory changes, emotional complexity, or the loneliness that illness often brings. Our nurses understand that healing is as much emotional as it is clinical.',
    color: 'sage',
    services: [
      'Therapeutic conversation and cognitive engagement',
      'Memory care support and reality orientation',
      'Anxiety and behavioral management strategies',
      'Companionship and meaningful daily interaction',
      'Family communication and caregiver coaching',
      'Monitoring for signs of depression or decline',
      'Emotional support during diagnosis or transition',
    ],
  },
  {
    id: 'coordination',
    icon: ClipboardList,
    eyebrow: 'Category 02',
    title: 'Care Coordination & Advocacy',
    intro:
      'Your nurse is not just a clinician — they are your family\'s advocate inside a complex healthcare system. We make sure nothing slips through the cracks.',
    color: 'navy',
    services: [
      'Physician and specialist communication',
      'Hospital discharge planning and transition support',
      'Medical record review and health history management',
      'Coordination with physical therapy, home health aides, and other providers',
      'Accompaniment to medical appointments (as needed)',
      'Care conference facilitation',
      'Insurance-independent care decisions',
    ],
  },
  {
    id: 'advanced',
    icon: Stethoscope,
    eyebrow: 'Category 03',
    title: 'Advanced Medical Tasks',
    intro:
      'Clinical procedures performed safely and skillfully in the comfort of home — eliminating unnecessary facility visits while maintaining the highest standards of care.',
    color: 'sage',
    services: [
      'Wound care and complex dressing changes',
      'IV therapy administration and monitoring',
      'Foley catheter care and management',
      'Ostomy care and patient education',
      'Tracheostomy care',
      'Enteral/tube feeding management',
      'Specimen collection and lab coordination',
    ],
  },
  {
    id: 'monitoring',
    icon: Heart,
    eyebrow: 'Category 04',
    title: 'Clinical Monitoring & Assessment',
    intro:
      'Early detection prevents crisis. Our nurses bring a trained, attentive eye to every visit — watching, listening, and documenting what matters.',
    color: 'navy',
    services: [
      'Complete head-to-toe nursing assessment',
      'Vital signs monitoring (BP, pulse, oxygen saturation, temperature)',
      'Cardiac and respiratory monitoring',
      'Neurological status assessments',
      'Symptom tracking and trend analysis',
      'Fall risk evaluation and prevention strategies',
      'Skin integrity and pressure injury assessment',
    ],
  },
  {
    id: 'medication',
    icon: Pill,
    eyebrow: 'Category 05',
    title: 'Medication & Treatment Management',
    intro:
      'Medications are one of the most complex — and dangerous — aspects of home care. Our RNs bring order, safety, and clarity to this critical responsibility.',
    color: 'sage',
    services: [
      'Medication reconciliation and review',
      'Safe administration of oral, topical, and injectable medications',
      'Controlled substance management',
      'Side effect monitoring and documentation',
      'Patient and family medication education',
      'Coordination with pharmacy and prescribers',
      'Pain management monitoring and reporting',
    ],
  },
];

const colorStyles = {
  sage: {
    section:  'bg-white',
    badge:    'bg-sage-50 text-sage-700 border border-sage-200',
    icon:     'bg-sage-100 text-sage-600',
    check:    'text-sage-500',
    divider:  'bg-sage-200',
    number:   'text-sage-200',
  },
  navy: {
    section:  'bg-cream-50',
    badge:    'bg-navy-50 text-navy-700 border border-navy-200',
    icon:     'bg-navy-100 text-navy-600',
    check:    'text-navy-400',
    divider:  'bg-navy-200',
    number:   'text-navy-100',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────────────── */}
      <div className="pt-32 pb-16 px-6 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Services"
            heading="Everything Your Loved One Needs. At Home."
            subheading="We provide the full spectrum of skilled nursing care — the kind that hospital discharge planners recommend, but families struggle to secure. Here is exactly what we offer."
            align="left"
          />
        </div>
      </div>

      {/* ── Service Categories ───────────────────────── */}
      {serviceCategories.map((cat, idx) => {
        const Icon   = cat.icon;
        const styles = colorStyles[cat.color as keyof typeof colorStyles];

        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`${styles.section} px-6 py-16 lg:py-20`}
            aria-labelledby={`${cat.id}-heading`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

                {/* Left: label + heading */}
                <div className="lg:col-span-2">
                  {/* Decorative large number */}
                  <div
                    aria-hidden="true"
                    className={`font-display text-[6rem] font-medium leading-none
                                ${styles.number} select-none mb-2 -ml-1`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full
                                   text-xs font-medium font-body mb-4 ${styles.badge}`}>
                    {cat.eyebrow}
                  </div>

                  <div className={`w-12 h-12 rounded-2xl ${styles.icon} flex items-center
                                   justify-center mb-4`}>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h2
                    id={`${cat.id}-heading`}
                    className="font-display text-2xl sm:text-3xl font-medium
                               text-navy-700 leading-snug mb-4"
                  >
                    {cat.title}
                  </h2>

                  <p className="font-body text-base text-slate-mid leading-relaxed">
                    {cat.intro}
                  </p>
                </div>

                {/* Right: service list */}
                <div className="lg:col-span-3">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4" role="list">
                    {cat.services.map((item) => (
                      <li key={item} className="flex items-start gap-3 group">
                        <CheckCircle
                          size={16}
                          className={`${styles.check} flex-shrink-0 mt-0.5`}
                          strokeWidth={2}
                        />
                        <span className="font-body text-sm text-slate-deep leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Section footer note */}
                  <div className="mt-8 pt-6 border-t border-cream-200">
                    <p className="font-body text-xs text-slate-mid italic">
                      All services are performed by licensed Registered Nurses. Specific 
                      offerings are tailored during your care planning consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        heading="Not Sure What You Need?"
        subheading="Tell us about your situation and we'll help you figure out the right level of care — no obligation, no pressure."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact"
        secondaryLabel="View Care Options"
        secondaryHref="/care-options"
        variant="navy"
      />
    </>
  );
}
