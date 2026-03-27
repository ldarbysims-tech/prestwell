import type { Metadata } from 'next';
import { Calendar, Sun, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'Care Options',
  description:
    'Choose the level of private-duty nursing care that fits your family. Weekly visits, twice-weekly visits, or daily care — all fully customizable.',
};

const careOptions = [
  {
    id: 'weekly',
    icon: Calendar,
    frequency: 'Weekly Visits',
    tagline: 'Watchful. Proactive. Reassuring.',
    ideal: 'Ideal for patients who are largely independent but benefit from skilled clinical oversight and preventive monitoring.',
    description:
      'Our weekly care option is designed for patients and families who need a trusted clinical presence — without daily hands-on involvement. Your nurse will conduct thorough assessments, manage medications, address emerging concerns early, and keep your family informed.',
    includes: [
      'Full head-to-toe nursing assessment each visit',
      'Vital sign monitoring and documentation',
      'Medication review and reconciliation',
      'Wound assessment or minor wound care',
      'Family communication and care updates',
      'Coordination with physician if concerns arise',
    ],
    bestFor: [
      'Post-discharge patients stabilizing at home',
      'Chronic condition management (COPD, CHF, diabetes)',
      'Patients whose family wants professional oversight',
      'Early detection and prevention of decline',
    ],
    featured: false,
    accent: 'sage',
  },
  {
    id: 'daily',
    icon: Sun,
    frequency: 'Daily Visits',
    tagline: 'Present. Consistent. Thorough.',
    ideal: 'Ideal for patients who require daily clinical attention, medication administration, or recovery support following a procedure or hospitalization.',
    description:
      'Daily nursing care provides the consistent clinical presence your loved one needs during recovery, active treatment, or when a medical condition requires hands-on management every day. Your nurse becomes a fixture — a trusted, skilled face your loved one expects and welcomes.',
    includes: [
      'All weekly visit services — every day',
      'Daily medication administration and management',
      'Wound care, dressing changes, and healing assessment',
      'IV therapy or injection administration as ordered',
      'Symptom monitoring and real-time reporting',
      'Personal care assistance (as clinically appropriate)',
      'Detailed daily nursing notes',
    ],
    bestFor: [
      'Complex wound management and post-surgical care',
      'IV antibiotic or infusion therapy at home',
      'Patients transitioning from hospital or rehab',
      'Families who need daily reassurance and updates',
    ],
    featured: true,
    accent: 'navy',
  },
  {
    id: 'twice-weekly',
    icon: RefreshCw,
    frequency: 'Twice Weekly Visits',
    tagline: 'Consistent. Balanced. Dependable.',
    ideal: 'Ideal for patients who need more than a weekly check-in but don\'t yet require daily nursing — a structured middle ground that catches changes before they become problems.',
    description:
      'Twice-weekly nursing provides a reliable rhythm of clinical oversight for patients managing ongoing conditions or recovering gradually at home. Two visits per week means your nurse stays closely attuned to your loved one\'s progress, with enough frequency to catch early warning signs and adjust care accordingly.',
    includes: [
      'Full nursing assessment at each visit',
      'Vital sign monitoring and trend tracking',
      'Medication review and administration as ordered',
      'Wound care and dressing changes as needed',
      'Family updates after each visit',
      'Coordination with physicians between visits',
      'Detailed nursing documentation each visit',
    ],
    bestFor: [
      'Patients stepping down from daily care',
      'Chronic condition management requiring close follow-up',
      'Post-discharge patients not yet fully stabilized',
      'Families wanting frequent clinical touchpoints without daily visits',
    ],
    featured: false,
    accent: 'sage',
  },
];

const accentStyles = {
  sage: {
    badge:     'bg-sage-100 text-sage-700 border border-sage-200',
    icon:      'bg-sage-100 text-sage-600',
    check:     'text-sage-500',
    tag:       'bg-sage-50 text-sage-600 border-sage-200',
    border:    'border-cream-200 hover:border-sage-300',
    cardBg:    'bg-white',
  },
  navy: {
    badge:     'bg-navy-100 text-navy-700 border border-navy-200',
    icon:      'bg-navy-700 text-white',
    check:     'text-sage-500',
    tag:       'bg-navy-50 text-navy-600 border-navy-200',
    border:    'border-navy-200',
    cardBg:    'bg-navy-700',
  },
};

