"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export default function AdminLoginPage() {
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_authorized');
    if (authStatus === 'true') {
      router.push('/admin/donations');
    }
  }, [router]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordInput === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_authorized', 'true');
      router.push('/admin/donations');
    } else {
      setPasswordError('Incorrect password');
      setPasswordInput('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm">
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-medium mb-2">Admin</h1>
          <p className="text-sm text-gray-500">Enter password to continue</p>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Password"
              className="w-full px-0 py-3 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent transition-colors text-center"
              autoFocus
              required
            />
            {passwordError && (
              <p className="mt-2 text-sm text-red-600 text-center">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}