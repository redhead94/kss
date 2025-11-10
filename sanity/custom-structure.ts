import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Announcements
      S.listItem()
        .title('Announcements')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Announcements')
            .defaultOrdering([{field: 'title', direction: 'desc'}])
        ),

      S.divider(),

      // All other document types
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'post'
      ),
    ])