import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices',
  description: 'Your rights regarding your Protected Health Information and how Prestwell Continuum uses and discloses it.',
};

const sections = [
  {
    title: 'Our Commitment to Your Privacy',
    body: [
      'Prestwell Continuum is committed to protecting the privacy of your health information. This Notice describes how we may use and disclose your Protected Health Information (PHI) and explains your rights regarding that information.',
      'We are required by law to maintain the privacy of your PHI, to provide you with this Notice of our legal duties and privacy practices, and to notify you following a breach of unsecured PHI.',
      'We are required to abide by the terms of this Notice while it is in effect. We reserve the right to change our privacy practices and this Notice at any time, provided such changes are permitted by applicable law.',
    ],
  },
  {
    title: 'What Is Protected Health Information?',
    body: [
      'Protected Health Information (PHI) is information about you — including demographic information — that may identify you and that relates to your past, present, or future physical or mental health condition, the provision of health care to you, or payment for that health care.',
    ],
  },
  {
    title: 'How We May Use and Disclose Your PHI',
    subsections: [
      {
        subtitle: 'Treatment',
        text: 'We may use and disclose your PHI to provide, coordinate, or manage your health care and related services. For example, your nurse may share information with your physician or other providers involved in your care.',
      },
      {
        subtitle: 'Payment',
        text: 'We may use and disclose your PHI to obtain payment for the services we provide. Because Prestwell Continuum is a private-pay service, this typically involves billing you or your authorized representative directly rather than submitting to insurance.',
      },
      {
        subtitle: 'Health Care Operations',
        text: 'We may use and disclose your PHI for our internal business operations, including quality assessment, training, compliance activities, and business management necessary to operate our nursing practice.',
      },
      {
        subtitle: 'As Required by Law',
        text: 'We may disclose your PHI when required to do so by federal, state, or local law, including mandatory reporting obligations.',
      },
      {
        subtitle: 'Public Health and Safety',
        text: 'We may disclose PHI to public health authorities, law enforcement, or other entities where required to prevent or control disease, injury, or disability, or to avert a serious threat to health or safety.',
      },
      {
        subtitle: 'Abuse, Neglect, or Domestic Violence',
        text: 'We may disclose PHI to appropriate authorities if we believe a patient has been the victim of abuse, neglect, or domestic violence, as required or permitted by law.',
      },
      {
        subtitle: 'Business Associates',
        text: 'We may share your PHI with business associates — companies or individuals who perform services on our behalf — only under written agreements requiring them to safeguard your information appropriately.',
      },
    ],
  },
  {
    title: 'Uses and Disclosures Requiring Your Authorization',
    body: [
      'Except as described above, we will not use or disclose your PHI without your written authorization. You may revoke an authorization at any time in writing, except to the extent that we have already taken action in reliance on that authorization.',
      'The following uses and disclosures require your specific written authorization:',
      '• Most uses and disclosures of psychotherapy notes\n• Uses and disclosures for marketing purposes\n• Sale of your PHI\n• Other uses and disclosures not described in this Notice',
    ],
  },
  {
    title: 'Your Rights Regarding Your PHI',
    subsections: [
      {
        subtitle: 'Right to Access',
        text: 'You have the right to inspect and obtain a copy of your PHI that we maintain in a designated record set. We may charge a reasonable, cost-based fee for copies. To request access, submit a written request to our office.',
      },
      {
        subtitle: 'Right to Amend',
        text: 'If you believe your PHI is incorrect or incomplete, you may request an amendment. We may deny your request under certain circumstances, but will explain the reason in writing.',
      },
      {
        subtitle: 'Right to an Accounting of Disclosures',
        text: 'You have the right to request a list of disclosures of your PHI we have made in the past six years, except for disclosures made for treatment, payment, or health care operations.',
      },
      {
        subtitle: 'Right to Request Restrictions',
        text: 'You may request restrictions on how we use or disclose your PHI for treatment, payment, or operations. We are not required to agree to all restrictions, but we will comply with any restriction to which we do agree.',
      },
      {
        subtitle: 'Right to Confidential Communications',
        text: 'You may request that we communicate with you about your health information by alternative means or at alternative locations (e.g., contacting you only at a specific phone number). We will accommodate reasonable requests.',
      },
      {
        subtitle: 'Right to a Paper Copy of This Notice',
        text: 'You have the right to receive a paper copy of this Notice upon request, even if you have agreed to receive it electronically.',
      },
      {
        subtitle: 'Right to Be Notified of a Breach',
        text: 'You have the right to be notified in the event of a breach of your unsecured PHI, as required by the HIPAA Breach Notification Rule.',
      },
    ],
  },
  {
    title: 'How to Exercise Your Rights',
    body: [
      'To exercise any of the rights described in this Notice, please submit a written request to:',
      'Prestwell Continuum — Privacy Officer\nPhone: 256-648-7702\nEmail: care@prestwellcontinuum.com',
      'We will respond to your request within the timeframes required by applicable law.',
    ],
  },
  {
    title: 'How to File a Complaint',
    body: [
      'If you believe your privacy rights have been violated, you have the right to file a complaint with Prestwell Continuum or with the U.S. Department of Health and Human Services (HHS) Office for Civil Rights.',
      'To file a complaint with us, contact our Privacy Officer at care@prestwellcontinuum.com or 256-648-7702.',
      'To file a complaint with HHS, visit www.hhs.gov/ocr/privacy/hipaa/complaints or call 1-800-368-1019.',
      'We will not retaliate against you for filing a complaint.',
    ],
  },
  {
    title: 'Effective Date and Contact Information',
    body: [
      'This Notice is effective January 1, 2025. We reserve the right to change the terms of this Notice and to make the revised Notice effective for all PHI we maintain.',
      'Questions about this Notice may be directed to our Privacy Officer:\nPrestwell Continuum\nPhone: 256-648-7702\nEmail: care@prestwellcontinuum.com\nServing Northern Alabama',
    ],
  },
];

export default function HipaaNoticePage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 px-6 bg-white border-b border-cream-200">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-sage-600 mb-3">
            Legal · HIPAA
          </p>
          <h1 className="font-display text-4xl font-medium text-navy-700 mb-4">
            Notice of Privacy Practices
          </h1>
          <p className="font-body text-sm text-slate-mid">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: January 1, 2025
          </p>
          <div className="mt-4 p-4 rounded-xl bg-sage-50 border border-sage-200">
            <p className="font-body text-sm text-sage-800 leading-relaxed">
              <span className="font-semibold">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </span>
            </p>
          </div>
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

              {'body' in section && section.body && (
                <div className="flex flex-col gap-3">
                  {section.body.map((para, i) => (
                    <p key={i} className="font-body text-sm text-slate-mid leading-relaxed whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {'subsections' in section && section.subsections && (
                <div className="flex flex-col gap-5 mt-1">
                  {section.subsections.map((sub) => (
                    <div key={sub.subtitle}>
                      <h3 className="font-body text-sm font-semibold text-navy-700 mb-1">
                        {sub.subtitle}
                      </h3>
                      <p className="font-body text-sm text-slate-mid leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
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
