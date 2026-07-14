import { useState } from "react";
import { Button } from "./Ui";

type AnnouncementFilter = "All" | "Youth" | "Women" | "Learning" | "Chesed" | "General";

const CATS: AnnouncementFilter[] = [
  "All",
  "Youth",
  "Women",
  "Learning",
  "Chesed",
  "General",
];

export default function Filters({
  onChange,
}: {
  onChange: (cat: AnnouncementFilter) => void;
}) {
  const [active, setActive] = useState<AnnouncementFilter>("All");
  return (
    <div className="flex flex-wrap items-center gap-2">
      {CATS.map((cat) => (
        <Button
          key={cat}
          variant={active === cat ? "primary" : "secondary"}
          className="rounded-full px-3 py-1.5 text-xs"
          onClick={() => {
            setActive(cat);
            onChange(cat);
          }}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
