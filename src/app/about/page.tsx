import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import { coreValues } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Our story, mission, vision, and founder LaToya Darby, MSN, FNP-BC — RN-led concierge care management in North Alabama.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        description="Prestwell Continuum was founded on the belief that exceptional healthcare extends far beyond clinic walls."
      />

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-4xl mx-auto space-y-6 font-body text-lg text-slate-mid leading-relaxed">
          <p>
            Our concierge nursing and care management services provide individualized support that
            empowers older adults to age with dignity while giving families confidence that their
            loved ones have a trusted healthcare advocate.
          </p>
          <p>
            We collaborate with physicians, specialists, families, and community partners to ensure
            continuity of care and personalized attention every step of the way.
          </p>
        </div>
      </section>

      <section className="section-padding px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="Our Mission" heading="What drives us" align="left" />
            <p className="mt-4 font-body text-slate-mid leading-relaxed text-lg">
              To deliver compassionate, personalized concierge nursing and care management that
              promotes independence, enhances wellness, and supports families through every stage
              of aging.
            </p>
          </div>
          <div>
            <SectionHeader eyebrow="Our Vision" heading="Where we are headed" align="left" />
            <p className="mt-4 font-body text-slate-mid leading-relaxed text-lg">
              To become North Alabama&apos;s premier concierge nursing and care management practice,
              recognized for clinical excellence, compassionate relationships, and innovative
              healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Our Core Values" heading="How we care" />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value) => (
              <li
                key={value}
                className="font-display text-xl text-navy-700 border-l-2 border-gold-500 pl-5 py-2"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-3">
            Meet the Founder
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-700 mb-2">
            LaToya Darby, MSN, FNP-BC
          </h2>
          <p className="font-body text-gold-600 mb-6">Founder & Concierge Care Manager</p>
          <div className="gold-rule mb-8" aria-hidden="true" />

          <div className="space-y-5 font-body text-slate-mid leading-relaxed">
            <p>
              At Prestwell Continuum, we believe exceptional care begins with meaningful
              relationships.
            </p>
            <p>
              I&apos;m LaToya Darby, MSN, FNP-BC, Founder of Prestwell Continuum. With more than
              10 years of nursing experience across Medical-Surgical, Intensive Care (ICU),
              Progressive Care (PCU), Endoscopy, Geriatrics, and Hospice, I have had the
              privilege of caring for individuals and families during some of life&apos;s most
              important moments.
            </p>
            <p>
              Throughout my career, I noticed a common challenge. Many older adults leave
              medical appointments or the hospital with complex care plans, medication changes,
              and unanswered questions. Families often want to help but may live out of town,
              work full-time, or simply feel overwhelmed by navigating today&apos;s healthcare
              system.
            </p>
            <p>
              I founded Prestwell Continuum because I believe healthcare should be personal,
              proactive, and centered around the individual—not just the diagnosis. Every older
              adult deserves an advocate who takes the time to listen, educate, coordinate care,
              and provide compassionate support beyond the walls of a clinic or hospital.
            </p>
            <p>
              Prestwell Continuum was created to bridge the gap between healthcare providers and
              everyday living by offering concierge care management that empowers seniors to age
              safely, independently, and with dignity in the comfort of their own homes. My goal
              is to provide families with confidence and peace of mind, knowing their loved one
              has a trusted healthcare professional dedicated to their well-being.
            </p>
            <p>
              As a Family Nurse Practitioner, my vision is to continue expanding Prestwell
              Continuum into North Alabama&apos;s premier concierge healthcare practice—offering
              comprehensive mobile healthcare services while maintaining the personalized
              attention, clinical excellence, and compassionate relationships that define our
              mission.
            </p>
            <p>
              When you choose Prestwell Continuum, you are choosing more than a service—you are
              choosing a dedicated healthcare partner committed to helping you or your loved one
              live well, age with dignity, and navigate healthcare with confidence.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-8 pt-8 border-t border-cream-300">
            <div>
              <h3 className="font-display text-xl text-navy-700 mb-3">Our Mission</h3>
              <p className="font-body text-sm text-slate-mid leading-relaxed">
                To provide exceptional concierge nursing and care management that empowers older
                adults to age safely and independently while delivering peace of mind to the
                families who love them.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-navy-700 mb-3">Our Vision</h3>
              <p className="font-body text-sm text-slate-mid leading-relaxed">
                To become North Alabama&apos;s premier concierge healthcare practice, recognized
                for clinical excellence, compassionate relationships, and innovative care that
                transforms the aging experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
