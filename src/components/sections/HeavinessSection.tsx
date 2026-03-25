import Button from '@/components/ui/Button';

/**
 * HeavinessSection
 * The most human section of the site.
 * Acknowledges family difficulty and extends genuine care.
 * Tone: calm, quiet, real. Not marketing. Not cheerful.
 */
export default function HeavinessSection() {
  return (
    <section
      className="section-padding px-6 bg-cream-100"
      aria-labelledby="heaviness-heading"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Decorative mark */}
        <div
          aria-hidden="true"
          className="w-12 h-0.5 bg-sage-400 mx-auto mb-8 rounded-full"
        />

        {/* Headline */}
        <h2
          id="heaviness-heading"
          className="font-display font-medium text-navy-700 leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
        >
          Let Us Bear
          <br />
          <span className="italic text-sage-600">Some of the Heaviness.</span>
        </h2>

        {/* Emotional body copy */}
        <div className="font-serif text-lg text-slate-mid leading-[1.9] max-w-2xl
                        mx-auto mb-10 space-y-5">
          <p>
            Caring for someone you love is one of the most meaningful things a person 
            can do. It is also exhausting, complex, and at times, frightening.
          </p>
          <p>
            You may be navigating medications you didn't train to manage. Watching 
            for symptoms you're not sure how to read. Wondering if you're doing enough. 
            Wishing someone with clinical knowledge was simply present.
          </p>
          <p className="text-navy-700 font-medium not-italic">
            We are here to be that presence — and to carry some of what you've been 
            carrying alone.
          </p>
        </div>

        {/* Divider ornament */}
        <div aria-hidden="true" className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 h-px bg-cream-300" />
          <div className="w-2 h-2 rounded-full bg-sage-400" />
          <div className="w-16 h-px bg-cream-300" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/about" variant="primary" size="lg">
            Learn About Our Approach
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
