'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(14,124,134,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="DLabMate Home">
          <div className="flex items-center justify-center transition-shadow duration-300">
            <Image
              src="/brand/dlabmate_logo.png"
              alt="DLabMate"
              width={200}
              height={200}
              className="object-cover object-center h-10 w-40 sm:h-12 sm:w-48"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-text-primary/80 hover:text-primary rounded-lg hover:bg-primary-soft transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.appUrl}
            className="px-4 py-2.5 text-sm font-semibold text-text-primary/80 hover:text-primary transition-colors"
          >
            Log In
          </a>
          <Link
            href="/demo"
            className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-deep shadow-[0_4px_15px_rgba(14,124,134,0.3)] hover:shadow-[0_6px_20px_rgba(14,124,134,0.4)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-5 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-text-primary/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-white z-50 lg:hidden shadow-[-10px_0_40px_rgba(14,124,134,0.1)] animate-slide-in-right">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/brand/dlabmate_logo.png"
                    alt="DLabMate"
                    width={160}
                    height={160}
                    className="object-cover object-center h-10 w-40"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-lg bg-surface-alt flex items-center justify-center text-text-muted hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1" aria-label="Mobile navigation">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-semibold text-text-primary/80 hover:text-primary rounded-xl hover:bg-primary-soft transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <a
                  href={siteConfig.appUrl}
                  className="w-full py-3 text-center text-sm font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary-soft transition-all"
                >
                  Log In
                </a>
                <Link
                  href="/demo"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-center text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary-deep shadow-[0_4px_15px_rgba(14,124,134,0.3)] transition-all"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
