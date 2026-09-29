'use client';

import { useState, type FormEvent } from 'react';

interface LeadFormProps {
  formType?: 'demo' | 'contact';
  className?: string;
}

interface FormData {
  name: string;
  organization: string;
  audience: string;
  email: string;
  phone: string;
  enquiryType: string;
  preferredContact: string;
  message: string;
  privacyAcknowledged: boolean;
  honeypot: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function LeadForm({ formType = 'demo', className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    audience: 'lab',
    email: '',
    phone: '',
    enquiryType: formType === 'contact' ? 'general' : 'demo',
    preferredContact: 'email',
    message: '',
    privacyAcknowledged: false,
    honeypot: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [apiErrorMessage, setApiErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length > 120) newErrors.name = 'Name is too long';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (formData.organization.trim().length > 120)
      newErrors.organization = 'Organization name is too long';

    if (
      (formData.preferredContact === 'phone' || formData.preferredContact === 'whatsapp') &&
      !formData.phone.trim()
    ) {
      newErrors.phone = 'Phone number is required for phone/WhatsApp contact';
    }

    if (formData.message.length > 2000) newErrors.message = 'Message is too long (max 2000 characters)';

    if (!formData.privacyAcknowledged)
      newErrors.privacyAcknowledged = 'Please acknowledge the privacy notice';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus('submitting');
    setApiErrorMessage('');

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';
      const res = await fetch(`${apiBase}/api/marketing/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formData.enquiryType,
          name: formData.name.trim(),
          organization: formData.organization.trim(),
          audience: formData.audience,
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          preferredContact: formData.preferredContact,
          message: formData.message.trim(),
          sourcePath: typeof window !== 'undefined' ? window.location.pathname : '/',
          botField: formData.honeypot,
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = await res.json();
      } catch (jsonErr) {
        console.warn('Response JSON parse error:', jsonErr);
      }

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        console.error('Lead submission API response error:', data);
        setApiErrorMessage(data.message || 'Server error occurred during submission.');
        setStatus('error');
      }
    } catch (err: unknown) {
      console.error('Lead submission fetch failed:', err);
      const message = err instanceof Error ? err.message : 'Network error connecting to backend.';
      setApiErrorMessage(message);
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (status === 'success') {
    return (
      <div className={`bg-mint-soft border border-mint/30 rounded-2xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2b7365" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">We have received your request</h3>
        <p className="text-text-muted text-sm leading-relaxed">
          Thank you for reaching out! Our team will get back to you shortly via your preferred contact method.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`} noValidate>
      {/* Honeypot — hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => handleChange('honeypot', e.target.value)}
        className="absolute -left-[9999px] opacity-0 h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-name" className="text-sm font-semibold text-text-primary">
            Full Name <span className="text-coral">*</span>
          </label>
          <input
            id="lead-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`h-12 px-4 rounded-xl border ${errors.name ? 'border-coral' : 'border-border'} bg-white text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all`}
            placeholder="Your full name"
            maxLength={120}
          />
          {errors.name && <span className="text-xs text-coral font-medium">{errors.name}</span>}
        </div>

        {/* Organization */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-org" className="text-sm font-semibold text-text-primary">
            Lab / Clinic Name
          </label>
          <input
            id="lead-org"
            type="text"
            value={formData.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
            className="h-12 px-4 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
            placeholder="Organization name"
            maxLength={120}
          />
          {errors.organization && <span className="text-xs text-coral font-medium">{errors.organization}</span>}
        </div>
      </div>

      {/* Audience */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-text-primary">I am a</label>
        <div className="flex gap-3 flex-wrap">
          {[
            { value: 'lab', label: 'Dental Lab' },
            { value: 'clinic', label: 'Dental Clinic' },
            { value: 'other', label: 'Other' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleChange('audience', option.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                formData.audience === option.value
                  ? 'bg-primary text-white border-primary shadow-[0_2px_10px_rgba(14,124,134,0.25)]'
                  : 'bg-white text-text-primary/70 border-border hover:border-primary/30 hover:bg-primary-soft'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-email" className="text-sm font-semibold text-text-primary">
            Email <span className="text-coral">*</span>
          </label>
          <input
            id="lead-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`h-12 px-4 rounded-xl border ${errors.email ? 'border-coral' : 'border-border'} bg-white text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all`}
            placeholder="your@email.com"
          />
          {errors.email && <span className="text-xs text-coral font-medium">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-phone" className="text-sm font-semibold text-text-primary">
            Phone Number {(formData.preferredContact === 'phone' || formData.preferredContact === 'whatsapp') && <span className="text-coral">*</span>}
          </label>
          <input
            id="lead-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`h-12 px-4 rounded-xl border ${errors.phone ? 'border-coral' : 'border-border'} bg-white text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all`}
            placeholder="+977 98XXXXXXXX"
          />
          {errors.phone && <span className="text-xs text-coral font-medium">{errors.phone}</span>}
        </div>
      </div>

      {/* Preferred Contact */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-text-primary">Preferred contact method</label>
        <div className="flex gap-3 flex-wrap">
          {[
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Phone' },
            { value: 'whatsapp', label: 'WhatsApp' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleChange('preferredContact', option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                formData.preferredContact === option.value
                  ? 'bg-primary-soft text-primary border-primary/20'
                  : 'bg-white text-text-muted border-border hover:border-primary/20'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contact form: enquiry type */}
      {formType === 'contact' && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-type" className="text-sm font-semibold text-text-primary">
            Enquiry Type
          </label>
          <select
            id="lead-type"
            value={formData.enquiryType}
            onChange={(e) => handleChange('enquiryType', e.target.value)}
            className="h-12 px-4 rounded-xl border border-border bg-white text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
          >
            <option value="general">General Enquiry</option>
            <option value="demo">Demo Request</option>
            <option value="pricing">Pricing</option>
            <option value="support">Support</option>
          </select>
        </div>
      )}

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-message" className="text-sm font-semibold text-text-primary">
          Message
        </label>
        <textarea
          id="lead-message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="min-h-[120px] px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-y"
          placeholder={
            formType === 'demo'
              ? 'Tell us about your lab and what you would like to see in the demo...'
              : 'How can we help you?'
          }
          maxLength={2000}
        />
        <span className="text-xs text-text-muted text-right">{formData.message.length}/2000</span>
      </div>

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          id="lead-privacy"
          type="checkbox"
          checked={formData.privacyAcknowledged}
          onChange={(e) => handleChange('privacyAcknowledged', e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/20 accent-primary"
        />
        <label htmlFor="lead-privacy" className="text-sm text-text-muted leading-relaxed">
          I acknowledge that my contact details will be used to respond to this enquiry.{' '}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.privacyAcknowledged && (
        <span className="text-xs text-coral font-medium">{errors.privacyAcknowledged}</span>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-deep shadow-[0_4px_15px_rgba(14,124,134,0.3)] hover:shadow-[0_6px_20px_rgba(14,124,134,0.4)] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : formType === 'demo' ? (
          'Request a Demo'
        ) : (
          'Send Enquiry'
        )}
      </button>

      {status === 'error' && (
        <div className="bg-coral-soft border border-coral/20 rounded-xl p-4 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8846B" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-text-primary">{apiErrorMessage || 'Something went wrong'}</p>
            <p className="text-xs text-text-muted mt-1">
              Please try again, or reach us directly at{' '}
              <a href="mailto:info@dlabmate.com" className="text-primary hover:underline">
                info@dlabmate.com
              </a>{' '}
              or{' '}
              <a
                href="https://wa.me/9779843631160"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
