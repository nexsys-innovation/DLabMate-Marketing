import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { fetchPublicPageBySlug } from '@/lib/marketing-api';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DLabMate privacy policy — how we collect, use, and protect your information.',
};

const DEFAULT_PRIVACY_MARKDOWN = `# Privacy Policy

DLabMate respects your privacy and is committed to protecting your personal and operational data. We collect account details, lab registration documents, and case records solely for platform operation, billing verification, and service delivery.

<span style="font-size: 14px; color: #64748B;">Last updated: September 2026</span>

---

## 1. Information We Collect

When you use DLabMate or submit a form on our website, we may collect:

- **Account Registration Details**: Name, email address, phone number, organization name, and role (lab or clinic).
- **Verification Documents**: PAN/VAT certificates or business licenses submitted during account review.
- **Case Data**: Doctor names, patient identifiers, case notes, shade, tooth numbers, dates, and production stages.
- **Enquiry Submissions**: Contact details and messages submitted through demo or support forms.

---

## 2. How We Use Your Information

- To operate and maintain the **DLabMate platform**.
- To review and verify lab and clinic registration documents.
- To send automated browser push notifications regarding case stage updates.
- To maintain audit trails for billing, subscription usage, and credit consumption.

---

## 3. Data Protection & Security

We implement industry-standard administrative, technical, and physical security measures to safeguard your information. Sensitive verification documents are stored securely with restricted access controls.

---

## 4. Contact Us

For privacy inquiries or data requests, please contact our privacy compliance team at:
- **Email**: [support@dlabmate.com](mailto:support@dlabmate.com)
- **Phone**: +977 9843631160`;

export default async function PrivacyPage() {
  const page = await fetchPublicPageBySlug('privacy');
  const markdownContent = page?.contentMarkdown || DEFAULT_PRIVACY_MARKDOWN;

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
