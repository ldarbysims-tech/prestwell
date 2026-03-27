'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle, MapPin } from 'lucide-react';

/**
 * ContactPage
 * Full contact page with form + contact details.
 * Form uses local state — ready to wire to an API route or service like Formspree/Resend.
 */

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  careType: string;
}

const careTypes = [
  'Weekly Visits',
  'Twice Weekly Visits',
  'Daily Visits',
  'Not sure yet — I need guidance',
  'Other',
];

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData]   = useState<FormData>({
    name: '', email: '', phone: '', subject: '', message: '', careType: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  /* ── Validation ─────────────────────────────────── */
  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim())    newErrors.name    = 'Please enter your name.';
    if (!formData.email.trim())   newErrors.email   = 'Please enter your email.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /* ── Submit handler ─────────────────────────────── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Non-2xx response from /api/contact');
      }

      setFormState('success');
    } catch {
      setFormState('error');
    }
  }

  /* ── Field helper ───────────────────────────────── */
  function field(key: keyof FormData) {
    return {
      value: formData[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setFormData((prev) => ({ ...prev, [key]: e.target.value })),
    };
  }

  const inputClass = (err?: string) => `
    w-full px-4 py-3 rounded-xl border font-body text-sm text-slate-deep
    bg-white placeholder:text-slate-mid/50 outline-none transition-all
    focus:ring-2 focus:ring-sage-300 focus:border-sage-400
    ${err
      ? 'border-red-300 bg-red-50/30'
      : 'border-cream-300 hover:border-cream-400'
    }
  `;

  return (
    <>
      {/* ── Page Header ─────────────────────────────── */}
      <div className="pt-32 pb-16 px-6 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto text-center max-w-2xl mx-auto">
          <p className="font-body text-xs tracking-[0.2em] uppercase font-medium
                         text-sage-600 mb-4">
            Get in Touch
          </p>
          <h1
            className="font-display font-medium text-navy-700 leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Schedule a Consultation
          </h1>
          <p className="font-body text-lg text-slate-mid leading-relaxed max-w-xl mx-auto">
            Tell us about your family's situation and we'll respond within one business day. 
            There's no obligation — just a real conversation about care.
          </p>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────── */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Contact Form ─────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-cream-50 border border-cream-200 shadow-soft">
              <h2 className="font-display text-2xl font-medium text-navy-700 mb-6">
                Send Us a Message
              </h2>

              {/* Success state */}
              {formState === 'success' ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-sage-100 flex items-center
                                   justify-center">
                    <CheckCircle size={28} className="text-sage-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-navy-700">
                    Message Received
                  </h3>
                  <p className="font-body text-sm text-slate-mid max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will contact you within 
                    one business day. In the meantime, you're welcome to call us directly at{' '}
                    <a href="tel:2566487702" className="text-sage-600 hover:underline">
                      256-648-7702
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-medium text-navy-700
                                         mb-1.5 tracking-wide" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        className={inputClass(errors.name)}
                        {...field('name')}
                      />
                      {errors.name && (
                        <p className="mt-1 font-body text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-body text-xs font-medium text-navy-700
                                         mb-1.5 tracking-wide" htmlFor="email">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        autoComplete="email"
                        className={inputClass(errors.email)}
                        {...field('email')}
                      />
                      {errors.email && (
                        <p className="mt-1 font-body text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone + Care type row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-medium text-navy-700
                                         mb-1.5 tracking-wide" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(256) 000-0000"
                        autoComplete="tel"
                        className={inputClass()}
                        {...field('phone')}
                      />
                    </div>

                    <div>
                      <label className="block font-body text-xs font-medium text-navy-700
                                         mb-1.5 tracking-wide" htmlFor="careType">
                        Care Type (if known)
                      </label>
                      <select
                        id="careType"
                        className={inputClass() + ' cursor-pointer'}
                        {...field('careType')}
                      >
                        <option value="">Select an option...</option>
                        {careTypes.map((ct) => (
                          <option key={ct} value={ct}>{ct}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-body text-xs font-medium text-navy-700
                                       mb-1.5 tracking-wide" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What can we help with?"
                      className={inputClass()}
                      {...field('subject')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-xs font-medium text-navy-700
                                       mb-1.5 tracking-wide" htmlFor="message">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your loved one's situation — diagnosis, current challenges, what you're hoping for. The more context you share, the better we can help."
                      className={inputClass(errors.message) + ' resize-none'}
                      {...field('message')}
                    />
                    {errors.message && (
                      <p className="mt-1 font-body text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  {formState === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                      <p className="font-body text-sm text-red-700">
                        Something went wrong. Please try again, or call us directly at{' '}
                        <a href="tel:2566487702" className="underline">256-648-7702</a>.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2
                                py-3.5 px-6 bg-sage-600 hover:bg-sage-700 text-white
                                font-medium font-body text-sm rounded-xl transition-all
                                shadow-soft hover:shadow-warm disabled:opacity-60
                                disabled:cursor-not-allowed hover:-translate-y-0.5"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white
                                          rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="font-body text-xs text-slate-mid text-center">
                    We respond within one business day. Your information is kept private.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── Contact Details Sidebar ───────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Direct contact */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <h3 className="font-body text-sm font-semibold text-navy-700 mb-4">
                Prefer to Reach Us Directly?
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:2566487702"
                  className="flex items-center gap-4 group"
                  aria-label="Call us"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center
                                   justify-center group-hover:bg-sage-200 transition-colors">
                    <Phone size={16} className="text-sage-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-slate-mid">Phone</p>
                    <p className="font-body text-sm font-medium text-navy-700
                                   group-hover:text-sage-700 transition-colors">
                      256-648-7702
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:care@prestwellcontinuum.com"
                  className="flex items-center gap-4 group"
                  aria-label="Email us"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center
                                   justify-center group-hover:bg-sage-200 transition-colors">
                    <Mail size={16} className="text-sage-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-slate-mid">Email</p>
                    <p className="font-body text-sm font-medium text-navy-700
                                   group-hover:text-sage-700 transition-colors break-all">
                      care@prestwellcontinuum.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                    <MapPin size={16} className="text-sage-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-slate-mid">Service Area</p>
                    <p className="font-body text-sm font-medium text-navy-700">
                      Northern Alabama
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours / response time */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-sage-600" strokeWidth={1.8} />
                <h3 className="font-body text-sm font-semibold text-navy-700">
                  Response Time
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: 'Phone calls',     value: 'Same day, during business hours' },
                  { label: 'Email / form',    value: 'Within 1 business day' },
                  { label: 'Urgent concerns', value: 'Call us directly for fastest response' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="font-body text-xs text-slate-mid">{label}</span>
                    <span className="font-body text-sm text-navy-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassurance block */}
            <div className="p-6 rounded-2xl bg-navy-700 border border-navy-600">
              <p className="font-body text-xs uppercase tracking-widest text-sage-300
                             font-medium mb-3">
                No Pressure. Ever.
              </p>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Every conversation with us is free and carries zero obligation. We're 
                here to help you think through your options — whether or not you 
                choose to work with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
