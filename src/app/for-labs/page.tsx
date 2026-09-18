import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import { fetchPublicPageBySlug } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'For Dental Labs',
  description:
    'See how DLabMate helps dental labs organize cases, track production stages, manage clinic partners, and meet deadlines.',
};

const labBenefits = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>,
    title: 'Organize Every Case',
    description: 'Record doctor, patient, teeth, material, shade, dates, and notes — structured and searchable, not scattered across notebooks.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="15" rx="1"/><path d="M9 6h6"/><path d="M6 9v6"/><path d="M18 9v6"/><path d="M9 18h6"/></svg>,
    title: 'Track Production',
    description: 'Follow each case through production stages from entry to delivery. See at a glance which cases are in which stage.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: 'Meet Deadlines',
    description: 'Your dashboard highlights due-today, upcoming, and overdue cases so nothing falls through the cracks.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Manage Clinic Partners',
    description: 'Organize registered and temporary clinics. View each partner\'s cases and keep relationships clear.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    title: 'Surgical Guide Cases',
    description: 'Dedicated workflow for surgical guides covering CBCT receipt, impressions, planning, preparation, printing, and sleeves.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    title: 'Export Records',
    description: 'Export monthly case records to CSV with Nepali date support. Keep offline copies for your files.',
  },
];

export default async function ForLabsPage() {
  const page = await fetchPublicPageBySlug('for-labs');
  const sections = page?.sections || {};

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-primary-soft rounded-full">
                {page?.title || 'For Dental Labs'}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-5">
                {sections.headline || 'Your Daily Lab Workflow, Organized'}
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {sections.body || 'DLabMate gives your dental lab a single workspace to manage case details, follow production stages, track deadlines, and coordinate with partner clinics — replacing scattered records and repeated status calls.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/features" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-text-primary font-bold rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 transition-all">
                  See All Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Lab Benefits"
              title="Built for How Labs Actually Work"
              description="From the morning inbox to end-of-day delivery, DLabMate supports each part of your routine."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {labBenefits.map((b) => (
                <div key={b.title} className="group bg-background rounded-2xl border border-border p-7 hover:border-primary/15 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A day with DLabMate */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Daily Workflow"
              title="A Day with DLabMate"
              description="Here's how DLabMate fits into your lab's daily routine."
            />
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { time: 'Morning', action: 'Check your dashboard for due-today cases and prioritize work', icon: '☀️' },
                { time: 'New Cases', action: 'Enter incoming case details with teeth, materials, and deadlines', icon: '📋' },
                { time: 'Production', action: 'Update case stages as work progresses through your pipeline', icon: '⚙️' },
                { time: 'Clinic Updates', action: 'Clinics check their portal — no need to field status calls', icon: '🏥' },
                { time: 'End of Day', action: 'Review overdue items and plan tomorrow\'s priorities', icon: '📊' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-5 bg-white rounded-xl border border-border p-5 hover:shadow-card transition-shadow">
                  <span className="text-2xl flex-shrink-0">{step.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-primary mb-1">{step.time}</p>
                    <p className="text-sm text-text-muted">{step.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
              Ready to Organize Your Lab?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              See DLabMate in action with a personalized demo tailored to your lab&apos;s workflow.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
            >
              Request a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
