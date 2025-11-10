// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import type { Metadata } from "next";
import { Container, NavLink } from "../components/Ui";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Kehillas Shaar Simcha",
  description: "Announcements & donations",
};

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en">
      <body className="bg-brand-mist text-brand-ink font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-ink/10">
          <Container className="flex h-14 md:h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-5 w-5 md:h-6 md:w-6 rounded-lg bg-gradient-to-br from-brand-teal to-brand-blue shadow-[var(--shadow-soft)]" />
              <span className="font-display text-base md:text-lg font-semibold tracking-wide text-brand-deep">
                <span className="hidden sm:inline">Kehillas Shaar Simcha</span>
                <span className="sm:hidden">KSS</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 lg:gap-7 text-brand-ink/80 text-sm lg:text-base">
              <NavLink href="/" className="hover:text-brand-deep transition-colors">
                Home
              </NavLink>
              <NavLink href="/donate" className="hover:text-brand-deep transition-colors">
                Donate
              </NavLink>
              <NavLink href="/about" className="hover:text-brand-deep transition-colors">
                About
              </NavLink>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </Container>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 border-t border-brand-ink/10 bg-white/70 backdrop-blur-sm">
          <Container className="py-6 md:py-8 px-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-brand-ink/70">
              © {new Date().getFullYear()} Kehillas Shaar Simcha
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

        {/* Sanity Visual Editing overlays (only when draft mode is enabled) */}
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}