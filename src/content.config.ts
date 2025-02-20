import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts/", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      published: z.boolean(),
      created: z.date(),
      updated: z.date().optional(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()).default([]),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects/", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      published: z.boolean(),
      started: z.date(),
      updated: z.date().optional(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      links: z
        .array(z.object({ href: z.string().url(), name: z.string() }))
        .default([]),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { posts, projects };
