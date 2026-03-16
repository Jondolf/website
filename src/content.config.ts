import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    id: z.number(),
    url: z.url().optional(),
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    createdAt: z.string().or(z.date()).transform(str => new Date(str)),
    updatedAt: z.string().or(z.date()).transform(str => new Date(str)).optional(),
    thumbnail: image().optional(),
    thumbnailAlt: z.string().optional(),
    thumbnailOptimization: z.boolean().default(true).optional(),
    links: z.array(z.object({
      url: z.string(),
      text: z.string().optional(),
      img: image().optional(),
      imgAlt: z.string().optional()
    })).optional()
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    url: z.url().optional(),
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    createdAt: z.string().or(z.date()).transform(str => new Date(str)),
    updatedAt: z.string().or(z.date()).transform(str => new Date(str)).optional(),
    thumbnail: image().optional(),
    thumbnailAlt: z.string().optional(),
    thumbnailOptimization: z.boolean().default(true).optional(),
    links: z.array(z.object({
      url: z.string(),
      text: z.string().optional(),
      img: image().optional(),
      imgAlt: z.string().optional()
    })).optional()
  })
});

export const collections = {
  blog,
  projects
};
