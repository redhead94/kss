import {
  formatCurrency,
  formatDate,
  DonationsTable,
  DonationsFilters,
  DonationsStats,
} from "./_components";

type DonationsPageProps = {
  searchParams: {
    search?: string;
    startDate?: string;
    endDate?: string;
    sortBy?: "date" | "amount" | "name";
    sortOrder?: "asc" | "desc";
  };
};

export default async function AdminDonationsPage({
  searchParams,
}: DonationsPageProps) {
  const {
    search = "",
    startDate = "",
    endDate = "",
    sortBy = "date",
    sortOrder = "desc",
  } = searchParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/donations?search=${encodeURIComponent(search)}&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    { cache: "no-store" }
  );
  const { donations, total } = await res.json();

  const totalAmount = donations.reduce(
    (sum: number, d: { amount: number }) => sum + d.amount,
    0
  );
  const avgAmount = donations.length > 0 ? totalAmount / donations.length : 0;

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Stats */}
      <DonationsStats
        totalAmount={totalAmount}
        count={donations.length}
        avgAmount={avgAmount}
        formatCurrency={formatCurrency}
      />

      {/* Filters */}
      <DonationsFilters
        initialSearch={search}
        initialStartDate={startDate}
        initialEndDate={endDate}
        initialSortBy={sortBy}
        initialSortOrder={sortOrder}
      />

      {/* Table */}
      <DonationsTable
        donations={donations}
        formatCurrency={formatCurrency}
        formatDate={formatDate}
      />
    </div>
  );
}