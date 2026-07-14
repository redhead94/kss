"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DonationsFilters({
  initialSearch = "",
  initialStartDate = "",
  initialEndDate = "",
  initialSortBy = "date",
  initialSortOrder = "desc",
}: {
  initialSearch?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialSortBy?: string;
  initialSortOrder?: string;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);

  const updateParams = async () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (startDate) params.set("startDate", startDate);
    if (endDate) params.set("endDate", endDate);
    params.set("sortBy", sortBy);
    params.set("sortOrder", sortOrder);

    router.push(`/admin/donations?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex items-center gap-4 flex-wrap">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={updateParams}
        placeholder="Search donors..."
        className="px-4 py-2 border-b border-stone-300 focus:border-stone-900 outline-none bg-transparent transition-colors min-w-[200px]"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        onBlur={updateParams}
        className="px-4 py-2 border-b border-stone-300 focus:border-stone-900 outline-none bg-transparent transition-colors"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        onBlur={updateParams}
        className="px-4 py-2 border-b border-stone-300 focus:border-stone-900 outline-none bg-transparent transition-colors"
      />
      <select
        value={sortBy}
        onChange={(e) => { setSortBy(e.target.value); updateParams(); }}
        className="px-4 py-2 border-b border-stone-300 focus:border-stone-900 outline-none bg-transparent transition-colors"
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        <option value="name">Name</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => { setSortOrder(e.target.value); updateParams(); }}
        className="px-4 py-2 border-b border-stone-300 focus:border-stone-900 outline-none bg-transparent transition-colors"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
}