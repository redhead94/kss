import { Badge, Card } from "./Ui";
import PdfPill from "./PdfPill";

export interface Attachment { name: string; url: string; }
export interface Announcement {
  id: string;
  title: string;
  date: string;           // ISO
  category: "General"|"Youth"|"Women"|"Learning"|"Chesed";
  excerpt: string;
  attachments?: Attachment[];
  pinned?: boolean;
}

export default function AnnouncementCard({ a }: { a: Announcement }) {
  const d = new Date(a.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

  return (
    <Card className="p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500">{d}</div>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">{a.title}</h3>
        </div>
        {a.pinned ? <Badge className="bg-brand-100 text-brand-800">Pinned</Badge> : null}
      </div>

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
