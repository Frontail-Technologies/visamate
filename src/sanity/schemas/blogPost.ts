import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(180),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
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
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Visa Mate",
      validation: (rule) => rule.required(),
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
          "Student Visa",
          "Business Visa",
          "Tourist Visa",
          "Work Visa",
          "Family Visa",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      initialValue: "5 min read",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (rule) => rule.required().max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          name: "paragraph",
          title: "Paragraph",
          type: "object",
          fields: [
            defineField({
              name: "type",
              type: "string",
              initialValue: "paragraph",
              readOnly: true,
              hidden: true,
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "text",
              rows: 5,
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineArrayMember({
          name: "heading",
          title: "Heading",
          type: "object",
          fields: [
            defineField({
              name: "type",
              type: "string",
              initialValue: "heading",
              readOnly: true,
              hidden: true,
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
        defineArrayMember({
          name: "list",
          title: "List",
          type: "object",
          fields: [
            defineField({
              name: "type",
              type: "string",
              initialValue: "list",
              readOnly: true,
              hidden: true,
            }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              validation: (rule) => rule.required().min(1),
            }),
          ],
        }),
        defineArrayMember({
          name: "imageBlock",
          title: "Image",
          type: "object",
          fields: [
            defineField({
              name: "type",
              type: "string",
              initialValue: "image",
              readOnly: true,
              hidden: true,
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        }),
        defineArrayMember({
          name: "table",
          title: "Table",
          type: "object",
          fields: [
            defineField({
              name: "type",
              type: "string",
              initialValue: "table",
              readOnly: true,
              hidden: true,
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "headers",
              title: "Headers",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                defineArrayMember({
                  name: "row",
                  title: "Row",
                  type: "object",
                  fields: [
                    defineField({
                      name: "cells",
                      title: "Cells",
                      type: "array",
                      of: [defineArrayMember({ type: "string" })],
                      validation: (rule) => rule.required().min(1),
                    }),
                  ],
                }),
              ],
              validation: (rule) => rule.required().min(1),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
