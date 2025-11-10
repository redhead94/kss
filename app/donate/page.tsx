import { Container, Card } from "../../components/Ui";
import DonateForm from "../../components/DonateForm";

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-streaks overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-full blur-3xl" />
        
        <Container className="relative mx-auto max-w-4xl py-16 md:py-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-deep">
            Support Our Community
          </h1>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="relative -mt-8 mb-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="card-surface p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-brand-deep mb-6">
                Make Your Donation
              </h2>
              <DonateForm />
            </Card>
          </div>

          {/* Impact Sidebar */}
          <aside className="space-y-6">
            {/* Impact Card */}

            {/* Tax Deductible Info */}
            <Card className="card-surface p-6 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 border-brand-blue/10">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue flex-shrink-0 mt-0.5">
                  <span className="text-lg">📋</span>
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-brand-deep mb-2">
                    Tax Deductible
                  </h3>
                  <p className="text-xs text-brand-ink/70 leading-relaxed">
                    Kehillas Shaar Simcha is a 501(c)(3) organization. Your donation is tax-deductible to the fullest extent allowed by law.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="card-surface p-6">
              <h3 className="font-display text-sm font-semibold text-brand-deep mb-3">
                Questions?
              </h3>
              <p className="text-xs text-brand-ink/70 mb-3">
                For large donations or questions about giving, please contact us.
              </p>
              <a 
                href="mailto:donations@shaarsimcha.org" 
                className="text-sm font-medium text-brand-blue hover:text-brand-deep transition-colors"
              >
                donations@shaarsimcha.org
              </a>
            </Card>
          </aside>
        </div>
      </Container>
    </>
  );
}