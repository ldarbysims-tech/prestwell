import Hero               from '@/components/sections/Hero';
import ServicesOverview    from '@/components/sections/ServicesOverview';
import FreedomSection      from '@/components/sections/FreedomSection';
import HeavinessSection    from '@/components/sections/HeavinessSection';
import HowItWorksPreview   from '@/components/sections/HowItWorksPreview';
import CTABanner           from '@/components/ui/CTABanner';
import type { Metadata }   from 'next';

export const metadata: Metadata = {
  title: 'Prestwell Continuum | Private-Duty Nursing Care at Home',
  description:
    'Expert private-duty nursing delivered to your home. No insurance required — transparent pricing, flexible scheduling, and genuine human presence for your loved one.',
};

/**
 * Homepage ( / )
 * Flow: Hero → Services preview → Freedom section → Emotional section →
 *       How It Works preview → Final CTA
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FreedomSection />
      <HeavinessSection />
      <HowItWorksPreview />
      <CTABanner
        heading="Your Family Deserves Care Without Compromise."
        subheading="Let's talk about what your loved one needs — and how we can be there for them."
        primaryLabel="Schedule a Free Consultation"
        secondaryLabel="256-648-7702"
        secondaryHref="tel:2566487702"
        variant="sage"
      />
    </>
  );
}
