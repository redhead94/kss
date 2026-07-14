import { Metadata } from 'next';
import { sanity } from '@/lib/sanity.client';

export default function robots(): Metadata {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://shaarsimcha.org/sitemap.xml',
  };
}