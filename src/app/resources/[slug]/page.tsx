import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getArticle, resourceArticles } from '@/content/resources';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return resourceArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: 'Resource' };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default function ResourceArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      <article className="pt-32 pb-20 px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-body text-sm text-slate-mid hover:text-navy-700 mb-8"
          >
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-3">
            Educational Article
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-navy-700 mb-4">{article.title}</h1>
          <p className="font-body text-lg text-slate-mid leading-relaxed mb-6">{article.summary}</p>
          <div className="gold-rule mb-10" aria-hidden="true" />

          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-navy-700 mb-4">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="font-body text-slate-mid leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {article.checklistHref && (
            <div className="mt-12 p-6 rounded-2xl bg-white border border-cream-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl text-navy-700 mb-1">Printable checklist</p>
                <p className="font-body text-sm text-slate-mid">
                  Take a practical checklist version of this topic with you.
                </p>
              </div>
              <Link
                href={article.checklistHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-700 text-white text-sm font-body rounded-xl hover:bg-navy-800"
              >
                <Download size={16} /> Open checklist
              </Link>
            </div>
          )}

          <p className="mt-10 font-body text-xs text-slate-mid leading-relaxed border-t border-cream-300 pt-6">
            Disclaimer: This content is for educational purposes only and is not medical advice.
            Always follow guidance from your licensed healthcare providers. Call 911 for emergencies.
          </p>

          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Complimentary Consultation
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