export default function CareOptionsPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────── */}
      <div className="pt-32 pb-16 px-6 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Care Options"
            heading="Find the Right Level of Care for Your Loved One"
            subheading="Every family's situation is different. We offer three flexible care structures — all fully customizable, all delivered by the same trusted RN, and all designed to fit your life."
          />
        </div>
      </div>

      {/* ── Care option cards ────────────────────────── */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Card grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {careOptions.map((option) => {
              const Icon   = option.icon;
              const styles = accentStyles[option.accent as keyof typeof accentStyles];
              const isFeat = option.featured;

              return (
                <div
                  key={option.id}
                  className={`
                    relative rounded-3xl border overflow-hidden
                    ${styles.border} ${styles.cardBg}
                    transition-all duration-300 hover:shadow-lifted
                    ${isFeat ? 'ring-2 ring-navy-600 ring-offset-2 lg:-translate-y-2 shadow-warm' : 'shadow-soft'}
                  `}
                >
                  {/* Featured badge */}
                  {isFeat && (
                    <div className="absolute top-0 inset-x-0 flex justify-center -mt-px">
                      <span className="bg-navy-600 text-white text-xs font-medium
                                       font-body px-4 py-1 rounded-b-lg">
                        Most Comprehensive
                      </span>
                    </div>
                  )}

                  <div className="p-7 pt-9">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${styles.icon} flex items-center
                                      justify-center mb-5`}>
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    {/* Frequency + tagline */}
                    <h2 className={`font-display text-2xl font-medium leading-snug mb-1
                                    ${isFeat ? 'text-white' : 'text-navy-700'}`}>
                      {option.frequency}
                    </h2>
                    <p className={`font-body text-sm mb-4 italic
                                   ${isFeat ? 'text-white/60' : 'text-slate-mid'}`}>
                      {option.tagline}
                    </p>

                    {/* Ideal for */}
                    <div className={`px-3 py-2 rounded-xl text-xs font-body leading-relaxed mb-5
                                     border ${styles.tag}
                                     ${isFeat ? 'bg-white/10 text-white/70 border-white/20' : ''}`}>
                      {option.ideal}
                    </div>

                    {/* Description */}
                    <p className={`font-body text-sm leading-relaxed mb-6
                                   ${isFeat ? 'text-white/70' : 'text-slate-mid'}`}>
                      {option.description}
                    </p>

                    {/* Divider */}
                    <div className={`h-px mb-5 ${isFeat ? 'bg-white/15' : 'bg-cream-200'}`} />

                    {/* Includes */}
                    <p className={`font-body text-xs uppercase tracking-widest mb-3
                                   ${isFeat ? 'text-white/40' : 'text-slate-mid'}`}>
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5 mb-6" role="list">
                      {option.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={14}
                            className={`flex-shrink-0 mt-0.5 ${styles.check}
                                        ${isFeat ? '!text-sage-300' : ''}`}
                            strokeWidth={2}
                          />
                          <span className={`font-body text-sm
                                            ${isFeat ? 'text-white/70' : 'text-slate-deep'}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Best for */}
                    <div className={`p-4 rounded-xl ${isFeat ? 'bg-white/8 border border-white/12' : 'bg-cream-50 border border-cream-200'}`}>
                      <p className={`font-body text-xs uppercase tracking-widest mb-2
                                     ${isFeat ? 'text-white/40' : 'text-slate-mid'}`}>
                        Best for
                      </p>
                      <ul className="space-y-1" role="list">
                        {option.bestFor.map((item) => (
                          <li key={item}
                              className={`font-body text-xs leading-relaxed
                                          ${isFeat ? 'text-white/60' : 'text-slate-mid'}`}>
                            · {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card footer CTA */}
                  <div className={`px-7 pb-7`}>
                    <Link
                      href="/contact"
                      className={`
                        w-full inline-flex items-center justify-center gap-2
                        py-3 px-5 rounded-xl text-sm font-medium font-body
                        transition-all group
                        ${isFeat
                          ? 'bg-white text-navy-700 hover:bg-cream-100'
                          : 'bg-sage-600 text-white hover:bg-sage-700'
                        }
                      `}
                    >
                      Get Started
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom care note */}
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-cream-50 border
                           border-cream-200 text-center">
            <p className="font-body text-xs uppercase tracking-widest text-slate-mid mb-3">
              Don't see exactly what you need?
            </p>
            <h3 className="font-display text-2xl font-medium text-navy-700 mb-3">
              Every plan is customizable.
            </h3>
            <p className="font-body text-sm text-slate-mid leading-relaxed mb-6 max-w-xl mx-auto">
              The three options above are our most common care structures — but we regularly 
              build hybrid and custom plans for families with complex or unusual needs. 
              We start with a conversation, not a menu.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-700 text-white
                          text-sm font-medium font-body rounded-xl hover:bg-navy-800
                          transition-colors"
            >
              Talk to Us About Your Situation
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not Sure Which Option Fits?"
        subheading="A 15-minute call with our team is all it takes to find clarity. We'll listen to your situation and help you understand what level of care makes sense."
        primaryLabel="Schedule a Free Call"
        primaryHref="/contact"
        variant="navy"
      />
    </>
  );
}
