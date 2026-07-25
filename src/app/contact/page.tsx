'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, Clock, Send, CheckCircle, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';

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
  'Complimentary Consultation',
  'Request Information',
  'Heritage Membership',
  'Signature Membership',
  'Prestige Membership',
  'Professional / Organizational Partnership',
  'Hospital-to-Home Support',
  'Not sure yet — I need guidance',
  'Other',
];

const intentDefaults: Record<string, Partial<FormData>> = {
  consultation: {
    careType: 'Complimentary Consultation',
    subject: 'Schedule a Complimentary Consultation',
  },
  info: {
    careType: 'Request Information',
    subject: 'Request Information',
  },
  professional: {
    careType: 'Professional / Organizational Partnership',
    subject: 'Request a Professional Consultation',
  },
};

function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    careType: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const intent = searchParams.get('intent');
    if (intent && intentDefaults[intent]) {
      setFormData((prev) => ({ ...prev, ...intentDefaults[intent] }));
    }
  }, [searchParams]);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) newErrors.message = 'Please share a brief message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setFormState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Non-2xx');
      setFormState('success');
    } catch {
      setFormState('error');
    }
  }

  function field(key: keyof FormData) {
    return {
      value: formData[key],
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => setFormData((prev) => ({ ...prev, [key]: e.target.value })),
    };
  }

  const inputClass = (err?: string) => `
    w-full px-4 py-3 rounded-xl border font-body text-sm text-navy-700
    bg-white placeholder:text-slate-mid/50 outline-none transition-all
    focus:ring-2 focus:ring-gold-300 focus:border-gold-400
    ${err ? 'border-red-300 bg-red-50/30' : 'border-cream-300 hover:border-cream-400'}
  `;

  return (
    <div className="p-8 rounded-3xl bg-cream-100 border border-cream-300 shadow-soft">
      <h2 className="font-display text-2xl font-medium text-navy-700 mb-6">
        Send Us a Message
      </h2>

      {formState === 'success' ? (
        <div className="flex flex-col items-center text-center py-12 gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gold-100 flex items-center justify-center">
            <CheckCircle size={28} className="text-gold-600" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-2xl font-medium text-navy-700">Message Received</h3>
          <p className="font-body text-sm text-slate-mid max-w-sm leading-relaxed">
            Thank you for reaching out. A member of our team will contact you within one business
            day. You may also call us at{' '}
            <a href={SITE.phoneHref} className="text-gold-600 hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-xs font-medium text-navy-700 mb-1.5" htmlFor="name">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input id="name" type="text" autoComplete="name" className={inputClass(errors.name)} {...field('name')} />
              {errors.name && <p className="mt-1 font-body text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-body text-xs font-medium text-navy-700 mb-1.5" htmlFor="email">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input id="email" type="email" autoComplete="email" className={inputClass(errors.email)} {...field('email')} />
              {errors.email && <p className="mt-1 font-body text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-body text-xs font-medium text-navy-700 mb-1.5" htmlFor="phone">
                Phone Number
              </label>
              <input id="phone" type="tel" autoComplete="tel" className={inputClass()} {...field('phone')} />
            </div>
            <div>
              <label className="block font-body text-xs font-medium text-navy-700 mb-1.5" htmlFor="careType">
                How can we help?
              </label>
              <select id="careType" className={inputClass() + ' cursor-pointer'} {...field('careType')}>
                <option value="">Select an option...</option>
                {careTypes.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-body text-xs font-medium text-navy-700 mb-1.5" htmlFor="subject">
              Subject
            </label>
            <input id="subject" type="text" className={inputClass()} {...field('subject')} />
          </div>

          <div>
            <label className="block font-body text-xs font-medium text-navy-700 mb-1.5" htmlFor="message">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Share a bit about your situation or organization. The more context you provide, the better we can help."
              className={inputClass(errors.message) + ' resize-none'}
              {...field('message')}
            />
            {errors.message && <p className="mt-1 font-body text-xs text-red-500">{errors.message}</p>}
          </div>

          {formState === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200">
              <p className="font-body text-sm text-red-700">
                Something went wrong. Please try again, or call us at{' '}
                <a href={SITE.phoneHref} className="underline">{SITE.phone}</a>.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6
                       bg-navy-700 hover:bg-navy-800 text-white font-medium font-body text-sm
                       rounded-xl transition-all shadow-soft hover:shadow-warm disabled:opacity-60
                       disabled:cursor-not-allowed hover:-translate-y-0.5"
          >
            {formState === 'submitting' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
  );
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-16 px-6 bg-navy-700">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase font-medium text-gold-300 mb-4">
            Contact Prestwell Continuum
          </p>
          <h1
            className="font-display font-medium text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Schedule Your Complimentary Consultation
          </h1>
          <div className="gold-rule mx-auto mt-6" aria-hidden="true" />
        </div>
      </div>

      <section className="section-padding px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="p-8 rounded-3xl bg-cream-100 animate-pulse h-96" />}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300">
              <h3 className="font-body text-sm font-semibold text-navy-700 mb-4">Reach Us Directly</h3>
              <div className="flex flex-col gap-4">
                <a href={SITE.phoneHref} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center">
                    <Phone size={16} className="text-gold-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-slate-mid">Phone</p>
                    <p className="font-body text-sm font-medium text-navy-700">{SITE.phone}</p>
                  </div>
                </a>
                <a href={SITE.emailHref} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center">
                    <Mail size={16} className="text-gold-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-slate-mid">Email</p>
                    <p className="font-body text-sm font-medium text-navy-700 break-all">{SITE.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center">
                    <MapPin size={16} className="text-gold-600" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-slate-mid">Service Area</p>
                    <p className="font-body text-sm font-medium text-navy-700">
                      Madison · Huntsville · Athens · North Alabama
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream-100 border border-cream-300">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-gold-600" strokeWidth={1.8} />
                <h3 className="font-body text-sm font-semibold text-navy-700">Office Hours</h3>
              </div>
              <p className="font-body text-sm text-navy-700">{SITE.hours.weekdays}</p>
              <p className="font-body text-sm text-navy-700 mb-2">{SITE.hours.time}</p>
              <p className="font-body text-xs text-slate-mid">{SITE.hours.note}</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-700">
              <p className="font-body text-xs uppercase tracking-widest text-gold-300 font-medium mb-3">
                {SITE.motto}
              </p>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Every conversation is complimentary and carries no obligation. We&apos;re here to
                help you think through your options with clarity and care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
