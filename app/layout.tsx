// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import type { Metadata } from "next";
import { Container, NavLink } from "../components/Ui";

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
          <Container className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-brand-teal to-brand-blue shadow-[var(--shadow-soft)]" />
              <span className="font-display text-lg font-semibold tracking-wide text-brand-deep">
                Kehillas Shaar Simcha
              </span>
            </Link>
            <nav className="hidden gap-7 md:flex text-brand-ink/80">
              <NavLink href="/" className="hover:text-brand-deep">
                Home
              </NavLink>
              <NavLink href="/donate" className="hover:text-brand-deep">
                Donate
              </NavLink>
              <NavLink href="/about" className="hover:text-brand-deep">
                About
              </NavLink>
            </nav>
            <div className="md:hidden" />
          </Container>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-brand-ink/10 bg-white/70 backdrop-blur-sm">
          <Container className="py-8 text-sm text-brand-ink/70">
            © {new Date().getFullYear()} Kehillas Shaar Simcha
          </Container>
        </footer>

        {/* Sanity Visual Editing overlays (only when draft mode is enabled) */}
        {isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
