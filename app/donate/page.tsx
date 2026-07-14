import DonateForm from "../../components/DonateForm";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-brand-mist">
      {/* Header (calm + compact) */}
      <div className="border-b border-brand-ink/10">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">
          <div className="flex items-center justify-center gap-3 text-brand-ink/40 text-[11px] md:text-xs uppercase tracking-wide">
            <span className="h-px w-6 bg-brand-ink/20" />
            Giving
            <span className="h-px w-6 bg-brand-ink/20" />
          </div>

          <h1 className="mt-2 text-lg md:text-xl font-light text-center text-brand-ink">
            Support Our Community
          </h1>

          <p className="mt-2 text-center text-brand-ink/60 text-sm max-w-xl mx-auto">
            Thank you for your donation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <section className="lg:col-span-2">
            <h2 className="sr-only">Online Donation</h2>
            <DonateForm />
          </section>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Zelle */}
            <section>
              <h3 className="text-sm font-medium uppercase tracking-wide text-brand-ink/50">
                Donate via Zelle
              </h3>
              <div className="mt-3 space-y-3 text-sm">
                <div className="py-4 border-y border-brand-ink/10">
                  <div className="text-brand-ink/40 text-xs uppercase tracking-wide mb-1">
                    Email
                  </div>
                  <div className="font-mono text-brand-ink">
                    donations@shaarsimcha.org
                  </div>
                </div>
                <div className="py-4 border-b border-brand-ink/10">
                  <div className="text-brand-ink/40 text-xs uppercase tracking-wide mb-1">
                    Phone
                  </div>
                  <div className="font-mono text-brand-ink">
                    (555) 123-4567
                  </div>
                </div>
                <p className="text-xs text-brand-ink/50 pt-2">
                  Send directly through your banking app.
                </p>
              </div>
            </section>

            {/* Check */}
            <section>
              <h3 className="text-sm font-medium uppercase tracking-wide text-brand-ink/50">
                Mail a Check
              </h3>
              <div className="mt-3 text-sm space-y-1 text-brand-ink/80">
                <p>Kehillas Shaar Simcha</p>
                <p>123 Main Street</p>
                <p>Silver Spring, MD 20910</p>
              </div>
            </section>

            {/* Tax Info */}
            <section className="pt-6 border-t border-brand-ink/10">
              <h3 className="text-xs font-medium uppercase tracking-wide text-brand-ink/50">
                Tax Deductible
              </h3>
              <p className="mt-2 text-xs text-brand-ink/60 leading-relaxed">
                Kehillas Shaar Simcha is a 501(c)(3) organization.
              </p>
              <p className="text-xs text-brand-ink/40 mt-3 font-mono">
                EIN: XX-XXXXXXX
              </p>
            </section>

            {/* Contact */}
            <section className="pt-6 border-t border-brand-ink/10">
              <h3 className="text-xs font-medium uppercase tracking-wide text-brand-ink/50">
                Questions?
              </h3>
              <a
                href="mailto:donations@shaarsimcha.org"
                className="mt-2 block text-sm text-brand-ink hover:underline break-all"
              >
                donations@shaarsimcha.org
              </a>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
