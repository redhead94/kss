import { Container, Card } from "@/components/Ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Kehillas Shaar Simcha",
  description: "Learn about our community, mission, and services",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-streaks overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-full blur-3xl" />
        
        <Container className="relative mx-auto max-w-4xl py-12 md:py-16 lg:py-20 px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-deep">
            About Our Community
          </h1>
          <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-brand-ink/70 max-w-2xl mx-auto px-4">
            Welcome to Kehillas Shaar Simcha, a vibrant Torah community dedicated to growth, connection, and service.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="relative -mt-4 md:-mt-8 mb-12 md:mb-16 max-w-4xl px-4">
        <div className="space-y-6 md:space-y-8">
          {/* Mission Statement */}
          <Card className="card-surface p-6 md:p-8">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-brand-deep mb-4 md:mb-6">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-brand-ink/80 leading-relaxed mb-4">
              Kehillas Shaar Simcha is committed to creating a...
            </p>
          </Card>


          {/* Contact Card */}
          <Card className="card-surface p-6 md:p-8 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 border-brand-blue/10">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-brand-deep mb-3 md:mb-4">
              Get Involved
            </h2>
            <p className="text-sm md:text-base text-brand-ink/70 mb-4 md:mb-6">
              We'd love to hear from you! Whether you're interested in joining our community, have questions about our programs, or want to get involved, please reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="mailto:info@shaarsimcha.org"
                className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-deep text-white font-medium text-sm md:text-base shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-white border-2 border-brand-blue text-brand-blue font-medium text-sm md:text-base hover:bg-brand-blue/5 transition-all duration-200"
              >
                Support Our Shul
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}