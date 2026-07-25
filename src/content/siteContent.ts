export const whoWeServe = [
  'Older Adults Aging in Place',
  'Busy Family Caregivers',
  'Long-Distance Family Members',
  'Individuals Managing Chronic Conditions',
  'Seniors Recovering After Hospitalization',
  'Independent Living Communities',
  'Assisted Living Communities',
  'Memory Care Communities',
] as const;

export const whyFamiliesChoose = [
  'Personalized RN-led care',
  'Concierge-level service',
  'Healthcare advocacy',
  'Care coordination',
  'Family communication',
  'Hospital transition support',
  'Medication oversight',
  'Wellness monitoring',
  'Compassionate, relationship-centered care',
] as const;

export const servicesPreview = [
  {
    id: 'concierge-nursing',
    title: 'Concierge Nursing',
    description:
      'Personalized wellness visits designed to help clients remain healthy, safe, and independent.',
    href: '/services#concierge-nursing',
  },
  {
    id: 'care-management',
    title: 'Care Management',
    description:
      "Helping clients and families confidently navigate today's healthcare system.",
    href: '/services#care-management',
  },
  {
    id: 'hospital-to-home',
    title: 'Hospital-to-Home Support',
    description: 'Helping reduce readmissions while supporting recovery.',
    href: '/services#hospital-to-home',
  },
  {
    id: 'professional-partnerships',
    title: 'Professional Partnerships',
    description:
      'Customized concierge nursing services for healthcare organizations and senior living communities.',
    href: '/for-professionals',
  },
] as const;

export const coreValues = [
  'Compassion',
  'Integrity',
  'Professional Excellence',
  'Respect',
  'Advocacy',
  'Collaboration',
  'Personalized Care',
] as const;

export const serviceSections: {
  id: string;
  title: string;
  description?: string;
  items: string[];
}[] = [
  {
    id: 'concierge-nursing',
    title: 'Concierge Nursing',
    items: [
      'Comprehensive Wellness Assessments',
      'Vital Sign Monitoring',
      'Medication Review',
      'Chronic Disease Monitoring',
      'Wellness Coaching',
      'Fall Risk Assessment',
      'Home Safety Evaluation',
      'Health Education',
    ],
  },
  {
    id: 'care-management',
    title: 'Care Management',
    items: [
      'Healthcare Advocacy',
      'Care Coordination',
      'Physician Communication',
      'Appointment Preparation',
      'Family Conferences',
      'Community Resource Navigation',
      'Personalized Care Planning',
    ],
  },
  {
    id: 'hospital-to-home',
    title: 'Hospital-to-Home Transition',
    items: [
      'Post-Discharge Visits',
      'Medication Reconciliation',
      'Recovery Monitoring',
      'Provider Follow-Up',
      'Family Education',
      'Readmission Prevention',
    ],
  },
  {
    id: 'physician-care-plan',
    title: 'Physician Care Plan Follow-Through',
    description:
      'Helping clients successfully understand and implement provider recommendations between office visits.',
    items: [],
  },
  {
    id: 'family-support',
    title: 'Family Support',
    items: [
      'Family Updates',
      'Long-Distance Caregiver Support',
      'Health Status Reports',
      'Care Conferences',
    ],
  },
];

export const memberships = [
  {
    id: 'heritage',
    name: 'Heritage Membership',
    tagline: 'Perfect for seniors seeking routine wellness oversight.',
    popular: false,
    includes: [
      'Monthly wellness visit',
      'Comprehensive assessment',
      'Vital signs',
      'Medication review',
      'Wellness coaching',
      'Family update',
      'Business-hour phone support',
    ],
  },
  {
    id: 'signature',
    name: 'Signature Membership',
    tagline: 'Our most popular membership.',
    popular: true,
    includes: [
      'Everything in Heritage',
      'Two monthly visits',
      'Chronic disease monitoring',
      'Care coordination',
      'Medication management support',
      'Appointment preparation',
      'Physician care plan follow-through',
      'Monthly family conference',
      'Priority scheduling',
    ],
  },
  {
    id: 'prestige',
    name: 'Prestige Membership',
    tagline: 'Our premier concierge experience.',
    popular: false,
    includes: [
      'Everything in Signature',
      'Weekly visits',
      'Hospital transition support',
      'Appointment accompaniment',
      'Home safety assessments',
      'Personalized wellness planning',
      'Weekly family updates',
      'Healthcare advocacy',
      'Enhanced care coordination',
    ],
  },
] as const;

export const addOnServices = [
  'Additional Nursing Visits',
  'Medical Appointment Companion',
  'Hospital Recovery Visits',
  'Medication Organization',
  'Home Safety Assessments',
  'Virtual Wellness Visits',
  'Family Care Conferences',
  'Wellness Binder Creation',
  'Personalized Care Plans',
] as const;

export const partnerTypes = [
  'Assisted Living Communities',
  'Independent Living Communities',
  'Memory Care Communities',
  'Residential Care Homes',
  'Home Care Agencies',
  'Hospice Providers',
  'Physician Practices',
  'Hospitals',
  'Rehabilitation Facilities',
  'Adult Day Programs',
  'Churches',
  'Corporate Wellness Programs',
  'Senior Placement Agencies',
  'Elder Law Attorneys',
] as const;

export const contractServices = [
  'Resident Wellness Programs',
  'Blood Pressure Clinics',
  'Medication Reviews',
  'Wellness Assessments',
  'Chronic Disease Monitoring',
  'Healthcare Advocacy',
  'Family Conferences',
  'Community Health Education',
  'Staff Education',
  'Fall Prevention Programs',
  'Quality Improvement Consultation',
] as const;

export const faqs = [
  {
    question: 'Do you accept insurance?',
    answer:
      'Prestwell Continuum is a private-pay concierge nursing and care management practice.',
  },
  {
    question: 'Do you replace my physician?',
    answer:
      'No. We collaborate with your healthcare providers while supporting your individualized care plan.',
  },
  {
    question: 'Do you provide emergency medical care?',
    answer:
      'No. Clients experiencing a medical emergency should call 911 immediately.',
  },
  {
    question: 'Can family members receive updates?',
    answer: 'Yes, with written client authorization.',
  },
  {
    question: 'Do you provide services in assisted living communities?',
    answer: 'Yes.',
  },
  {
    question: 'Can organizations contract with Prestwell Continuum?',
    answer:
      'Absolutely. Customized concierge nursing contracts are available.',
  },
] as const;
