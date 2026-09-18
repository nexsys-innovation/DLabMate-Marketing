import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FeatureCard from '@/components/FeatureCard';
import SectionHeading from '@/components/SectionHeading';
import HomeFAQ from '@/components/HomeFAQ';
import { siteConfig } from '@/lib/site-config';
import { fetchPublicSiteSettings, fetchPublicFaqs } from '@/lib/marketing-api';

/* ── Inline SVG icons for feature cards ─────────────── */
const icons = {
  clipboard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>
    </svg>
  ),
  workflow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="15" rx="1"/><path d="M9 6h6"/><path d="M6 9v6"/><path d="M18 9v6"/><path d="M9 18h6"/>
    </svg>
  ),
  surgical: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  dashboard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
    </svg>
  ),
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  bell: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
  ),
};

const features = [
  {
    icon: icons.clipboard,
    title: 'Case Intake & Details',
    description: 'Record doctor, patient, teeth, material, shade, dates, and notes — everything organized in one place.',
    accent: '#0E7C86',
  },
  {
    icon: icons.workflow,
    title: 'Production Workflow',
    description: 'Follow each case from entry through pouring, scanning, designing, and all the way to delivery.',
    accent: '#0A5F67',
  },
  {
    icon: icons.surgical,
    title: 'Surgical Guide Tracking',
    description: 'A dedicated workflow for CBCT receipt, impressions, planning, guide preparation, printing, and sleeves.',
    accent: '#7FC8B8',
  },
  {
    icon: icons.dashboard,
    title: 'Dashboard Summaries',
    description: 'See which cases are due today, upcoming this week, overdue, or completed at a glance.',
    accent: '#F0B860',
  },
  {
    icon: icons.users,
    title: 'Clinic Visibility',
    description: 'Give partner clinics a clear view of their own case progress and delivery status.',
    accent: '#E8846B',
  },
  {
    icon: icons.bell,
    title: 'Notifications',
    description: 'Stay updated with in-app and browser push notifications on relevant case changes.',
    accent: '#0E7C86',
  },
];

const workflowStages = [
  { label: 'Entered', color: '#0E7C86' },
  { label: 'Poured', color: '#1C8D92' },
  { label: 'Scanned', color: '#309D9E' },
  { label: 'Designed', color: '#46A9A2' },
  { label: 'Milled', color: '#60B6A9' },
  { label: 'Printed', color: '#7FC8B8' },
  { label: 'Finishing', color: '#97D2C3' },
  { label: 'Packed', color: '#B0DED0' },
  { label: 'Delivered', color: '#2b7365' },
];

const stats = [
  { value: 'Organized', label: 'Case Records' },
  { value: 'Real-time', label: 'Status Tracking' },
  { value: '9 Stages', label: 'Workflow Pipeline' },
  { value: 'Seamless', label: 'Clinic Coordination' },
];

