import { Metadata } from 'next';
import { sanity } from '@/lib/sanity.client';

export default async function sitemap(): Promise<{ url: string, lastModified?: Date | string | number }[]> {
  const baseUrl = 'https://shaarsimcha.org';

  // Fetch all announcement slugs from Sanity
  const posts = await sanity.fetch(`*[_type=="post" && defined(slug.current)]{ "slug": slug.current }`);

  const announcementUrls = posts.map((p: any) => ({
    url: `${baseUrl}/announcements/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/donate`, lastModified: new Date() },
    { url: `${baseUrl}/calendar`, lastModified: new Date() },
    ...announcementUrls,
  ];
}