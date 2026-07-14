import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar | Kehillas Shaar Simcha",
  description: "View our community calendar for minyanim, shiurim, and special events.",
  openGraph: {
    title: "Community Calendar",
    description: "Minyanim, shiurim, and special events at Kehillas Shaar Simcha.",
    images: [{ url: "https://shaarsimcha.org/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Calendar",
    description: "Minyanim, shiurim, and special events at Kehillas Shaar Simcha.",
  },
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-brand-mist">
      {/* Header */}
      <div className="border-b border-brand-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
          <div className="flex items-center justify-center gap-3 text-brand-ink/40 text-[11px] md:text-xs uppercase tracking-wide">
            <span className="h-px w-6 bg-brand-ink/20" />
            Schedule
            <span className="h-px w-6 bg-brand-ink/20" />
          </div>
          <h1 className="mt-2 text-lg md:text-xl font-light text-center text-brand-ink">
            Community Calendar
          </h1>
          <p className="mt-2 text-center text-brand-ink/60 text-sm max-w-xl mx-auto">
            Stay up to date with our minyanim, shiurim, and special events.
          </p>
        </div>
      </div>

      {/* Calendar Embed */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-brand-ink/10 shadow-sm">
          {/* Replace with your actual Google Calendar embed URL */}
          <iframe
            src="https://calendar.google.com/calendar/embed?ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showTz=0&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudnJjYx"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="Community Calendar"
          />
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white border border-brand-ink/10 shadow-sm">
            <h3 className="font-medium text-brand-ink mb-2">Daily Minyanim</h3>
            <p className="text-sm text-brand-ink/60">
              Shacharit, Mincha, and Maariv times are updated daily on the calendar above.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-brand-ink/10 shadow-sm">
            <h3 className="font-medium text-brand-ink mb-2">Weekly Shiurim</h3>
            <p className="text-sm text-brand-ink/60">
              Join us for weekly learning sessions. Check the calendar for specific times.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-brand-ink/10 shadow-sm">
            <h3 className="font-medium text-brand-ink mb-2">Special Events</h3>
            <p className="text-sm text-brand-ink/60">
              Holiday programs and community gatherings are marked in gold.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}