export default async function HomePage() {
  const [siteSettings, faqs] = await Promise.all([
    fetchPublicSiteSettings(),
    fetchPublicFaqs(),
  ]);

  return (
    <>
      <Header />
      <main>
        {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-white to-background" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-mint/8 to-transparent rounded-full translate-y-1/4 -translate-x-1/4" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              {siteSettings?.isBannerActive && siteSettings?.bannerNotice && (
                <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-primary/10 via-mint/20 to-primary/10 border border-primary/20 rounded-full shadow-sm text-xs font-bold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                  <span>{siteSettings.bannerNotice}</span>
                </div>
              )}

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary/12 rounded-full shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Dental Lab Management Software
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-text-primary leading-[1.1] tracking-tight mb-6">
                {siteSettings?.heroHeadline || 'Keep Your Dental Lab Cases and Clinic Partners in Sync'}
              </h1>

              <p className="text-lg text-text-muted leading-relaxed max-w-xl mb-8">
                {siteSettings?.heroSubheadline || 'Organize case details, follow production stages, track delivery status, and give partner clinics a clearer view of their cases with DLabMate.'}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(14,124,134,0.35)] hover:shadow-[0_8px_30px_rgba(14,124,134,0.45)] hover:bg-primary-deep transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
                <a
                  href={`${siteConfig.appUrl}/register`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-text-primary font-bold rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 shadow-sm transition-all duration-200"
                >
                  Create an Account
                </a>
              </div>

              {/* Quick service highlights */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">Track Anytime</p>
                    <p className="text-xs text-text-muted">24/7 case visibility</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-mint-soft flex items-center justify-center text-[#2b7365]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">Stay Organized</p>
                    <p className="text-xs text-text-muted">All cases in one place</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Product showcase */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl border border-border shadow-hero p-6 lg:p-8">
                {/* Mock dashboard */}
                <div className="rounded-2xl bg-background overflow-hidden">
                  {/* Mock topbar */}
                  <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-border">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-coral/40" />
                      <span className="w-3 h-3 rounded-full bg-amber/40" />
                      <span className="w-3 h-3 rounded-full bg-mint/40" />
                    </div>
                    <div className="flex-1 h-6 bg-background rounded-lg" />
                  </div>

                  {/* Mock content */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-4 w-32 bg-primary/10 rounded mb-2" />
                        <div className="h-3 w-48 bg-border rounded" />
                      </div>
                      <div className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">
                        + Add Case
                      </div>
                    </div>

                    {/* Stat cards mock */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Due Today', value: '5', color: '#F0B860' },
                        { label: 'In Progress', value: '12', color: '#0E7C86' },
                        { label: 'Completed', value: '48', color: '#7FC8B8' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl p-3 border border-border relative overflow-hidden">
                          <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full" style={{ backgroundColor: stat.color }} />
                          <p className="text-[10px] text-text-muted font-semibold mb-1 pl-2">{stat.label}</p>
                          <p className="text-xl font-extrabold text-text-primary pl-2">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Cases mock */}
                    <div className="bg-white rounded-xl border border-border overflow-hidden">
                      <div className="px-4 py-2.5 bg-surface-alt border-b border-border flex gap-8">
                        {['Case ID', 'Status', 'Due Date'].map((h) => (
                          <span key={h} className="text-[10px] font-bold text-text-muted uppercase tracking-wide">{h}</span>
                        ))}
                      </div>
                      {[
                        { id: 'DL-2451', status: 'Designed', pill: 'bg-primary-soft text-primary' },
                        { id: 'DL-2452', status: 'Delivered', pill: 'bg-mint-soft text-[#2b7365]' },
                        { id: 'DL-2453', status: 'Finishing', pill: 'bg-primary-soft text-primary' },
                      ].map((row) => (
                        <div key={row.id} className="px-4 py-2.5 flex gap-8 border-b border-border/50 last:border-0">
                          <span className="text-xs font-semibold text-text-primary w-16">{row.id}</span>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${row.pill}`}>{row.status}</span>
                          <span className="text-xs text-text-muted">2083/06/02</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl border border-border shadow-card-hover p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mint-soft flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2b7365" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">Case Delivered</p>
                    <p className="text-xs text-text-muted">DL-2452 · Smile Dental</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-white rounded-2xl border border-border shadow-card-hover p-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-soft flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9a6a1a" strokeWidth="2.5" strokeLinecap="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/></svg>
                  </div>
                  <p className="text-xs font-bold text-text-primary">3 cases due today</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ STATS BAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="relative py-6 bg-white border-y border-border">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-text-muted font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ PROBLEM & BENEFIT ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Why DLabMate"
              title="Replace Scattered Records with Organized Case Management"
              description="No more loose papers, repeated WhatsApp status checks, or missed deadlines. DLabMate brings order to your dental lab operations."
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-coral-soft/50 border border-coral/10 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8846B" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">Without DLabMate</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Case details scattered across notebooks and chats',
                    'Clinics calling repeatedly for status updates',
                    'Deadlines missed without clear visibility',
                    'No organized record of completed work',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="bg-mint-soft/50 border border-mint/10 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2b7365" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">With DLabMate</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'All case details organized in one digital workspace',
                    'Clinics check their own case progress anytime',
                    'Due dates and overdue cases are clearly visible',
                    'Complete history of cases with export support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2b7365" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ AUDIENCE CARDS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Built For You"
              title="Whether You Run a Lab or a Clinic"
              description="DLabMate serves both sides of the dental workflow with dedicated portals."
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Labs */}
              <Link
                href="/for-labs"
                className="group relative bg-gradient-to-br from-primary-soft to-white rounded-2xl border border-primary/10 p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">For Dental Labs</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">
                    Manage your daily workflow, organize clinic partners, track deadlines, and keep every case detail in one place.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>

              {/* Clinics */}
              <Link
                href="/for-clinics"
                className="group relative bg-gradient-to-br from-mint-soft to-white rounded-2xl border border-mint/10 p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-mint/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-mint/10 flex items-center justify-center mb-6 text-[#2b7365] group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">For Dental Clinics</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-5">
                    View your case progress, check production and delivery status, and stay connected with your lab partner.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2b7365] group-hover:gap-3 transition-all">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ━━━ FEATURES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Features"
              title="Everything You Need to Run Your Lab"
              description="From case intake to delivery tracking, DLabMate covers every step of your workflow."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <FeatureCard key={i} {...feature} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary-soft transition-all"
              >
                View All Features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ━━━ WORKFLOW STAGES ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Workflow"
              title="Track Every Production Stage"
              description="Follow your cases through each stage of production. Relevant stages vary by case — not every case needs every step."
            />

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                {workflowStages.map((stage, i) => (
                  <div
                    key={stage.label}
                    className="group relative flex items-center"
                  >
                    <div
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm border transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
                      style={{
                        backgroundColor: `${stage.color}12`,
                        borderColor: `${stage.color}25`,
                        color: stage.color,
                      }}
                    >
                      <span
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold text-white"
                        style={{ backgroundColor: stage.color }}
                      >
                        {i + 1}
                      </span>
                      {stage.label}
                    </div>
                    {i < workflowStages.length - 1 && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#E0EAEB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="mx-1 hidden sm:block"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-text-muted mt-8 max-w-lg mx-auto">
                Each case follows the stages relevant to its type. Regular prosthetic cases, surgical guide cases, and other work types each have their own applicable stages.
              </p>
            </div>
          </div>
        </section>

        {/* ━━━ NEPAL-FOCUSED ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="bg-gradient-to-br from-primary-soft via-white to-mint-soft/30 rounded-3xl border border-primary/8 p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary mb-3 px-3 py-1 bg-white rounded-full">
                    Made for Nepal
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-5">
                    Built with Nepal&apos;s Dental Industry in Mind
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-8">
                    DLabMate supports Nepali date (Bikram Sambat) inputs for case dates, monthly CSV exports for your records, and direct support through a local phone number and WhatsApp.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-border rounded-xl text-sm font-semibold text-text-primary hover:border-primary/20 hover:bg-primary-soft/50 transition-all"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      {siteConfig.contact.phone}
                    </a>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-[#1fb855] transition-all shadow-[0_2px_10px_rgba(37,211,102,0.3)]"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🗓️', title: 'Nepali Dates', desc: 'Bikram Sambat date support for case scheduling' },
                    { icon: '📊', title: 'CSV Exports', desc: 'Export monthly case records for your files' },
                    { icon: '📱', title: 'Local Support', desc: 'Reach us via phone or WhatsApp anytime' },
                    { icon: '🔔', title: 'Notifications', desc: 'Browser push alerts for case updates' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white rounded-2xl border border-border p-5 hover:shadow-card transition-shadow">
                      <span className="text-2xl mb-3 block">{item.icon}</span>
                      <h4 className="text-sm font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ HOW TO GET STARTED ━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Getting Started"
              title="Up and Running in Three Steps"
              description="Register your lab or clinic, submit your verification documents, and start managing cases once your account is reviewed."
            />

            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Register',
                  desc: 'Create your lab or clinic account with basic details.',
                  color: '#0E7C86',
                },
                {
                  step: '02',
                  title: 'Verify',
                  desc: 'Submit your verification documents for admin review.',
                  color: '#F0B860',
                },
                {
                  step: '03',
                  title: 'Start Working',
                  desc: 'Access your dedicated portal and begin managing cases.',
                  color: '#7FC8B8',
                },
              ].map((item, i) => (
                <div key={i} className="relative text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl font-extrabold text-white shadow-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  {i < 2 && (
                    <div className="hidden sm:block absolute top-8 -right-4 translate-x-full">
                      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                        <path d="M0 8h28M24 3l5 5-5 5" stroke="#E0EAEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-text-muted mt-10 max-w-lg mx-auto">
              Account access is restricted until verification is completed. This administrative review ensures the integrity of the platform for all partners.
            </p>
          </div>
        </section>

        {/* ━━━ PRICING PREVIEW ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="bg-gradient-to-r from-[#0C2D32] to-[#0A4048] rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-mint/8 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-primary-300 mb-4 px-3 py-1 bg-white/8 rounded-full">
                  Pricing
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                  Flexible Plans for Every Lab Size
                </h2>
                <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
                  Contact us for current pricing and onboarding options. We offer plans tailored to your lab&apos;s case volume, with free access for partner clinics.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-deep shadow-[0_6px_20px_rgba(14,124,134,0.4)] transition-all hover:-translate-y-0.5"
                  >
                    View Pricing
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-bold rounded-xl border border-white/15 hover:bg-white/15 transition-all"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Common questions about DLabMate and how it works."
            />
            <HomeFAQ initialFaqs={faqs} />
            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                View all FAQs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ━━━ FINAL CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-5">
                See How DLabMate Fits Your Lab&apos;s Workflow
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Request a personalized demo and learn how DLabMate can help organize your cases, streamline production tracking, and keep your clinic partners informed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-xl shadow-[0_6px_25px_rgba(14,124,134,0.35)] hover:shadow-[0_10px_35px_rgba(14,124,134,0.45)] hover:bg-primary-deep transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <a
                  href={`${siteConfig.appUrl}/register`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-primary font-bold text-base rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 shadow-sm transition-all"
                >
                  Create an Account
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
