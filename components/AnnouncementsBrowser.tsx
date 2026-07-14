"use client";

import { useMemo, useState } from "react";
import AnnouncementCard from "@/components/AnnouncementCard";
import Filters from "@/components/Filters";

import { AnnouncementDTO, AnnouncementFilter } from "@/lib/types";

export default function AnnouncementsBrowser({ posts }: { posts: AnnouncementDTO[] }) {
  const [cat, setCat] = useState<AnnouncementFilter>("All");

  const visible = useMemo(
    () => (cat === "All" ? posts : posts.filter(p => p.category === cat)),
    [cat, posts]
  );

  return (
    <>
      <div className="mb-4">
        <Filters onChange={setCat} />
      </div>

      <div className="space-y-4">
        {visible.map(p => (
          <AnnouncementCard
            key={p.id}
            a={{
              id: p.id,
              title: p.title,
              date: p.date,
              category: p.category,
              excerpt: p.excerpt ?? "",
              image: p.image,
              attachments: p.attachments,
              pinned: p.pinned,
            }}
          />
        ))}
        {visible.length === 0 && (
          <p className="text-sm text-slate-500">No announcements in this category.</p>
        )}
      </div>
    </>
  );
}
