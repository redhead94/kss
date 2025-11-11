// lib/sanity.ts
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_READ_TOKEN; // optional (for drafts)

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // use the CDN in prod to avoid origin timeouts; origin can ECONNRESET under load
  useCdn: process.env.NODE_ENV === "production" && !token,
  token, // omit if you don’t need drafts
  perspective: token ? "previewDrafts" : "published",
  stega: { enabled: false }, // keep visual editing off unless you really need it
});
