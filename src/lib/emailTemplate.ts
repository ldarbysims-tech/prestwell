/**
 * emailTemplate.ts
 * Branded HTML email template for Prestwell Continuum contact form submissions.
 * Designed for use with Resend (or any HTML-capable email provider).
 *
 * Usage:
 *   import { buildContactEmail } from '@/lib/emailTemplate';
 *   const { html, text, subject } = buildContactEmail(formData);
 */

export interface ContactFormData {
  name:     string;
  email:    string;
  phone?:   string;
  subject?: string;
  message:  string;
  careType?: string;
}

// ─── Brand tokens (mirrored from tailwind.config.ts) ─────────────────────────
const COLOR = {
  navyDeep:   '#132851',
  navyMid:    '#1E3A6E',
  navyLight:  '#D8E1EF',
  sageDeep:   '#3A6140',
  sageMid:    '#4D7D52',
  sageLight:  '#E6EDE6',
  sageBorder: '#C8D9C8',
  cream50:    '#FDFAF6',
  cream100:   '#F9F4EC',
  cream200:   '#F3EBD8',
  cream300:   '#E8D9C0',
  slateMid:   '#9B9490',
  slateDeep:  '#4A4540',
  white:      '#FFFFFF',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function nl2br(str: string): string {
  return escapeHtml(str).replace(/\n/g, '<br>');
}

function row(label: string, value: string | undefined, fallback = 'Not provided'): string {
  const display = value?.trim() ? escapeHtml(value.trim()) : `<em style="color:${COLOR.slateMid}">${fallback}</em>`;
  return `
    <tr>
      <td style="
        padding: 10px 16px;
        width: 140px;
        vertical-align: top;
        font-family: Georgia, serif;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: ${COLOR.slateMid};
        white-space: nowrap;
        border-bottom: 1px solid ${COLOR.cream200};
      ">${label}</td>
      <td style="
        padding: 10px 16px;
        vertical-align: top;
        font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
        font-size: 14px;
        color: ${COLOR.slateDeep};
        border-bottom: 1px solid ${COLOR.cream200};
      ">${display}</td>
    </tr>`;
}

// ─── HTML template ────────────────────────────────────────────────────────────

export function buildContactEmailHtml(data: ContactFormData): string {
  const { name, email, phone, subject, message, careType } = data;
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Request — ${escapeHtml(name)}</title>
</head>
<body style="
  margin: 0;
  padding: 0;
  background-color: ${COLOR.cream100};
  font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLOR.cream100}; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- ── Header bar ────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.navyMid};
              border-radius: 16px 16px 0 0;
              padding: 32px 40px 28px;
            ">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="
                      margin: 0 0 2px;
                      font-family: Georgia, serif;
                      font-size: 26px;
                      font-weight: 600;
                      letter-spacing: -0.3px;
                      color: ${COLOR.white};
                      line-height: 1.1;
                    ">Prestwell</p>
                    <p style="
                      margin: 0;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 10px;
                      font-weight: 500;
                      letter-spacing: 0.22em;
                      text-transform: uppercase;
                      color: rgba(255,255,255,0.45);
                    ">Continuum</p>
                  </td>
                  <td align="right" valign="middle">
                    <span style="
                      display: inline-block;
                      padding: 5px 14px;
                      background-color: ${COLOR.sageDeep};
                      border-radius: 20px;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 11px;
                      font-weight: 600;
                      letter-spacing: 0.08em;
                      text-transform: uppercase;
                      color: ${COLOR.white};
                    ">New Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Alert banner ──────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.sageDeep};
              padding: 14px 40px;
            ">
              <p style="
                margin: 0;
                font-family: Georgia, serif;
                font-size: 16px;
                font-style: italic;
                color: rgba(255,255,255,0.85);
                line-height: 1.4;
              ">A new consultation request has been submitted from the website.</p>
            </td>
          </tr>

          <!-- ── Body ─────────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.white};
              padding: 36px 40px 28px;
            ">

              <!-- Section: Contact Details -->
              <p style="
                margin: 0 0 14px;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${COLOR.sageMid};
              ">Contact Details</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="
                border-radius: 10px;
                border: 1px solid ${COLOR.cream300};
                border-collapse: separate;
                border-spacing: 0;
                overflow: hidden;
                margin-bottom: 28px;
              ">
                ${row('Name',      name)}
                ${row('Email',     email)}
                ${row('Phone',     phone)}
                ${row('Care Type', careType)}
                ${row('Subject',   subject)}
              </table>

              <!-- Section: Message -->
              <p style="
                margin: 0 0 14px;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${COLOR.sageMid};
              ">Message</p>

              <div style="
                background-color: ${COLOR.cream50};
                border: 1px solid ${COLOR.cream300};
                border-radius: 10px;
                padding: 20px 24px;
                margin-bottom: 32px;
              ">
                <p style="
                  margin: 0;
                  font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                  font-size: 14px;
                  color: ${COLOR.slateDeep};
                  line-height: 1.7;
                ">${nl2br(message)}</p>
              </div>

              <!-- Reply CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom: 8px;">
                <tr>
                  <td>
                    <a href="mailto:${escapeHtml(email)}?subject=Re%3A%20Your%20Prestwell%20Consultation%20Request" style="
                      display: inline-block;
                      padding: 13px 28px;
                      background-color: ${COLOR.sageDeep};
                      border-radius: 10px;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 14px;
                      font-weight: 600;
                      color: ${COLOR.white};
                      text-decoration: none;
                      letter-spacing: 0.01em;
                    ">Reply to ${escapeHtml(name)}</a>
                  </td>
                  ${phone?.trim() ? `
                  <td style="padding-left: 12px;">
                    <a href="tel:${escapeHtml(phone.replace(/\D/g, ''))}" style="
                      display: inline-block;
                      padding: 13px 28px;
                      background-color: ${COLOR.white};
                      border: 1.5px solid ${COLOR.cream300};
                      border-radius: 10px;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 14px;
                      font-weight: 600;
                      color: ${COLOR.navyMid};
                      text-decoration: none;
                    ">Call ${escapeHtml(phone.trim())}</a>
                  </td>` : ''}
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── Footer ────────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.cream100};
              border-top: 1px solid ${COLOR.cream200};
              border-radius: 0 0 16px 16px;
              padding: 20px 40px;
            ">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="
                      margin: 0;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 11px;
                      color: ${COLOR.slateMid};
                      line-height: 1.6;
                    ">
                      Submitted: ${submittedAt} (CT)<br>
                      This message was sent via the Prestwell Continuum website contact form.
                    </p>
                  </td>
                  <td align="right" valign="middle">
                    <p style="
                      margin: 0;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 11px;
                      color: ${COLOR.slateMid};
                    ">prestwellcontinuum.com</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Plain-text fallback ──────────────────────────────────────────────────────

