import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site-config';
import { fetchPublicPageBySlug } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'For Dental Clinics',
  description:
    'Partner clinics get free access to view their case progress, production status, and delivery tracking through DLabMate.',
};

const clinicBenefits = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    title: 'View Your Cases',
    description: 'Access a dedicated portal to see all cases submitted by your clinic, with current status and details.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    title: 'Track Production Status',
    description: 'Know exactly which stage your case is in — from entry through production to delivery — without calling the lab.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    title: 'Delivery Updates',
    description: 'Check whether your cases have been packed and delivered, with clear delivery status indicators.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
    title: 'Notifications',
    description: 'Receive updates when case statuses change, keeping you informed without manual follow-ups.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Verified Access',
    description: 'Your account is verified through an admin review process, ensuring secure access to your case data.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: 'Free Access',
    description: 'Partner clinics view their own cases at no cost. Pricing is handled by the lab, not the clinic.',
  },
];

export default async function ForClinicsPage() {
  const page = await fetchPublicPageBySlug('for-clinics');
  const sections = page?.sections || {};

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-[#2b7365] mb-3 px-3 py-1 bg-mint-soft rounded-full">
                {page?.title || 'For Dental Clinics'}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary leading-tight mb-5">
                {sections.headline || 'Stay Connected With Your Lab Partner'}
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {sections.body || 'DLabMate gives partner clinics a clear view of their case progress. Check production stages, delivery status, and stay informed — all through your own portal.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`${siteConfig.appUrl}/register`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
                >
                  Create an Account
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-text-primary font-bold rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 transition-all">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Clinic Benefits"
              title="Your Cases, Your Visibility"
              description="Everything a clinic needs to stay informed about their lab work."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicBenefits.map((b) => (
                <div key={b.title} className="group bg-background rounded-2xl border border-border p-7 hover:border-mint/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-mint-soft flex items-center justify-center text-[#2b7365] mb-5 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for clinics */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="How It Works"
              title="Getting Started as a Clinic"
            />
            <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Register', desc: 'Create your clinic account and provide basic details.', color: '#0E7C86' },
                { step: '2', title: 'Get Verified', desc: 'Submit documents and wait for admin approval.', color: '#F0B860' },
                { step: '3', title: 'View Cases', desc: 'Log in to see your cases and production updates.', color: '#7FC8B8' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-extrabold text-white" style={{ backgroundColor: s.color }}>
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
              Connect With Your Lab on DLabMate
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              Register your clinic and ask your lab partner to add you on DLabMate.
            </p>
            <a
              href={`${siteConfig.appUrl}/register`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
            >
              Create Your Account
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
