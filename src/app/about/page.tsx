import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { fetchPublicPageBySlug } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'DLabMate is dental lab case management software built for Nepal\'s dental industry. Learn about our mission and the people we serve.',
};

export default async function AboutPage() {
  const page = await fetchPublicPageBySlug('about');
  const sections = page?.sections || {};

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Hero */}
          <div className="mb-16">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-primary-soft rounded-full">
              {page?.title || 'About DLabMate'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-5">
              {sections.headline || 'Organizing Dental Lab Work for Nepal'}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              {sections.body || 'DLabMate is dental lab case management and lab–clinic coordination software. We help dental labs organize their case records, track production stages, meet deadlines, and give partner clinics clear visibility into their case progress.'}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-primary-soft/40 rounded-2xl border border-primary/8 p-8 sm:p-10 mb-12">
            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Our Mission</h2>
            <p className="text-text-muted leading-relaxed text-lg">
              {sections.mission || 'To help dental labs in Nepal move from scattered case records and repeated status calls to organized workflows and coordinated partnerships — enabling them to focus on producing quality dental work.'}
            </p>
          </div>

          {/* Who we serve */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-text-primary mb-6">Who We Serve</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-border p-7">
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Dental Labs</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Lab owners and operations teams who manage daily case intake, production workflows, clinic relationships, and delivery scheduling. DLabMate is their primary workspace for organizing everything.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-7">
                <div className="w-12 h-12 rounded-xl bg-mint-soft flex items-center justify-center text-[#2b7365] mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Dental Clinics</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Dentists and clinic teams who coordinate cases with lab partners. DLabMate gives them a portal to check case progress and delivery status without needing to call.
                </p>
              </div>
            </div>
          </div>

          {/* What we are and aren't */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-text-primary mb-6">What DLabMate Is</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-mint-soft/30 rounded-xl border border-mint/10 p-6">
                <h4 className="text-sm font-bold text-[#2b7365] mb-3 uppercase tracking-wider">DLabMate is</h4>
                <ul className="space-y-2">
                  {[
                    'Dental lab case management software',
                    'Lab–clinic coordination platform',
                    'Production workflow tracker',
                    'Case records organizer',
                    'Deadline visibility tool',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2b7365" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-coral-soft/30 rounded-xl border border-coral/10 p-6">
                <h4 className="text-sm font-bold text-[#b65a43] mb-3 uppercase tracking-wider">DLabMate is not</h4>
                <ul className="space-y-2">
                  {[
                    'A hospital management system',
                    'An electronic medical record',
                    'A dental appointment system',
                    'An AI diagnosis tool',
                    'A CAD design platform',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b65a43" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-2xl border border-border p-8 sm:p-12">
            <h2 className="text-2xl font-extrabold text-text-primary mb-4">
              Want to Learn More?
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Request a demo to see how DLabMate fits your dental lab or clinic workflow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
              >
                Request a Demo
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-text-primary font-bold rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