export function buildContactEmailText(data: ContactFormData): string {
  const { name, email, phone, subject, message, careType } = data;
  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return [
    'PRESTWELL CONTINUUM — NEW CONSULTATION REQUEST',
    '═══════════════════════════════════════════════',
    '',
    'CONTACT DETAILS',
    `Name:      ${name}`,
    `Email:     ${email}`,
    `Phone:     ${phone     || 'Not provided'}`,
    `Care Type: ${careType  || 'Not specified'}`,
    `Subject:   ${subject   || 'Not provided'}`,
    '',
    'MESSAGE',
    '───────',
    message,
    '',
    '───────────────────────────────────────────────',
    `Submitted: ${submittedAt} (CT)`,
    'Sent via prestwellcontinuum.com contact form',
  ].join('\n');
}

// ─── Subject line ─────────────────────────────────────────────────────────────

export function buildContactEmailSubject(data: ContactFormData): string {
  const careLabel = data.careType ? ` · ${data.careType}` : '';
  return `New Consultation Request — ${data.name}${careLabel}`;
}

// ─── Convenience export ───────────────────────────────────────────────────────

export function buildContactEmail(data: ContactFormData) {
  return {
    subject: buildContactEmailSubject(data),
    html:    buildContactEmailHtml(data),
    text:    buildContactEmailText(data),
  };
}

