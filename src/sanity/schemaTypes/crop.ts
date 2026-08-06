import { defineType, defineField } from "sanity";
import { Leaf } from "lucide-react";

export const cropType = defineType({
  name: "crop",
  title: "Crop Solution",
  type: "document",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: Leaf as any,
  fields: [
    defineField({
      name: "name",
      title: "Crop Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cropImage",
      title: "Crop Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "recommendedProducts",
      title: "Recommended Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
  ],
});
