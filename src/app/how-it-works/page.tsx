import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Learn how to get started with DLabMate: register, submit verification documents, get approved, and start managing your dental lab cases.',
};

const steps = [
  {
    number: '01',
    title: 'Register Your Account',
    description: 'Choose whether you are a dental lab or a clinic. Fill in your details — lab name, contact information, and business type. Registration is quick and straightforward.',
    details: [
      'Lab owners register their dental lab',
      'Clinics register as partner practices',
      'Basic details: name, email, phone, address',
    ],
    color: '#0E7C86',
    bgColor: '#EAF5F5',
  },
  {
    number: '02',
    title: 'Submit Verification Documents',
    description: 'Upload your verification documents for administrative review. This step ensures the integrity of the platform for all users.',
    details: [
      'Upload required business documents',
      'Check your submission status anytime',
      'Resubmit if additional information is needed',
    ],
    color: '#F0B860',
    bgColor: '#FDF3E2',
  },
  {
    number: '03',
    title: 'Admin Review & Approval',
    description: 'Our team reviews your submitted documents. Once approved, your account is activated and you gain full access to the platform.',
    details: [
      'Administrative verification review',
      'Account activation upon approval',
      'Notification of review outcome',
    ],
    color: '#E8846B',
    bgColor: '#FCEBE6',
  },
  {
    number: '04',
    title: 'Start Using Your Portal',
    description: 'Access your dedicated lab or clinic portal. Labs can manage cases and track production. Clinics can view their case progress and delivery status.',
    details: [
      'Labs: case management, production tracking, clinic coordination',
      'Clinics: case visibility, status tracking, delivery updates',
      'Both: notifications, settings, and support access',
    ],
    color: '#7FC8B8',
    bgColor: '#EAF7F3',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="How It Works"
              title="From Registration to Case Management"
              description="Getting started with DLabMate is a straightforward process. Here's what to expect."
            />
          </div>
        </section>

        {/* Steps */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 sm:gap-8">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-extrabold text-white flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 mt-3 bg-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-10">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed mb-4">{step.description}</p>
                    <div className="rounded-xl border border-border p-5" style={{ backgroundColor: step.bgColor }}>
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-primary/80">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note about verification */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="bg-amber-soft/50 border border-amber/15 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a6a1a" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-primary mb-2">About Account Verification</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Verification is an administrative account review to ensure the integrity of the platform. It is not a clinical accreditation or certification. Account access is restricted until the verification review is completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              Register your lab or clinic today and take the first step toward organized case management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:bg-primary-deep transition-all hover:-translate-y-0.5"
              >
                Request a Demo
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-text-primary font-bold rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
