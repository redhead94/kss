"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (cancelled) return;

      if (pathname === "/admin") {
        // Login page — if already logged in, redirect to dashboard
        if (session) {
          router.push("/admin/donations");
        } else {
          setIsLoading(false);
        }
        return;
      }

      if (session) {
        setIsAuthenticated(true);
      } else {
        router.push("/admin");
      }
      setIsLoading(false);
    }

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (cancelled) return;
      setIsAuthenticated(!!session);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [pathname, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-stone-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (pathname === "/admin") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link href="/admin/donations" className="text-lg font-medium">
                Admin
              </Link>

              <nav className="flex gap-8">
                <Link
                  href="/admin/donations"
                  className={`text-sm transition-colors ${
                    pathname === "/admin/donations"
                      ? "text-stone-900 font-medium"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  Donations
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Back to site
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}