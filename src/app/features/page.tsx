import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';
import { fetchPublicPageBySlug } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore DLabMate features: case intake, production workflow tracking, surgical guide management, dashboards, clinic visibility, Nepali dates, CSV exports, and notifications.',
};

const allFeatures = [
  {
    category: 'Case Management',
    items: [
      {
        title: 'Case Intake',
        description: 'Record doctor, patient, teeth selection, material, shade, dates, and notes in a structured form. Keep every detail organized from the start.',
        accent: '#0E7C86',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>,
      },
      {
        title: 'Case Editing',
        description: 'Update case details, modify materials, adjust due dates, or add notes as the case progresses through your lab.',
        accent: '#0A5F67',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>,
      },
      {
        title: 'Case Types',
        description: 'Manage regular prosthetic cases and surgical guide cases with dedicated workflows tailored to each type.',
        accent: '#7FC8B8',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>,
      },
    ],
  },
  {
    category: 'Production Tracking',
    items: [
      {
        title: 'Workflow Stages',
        description: 'Follow cases through Entered, Poured, Scanned, Designed, Milled, Printed, Finishing, Packed, and Delivered stages.',
        accent: '#0E7C86',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="15" rx="1"/><path d="M9 6h6"/><path d="M6 9v6"/><path d="M18 9v6"/><path d="M9 18h6"/></svg>,
      },
      {
        title: 'Delivery Tracking',
        description: 'Track production and delivery status separately. Know which cases are ready and which have been handed over.',
        accent: '#F0B860',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
      },
      {
        title: 'Surgical Guide Workflow',
        description: 'A dedicated pipeline for CBCT receipt, impressions, surgical planning, guide preparation, printing, and sleeve stages.',
        accent: '#E8846B',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
      },
    ],
  },
  {
    category: 'Dashboards & Visibility',
    items: [
      {
        title: 'Lab Dashboard',
        description: 'See due-today, upcoming, overdue, and completed case summaries. Get an at-a-glance view of your workload.',
        accent: '#0E7C86',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>,
      },
      {
        title: 'Clinic Portal',
        description: 'Partner clinics log in to see their own case progress and delivery status — no more phone calls for updates.',
        accent: '#7FC8B8',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 1 0 7.75"/></svg>,
      },
      {
        title: 'Notifications',
        description: 'In-app and browser push notifications keep you informed about relevant case updates as they happen.',
        accent: '#F0B860',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
      },
    ],
  },
  {
    category: 'Data & Organization',
    items: [
      {
        title: 'Clinic Management',
        description: 'Organize registered and temporary clinic partners. View each clinic\'s cases and manage their relationship with your lab.',
        accent: '#0A5F67',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      },
      {
        title: 'Nepali Date Support',
        description: 'Use Bikram Sambat dates for case scheduling and due dates, matching your local workflow preferences.',
        accent: '#E8846B',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      },
      {
        title: 'CSV Exports',
        description: 'Export your monthly case records to CSV files. Keep offline copies and integrate with your existing record-keeping.',
        accent: '#0E7C86',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
      },
    ],
  },
];

export default async function FeaturesPage() {
  const page = await fetchPublicPageBySlug('features');
  const sections = page?.sections || {};

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow={page?.title || 'Features'}
              title={sections.headline || 'Everything Your Dental Lab Needs'}
              description={sections.body || 'DLabMate covers case intake, production tracking, surgical guide workflows, clinic coordination, and more — all in one platform.'}
            />
          </div>
        </section>

        {/* Feature categories */}
        {allFeatures.map((category) => (
          <section key={category.category} className="py-12 sm:py-16 even:bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <h3 className="text-2xl font-extrabold text-text-primary mb-8">{category.category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
              Ready to See These Features in Action?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              Request a personalized demo and explore how DLabMate fits your lab&apos;s workflow.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
            >
              Request a Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
