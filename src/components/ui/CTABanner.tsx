import Button from './Button';

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'sage' | 'navy' | 'cream';
}

/**
 * CTABanner
 * A warm, trust-building call-to-action section.
 * Used at the bottom of service/info pages to convert visitors.
 */
export default function CTABanner({
  heading    = 'Ready to Talk About Your Family\'s Care?',
  subheading = 'We\'re here to listen, understand, and create a care plan that truly fits your life.',
  primaryLabel   = 'Schedule a Free Consultation',
  primaryHref    = '/contact',
  secondaryLabel = 'Explore Our Services',
  secondaryHref  = '/services',
  variant = 'sage',
}: CTABannerProps) {
  const bg = {
    sage:  'bg-sage-600',
    navy:  'bg-navy-700',
    cream: 'bg-cream-100 border border-cream-300',
  }[variant];

  const textColor = variant === 'cream' ? 'text-navy-700' : 'text-white';
  const subColor  = variant === 'cream' ? 'text-slate-mid' : 'text-white/70';
  const btnSecondary = variant === 'cream'
    ? 'border-sage-600 text-sage-700 hover:bg-sage-50'
    : 'border-white/40 text-white hover:bg-white/10';

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
            variant={variant === 'cream' ? 'primary' : 'ghost'}
            size="lg"
            className={
              variant !== 'cream'
                ? 'bg-white text-sage-700 hover:bg-cream-100 shadow-soft'
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
              className={btnSecondary}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>

        {/* Phone fallback for high-intent visitors */}
        <p className={`mt-8 text-sm font-body ${subColor}`}>
          Prefer to call?{' '}
          <a
            href="tel:2566487702"
            className={`underline underline-offset-2 ${
              variant === 'cream' ? 'text-sage-600 hover:text-sage-700' : 'text-white hover:text-white/90'
            }`}
          >
            256-648-7702
          </a>
        </p>
      </div>
    </section>
  );
}
