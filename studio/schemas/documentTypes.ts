import { defineField, defineType } from "sanity";

const languageField = defineField({
  name: "language",
  title: "Language",
  type: "string",
  options: {
    list: [
      { title: "Traditional Chinese", value: "zh" },
      { title: "English", value: "en" },
      { title: "French", value: "fr" }
    ],
    layout: "radio"
  },
  validation: (Rule) => Rule.required()
});

const sharedEditorialFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required()
  }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96
    },
    validation: (Rule) => Rule.required()
  }),
  languageField,
  defineField({
    name: "excerpt",
    title: "Excerpt",
    type: "text",
    rows: 3,
    validation: (Rule) => Rule.required().max(280)
  }),
  defineField({
    name: "mainImage",
    title: "Main image",
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        validation: (Rule) => Rule.required()
      })
    ]
  }),
  defineField({
    name: "body",
    title: "Body content",
    type: "blockContent"
  }),
  defineField({
    name: "publishDate",
    title: "Publish date",
    type: "datetime",
    validation: (Rule) => Rule.required()
  }),
  defineField({
    name: "seoTitle",
    title: "SEO title",
    type: "string",
    validation: (Rule) => Rule.max(70)
  }),
  defineField({
    name: "seoDescription",
    title: "SEO description",
    type: "text",
    rows: 3,
    validation: (Rule) => Rule.max(160)
  })
];

function createEditorialType(name: string, title: string) {
  return defineType({
    name,
    title,
    type: "document",
    fields: sharedEditorialFields,
    preview: {
      select: {
        title: "title",
        subtitle: "language",
        media: "mainImage"
      }
    }
  });
}

export const journalArticle = createEditorialType("journalArticle", "Journal article");
export const resource = createEditorialType("resource", "Library resource");
export const service = createEditorialType("service", "Reading service");
export const staticPage = createEditorialType("staticPage", "Static page");
