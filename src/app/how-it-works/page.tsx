import type { Metadata } from 'next';
import {
  PhoneCall, FileHeart, UserCheck, Home,
  CheckCircle, Clock, MessageCircle, Shield,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Getting started with Prestwell Continuum is simple. Four clear steps from first call to receiving expert nursing care in your home.',
};

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Connect With Our Team',
    duration: '15–30 minutes',
    description:
      'Everything begins with a real conversation — no forms to fill, no holding queues. You speak directly with a member of our care team who listens carefully to your situation.',
    details: [
      'Discuss your loved one\'s clinical condition and history',
      'Share what hasn\'t been working with current care',
      'Ask any questions about our approach and pricing',
      'Understand your options without any pressure to commit',
    ],
    note: 'This call is completely free and there\'s no obligation. We simply want to understand if we\'re the right fit for your family.',
  },
  {
    number: '02',
    icon: FileHeart,
    title: 'Co-Create Your Care Plan',
    duration: 'Within 48 hours',
    description:
      'We don\'t hand you a generic care plan — we build one with you. A senior nurse reviews your loved one\'s clinical picture and works with your family to design something that truly fits.',
    details: [
      'Clinical assessment of medications, conditions, and risks',
      'Discussion of goals — comfort, recovery, maintenance, or all three',
      'Scheduling decisions: frequency, timing, duration of visits',
      'Transparent pricing review and care agreement',
    ],
    note: 'You retain control at every stage. The plan is yours to adjust as needs evolve.',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Meet Your Nurse',
    duration: 'Before care begins',
    description:
      'We take matching seriously. Clinical skill matters enormously — but so does personal fit. We introduce you to your nurse before any care begins so you have the chance to connect.',
    details: [
      'Meet your assigned RN in person or by video',
      'Review the care plan together with your nurse',
      'Ask questions about their clinical background',
      'Confirm schedule, communication style, and preferences',
    ],
    note: 'We prioritize continuity. You won\'t have a different nurse every week. The same trusted person shows up — every time.',
  },
  {
    number: '04',
    icon: Home,
    title: 'Receive Care at Home',
    duration: 'Ongoing',
    description:
      'Care begins on your schedule, in your home. Your nurse arrives prepared, performs all clinical tasks with precision and gentleness, and keeps your family informed.',
    details: [
      'Consistent, on-time arrival per your agreed schedule',
      'Clinical care delivered with compassion and skill',
      'Clear communication to family after each visit',
      'Ongoing care plan refinement as needs change',
    ],
    note: 'You can adjust, pause, or expand care at any time. We adapt to your life — not the other way around.',
  },
];

const trustItems = [
  { icon: Shield,         label: 'Licensed & Insured',    sub: 'All nurses fully credentialed' },
  { icon: Clock,          label: 'Punctual & Consistent',  sub: 'Same nurse, reliable schedule' },
  { icon: MessageCircle,  label: 'Clear Communication',    sub: 'Family updates after every visit' },
  { icon: CheckCircle,    label: 'No Lock-In Contracts',   sub: 'Flexible month-to-month care' },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────── */}
      <div className="pt-32 pb-20 px-6 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Process"
            heading="From First Call to Consistent Care"
            subheading="We've designed the process to be as easy as possible — because you already have enough on your plate. Here's exactly what happens when you reach out to us."
          />

          {/* Quick start CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start With a Free Call
            </Button>
            <a
              href="tel:2566487702"
              className="font-body text-sm text-slate-mid hover:text-sage-700 transition-colors"
            >
              Or call us now: 256-648-7702
            </a>
          </div>
        </div>
      </div>

      {/* ── Steps ────────────────────────────────────── */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon      = step.icon;
            const isEven    = idx % 2 === 1;

            return (
              <div
                key={step.number}
                className={`
                  grid lg:grid-cols-2 gap-10 lg:gap-16 items-center
                  py-16 lg:py-20
                  ${idx < steps.length - 1 ? 'border-b border-cream-200' : ''}
                `}
              >
                {/* Content — alternates sides on desktop */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  {/* Step badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="font-display text-5xl font-medium text-cream-300
                                  leading-none select-none"
                    >
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-cream-300 max-w-[4rem]" />
                    <span className="font-body text-xs text-slate-mid border border-cream-300
                                     px-2.5 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-medium
                                  text-navy-700 leading-snug mb-4">
                    {step.title}
                  </h2>

                  <p className="font-body text-base text-slate-mid leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Detail list */}
                  <ul className="space-y-3 mb-6" role="list">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle
                          size={15}
                          className="text-sage-500 flex-shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="font-body text-sm text-slate-deep">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div className="p-4 rounded-xl bg-sage-50 border border-sage-200">
                    <p className="font-body text-sm text-sage-800 leading-relaxed italic">
                      {step.note}
                    </p>
                  </div>
                </div>

                {/* Visual card — alternates sides */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                  <div className="relative">
                    {/* Background shape */}
                    <div
                      aria-hidden="true"
                      className={`
                        absolute inset-0 rounded-3xl
                        ${isEven ? 'bg-navy-50 rotate-2' : 'bg-sage-50 -rotate-2'}
                        scale-105
                      `}
                    />

                    {/* Main card */}
                    <div className="relative z-10 w-72 sm:w-80 p-8 rounded-3xl bg-white
                                     shadow-warm border border-cream-200/60">
                      {/* Icon */}
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                        ${isEven ? 'bg-navy-100' : 'bg-sage-100'}
                      `}>
                        <Icon
                          size={28}
                          strokeWidth={1.4}
                          className={isEven ? 'text-navy-600' : 'text-sage-600'}
                        />
                      </div>

                      <p
                        className={`font-display text-5xl font-medium leading-none mb-4
                                    ${isEven ? 'text-navy-200' : 'text-sage-200'}`}
                      >
                        {step.number}
                      </p>

                      <h3 className="font-body text-lg font-semibold text-navy-700 mb-2">
                        {step.title}
                      </h3>

                      <p className={`
                        inline-block font-body text-xs px-2.5 py-1 rounded-full
                        ${isEven
                          ? 'bg-navy-50 text-navy-600 border border-navy-200'
                          : 'bg-sage-50 text-sage-600 border border-sage-200'
                        }
                      `}>
                        {step.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Trust strip ──────────────────────────────── */}
      <section className="py-16 px-6 bg-cream-100 border-y border-cream-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-center text-xs tracking-widest uppercase
                         text-slate-mid mb-10">
            Our Commitments to Every Family
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white shadow-soft border
                                 border-cream-200 flex items-center justify-center">
                  <Icon size={20} className="text-sage-600" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-navy-700">{label}</p>
                  <p className="font-body text-xs text-slate-mid">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Take the First Step?"
        subheading="A conversation costs nothing. Let's find out if we're the right fit for your family."
        primaryLabel="Schedule a Free Call"
        primaryHref="/contact"
        secondaryLabel="Learn About Our Services"
        secondaryHref="/services"
        variant="sage"
      />
    </>
  );
}