// ─── Confirmation email (sent to the submitter) ───────────────────────────────

export function buildConfirmationEmailHtml(data: ContactFormData): string {
  const { name, careType } = data;
  const firstName = name.trim().split(' ')[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We received your message — Prestwell Continuum</title>
</head>
<body style="
  margin: 0;
  padding: 0;
  background-color: ${COLOR.cream100};
  font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLOR.cream100}; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- ── Header ─────────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.navyMid};
              border-radius: 16px 16px 0 0;
              padding: 32px 40px 28px;
            ">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="
                      margin: 0 0 2px;
                      font-family: Georgia, serif;
                      font-size: 26px;
                      font-weight: 600;
                      letter-spacing: -0.3px;
                      color: ${COLOR.white};
                      line-height: 1.1;
                    ">Prestwell</p>
                    <p style="
                      margin: 0;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 10px;
                      font-weight: 500;
                      letter-spacing: 0.22em;
                      text-transform: uppercase;
                      color: rgba(255,255,255,0.45);
                    ">Continuum</p>
                  </td>
                  <td align="right" valign="middle">
                    <span style="
                      display: inline-block;
                      padding: 5px 14px;
                      background-color: ${COLOR.sageDeep};
                      border-radius: 20px;
                      font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                      font-size: 11px;
                      font-weight: 600;
                      letter-spacing: 0.08em;
                      text-transform: uppercase;
                      color: ${COLOR.white};
                    ">Message Received</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Body ───────────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.white};
              padding: 40px 40px 36px;
            ">

              <!-- Greeting -->
              <p style="
                margin: 0 0 20px;
                font-family: Georgia, serif;
                font-size: 22px;
                font-weight: 600;
                color: ${COLOR.navyDeep};
                line-height: 1.3;
              ">Thank you, ${escapeHtml(firstName)}.</p>

              <p style="
                margin: 0 0 16px;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 15px;
                color: ${COLOR.slateDeep};
                line-height: 1.7;
              ">We've received your message and a member of our care team will be in touch with you within <strong>one business day</strong>.</p>

              <p style="
                margin: 0 0 32px;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 15px;
                color: ${COLOR.slateDeep};
                line-height: 1.7;
              ">In the meantime, if you have an urgent concern or simply prefer to talk, please don't hesitate to call us directly.</p>

              <!-- Divider -->
              <div style="height: 1px; background-color: ${COLOR.cream200}; margin-bottom: 28px;"></div>

              <!-- What to expect -->
              <p style="
                margin: 0 0 14px;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${COLOR.sageMid};
              ">What to Expect</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                ${[
                  ['01', 'We review your inquiry', 'A care coordinator reads every message personally.'],
                  ['02', 'We reach out to you', 'Expect a call or email within one business day — sooner when possible.'],
                  ['03', 'A real conversation', 'No scripts, no pressure. Just an honest discussion about how we can help.'],
                ].map(([num, title, desc]) => `
                <tr>
                  <td style="padding: 12px 0; vertical-align: top; width: 36px;">
                    <span style="
                      display: inline-block;
                      width: 26px;
                      height: 26px;
                      line-height: 26px;
                      text-align: center;
                      border-radius: 50%;
                      background-color: ${COLOR.sageLight};
                      font-family: Georgia, serif;
                      font-size: 11px;
                      font-weight: 600;
                      color: ${COLOR.sageDeep};
                    ">${num}</span>
                  </td>
                  <td style="padding: 12px 0 12px 14px; vertical-align: top; border-bottom: 1px solid ${COLOR.cream200};">
                    <p style="margin: 0 0 3px; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size: 13px; font-weight: 600; color: ${COLOR.navyDeep};">${title}</p>
                    <p style="margin: 0; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: ${COLOR.slateMid}; line-height: 1.5;">${desc}</p>
                  </td>
                </tr>`).join('')}
              </table>

              ${careType ? `
              <!-- Care interest callout -->
              <div style="
                background-color: ${COLOR.sageLight};
                border-left: 3px solid ${COLOR.sageDeep};
                border-radius: 0 10px 10px 0;
                padding: 16px 20px;
                margin-bottom: 32px;
              ">
                <p style="margin: 0 0 4px; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: ${COLOR.sageDeep};">Your Care Interest</p>
                <p style="margin: 0; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: ${COLOR.slateDeep};">${escapeHtml(careType)}</p>
              </div>` : ''}

              <!-- Contact block -->
              <div style="
                background-color: ${COLOR.cream50};
                border: 1px solid ${COLOR.cream300};
                border-radius: 12px;
                padding: 20px 24px;
              ">
                <p style="
                  margin: 0 0 12px;
                  font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 0.12em;
                  text-transform: uppercase;
                  color: ${COLOR.sageMid};
                ">Prefer to Talk Now?</p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <a href="tel:2566487702" style="
                        display: inline-block;
                        padding: 11px 24px;
                        background-color: ${COLOR.navyMid};
                        border-radius: 8px;
                        font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                        font-size: 14px;
                        font-weight: 600;
                        color: ${COLOR.white};
                        text-decoration: none;
                        letter-spacing: 0.01em;
                      ">Call 256-648-7702</a>
                    </td>
                  </tr>
                </table>
                <p style="
                  margin: 12px 0 0;
                  font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                  font-size: 12px;
                  color: ${COLOR.slateMid};
                ">Available during business hours · Northern Alabama</p>
              </div>

            </td>
          </tr>

          <!-- ── Closing note ────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.navyDeep};
              padding: 28px 40px;
            ">
              <p style="
                margin: 0 0 6px;
                font-family: Georgia, serif;
                font-size: 14px;
                font-style: italic;
                color: rgba(255,255,255,0.75);
                line-height: 1.6;
              ">"Every conversation with us is free and carries zero obligation. We're here to help you think through your options."</p>
              <p style="
                margin: 0;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 11px;
                color: rgba(255,255,255,0.35);
                letter-spacing: 0.08em;
                text-transform: uppercase;
              ">— The Prestwell Care Team</p>
            </td>
          </tr>

          <!-- ── Footer ─────────────────────────────────── -->
          <tr>
            <td style="
              background-color: ${COLOR.cream100};
              border-top: 1px solid ${COLOR.cream200};
              border-radius: 0 0 16px 16px;
              padding: 20px 40px;
            ">
              <p style="
                margin: 0;
                font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
                font-size: 11px;
                color: ${COLOR.slateMid};
                line-height: 1.6;
                text-align: center;
              ">
                You're receiving this because you submitted a contact form at prestwellcontinuum.com.<br>
                Prestwell Continuum · Northern Alabama
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildConfirmationEmailText(data: ContactFormData): string {
  const firstName = data.name.trim().split(' ')[0];
  return [
    `Thank you, ${firstName}.`,
    '',
    "We've received your message and a member of our care team will be in touch within one business day.",
    '',
    'If you have an urgent concern or prefer to talk now, call us directly:',
    '  256-648-7702 (business hours, Northern Alabama)',
    '',
    'WHAT TO EXPECT',
    '──────────────',
    '1. We review your inquiry — a care coordinator reads every message personally.',
    '2. We reach out to you — within one business day, sooner when possible.',
    '3. A real conversation — no scripts, no pressure.',
    '',
    data.careType ? `Care interest noted: ${data.careType}\n` : '',
    '──────────────────────────────────────────────',
    'Prestwell Continuum · prestwellcontinuum.com',
    'You received this because you submitted the contact form on our website.',
  ].join('\n');
}

export function buildConfirmationEmail(data: ContactFormData) {
  const firstName = data.name.trim().split(' ')[0];
  return {
    subject: `We received your message, ${firstName} — Prestwell Continuum`,
    html:    buildConfirmationEmailHtml(data),
    text:    buildConfirmationEmailText(data),
  };
}
