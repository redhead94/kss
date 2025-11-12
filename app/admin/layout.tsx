"use client"

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_authorized');
    
    if (pathname === '/admin') {
      setIsLoading(false);
      return;
    }
    
    if (authStatus === 'true') {
      setIsAuthorized(true);
      setIsLoading(false);
    } else {
      router.push('/admin');
    }
  }, [pathname, router]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authorized');
    router.push('/admin');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (pathname === '/admin') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-gray-200">
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
                    pathname === '/admin/donations'
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Donations
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Back to site
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
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