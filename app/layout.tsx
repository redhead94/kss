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
      <body className="bg-white text-stone-800 font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
          <Container className="flex h-14 md:h-16 items-center justify-between px-4">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 text-stone-800">
              <Image
                src="/kss.jpeg"
                alt="Kehilas Shaar Simcha"
                width={40}
                height={40}
                priority
                className="rounded-md object-contain"
              />
              <span className="text-base md:text-lg font-semibold tracking-tight">
                Kehilas Shaar Simcha
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm lg:text-base">
              {/* Subtle underline on hover; quiet active state via bottom border */}
              <NavLink
                href="/"
                className="text-stone-700 hover:text-stone-900 border-b-2 border-transparent hover:border-stone-300 transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                href="/donate"
                className="text-stone-700 hover:text-stone-900 border-b-2 border-transparent hover:border-stone-300 transition-colors"
              >
                Donate
              </NavLink>
              <NavLink
                href="/about"
                className="text-stone-700 hover:text-stone-900 border-b-2 border-transparent hover:border-stone-300 transition-colors"
              >
                About
              </NavLink>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </Container>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 border-t border-stone-200 bg-white/80 backdrop-blur-sm">
          <Container className="py-6 md:py-8 px-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-stone-600">
              © {new Date().getFullYear()} Kehilas Shaar Simcha
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-stone-500">
              <a href="/about" className="hover:text-stone-800 transition-colors">About</a>
              <span className="text-stone-300">•</span>
              <a href="/contact" className="hover:text-stone-800 transition-colors">Contact</a>
              <span className="text-stone-300">•</span>
              <a href="mailto:info@shaarsimcha.org" className="hover:text-stone-800 transition-colors">
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
