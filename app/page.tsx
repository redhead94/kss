// Home (compact + clean)
import AnnouncementsBrowser, { AnnouncementDTO } from "@/components/AnnouncementsBrowser"
import { sanity } from "@/lib/sanity.client"
import { announcementsQuery } from "@/lib/queries"

export const revalidate = 60

export default async function Home() {
  const posts = await sanity.fetch(announcementsQuery)

  const data: AnnouncementDTO[] = posts.map((p: any) => ({
    id: p._id,
    title: p.title,
    date: p.date,
    category: p.category,
    excerpt: "",
    image: p.image
      ? { url: p.image.url, w: p.image.w, h: p.image.h, alt: p.image.alt }
      : undefined,
    attachments: (p.attachments || []).map((a: any) => ({
      name: a.originalFilename || "Attachment.pdf",
      url: a.url,
    })),
    pinned: p.pinned,
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-stone-200">
  <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">
    <div className="flex items-center justify-center gap-3 text-stone-400 text-[11px] md:text-xs uppercase tracking-wide">
      <span className="h-px w-6 bg-stone-200" />
      Updates • {data.length} {data.length === 1 ? "announcement" : "announcements"}
      <span className="h-px w-6 bg-stone-200" />
    </div>

    <h1 className="mt-2 text-lg md:text-xl font-light text-center text-stone-800">
      Announcements
    </h1>

    <p className="mt-2 text-center text-stone-600 text-sm">
      Latest from the shul.
    </p>
  </div>
</div>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feed */}
          <section className="lg:col-span-2">
            <h2 className="sr-only">Latest</h2>
            <AnnouncementsBrowser posts={data} />
          </section>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Donate */}
            <section>
              <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Support the Shul
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Every contribution helps sustain our programs.
              </p>
              <a
                href="/donate"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-brand px-4 py-2 text-sm text-brand hover:bg-brand-faint transition-colors"
              >
                Make a Donation
              </a>
            </section>

            {/* Quick links */}
            <section>
              <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Quick Links
              </h3>
              <nav className="mt-3 divide-y divide-gray-200 border-t border-b border-gray-200 text-sm">
                <a href="/about" className="block py-3 hover:underline">About Us</a>
                <a href="/contact" className="block py-3 hover:underline">Contact</a>
              </nav>
            </section>

            {/* Contact */}
            <section className="pt-6 border-t border-gray-200">
              <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Questions?
              </h3>
              <a
                href="mailto:info@shaarsimcha.org"
                className="mt-2 block text-sm hover:underline break-all"
              >
                info@shaarsimcha.org
              </a>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}
