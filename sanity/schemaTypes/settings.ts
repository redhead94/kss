import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string", initialValue: "Shul Site" }),
    defineField({ name: "logo", type: "image" }),
    defineField({ name: "donateLink", type: "url", description: "Stripe Payment Link (optional, if not using Checkout route)" }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "ein", type: "string", title: "EIN (for receipts/footer)" })
  ]
});
