import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact DLabMate for demo requests, pricing, support, or general enquiries. Reach us via email, phone, or WhatsApp.',
};

const contactMethods = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    title: 'General Enquiries',
    value: siteConfig.contact.generalEmail,
    href: `mailto:${siteConfig.contact.generalEmail}`,
    description: 'For demos, partnerships, and general questions',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    title: 'Support',
    value: siteConfig.contact.supportEmail,
    href: `mailto:${siteConfig.contact.supportEmail}`,
    description: 'For technical support and account issues',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    title: 'Phone',
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneLink,
    description: 'Call us directly',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    title: 'WhatsApp',
    value: siteConfig.contact.phone,
    href: siteConfig.contact.whatsappLink,
    description: 'Message us on WhatsApp',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact info */}
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-primary-soft rounded-full">
                Contact
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-5">
                Get in Touch With Us
              </h1>
              <p className="text-text-muted leading-relaxed mb-10">
                Have a question about DLabMate? Want to request a demo or discuss pricing? Reach out through any of our contact channels, or use the form to send us a message.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 bg-white rounded-xl border border-border p-5 hover:border-primary/20 hover:shadow-card transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary mb-0.5">{method.title}</h3>
                      <p className="text-sm text-primary font-semibold mb-1">{method.value}</p>
                      <p className="text-xs text-text-muted">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 sm:p-8 sticky top-28">
                <h2 className="text-xl font-bold text-text-primary mb-1">Send Us a Message</h2>
                <p className="text-sm text-text-muted mb-6">We&apos;ll get back to you as soon as possible.</p>
                <LeadForm formType="contact" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
