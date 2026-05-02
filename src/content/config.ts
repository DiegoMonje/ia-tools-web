import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Equipo IA Tools'),
    readTime: z.string().default('10 min'),
    featured: z.boolean().default(false),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional().default([]),
  }),
});

export const collections = { blog };