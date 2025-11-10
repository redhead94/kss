export const announcementsQuery = `
*[_type=="post" && (!defined(publishAt) || publishAt <= now()) 
  && (!defined(expiresAt) || expiresAt > now())]
| order(pinned desc, publishAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishAt,
  category,
  audience,
  pinned,
  body,
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
  attachments[]{
    _key,
    "url": asset->url,
    "mimeType": asset->mimeType,
    "originalFilename": asset->originalFilename,
    "size": asset->size
  }
}
`;
