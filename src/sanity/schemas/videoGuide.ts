import { defineField, defineType } from "sanity";

export const videoGuide = defineType({
  name: "videoGuide",
  title: "Video Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Visa Tips",
          "Documents",
          "Interview Prep",
          "Case Studies",
          "Tourist Visa",
          "Student Visa",
          "Business Visa",
          "Work Visa",
          "Family Visa",
          "General Guidance",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description:
        "Paste an Instagram Reel, YouTube Short, or any public video URL.",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      description: "Upload a cover image for the video card.",
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
    defineField({
      name: "featured",
      title: "Featured",
      description: "Pin this guide to the top of the page.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
