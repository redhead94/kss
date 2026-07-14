"use client";

export function DonationsTable({
  donations,
  formatCurrency,
  formatDate,
}: {
  donations: any[];
  formatCurrency: (amount: number) => string;
  formatDate: (date: string) => string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-stone-200 text-xs uppercase tracking-wide text-stone-500">
            <th className="py-4 px-4 font-medium">Donor</th>
            <th className="py-4 px-4 font-medium">Amount</th>
            <th className="py-4 px-4 font-medium">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {donations.map((d) => (
            <tr key={d.id} className="hover:bg-stone-50 transition-colors">
              <td className="py-4 px-4 text-sm text-stone-900">{d.donor_name}</td>
              <td className="py-4 px-4 text-sm text-stone-900">{formatCurrency(d.amount)}</td>
              <td className="py-4 px-4 text-sm text-stone-500">{formatDate(d.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {donations.length === 0 && (
        <div className="text-center py-20 text-stone-500">No donations found.</div>
      )}
    </div>
  );
}