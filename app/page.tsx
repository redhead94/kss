import { Container, Card } from "@/components/Ui"
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
    image: p.image ? {
      url: p.image.url,
      w: p.image.w,
      h: p.image.h,
      alt: p.image.alt,
    } : undefined,
    attachments: (p.attachments || []).map((a: any) => ({
      name: a.originalFilename || "Attachment.pdf",
      url: a.url,
    })),
    pinned: p.pinned,
  }))

  return (
    <>
      {/* Hero / header */}
      <section className="relative bg-streaks overflow-hidden">
        {/* Decorative elements - hidden on mobile */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-full blur-3xl" />
        
        <Container className="relative mx-auto max-w-5xl py-12 md:py-16 lg:py-24 px-4">
          <div className="text-center">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-deep">
              Announcements
            </h1>
            <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-brand-ink/70 max-w-2xl mx-auto px-4">
              Latest updates from the shul.
            </p>
            {/* Stats or quick info */}
            <div className="mt-6 md:mt-8 flex items-center justify-center gap-4 md:gap-6 text-xs sm:text-sm text-brand-ink/60">
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
                {data.length} announcements
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main content */}
      <Container className="relative -mt-4 md:-mt-8 mb-12 md:mb-16 px-4">
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Announcements */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <AnnouncementsBrowser posts={data} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 md:space-y-6">
            {/* Donate Card */}
            <Card className="card-surface p-4 md:p-6 card-hover">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-brand-deep">
                    Support the Shul
                  </h3>
                  <p className="text-xs text-brand-ink/60">Every donation helps</p>
                </div>
              </div>
              <a
                href="/donate"
                className="btn-primary w-full text-sm md:text-base py-2.5 md:py-3"
              >
                Make a Donation
              </a>
            </Card>

            {/* Quick Links Card */}
            <Card className="card-surface p-4 md:p-6">
              <h3 className="font-display text-base md:text-lg font-semibold text-brand-deep mb-3 md:mb-4">
                Quick Links
              </h3>
              <nav className="space-y-1.5 md:space-y-2">
                <a href="/about" className="flex items-center gap-3 p-2.5 md:p-3 rounded-lg hover:bg-brand-mist/50 transition-colors">
                  <span className="text-sm font-medium text-brand-ink hover:text-brand-blue transition-colors">About Us</span>
                </a>
                <a href="/contact" className="flex items-center gap-3 p-2.5 md:p-3 rounded-lg hover:bg-brand-mist/50 transition-colors">
                  <span className="text-sm font-medium text-brand-ink hover:text-brand-blue transition-colors">Contact</span>
                </a>
              </nav>
            </Card>

            {/* Contact Info Card */}
            <Card className="card-surface p-4 md:p-6 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 border-brand-blue/10">
              <h3 className="font-display text-base md:text-lg font-semibold text-brand-deep mb-2 md:mb-3">
                Get in Touch
              </h3>
              <div className="space-y-1.5 md:space-y-2 text-sm text-brand-ink/70">
                <p>Questions? Reach out to us anytime.</p>
                <a href="mailto:info@shaarsimcha.org" className="block text-brand-blue hover:text-brand-deep font-medium break-all">
                  info@shaarsimcha.org
                </a>
              </div>
            </Card>
          </aside>
        </div>
      </Container>
    </>
  )
}