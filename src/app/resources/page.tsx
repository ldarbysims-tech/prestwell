import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CTABanner from '@/components/ui/CTABanner';
import { resourceArticles } from '@/content/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Educational articles, wellness blog, and downloadable checklists for seniors, caregivers, and families.',
};

const checklists = [
  {
    title: 'Hospital Discharge Checklist',
    href: '/resources/checklists/hospital-discharge',
    description: 'Prepare for a safe transition from hospital to home.',
  },
  {
    title: 'Medication Safety Checklist',
    href: '/resources/checklists/medication-safety',
    description: 'Organize prescriptions and reduce medication mix-ups.',
  },
  {
    title: 'Fall Prevention Checklist',
    href: '/resources/checklists/preventing-falls',
    description: 'Home safety steps to support independence.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Educational Articles & Wellness Tools"
        description="Practical guidance to support healthy aging, safer transitions, and confident caregiving."
      />

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Learn" heading="Educational Articles" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group block bg-white rounded-2xl p-6 shadow-soft hover:shadow-warm transition-all hover:-translate-y-0.5"
              >
                <BookOpen className="text-gold-500 mb-4" size={22} strokeWidth={1.6} />
                <h3 className="font-display text-xl text-navy-700 mb-2 group-hover:text-gold-700 transition-colors">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-slate-mid leading-relaxed mb-4">
                  {article.summary}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy-700">
                  Read article <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Monthly Wellness Blog"
            heading="From our library"
            subheading="Featured educational pieces from Prestwell Continuum—updated as new guidance is published."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {resourceArticles.slice(0, 3).map((article) => (
              <Link
                key={`blog-${article.slug}`}
                href={`/resources/${article.slug}`}
                className="border-t-2 border-gold-500 pt-5"
              >
                <p className="font-body text-xs tracking-widest uppercase text-gold-600 mb-2">
                  Wellness
                </p>
                <h3 className="font-display text-xl text-navy-700 mb-2">{article.title}</h3>
                <p className="font-body text-sm text-slate-mid">{article.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Tools" heading="Downloadable Checklists" />
          <ul className="mt-12 space-y-4">
            {checklists.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between gap-4 bg-white rounded-xl px-5 py-4 shadow-soft hover:shadow-warm transition-all"
                >
                  <div>
                    <h3 className="font-display text-lg text-navy-700">{item.title}</h3>
                    <p className="font-body text-sm text-slate-mid">{item.description}</p>
                  </div>
                  <Download className="text-gold-500 flex-shrink-0" size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        heading="Questions about your loved one's care?"
        subheading="Our team is ready to listen and guide you."
      />
    </>
  );
}
