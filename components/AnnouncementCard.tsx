import Image from "next/image";
import { Badge, Card } from "./Ui";
import PdfPill from "./PdfPill";

export interface Attachment { name: string; url: string; }
export interface Announcement {
  id: string;
  title: string;
  date: string;           // ISO
  category: "General"|"Youth"|"Women"|"Learning"|"Chesed";
  excerpt: string;
  image?: { url: string; w: number; h: number; alt?: string };
  attachments?: Attachment[];
  pinned?: boolean;
}

export default function AnnouncementCard({ a }: { a: Announcement }) {
  console.log(a.image?.url);
  let d = "-";
  if (a.date) {
    const t = new Date(a.date);
    if (!Number.isNaN(t.getTime())) {
      d = t.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    }
  }

  return (
    <Card className="p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500">{d}</div>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">{a.title}</h3>
        </div>
        {a.pinned ? <Badge className="bg-brand-100 text-brand-800"> <span aria-label="Pinned" title="Pinned">📌</span></Badge> : null}
      </div>

      {/* Image (optional) */}
      {a.image?.url && (
        <div className="mb-4 overflow-hidden rounded-lg border border-slate-200">
            <Image
              src={a.image.url}
              alt={a.image.alt || a.title}
              width={600}
              height={600}  // 👈 choose a standard ratio (2:1 looks good)
              className="object-contain w-full max-h-80" // 👈 15rem tall regardless of native size
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
      )}

      <div className="mb-4">
        <Badge>{a.category}</Badge>
      </div>

      <p className="mb-4 text-slate-700">{a.excerpt}</p>

      {a.attachments?.length ? (
        <div className="flex flex-wrap gap-2">
          {a.attachments.map((att) => <PdfPill key={att.url} name={att.name} href={att.url} />)}
        </div>
      ) : null}
    </Card>
  );
}
