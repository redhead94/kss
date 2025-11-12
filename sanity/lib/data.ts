// lib/data.ts
import { sanityClient } from "./sanity";
import { fetchWithRetry } from "./fetchWithRetry";
import { groq } from "next-sanity";

const announcementsQuery = groq`
*[_type=="post" && (!defined(publishAt) || publishAt <= now())
  && (!defined(expiresAt) || expiresAt > now())]
| order(pinned desc, coalesce(publishAt, _createdAt) desc) {
  "id": _id, title, "slug": slug.current,
  "date": coalesce(publishAt, _createdAt),
  "excerpt": coalesce(excerpt, pt::text(body)[0..180]),
  "category": select(defined(category) => category, "General"),
  pinned,
    "image": {
    "url": image.asset->url,
    "w": image.asset->metadata.dimensions.width,
    "h": image.asset->metadata.dimensions.height,
    "alt": coalesce(image.alt, ^.title)
  },
  attachments[]{ _key, "url": asset->url, "mimeType": asset->mimeType, "originalFilename": asset->originalFilename, "size": asset->size }
}
`;

export async function getAnnouncements() {
  // Revalidate to avoid fetching on every hit; adjust window for your needs
  // If you *must* be fully dynamic, you can drop this-but note it increases fetch frequency.
  // @ts-ignore next/cache hint (only matters if you use next/route handlers)
  // export const revalidate = 60;

  return fetchWithRetry(() => sanityClient.fetch(announcementsQuery));
}
