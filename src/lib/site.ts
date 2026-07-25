/** Site-wide constants — single source of truth for contact & brand copy */
export const SITE = {
  name: 'Prestwell Continuum',
  tagline: 'RN-Led Concierge Care Management',
  motto: 'Compassionate Care. Professional Advocacy. Peace of Mind.',
  phone: '256-248-9616',
  phoneHref: 'tel:2562489616',
  email: 'info@prestwellcontinuum.com',
  emailHref: 'mailto:info@prestwellcontinuum.com',
  serviceArea: 'Madison, Huntsville, Athens, and surrounding North Alabama communities',
  serviceAreaShort: 'Madison • Huntsville • Athens • North Alabama',
  hours: {
    weekdays: 'Monday–Friday',
    time: '8:00 AM – 5:00 PM',
    note: 'Evening and weekend appointments available by request.',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61587842320325',
    instagram: 'https://www.instagram.com/prestwellcontinuum',
  },
  url: 'https://www.prestwellcontinuum.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'For Professionals', href: '/for-professionals' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
] as const;
