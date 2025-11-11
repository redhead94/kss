// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import type { Metadata } from "next";
import { Container, NavLink } from "@/components/Ui";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kehilas Shaar Simcha",
  description: "Announcements & donations",
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
      <body className="bg-brand-mist text-brand-ink font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-ink/10">
          <Container className="flex h-14 md:h-16 items-center justify-between px-4">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 text-brand-ink">
              {/* Fix 1: keep width & height and DON'T override with w-auto/h-10 */}
              <Image
                src="/kss.jpeg"
                alt="Kehilas Shaar Simcha"
                width={40}
                height={40}
                priority
                className="rounded-md object-contain" // no size overrides -> no warning
              />
              <span className="text-base md:text-lg font-semibold tracking-tight">
                Kehilas Shaar Simcha
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 lg:gap-7 text-brand-ink/80 text-sm lg:text-base">
              <NavLink href="/" className="hover:text-brand-deep transition-colors">Home</NavLink>
              <NavLink href="/donate" className="hover:text-brand-deep transition-colors">Donate</NavLink>
              <NavLink href="/about" className="hover:text-brand-deep transition-colors">About</NavLink>
            </nav>

            {/* Mobile Navigation (show only on mobile) */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </Container>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 border-t border-brand-ink/10 bg-white/70 backdrop-blur-sm">
          <Container className="py-6 md:py-8 px-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-brand-ink/70">
              © {new Date().getFullYear()} Kehilas Shaar Simcha
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-brand-ink/60">
              <a href="/about" className="hover:text-brand-blue transition-colors">About</a>
              <span className="text-brand-ink/30">•</span>
              <a href="/contact" className="hover:text-brand-blue transition-colors">Contact</a>
              <span className="text-brand-ink/30">•</span>
              <a href="mailto:info@shaarsimcha.org" className="hover:text-brand-blue transition-colors">
                info@shaarsimcha.org
              </a>
            </div>
          </Container>
        </footer>

        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
