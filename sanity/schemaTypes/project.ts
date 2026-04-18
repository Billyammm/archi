import { defineArrayMember, defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Portfolio Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Architecture", value: "Architecture" },
          { title: "Real Estate", value: "Real Estate" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Main Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "Completed" },
          { title: "Under Construction", value: "Under Construction" },
          { title: "For Sale", value: "For Sale" },
          { title: "Sold", value: "Sold" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.required().integer().min(1900).max(2100),
    }),
  ],
});
