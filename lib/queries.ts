import { groq } from "next-sanity";


export const announcementsQuery = `
*[_type=="post" && (!defined(publishAt) || publishAt <= now())
  && (!defined(expiresAt) || expiresAt > now())]
| order(pinned desc, publishAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(publishAt, _createdAt),
  "excerpt": coalesce(pt::text(body)[0..200], "No summary provided."),
  publishAt,
  category,
  audience,
  pinned,
  body,
  defined(image) => {
    "image": {
      "url": image.asset->url,
      "w": image.asset->metadata.dimensions.width,
      "h": image.asset->metadata.dimensions.height,
      "alt": coalesce(image.alt, ^.title)
    }
  },
  attachments[]{
    _key,
    "url": asset->url,
    "mimeType": asset->mimeType,
    "originalFilename": asset->originalFilename,
    "size": asset->size
  }
}
`

export const announcementBySlugQuery = `
*[_type=="post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(publishAt, _createdAt),
  category,
  audience,
  pinned,
  body,
  defined(image) => {
    "image": {
      "url": image.asset->url,
      "w": image.asset->metadata.dimensions.width,
      "h": image.asset->metadata.dimensions.height,
      "alt": coalesce(image.alt, ^.title)
    }
  },
  attachments[]{
    _key,
    "url": asset->url,
    "mimeType": asset->mimeType,
    "originalFilename": asset->originalFilename,
    "size": asset->size
  }
}
`;
