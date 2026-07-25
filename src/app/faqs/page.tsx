'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import { faqs } from '@/content/siteContent';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream-300">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-xl text-navy-700">{question}</span>
        <span className="text-gold-500 flex-shrink-0 mt-1">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {open && (
        <p className="pb-5 font-body text-slate-mid leading-relaxed pr-10">{answer}</p>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Clear answers about how Prestwell Continuum works with clients, families, and partners."
      />

      <section className="section-padding px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <CTABanner
        heading="Still have questions?"
        subheading="We're happy to talk through your situation and how we can help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
