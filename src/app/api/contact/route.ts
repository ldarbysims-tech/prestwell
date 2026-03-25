import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Handles contact form submissions.
 *
 * To wire this up to a real email service:
 *
 * Option A — Resend (recommended):
 *   npm install resend
 *   Set RESEND_API_KEY in your .env.local
 *
 * Option B — SendGrid:
 *   npm install @sendgrid/mail
 *   Set SENDGRID_API_KEY in your .env.local
 *
 * Option C — Formspree (no backend needed):
 *   Point the form directly to https://formspree.io/f/YOUR_ID
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, careType } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    /*
     * ─── Resend Implementation ─────────────────────────────────────────────
     * Uncomment and install 'resend' to use:
     *
     * import { Resend } from 'resend';
     * const resend = new Resend(process.env.RESEND_API_KEY);
     *
     * await resend.emails.send({
     *   from: 'Prestwell Website <noreply@prestwellcontinuum.com>',
     *   to: 'care@prestwellcontinuum.com',
     *   subject: `New Consultation Request — ${name}`,
     *   html: `
     *     <h2>New Contact Form Submission</h2>
     *     <p><strong>Name:</strong> ${name}</p>
     *     <p><strong>Email:</strong> ${email}</p>
     *     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
     *     <p><strong>Care Type:</strong> ${careType || 'Not specified'}</p>
     *     <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
     *     <hr />
     *     <p><strong>Message:</strong></p>
     *     <p>${message.replace(/\n/g, '<br/>')}</p>
     *   `,
     * });
     * ─────────────────────────────────────────────────────────────────────
     */

    // Log submission in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', { name, email, phone, subject, message, careType });
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been received.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
