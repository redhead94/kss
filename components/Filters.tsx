"use client";
import { useState } from "react";
import { Button } from "./Ui";

const CATS = ["All","Youth","Women","Learning","Chesed","General"] as const;
type Cat = typeof CATS[number];

export default function Filters({ onChange }: { onChange: (cat: Cat) => void }) {
  const [active, setActive] = useState<Cat>("All");
  return (
    <div className="flex flex-wrap items-center gap-2">
      {CATS.map((cat) => (
        <Button
          key={cat}
          variant={active === cat ? "primary" : "secondary"}
          className="rounded-full px-3 py-1.5 text-xs"
          onClick={() => { setActive(cat); onChange(cat); }}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
