import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { fetchPublicSiteSettings } from '@/lib/marketing-api';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const siteSettings = await fetchPublicSiteSettings();


  return (
    <footer className="bg-[#0C2D32] text-white/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-5">
              <div className="flex items-center justify-center">
                <Image
                  src="/brand/dlabmate_logo.png"
                  alt="DLabMate"
                  width={200}
                  height={200}
                  className="object-cover object-center h-10 w-40 sm:h-12 sm:w-48 brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Dental lab case management and lab–clinic coordination software built for Nepal&apos;s dental industry.
            </p>
            {/* Contact details */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${siteSettings?.infoEmail || siteConfig.contact.generalEmail}`}
                className="text-sm text-white/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                {siteSettings?.infoEmail || siteConfig.contact.generalEmail}
              </a>
              <a
                href={`tel:${(siteSettings?.phone || siteConfig.contact.phone).replace(/\s+/g, '')}`}
                className="text-sm text-white/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {siteSettings?.phone || siteConfig.contact.phone}
              </a>
              <a
                href={`https://wa.me/${(siteSettings?.whatsappNumber || '9779709074008').replace(/\s+/g, '')}`}
                className="text-sm text-white/60 hover:text-primary-300 transition-colors inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-[0.15em] mb-5">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-[0.15em] mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-[0.15em] mb-5">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white/40 uppercase tracking-[0.15em] mb-5">
              Get Started
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-deep transition-all shadow-[0_4px_15px_rgba(14,124,134,0.4)]"
              >
                Request a Demo
              </Link>
              <a
                href={`${siteConfig.appUrl}/register`}
                className="inline-flex items-center justify-center px-5 py-3 border border-white/15 text-white/70 text-sm font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {currentYear} DLabMate. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Dental lab case management for Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
