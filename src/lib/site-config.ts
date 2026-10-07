// Central configuration for all contact info, URLs, and brand details
export const siteConfig = {
  name: 'DLabMate',
  tagline: 'Dental Lab Case Management in Nepal',
  description:
    'Organize dental lab cases, track production and delivery, and keep partner clinics informed with DLabMate. Request a demo for your lab or clinic.',

  // URLs
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dlabmate.com',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.dlabmate.com',
  apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.dlabmate.com',

  // Contact
  contact: {
    supportEmail: 'support@dlabmate.com',
    generalEmail: 'info@dlabmate.com',
    phone: '+977 9709074008',
    phoneLink: 'tel:+9779709074008',
    whatsappLink: 'https://wa.me/9779709074008',
    whatsappDemoLink:
      'https://wa.me/9779709074008?text=Hello%20DLabMate%2C%20I%20would%20like%20a%20demo.',
  },

  // Navigation links
  navLinks: [
    { label: 'Product', href: '/features' },
    { label: 'For Labs', href: '/for-labs' },
    { label: 'For Clinics', href: '/for-clinics' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],

  // Footer link groups
  footerLinks: {
    product: [
      { label: 'Features', href: '/features' },
      { label: 'For Labs', href: '/for-labs' },
      { label: 'For Clinics', href: '/for-clinics' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },

  // SEO defaults
  seo: {
    title: 'DLabMate | Dental Lab Case Management in Nepal',
    description:
      'Organize dental lab cases, track production and delivery, and keep partner clinics informed with DLabMate. Request a demo for your lab or clinic.',
    ogImage: '/brand/og-image.png',
  },
} as const;
