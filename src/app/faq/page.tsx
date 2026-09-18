import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQAccordion from '@/components/FAQAccordion';
import { fetchPublicFaqs } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about DLabMate: case management, clinic access, surgical guides, verification, notifications, pricing, and support.',
};

export default async function FAQPage() {
  const faqs = await fetchPublicFaqs();

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-primary-soft rounded-full">
              FAQ
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-text-muted leading-relaxed">
              Find answers to common questions about DLabMate and how it works.
            </p>
          </div>

          <FAQAccordion initialFaqs={faqs} />

          {/* Still have questions */}
          <div className="mt-16 bg-primary-soft/40 rounded-2xl border border-primary/8 p-8 text-center">
            <h2 className="text-xl font-bold text-text-primary mb-3">Still Have Questions?</h2>
            <p className="text-sm text-text-muted mb-5">
              Reach out to us directly and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@dlabmate.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-deep transition-all"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/9779843631160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-text-primary text-sm font-bold rounded-xl border border-border hover:border-primary/20 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
