import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    category: z.enum(['美妆', '服饰', '茶饮', '食品', '零售', '方法论', '快报']),
    template: z.enum(['deep-analysis', 'quick-note']).default('deep-analysis'),
    excerpt: z.string(),
    seo_keywords: z.array(z.string()).optional(),
    og_image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('Jack'),
  }),
});

export const collections = { articles };