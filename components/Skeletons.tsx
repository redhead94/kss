import { Card } from "./Ui";

export function SkeletonCard() {
  return (
    <Card className="p-5 animate-pulse">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="h-3 w-24 bg-stone-200 rounded mb-2" />
          <div className="h-6 w-3/4 bg-stone-200 rounded" />
        </div>
        <div className="h-6 w-6 bg-stone-200 rounded-full" />
      </div>
      {Math.random() > 0.5 && <div className="mb-4 h-40 w-full bg-stone-200 rounded-lg" />}
      <div className="mb-4 h-5 w-16 bg-stone-200 rounded-full" />
      <div className="space-y-2">
        <div className="h-3 w-full bg-stone-200 rounded" />
        <div className="h-3 w-5/6 bg-stone-200 rounded" />
      </div>
    </Card>
  );
}

export function SkeletonLoading({ count = 3 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}