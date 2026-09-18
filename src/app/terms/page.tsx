import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { fetchPublicPageBySlug } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'DLabMate terms of service — the terms and conditions for using our dental lab case management platform.',
};

const DEFAULT_TERMS_MARKDOWN = `# Terms of Service

Welcome to DLabMate. By registering an account or accessing our service, you agree to be bound by these Terms of Service.

<span style="font-size: 14px; color: #64748B;">Last updated: September 2026</span>

---

## 1. Acceptance of Terms

By creating an account or using the DLabMate platform, you represent that you have read, understood, and agreed to these terms. If you do not agree, you must refrain from using the platform.

---

## 2. Service Scope & Intended Use

DLabMate provides dental laboratory case tracking, technician workflow management, and lab–clinic coordination. 
- It is **not** a clinical diagnostic tool or medical records archive.
- Labs and clinics are responsible for ensuring the accuracy of submitted patient and case details.

---

## 3. Account Registration & Verification

- Users must provide accurate, complete information during registration.
- **Verification**: Lab and clinic accounts require administrative document review (PAN/VAT or license) before full features and free trial credit allocations are unlocked.
- Unverified lab accounts are limited to **10 onboarding trial cases**.

---

## 4. Subscriptions, Credits & Billing

- **Free Trial**: Eligible labs receive 3 months of trial access (300 credits/month).
- **Plan Subscriptions & Top-Up Packs**: Usage beyond trial credits requires purchasing an active monthly/yearly subscription plan or top-up credit packs.
- **Proration & Upgrades**: Immediate plan upgrades receive credit proration discounts based on remaining unused credits. Downgrades take effect upon subscription expiration.

---

## 5. Contact Information

Questions regarding these terms should be directed to [support@dlabmate.com](mailto:support@dlabmate.com).`;

export default async function TermsPage() {
  const page = await fetchPublicPageBySlug('terms');
  const markdownContent = page?.contentMarkdown || DEFAULT_TERMS_MARKDOWN;

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <MarkdownRenderer content={markdownContent} />
        </div>
      </main>
      <Footer />
    </>
  );
}
