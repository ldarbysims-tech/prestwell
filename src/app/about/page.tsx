import type { Metadata } from 'next';
import { Heart, Eye, Repeat, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn the mission and philosophy behind Prestwell Continuum — private-duty nursing grounded in trust, continuity, and genuine human presence.',
};

const values = [
  {
    icon: Heart,
    title: 'Compassion as a Clinical Tool',
    body: 'We believe a nurse who genuinely cares is a more effective nurse. Emotional attunement isn\'t a soft skill — it\'s essential to healing and to trust.',
  },
  {
    icon: Eye,
    title: 'Presence, Not Just Procedure',
    body: 'We do more than complete tasks. We pay attention to the whole person — their mood, their comfort, their dignity — and adjust our care accordingly.',
  },
  {
    icon: Repeat,
    title: 'Continuity as a Core Value',
    body: 'The same nurse, reliably. Continuity reduces errors, deepens trust, and allows your nurse to notice changes that only someone who truly knows your loved one can catch.',
  },
  {
    icon: Users,
    title: 'Families Are Part of the Team',
    body: 'We don\'t close the door on family involvement. We educate, communicate, and collaborate — because the people who love your patient are part of the care.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="relative pt-32 pb-24 px-6 overflow-hidden bg-navy-700">
        {/* Background orbs */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full
                          bg-navy-600/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full
                          bg-sage-800/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-sage-300
                         font-medium mb-5">
            Our Story & Mission
          </p>
          <h1
            className="font-display font-medium text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Care That Begins
            <span className="italic text-sage-300"> With Presence.</span>
          </h1>
          <p className="font-body text-lg text-white/65 leading-relaxed max-w-2xl mx-auto">
            Prestwell Continuum was founded on a simple belief: that people in their most 
            vulnerable moments deserve skilled clinical care and genuine human warmth — 
            not one or the other.
          </p>
        </div>
      </div>

      {/* ── Mission statement ────────────────────────── */}
      <section className="section-padding px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-sage-600
                             font-medium mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium
                              text-navy-700 leading-snug mb-5">
                To bring expert nursing home — in every sense of the word.
              </h2>
              <div className="space-y-4 font-body text-base text-slate-mid leading-relaxed">
                <p>
                  Home should be where healing happens, where comfort lives, and where 
                  a person retains their sense of self. We bring clinical expertise 
                  directly to that space — so your loved one never has to sacrifice 
                  comfort for quality care.
                </p>
                <p>
                  We operate as a private-pay service deliberately. It frees us from 
                  the limitations that insurance imposes — on time, on scope, on the 
                  clinical decisions that matter most. We answer to your family, not 
                  a benefits manager.
                </p>
              </div>
            </div>

            {/* Visual pull quote */}
            <div className="relative">
              <div aria-hidden="true"
                   className="absolute inset-0 bg-sage-50 rounded-3xl rotate-2" />
              <div className="relative z-10 p-8 rounded-3xl bg-white shadow-warm
                               border border-cream-200">
                <div className="w-10 h-0.5 bg-sage-400 mb-6" />
                <blockquote className="font-serif text-xl italic text-navy-700
                                       leading-relaxed mb-6">
                  "The measure of care is not how many tasks were completed — it's 
                  whether the patient felt seen, safe, and cared for."
                </blockquote>
                <footer className="font-body text-sm text-slate-mid">
                  — The Prestwell Continuum Philosophy
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The heaviness paragraph ───────────────────── */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div aria-hidden="true"
               className="w-10 h-0.5 bg-sage-400 mx-auto mb-8 rounded-full" />
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-navy-700
                          leading-tight mb-6">
            We Know This Is Hard.
          </h2>
          <div className="font-serif text-lg text-slate-mid leading-[1.85] space-y-5">
            <p>
              Watching someone you love need more care than you can give is one of 
              the most humbling experiences a family can face. There is grief in it, 
              even when the person is still there. There is exhaustion that doesn't 
              go away with sleep. There is the persistent fear of missing something 
              important.
            </p>
            <p>
              We built Prestwell Continuum for families in that place — families who 
              need more than a checklist. They need a nurse who pays attention, who 
              communicates clearly, who shows up consistently, and who treats their 
              loved one with the dignity they deserve.
            </p>
            <p className="text-navy-700 font-medium not-italic">
              That is what we do. That is all we do.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core values ──────────────────────────────── */}
      <section className="section-padding px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What Guides Us"
            heading="Our Core Values"
            subheading="These aren't statements on a wall. They're the principles every nurse we employ lives by."
            className="mb-14"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-7 rounded-2xl bg-white border border-cream-200
                            shadow-soft hover:shadow-warm transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center
                                 justify-center mb-5">
                  <Icon size={22} className="text-sage-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-body text-base font-semibold text-navy-700 mb-2">
                  {title}
                </h3>
                <p className="font-body text-sm text-slate-mid leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust credentials ────────────────────────── */}
      <section className="py-14 px-6 bg-navy-700">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-xs tracking-widest uppercase text-sage-300
                         font-medium mb-8">
            Our Standard
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: 'RNs Only',   label: 'Every nurse is a licensed Registered Nurse — never an aide or LPN for clinical tasks' },
              { stat: 'Vetted',     label: 'Background checked, reference verified, and personally interviewed by our clinical team' },
              { stat: 'Consistent', label: 'You have the same nurse at every visit — no rotating strangers in your home' },
            ].map(({ stat, label }) => (
              <div key={stat}
                   className="p-6 rounded-2xl bg-white/8 border border-white/10 text-center">
                <p className="font-display text-3xl font-medium text-white mb-3">{stat}</p>
                <p className="font-body text-sm text-white/55 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Let's Talk About What Your Family Needs."
        subheading="We'd be honored to be part of your loved one's care. Reach out — no pressure, just conversation."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="See Our Services"
        secondaryHref="/services"
        variant="cream"
      />
    </>
  );
}
