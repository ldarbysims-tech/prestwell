import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers about insurance, physician collaboration, emergencies, family updates, assisted living, and professional contracts.',
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
