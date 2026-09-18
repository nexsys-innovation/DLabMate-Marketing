import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-3xl bg-primary-soft flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-extrabold text-primary">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
            Page Not Found
          </h1>
          <p className="text-text-muted mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-deep transition-all shadow-[0_4px_15px_rgba(14,124,134,0.3)]"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-text-primary font-bold rounded-xl border border-border hover:border-primary/20 hover:bg-primary-soft/50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
