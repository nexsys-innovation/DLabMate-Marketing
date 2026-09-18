import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'DLabMate | Dental Lab Case Management in Nepal',
    template: '%s | DLabMate',
  },
  description:
    'Organize dental lab cases, track production and delivery, and keep partner clinics informed with DLabMate. Request a demo for your lab or clinic.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dlabmate.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DLabMate',
    title: 'DLabMate | Dental Lab Case Management in Nepal',
    description:
      'Organize dental lab cases, track production and delivery, and keep partner clinics informed with DLabMate.',
    images: [{ url: '/brand/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DLabMate | Dental Lab Case Management in Nepal',
    description:
      'Organize dental lab cases, track production and delivery, and keep partner clinics informed with DLabMate.',
  },
  icons: {
    icon: '/brand/dlabmate_logo.png',
    apple: '/brand/dlabmate_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
