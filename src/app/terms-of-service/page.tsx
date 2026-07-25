import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing use of the Prestwell Continuum website and services.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using the Prestwell Continuum website (the "Site") or engaging our nursing services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site or our services.',
      'These Terms apply to all visitors, users, and others who access the Site or engage with our services.',
    ],
  },
  {
    title: '2. Services Description',
    body: [
      'Prestwell Continuum provides concierge nursing and care management services delivered in the client\'s home, place of residence, or partner community. Clinical services are performed by licensed nursing professionals operating under applicable Alabama state law and nursing practice standards.',
      'The information on this Site is provided for general informational purposes only and does not constitute medical advice. Nothing on this Site creates a nurse-patient or provider-patient relationship unless a formal service agreement has been executed.',
    ],
  },
  {
    title: '3. No Emergency Services',
    body: [
      'Prestwell Continuum does not provide emergency medical services. If you or someone in your care is experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.',
      'Our services are designed for ongoing, scheduled concierge nursing and care management and are not a substitute for emergency or acute hospital-level care.',
    ],
  },
  {
    title: '4. Service Agreements',
    body: [
      'Formal nursing services are governed by a separate written service agreement signed by the client or their authorized representative. These Terms supplement, and do not replace, the terms of any such service agreement.',
      'Prestwell Continuum reserves the right to accept or decline service requests at its sole discretion. Acceptance of a consultation request does not obligate Prestwell Continuum to provide ongoing services.',
    ],
  },
  {
    title: '5. Payment and Fees',
    body: [
      'Prestwell Continuum operates as a private-pay service. We do not bill insurance. All fees are due in accordance with the terms set forth in your individual service agreement.',
      'Rates are transparent and provided in writing prior to the commencement of services. No hidden fees will be charged without prior written notice and consent.',
    ],
  },
  {
    title: '6. Intellectual Property',
    body: [
      'All content on this Site — including text, graphics, logos, and design — is the property of Prestwell Continuum and is protected by applicable copyright and intellectual property laws.',
      'You may not reproduce, distribute, modify, or create derivative works from any content on this Site without prior written permission from Prestwell Continuum.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Prestwell Continuum shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services.',
      'Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you to Prestwell Continuum in the sixty (60) days preceding the claim.',
    ],
  },
  {
    title: '8. Disclaimer of Warranties',
    body: [
      'The Site and its content are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      'Prestwell Continuum does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
    ],
  },
  {
    title: '9. Third-Party Links',
    body: [
      'The Site may contain links to third-party websites. These links are provided for convenience only. Prestwell Continuum does not endorse and is not responsible for the content, privacy practices, or accuracy of any third-party site.',
    ],
  },
  {
    title: '10. Governing Law',
    body: [
      'These Terms are governed by and construed in accordance with the laws of the State of Alabama, without regard to its conflict of law provisions.',
      'Any disputes arising under these Terms shall be resolved in the state or federal courts located in Alabama, and you consent to personal jurisdiction in such courts.',
    ],
  },
  {
    title: '11. Changes to Terms',
    body: [
      'We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'Questions about these Terms may be directed to:',
      'Prestwell Continuum\nPhone: 256-248-9616\nEmail: info@prestwellcontinuum.com\nServing Northern Alabama',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 px-6 bg-white border-b border-cream-200">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-sage-600 mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl font-medium text-navy-700 mb-4">
            Terms of Service
          </h1>
          <p className="font-body text-sm text-slate-mid">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: January 1, 2025
          </p>
          <p className="font-body text-base text-slate-mid leading-relaxed mt-4 max-w-2xl">
            Please read these Terms of Service carefully before using our website or engaging
            our nursing services. These Terms govern your relationship with Prestwell Continuum.
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
            href="/privacy-policy"
            className="font-body text-sm text-sage-600 hover:text-sage-700 hover:underline transition-colors"
          >
            Privacy Policy →
          </a>
          <a
            href="/hipaa-notice"
            className="font-body text-sm text-sage-600 hover:text-sage-700 hover:underline transition-colors"
          >
            HIPAA Notice of Privacy Practices →
          </a>
        </div>
      </div>
    </div>
  );
}
