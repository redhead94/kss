export function DonationsStats({
  totalAmount,
  count,
  avgAmount,
  formatCurrency,
}: {
  totalAmount: number;
  count: number;
  avgAmount: number;
  formatCurrency: (amount: number) => string;
}) {
  return (
    <div className="grid grid-cols-3 gap-px bg-stone-200 mb-12">
      <div className="bg-white p-8">
        <div className="text-sm text-stone-500 uppercase tracking-wide mb-2">
          Total
        </div>
        <div className="text-3xl font-light">
          {formatCurrency(totalAmount)}
        </div>
      </div>
      <div className="bg-white p-8">
        <div className="text-sm text-stone-500 uppercase tracking-wide mb-2">
          Count
        </div>
        <div className="text-3xl font-light">{count}</div>
      </div>
      <div className="bg-white p-8">
        <div className="text-sm text-stone-500 uppercase tracking-wide mb-2">
          Average
        </div>
        <div className="text-3xl font-light">{formatCurrency(avgAmount)}</div>
      </div>
    </div>
  );
}