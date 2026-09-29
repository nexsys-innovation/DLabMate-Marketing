import { siteConfig } from './site-config';

export interface PublicSiteSettings {
  supportEmail: string;
  infoEmail: string;
  phone: string;
  whatsappNumber: string;
  whatsappText: string;
  heroHeadline: string;
  heroSubheadline: string;
  bannerNotice: string;
  isBannerActive: boolean;
}

export interface PublicFaq {
  _id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';

export async function fetchPublicSiteSettings(): Promise<PublicSiteSettings> {
  try {
    const res = await fetch(`${API_BASE}/api/marketing/site`, {
      next: { revalidate: 60 },
    });
    const json = await res.json();
    if (res.ok && json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn('Could not fetch remote site settings, using defaults:', err);
  }

  return {
    supportEmail: siteConfig.contact.supportEmail,
    infoEmail: siteConfig.contact.generalEmail,
    phone: siteConfig.contact.phone,
    whatsappNumber: '9779843631160',
    whatsappText: 'Hello DLabMate, I would like to learn more about the platform.',
    heroHeadline: 'Keep your dental lab cases and clinic partners in sync.',
    heroSubheadline:
      'Organize case details, follow production stages, track delivery status, and give partner clinics a clearer view of their cases with DLabMate.',
    bannerNotice: '',
    isBannerActive: false,
  };
}

export async function fetchPublicFaqs(category?: string): Promise<PublicFaq[]> {
  try {
    const url = new URL(`${API_BASE}/api/marketing/faqs`);
    if (category) url.searchParams.set('category', category);

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });
    const json = await res.json();
    if (res.ok && json.success && Array.isArray(json.data)) {
      return json.data;
    }
  } catch (err) {
    console.warn('Could not fetch remote FAQs:', err);
  }
  return [];
}

export interface PublicPlan {
  planId: string;
  versionId: string;
  code: string;
  version?: number;
  name: string;
  description: string;
  monthlyPricePaisa: number;
  monthlyPriceNpr: number;
  monthlyIncludedCredits: number;
  billingIntervalMonths: number;
  displayOrder: number;
}

export interface PublicCreditPack {
  _id?: string;
  code?: string;
  version: number;
  name: string;
  creditsPerPack: number;
  pricePaisa: number;
  priceNpr: number;
  currency: string;
}

export interface PublicCatalog {
  onboarding: { includedCredits: number } | null;
  trial: { durationMonths: number; monthlyIncludedCredits: number } | null;
  creditPack: PublicCreditPack | null;
  creditPacks?: PublicCreditPack[];
  plans: PublicPlan[];
}

const DEFAULT_FALLBACK_CATALOG: PublicCatalog = {
  onboarding: { includedCredits: 10 },
  trial: { durationMonths: 3, monthlyIncludedCredits: 300 },
  creditPack: {
    version: 1,
    name: 'Shared Top-Up Pack',
    creditsPerPack: 100,
    pricePaisa: 100000,
    priceNpr: 1000,
    currency: 'NPR',
  },
  creditPacks: [
    {
      version: 1,
      name: 'Shared Top-Up Pack',
      creditsPerPack: 100,
      pricePaisa: 100000,
      priceNpr: 1000,
      currency: 'NPR',
    },
  ],
  plans: [
    {
      planId: 'starter',
      versionId: 'starter_v1',
      code: 'starter',
      version: 1,
      name: 'Starter',
      description: 'Ideal for small dental labs getting started',
      monthlyPricePaisa: 99900,
      monthlyPriceNpr: 999,
      monthlyIncludedCredits: 150,
      billingIntervalMonths: 1,
      displayOrder: 1,
    },
    {
      planId: 'growth',
      versionId: 'growth_v1',
      code: 'growth',
      version: 1,
      name: 'Growth',
      description: 'Designed for growing labs with consistent volume',
      monthlyPricePaisa: 189900,
      monthlyPriceNpr: 1899,
      monthlyIncludedCredits: 300,
      billingIntervalMonths: 1,
      displayOrder: 2,
    },
    {
      planId: 'pro',
      versionId: 'pro_v1',
      code: 'pro',
      version: 1,
      name: 'Pro',
      description: 'High volume laboratory capacity',
      monthlyPricePaisa: 359900,
      monthlyPriceNpr: 3599,
      monthlyIncludedCredits: 600,
      billingIntervalMonths: 1,
      displayOrder: 3,
    },
  ],
};

export async function fetchPublicCatalog(): Promise<PublicCatalog> {
  const endpoints = [
    `${API_BASE}/api/billing/catalog`,
    `${API_BASE}/api/billing/public/catalog`,
  ];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, { next: { revalidate: 60 } });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.catalog && Array.isArray(json.catalog.plans) && json.catalog.plans.length > 0) {
          return json.catalog;
        }
      }
    } catch (err) {
      console.warn(`Failed to fetch catalog from ${url}:`, err);
    }
  }

  return DEFAULT_FALLBACK_CATALOG;
}

export interface PublicPage {
  _id: string;
  slug: string;
  title: string;
  metaDescription: string;
  contentMarkdown?: string;
  sections: Record<string, string>;
}

export async function fetchPublicPageBySlug(slug: string): Promise<PublicPage | null> {
  try {
    const res = await fetch(`${API_BASE}/api/marketing/pages/${slug}`, {
      next: { revalidate: 60 },
    });
    const json = await res.json();
    if (res.ok && json.success && json.data) {
      return json.data;
    }
  } catch (err) {
    console.warn(`Could not fetch marketing page ${slug}:`, err);
  }
  return null;
}
