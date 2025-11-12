import { Container } from "@/components/Ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Kehillas Shaar Simcha",
  description: "Learn about our community, mission, and services",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header (calm + compact) */}
      <div className="border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">
          <div className="flex items-center justify-center gap-3 text-stone-400 text-[11px] md:text-xs uppercase tracking-wide">
            <span className="h-px w-6 bg-stone-200" />
            About
            <span className="h-px w-6 bg-stone-200" />
          </div>
          <h1 className="mt-2 text-lg md:text-xl font-light text-center text-stone-800">
            About Our Community
          </h1>
          <p className="mt-2 text-center text-stone-600 text-sm max-w-xl mx-auto">
            Welcome to Kehillas Shaar Simcha - a vibrant Torah community
            dedicated to growth, connection, and service.
          </p>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-10">
          {/* Mission */}
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
              Our Mission
            </h2>
            <div className="mt-3 pt-4 border-t border-stone-200">
              <p className="text-stone-700 leading-relaxed">
                Kehillas Shaar Simcha is committed to creating a welcoming makom Torah,
                fostering meaningful tefillah, learning opportunities for all ages,
                and acts of chesed that strengthen our kehilla and the broader community.
              </p>
            </div>
          </section>

          {/* Programs / Services (optional content stub) */}
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
              Programs & Services
            </h2>
            <div className="mt-3 pt-4 border-t border-stone-200">
              <ul className="space-y-2 text-stone-700">
                <li>• Minyanim and shiurim throughout the week</li>
                <li>• Youth learning & events</li>
                <li>• Chesed initiatives and meal trains</li>
                <li>• Holiday programming and community gatherings</li>
              </ul>
            </div>
          </section>

          {/* Get Involved */}
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
              Get Involved
            </h2>
            <div className="mt-3 pt-4 border-t border-stone-200">
              <p className="text-stone-700 leading-relaxed">
                We’d love to hear from you-whether you’re new to the area, exploring
                membership, or want to volunteer.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@shaarsimcha.org"
                  className="inline-flex items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 transition-colors"
                >
                  Support Our Shul
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
