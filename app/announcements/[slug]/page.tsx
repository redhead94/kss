import { sanity } from "@/lib/sanity.client";
import { announcementBySlugQuery } from "@/lib/queries";
import { Container, Card } from "@/components/Ui";
import { PortableText } from "@portabletext/react";
import PdfPill from "@/components/PdfPill";
import type { Metadata } from "next";

// export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanity.fetch(announcementBySlugQuery, { slug: params.slug });
  if (!post) return { title: "Announcement Not Found" };

  return {
    title: `${post.title} | Kehilas Shaar Simcha`,
    description: post.body ? `Read more about ${post.title}...` : undefined,
    openGraph: {
      title: post.title,
      description: post.body ? `Read more about ${post.title}...` : undefined,
      images: post.image?.url ? [{ url: post.image.url }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body ? `Read more about ${post.title}...` : undefined,
      images: post.image?.url ? [post.image.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await sanity.fetch(
    `*[_type=="post" && defined(slug.current)]{ "slug": slug.current }`
  );
  return posts.map((p: any) => ({ slug: p.slug }));
}

export default async function AnnouncementPage({ params }: { params: { slug: string } }) {
  const post = await sanity.fetch(announcementBySlugQuery, { slug: params.slug });
  if (!post) return <Container className="py-10">Not found.</Container>;

  const d = new Date(post.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

  return (
    <Container className="py-10">
      <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
      <div className="mt-1 text-sm text-slate-500">{d}</div>

      <Card className="prose mt-6 max-w-none p-6">
        <PortableText value={post.body || []} />
      </Card>

      {!!post.attachments?.length && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.attachments.map((a: any) => (
            <PdfPill key={a.url} name={a.originalFilename || "Attachment.pdf"} href={a.url} />
          ))}
        </div>
      )}
    </Container>
  );
}
