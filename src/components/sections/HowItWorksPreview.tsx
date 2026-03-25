import Link from 'next/link';
import { PhoneCall, FileHeart, UserCheck, Home, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Connect With Our Team',
    description: 'Reach out by phone or email. We\'ll have a warm, no-pressure conversation about your family\'s situation.',
  },
  {
    number: '02',
    icon: FileHeart,
    title: 'Co-Create Your Care Plan',
    description: 'We design a personalized care plan together — built around your schedule, your goals, and your loved one\'s clinical needs.',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Meet Your Nurse',
    description: 'We match you with a skilled RN who is the right clinical and personal fit. Continuity matters deeply to us.',
  },
  {
    number: '04',
    icon: Home,
    title: 'Receive Care at Home',
    description: 'Your nurse arrives as planned, provides expert care, and communicates with you clearly every step of the way.',
  },
];

/**
 * HowItWorksPreview
 * A compact version of the process for the homepage.
 * Links to the full /how-it-works page.
 */
export default function HowItWorksPreview() {
  return (
    <section
      className="section-padding px-6 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="The Process"
          heading="Simple to Start, Consistent for Life"
          subheading="Getting exceptional nursing care at home shouldn't require an act of bureaucracy. Here's how we make it straightforward."
          className="mb-16"
        />

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)]
                                right-[calc(-50%+2.5rem)] h-px bg-cream-300 z-0"
                  />
                )}

                <div className="relative z-10 flex flex-col items-center text-center p-6">
                  {/* Step number + icon */}
                  <div className="relative mb-5">
                    {/* Number badge */}
                    <div className="w-16 h-16 rounded-2xl bg-sage-50 border border-sage-200
                                    flex items-center justify-center
                                    group-hover:bg-sage-600 group-hover:border-sage-600
                                    transition-all duration-300">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-sage-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full
                                  bg-navy-700 text-white font-body text-[10px]
                                  font-semibold flex items-center justify-center"
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-body text-base font-semibold text-navy-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to full page */}
        <div className="text-center">
          <Link
            href="/how-it-works"
            className="group inline-flex items-center gap-2 font-body text-sm
                       font-medium text-sage-700 hover:text-sage-800 transition-colors"
          >
            See the full process
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
