import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Request a Demo',
  description:
    'Request a personalized DLabMate demo to see how it helps organize dental lab cases, track production, and coordinate with partner clinics.',
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Info */}
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-primary-soft rounded-full">
                Demo
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-5">
                See DLabMate in Action
              </h1>
              <p className="text-text-muted leading-relaxed mb-8">
                Request a personalized walkthrough and learn how DLabMate can help your dental lab organize cases, track production, and keep clinic partners informed.
              </p>

              {/* What you'll see */}
              <div className="space-y-4 mb-10">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                  In the demo, you&apos;ll see:
                </h3>
                {[
                  'Case intake and detail management',
                  'Production workflow stage tracking',
                  'Lab and clinic dashboards',
                  'Surgical guide case workflow',
                  'Nepali date support and CSV exports',
                  'Notification system overview',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-primary-soft flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E7C86" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-sm text-text-muted">{item}</span>
                  </div>
                ))}
              </div>

              {/* Alternative contact */}
              <div className="bg-surface-alt rounded-2xl border border-border p-6">
                <h4 className="text-sm font-bold text-text-primary mb-3">Prefer a quick chat?</h4>
                <p className="text-sm text-text-muted mb-4">
                  Reach us directly through WhatsApp or phone for a quick conversation about DLabMate.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.contact.whatsappDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1fb855] transition-all shadow-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href={siteConfig.contact.phoneLink}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-border text-text-primary text-sm font-semibold rounded-xl hover:border-primary/20 hover:bg-primary-soft/50 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 sm:p-8 sticky top-28">
                <h2 className="text-xl font-bold text-text-primary mb-1">Request Your Demo</h2>
                <p className="text-sm text-text-muted mb-6">Fill in your details and we&apos;ll get back to you.</p>
                <LeadForm formType="demo" />
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
