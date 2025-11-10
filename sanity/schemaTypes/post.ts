import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }), // rich text
    defineField({
      name: 'attachments',
      title: 'Attachments (PDFs)',
      type: 'array',
      of: [{ type: 'file', options: { accept: 'application/pdf' } }]
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['General', 'Youth', 'Women', 'Learning', 'Chesed'] }
    }),
    defineField({ name: 'publishAt', type: 'datetime' }),
    defineField({ name: 'expiresAt', type: 'datetime' }),
    defineField({ name: 'pinned', type: 'boolean', initialValue: false }),
    defineField({
      name: 'audience',
      type: 'string',
      options: { list: ['All', 'Members', 'Board'] },
      initialValue: 'All'
    })
  ]
});
