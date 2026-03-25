import { CheckCircle2, Unlock, DollarSign, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';

const freedoms = [
  {
    icon: Unlock,
    title: 'No Gatekeeper',
    body: 'We don\'t need pre-authorization. We don\'t wait for approvals. Care begins when your family needs it.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    body: 'You\'ll know exactly what you\'re paying — always. No surprise bills, no hidden fees, no confusing EOBs.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    body: 'Weekly visits, daily care, or twice-daily presence — your plan is designed around your life, not a benefit schedule.',
  },
  {
    icon: CheckCircle2,
    title: 'Complete Clinical Freedom',
    body: 'Your nurse can spend the time actually needed. Not the minutes insurance allows, but what your loved one deserves.',
  },
];

/**
 * FreedomSection
 * Communicates the private-pay model as an upgrade and a relief.
 * This is a key trust and differentiation section.
 */
export default function FreedomSection() {
  return (
    <section
      className="relative section-padding overflow-hidden px-6 bg-navy-700"
      aria-labelledby="freedom-heading"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px]
                        rounded-full bg-navy-600/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96
                        rounded-full bg-sage-700/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: headline copy */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase font-medium
                          text-sage-300 mb-4">
              Freedom From Insurance Limitations
            </p>
            <h2
              id="freedom-heading"
              className="font-display text-white font-medium leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Care Designed Around
              <span className="italic text-sage-300"> Your Family</span>,
              Not a Benefits Package.
            </h2>
            <p className="font-body text-white/65 text-lg leading-relaxed mb-8 max-w-lg">
              Most families discover too late that insurance covers the minimum — not the care 
              their loved one truly needs. As a private-pay service, we have the freedom to 
              provide the right care, for the right amount of time, without compromise.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-sage-400 pl-5 mb-8">
              <p className="font-serif text-lg italic text-white/80 leading-relaxed">
                "Finally — care that meets my mother where she is, not where the insurance 
                company says she should be."
              </p>
              <footer className="font-body text-sm text-white/40 mt-2">
                — Family of a Prestwell patient
              </footer>
            </blockquote>

            <Button href="/care-options" variant="primary" size="lg">
              Explore Care Options
            </Button>
          </div>

          {/* Right: freedom pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {freedoms.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-5 rounded-2xl bg-white/8 border border-white/10
                           hover:bg-white/12 hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sage-500/20 flex items-center
                                 justify-center mb-4">
                  <Icon size={18} className="text-sage-300" strokeWidth={1.6} />
                </div>
                <h3 className="font-body text-sm font-semibold text-white mb-1.5">
                  {title}
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
