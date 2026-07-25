import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Schedule your complimentary consultation with Prestwell Continuum. Serving Madison, Huntsville, Athens, and North Alabama.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
