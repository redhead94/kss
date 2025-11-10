import { Badge } from "./Ui";

export default function PdfPill({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" aria-hidden><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 2l4 4h-4z"/></svg>
      {name}
    </a>
  );
}
