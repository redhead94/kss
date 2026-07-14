// Centralized shared types

export interface Attachment {
  name: string;
  url: string;
}

export interface AnnouncementImage {
  url: string;
  w: number;
  h: number;
  alt?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string; // ISO
  category: AnnouncementCategory;
  excerpt: string;
  image?: AnnouncementImage;
  attachments?: Attachment[];
  pinned?: boolean;
}

export type AnnouncementCategory =
  | "General"
  | "Youth"
  | "Women"
  | "Learning"
  | "Chesed";

// Used by the browser to include "All" as a category filter
export type AnnouncementFilter = AnnouncementCategory | "All";

// Swagger returned from Sanity
export interface AnnouncementDTO {
  id: string;
  title: string;
  date: string; // ISO
  category: AnnouncementCategory;
  excerpt?: string;
  image?: AnnouncementImage;
  attachments?: Attachment[];
  pinned?: boolean;
}