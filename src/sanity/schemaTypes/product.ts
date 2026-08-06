import { defineType, defineField } from "sanity";
import { Package } from "lucide-react";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: Package as any,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "text",
      description: "A summary of the product's main benefits, uses, and details (supports markdown formatting like **bold**, *italic*, ### headings, and lists).",
    }),
    defineField({
      name: "activeIngredient",
      title: "Active Ingredient / Technical Name",
      type: "string",
    }),
    defineField({
      name: "modeOfAction",
      title: "Mode of Action",
      type: "text",
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "packSizes",
      title: "Pack Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "dosageTable",
      title: "Dosage Table",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "crop", type: "string", title: "Crop" },
            { name: "pest", type: "string", title: "Pest/Disease" },
            { name: "dosage", type: "string", title: "Dosage per Acre" },
            { name: "water", type: "string", title: "Water Volume" },
          ],
        },
      ],
    }),
    defineField({
      name: "brochure",
      title: "Product Brochure (PDF)",
      type: "file",
    }),
  ],
});
