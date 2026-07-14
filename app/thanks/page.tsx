import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you | Kehillah Shaar Simcha",
  description: "Thank you for your generous donation.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-brand-ink/10">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">
          <div className="flex items-center justify-center gap-3 text-brand-ink/40 text-[11px] md:text-xs uppercase tracking-wide">
            <span className="h-px w-6 bg-brand-ink/20" />
            Giving
            <span className="h-px w-6 bg-brand-ink/20" />
          </div>

          <h1 className="mt-2 text-lg md:text-xl font-light text-center text-brand-ink">
            Thank You for Your Donation
          </h1>

          <p className="mt-2 text-center text-brand-ink/60 text-sm max-w-xl mx-auto">
            Your generosity sustains our community and makes all of our programs
            possible. We are deeply grateful for your support.
          </p>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
        <div className="text-5xl mb-6">🙏</div>
        <p className="text-brand-ink/80 mb-8 max-w-lg mx-auto">
          If you have any questions about your donation, please reach out to us
          at&nbsp;
          <a
            href="mailto:donations@shaarsimcha.org"
            className="text-brand-blue hover:underline"
          >
            donations@shaarsimcha.org
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 bg-gradient-to-r from-brand-blue to-brand-deep text-white text-sm font-medium shadow-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-xl border border-brand-ink/20 px-6 py-2.5 text-sm text-brand-ink hover:bg-brand-mist transition-colors"
          >
            Donate Again
          </Link>
        </div>
      </main>
    </div>
  );
}