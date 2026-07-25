import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';
import PrintButton from '@/components/ui/PrintButton';

const checklists: Record<
  string,
  { title: string; intro: string; items: string[]; relatedSlug?: string }
> = {
  'hospital-discharge': {
    title: 'Hospital Discharge Checklist',
    intro: 'Use this list before leaving the hospital and during your first days at home.',
    relatedSlug: 'hospital-discharge-checklist',
    items: [
      'Confirm diagnosis and reason for hospitalization',
      'Review new, changed, and stopped medications',
      'Schedule follow-up appointments before discharge when possible',
      'Know warning signs that require urgent care or 911',
      'Obtain written discharge instructions',
      'Confirm who to call with after-hours questions',
      'Arrange transportation home and to follow-ups',
      'Prepare support for meals, mobility, and personal care',
      'Reconcile home medications with hospital list',
      'Share updates with authorized family caregivers',
    ],
  },
  'medication-safety': {
    title: 'Medication Safety Checklist',
    intro: 'Keep medications organized, current, and safe.',
    relatedSlug: 'medication-safety',
    items: [
      'Maintain an updated list of all prescriptions and OTC products',
      'Include dose, frequency, and reason for each medication',
      'Use one primary pharmacy when possible',
      'Store medications securely away from children and pets',
      'Set reminders for doses',
      'Never share prescription medications',
      'Ask about interactions before starting something new',
      'Call the pharmacy if a pill looks different than usual',
      'Bring your list to every appointment',
      'Update the list after hospital or specialist visits',
    ],
  },
  'preventing-falls': {
    title: 'Fall Prevention Checklist',
    intro: 'Reduce fall risk at home and support steady daily living.',
    relatedSlug: 'preventing-falls',
    items: [
      'Clear clutter from walkways and stairs',
      'Secure or remove loose rugs',
      'Install grab bars in bathroom as needed',
      'Improve lighting in hallways and bedrooms',
      'Use nightlights for overnight trips',
      'Wear supportive, non-slip footwear',
      'Stand up slowly after sitting or lying down',
      'Keep frequently used items within easy reach',
      'Ask about balance/strength exercises',
      'Report falls or frequent dizziness to your provider',
    ],
  },
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(checklists).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = checklists[params.slug];
  return { title: data ? data.title : 'Checklist' };
}

export default function ChecklistPage({ params }: Props) {
  const data = checklists[params.slug];
  if (!data) notFound();

  return (
    <div className="pt-32 pb-20 px-6 bg-cream-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-soft p-8 sm:p-10 print:shadow-none print:p-0">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 mb-3">
          {SITE.name} · Checklist
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-navy-700 mb-3">{data.title}</h1>
        <p className="font-body text-slate-mid mb-8">{data.intro}</p>
        <ul className="space-y-3 mb-10">
          {data.items.map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-navy-700">
              <span className="mt-1 w-4 h-4 border border-gold-500 rounded-sm flex-shrink-0 print:border-black" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 print:hidden">
          <PrintButton />
          {data.relatedSlug && (
            <Link
              href={`/resources/${data.relatedSlug}`}
              className="px-5 py-2.5 border border-navy-700 text-navy-700 text-sm font-body rounded-xl hover:bg-cream-100"
            >
              Read full article
            </Link>
          )}
        </div>
        <p className="mt-8 font-body text-xs text-slate-mid">
          Educational tool only—not medical advice. Call 911 for emergencies. {SITE.phone}
        </p>
      </div>
    </div>
  );
}
