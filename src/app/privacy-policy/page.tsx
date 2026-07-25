import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Prestwell Continuum collects, uses, and protects your personal information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly when you contact us, request a consultation, or use our website. This may include your name, phone number, email address, and details about your care needs.',
      'We also collect certain technical information automatically when you visit our site, including IP address, browser type, pages visited, and referring URLs. This information is used solely to improve site performance and is not sold or shared with third parties for marketing purposes.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to respond to your inquiries, schedule consultations, provide and improve our nursing services, and communicate with you about your care.',
      'We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, subject to confidentiality agreements.',
    ],
  },
  {
    title: '3. Protected Health Information',
    body: [
      'Any health-related information you share with us is treated as Protected Health Information (PHI) under HIPAA. Please refer to our HIPAA Notice of Privacy Practices for a full description of your rights and our obligations regarding PHI.',
    ],
  },
  {
    title: '4. Cookies and Tracking Technologies',
    body: [
      'Our website may use cookies and similar technologies to enhance your browsing experience. You may configure your browser to refuse cookies; however, some features of the site may not function properly without them.',
      'We do not use third-party advertising cookies or behavioral tracking tools.',
    ],
  },
  {
    title: '5. Data Security',
    body: [
      'We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction.',
      'No method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We retain personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.',
      'Health and clinical records are retained in accordance with applicable Alabama state law and federal regulations.',
    ],
  },
  {
    title: '7. Your Rights',
    body: [
      'You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at info@prestwellcontinuum.com or call 256-248-9616.',
      'If you are a patient or prospective patient, additional rights regarding your health information are described in our HIPAA Notice of Privacy Practices.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    body: [
      'Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy periodically. The effective date at the top of this page reflects when the policy was last revised. Continued use of our website after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'If you have questions or concerns about this Privacy Policy, please contact us:',
      'Prestwell Continuum\nPhone: 256-248-9616\nEmail: info@prestwellcontinuum.com\nServing Northern Alabama',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 px-6 bg-white border-b border-cream-200">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-sage-600 mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl font-medium text-navy-700 mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-sm text-slate-mid">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: January 1, 2025
          </p>
          <p className="font-body text-base text-slate-mid leading-relaxed mt-4 max-w-2xl">
            Prestwell Continuum is committed to protecting your privacy. This policy explains
            how we collect, use, and safeguard your personal information when you interact
            with our website or services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-medium text-navy-700 mb-3">
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.body.map((para, i) => (
                  <p key={i} className="font-body text-sm text-slate-mid leading-relaxed whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Related links */}
        <div className="mt-14 pt-8 border-t border-cream-200 flex flex-col sm:flex-row gap-4">
          <a
            href="/hipaa-notice"
            className="font-body text-sm text-sage-600 hover:text-sage-700 hover:underline transition-colors"
          >
            HIPAA Notice of Privacy Practices →
          </a>
          <a
            href="/terms-of-service"
            className="font-body text-sm text-sage-600 hover:text-sage-700 hover:underline transition-colors"
          >
            Terms of Service →
          </a>
        </div>
      </div>
    </div>
  );
}
