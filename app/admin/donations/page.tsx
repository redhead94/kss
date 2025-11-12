"use client"

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Donation {
  id: string;
  donor_name: string;
  amount: number;
  date: string;
  created_at: string;
}

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [filteredDonations, setFilteredDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'name'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    loadDonations();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [donations, searchTerm, startDate, endDate, sortBy, sortOrder]);

  const loadDonations = async () => {
    setIsLoading(true);
    const { data, error: fetchError } = await supabase
      .from('donations')
      .select('*')
      .order('date', { ascending: false });

    if (fetchError) {
      setError('Failed to load donations.');
      setIsLoading(false);
      return;
    }

    setDonations(data || []);
    setIsLoading(false);
  };

  const applyFilters = () => {
    let filtered = [...donations];

    if (searchTerm) {
      filtered = filtered.filter(d => 
        d.donor_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (startDate) {
      filtered = filtered.filter(d => new Date(d.date) >= new Date(startDate));
    }
    if (endDate) {
      filtered = filtered.filter(d => new Date(d.date) <= new Date(endDate));
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'amount') {
        comparison = a.amount - b.amount;
      } else {
        comparison = a.donor_name.localeCompare(b.donor_name);
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredDonations(filtered);
  };

  const totalAmount = filteredDonations.reduce((sum, d) => sum + d.amount, 0);
  const avgAmount = filteredDonations.length > 0 ? totalAmount / filteredDonations.length : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-px bg-gray-200 mb-12">
        <div className="bg-white p-8">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Total</div>
          <div className="text-3xl font-light">{formatCurrency(totalAmount)}</div>
        </div>
        <div className="bg-white p-8">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Count</div>
          <div className="text-3xl font-light">{filteredDonations.length}</div>
        </div>
        <div className="bg-white p-8">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Average</div>
          <div className="text-3xl font-light">{formatCurrency(avgAmount)}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 flex items-center gap-4 flex-wrap">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search donors..."
          className="px-4 py-2 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent transition-colors min-w-[200px]"
        />
        
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-4 py-2 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent transition-colors"
        />
        
        <span className="text-gray-400">→</span>
        
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-4 py-2 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent transition-colors"
        />

        {(searchTerm || startDate || endDate) && (
          <button
            onClick={() => {
              setSearchTerm('');
              setStartDate('');
              setEndDate('');
            }}
            className="text-sm text-gray-500 hover:text-gray-900 underline"
          >
            Clear
          </button>
        )}

        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 border-b border-gray-300 focus:border-gray-900 outline-none bg-transparent text-sm"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="name">Name</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border-t border-gray-200">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 py-4 text-sm text-gray-500 uppercase tracking-wide border-b border-gray-200">
          <div className="col-span-4">Donor</div>
          <div className="col-span-3 text-right">Amount</div>
          <div className="col-span-3">Date</div>
          <div className="col-span-2 text-right">Added</div>
        </div>

        {/* Rows */}
        {filteredDonations.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            No donations found
          </div>
        ) : (
          filteredDonations.map((donation, index) => (
            <div
              key={donation.id}
              className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-4 font-medium">{donation.donor_name}</div>
              <div className="col-span-3 text-right font-mono">{formatCurrency(donation.amount)}</div>
              <div className="col-span-3 text-gray-600">{formatDate(donation.date)}</div>
              <div className="col-span-2 text-right text-sm text-gray-400">{formatDate(donation.created_at)}</div>
            </div>
          ))
        )}
      </div>

      {/* Footer Summary */}
      <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
        <div>
          Showing {filteredDonations.length} of {donations.length} donations
        </div>
        <div className="font-mono">
          Total: {formatCurrency(totalAmount)}
        </div>
      </div>
    </div>
  );
}