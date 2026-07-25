import Button from './Button';
import { SITE } from '@/lib/site';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'navy' | 'gold' | 'cream';
}

export default function CTABanner({
  heading    = 'Experience personalized healthcare with a trusted nursing professional.',
  subheading = 'Schedule your complimentary consultation today.',
  primaryLabel   = 'Schedule Your Consultation Today',
  primaryHref    = '/contact',
  secondaryLabel,
  secondaryHref  = '/services',
  variant = 'navy',
}: CTABannerProps) {
  const bg = {
    navy:  'bg-navy-700',
    gold:  'bg-gold-500',
    cream: 'bg-cream-200 border border-cream-300',
  }[variant];

  const textColor = variant === 'cream' || variant === 'gold' ? 'text-navy-700' : 'text-white';
  const subColor  = variant === 'cream' || variant === 'gold' ? 'text-slate-mid' : 'text-white/70';

  return (
    <section className={`${bg} py-16 px-6`} aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="cta-heading"
          className={`font-display text-3xl sm:text-4xl font-medium mb-4 ${textColor}`}
        >
          {heading}
        </h2>
        <p className={`font-body text-base sm:text-lg leading-relaxed mb-8 ${subColor}`}>
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={primaryHref}
            variant={variant === 'navy' ? 'gold' : 'primary'}
            size="lg"
            className={
              variant === 'navy'
                ? ''
                : variant === 'gold'
                  ? 'bg-navy-700 text-white hover:bg-navy-800'
                  : ''
            }
          >
            {primaryLabel}
          </Button>

          {secondaryLabel && (
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className={
                variant === 'navy'
                  ? 'border-white/40 text-white hover:bg-white/10'
                  : ''
              }
            >
              {secondaryLabel}
            </Button>
          )}
        </div>

        <p className={`mt-8 text-sm font-body ${subColor}`}>
          Prefer to call?{' '}
          <a
            href={SITE.phoneHref}
            className={`underline underline-offset-2 ${
              variant === 'navy' ? 'text-gold-300 hover:text-gold-200' : 'text-navy-700 hover:text-navy-800'
            }`}
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
