import { defineType, defineField } from "sanity";
import { Tag } from "lucide-react";

export const categoryType = defineType({
  name: "category",
  title: "Product Category",
  type: "document",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: Tag as any,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
