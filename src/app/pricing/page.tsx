import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site-config';
import { fetchPublicCatalog } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'Pricing & Plans',
  description: 'Flexible monthly subscription plans and top-up credit packs for dental labs in Nepal.',
};

export default async function PricingPage() {
  const catalog = await fetchPublicCatalog();
  const plans = catalog?.plans || [];
  const creditPack = catalog?.creditPack;

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading
              eyebrow="Pricing & Plans"
              title="Transparent Plans Built for Nepal's Dental Labs"
              description="Choose a monthly subscription plan for steady case volume or buy top-up credits on a flexible pay-as-you-go basis."
            />

            {/* Trial Banner */}
            {catalog?.trial && (
              <div className="max-w-4xl mx-auto mb-12 p-6 bg-gradient-to-r from-primary/10 via-mint/20 to-primary/10 border border-primary/20 rounded-2xl text-center">
                <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-primary bg-white px-3 py-1 rounded-full shadow-sm mb-2">
                  Special Launch Offer
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {catalog.trial.durationMonths}-Month Free Trial Included
                </h3>
                <p className="text-sm text-text-muted">
                  Every verified dental lab gets {catalog.trial.monthlyIncludedCredits} free cases per month for {catalog.trial.durationMonths} full months!
                </p>
              </div>
            )}

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {plans.map((plan, idx) => (
                <div
                  key={plan.code}
                  className={`relative rounded-2xl border bg-white p-8 flex flex-col justify-between transition-all hover:shadow-card-hover ${
                    plan.code === 'growth' ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'border-border'
                  }`}
                >
                  {plan.code === 'growth' && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-extrabold rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{plan.name}</h3>
                    <p className="text-sm text-text-muted mb-6">{plan.description}</p>

                    <div className="mb-6 pb-6 border-b border-border">
                      <span className="text-4xl font-extrabold text-text-primary">
                        NPR {plan.monthlyPriceNpr.toLocaleString()}
                      </span>
                      <span className="text-sm text-text-muted ml-1">/ month</span>
                      <div className="mt-2 text-xs font-bold text-primary">
                        Includes {plan.monthlyIncludedCredits} Cases / Month
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2.5 text-sm text-text-primary/80">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C86" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {plan.monthlyIncludedCredits} Included Cases Monthly
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-text-primary/80">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C86" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Full 9-Stage Workflow Pipeline
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-text-primary/80">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C86" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Surgical Guide Tracking Suite
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-text-primary/80">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C86" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Free Access for Partner Clinics
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`${siteConfig.appUrl}/register`}
                    className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                      plan.code === 'growth'
                        ? 'bg-primary text-white hover:bg-primary-deep shadow-primary/30'
                        : 'bg-primary-soft text-primary hover:bg-primary/10'
                    }`}
                  >
                    Select {plan.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Top-Up Credit Pack Section */}
            {(catalog?.creditPacks?.length || creditPack) && (
              <div className="space-y-6 max-w-4xl mx-auto">
                {(catalog?.creditPacks || (creditPack ? [creditPack] : [])).map((pack, i) => (
                  <div key={pack._id || pack.code || `${pack.name || 'pack'}-${i}`} className="rounded-2xl border border-primary/20 bg-gradient-to-r from-mint/10 to-primary/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                      <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider bg-white px-3 py-1 rounded-full mb-2 border border-primary/10">
                        Pay-As-You-Go Option
                      </span>
                      <h3 className="text-2xl font-extrabold text-text-primary mb-2">
                        {pack.name}
                      </h3>
                      <p className="text-sm text-text-muted max-w-xl">
                        Need additional credits without a monthly plan? Buy top-up packs anytime. Credits never expire and carry over indefinitely.
                      </p>
                    </div>

                    <div className="text-center md:text-right flex-shrink-0">
                      <div className="text-3xl font-extrabold text-text-primary">
                        NPR {pack.priceNpr.toLocaleString()}
                      </div>
                      <div className="text-xs font-bold text-primary mb-3">
                        {pack.creditsPerPack} Top-Up Credits
                      </div>
                      <a
                        href={`${siteConfig.appUrl}/register`}
                        className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-deep transition-all shadow-md"
                      >
                        Buy Credits
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
