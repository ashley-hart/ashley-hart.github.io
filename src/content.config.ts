import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';

/**
 * Entries marked `placeholder: true` are shown (with a dashed outline) while
 * running `npm run dev`, and hidden from the production build. Replace the
 * text and delete the flag when you have the real information.
 */
const placeholder = z.boolean().default(false);

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const games = defineCollection({
  loader: glob({ base: './src/content/games', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.coerce.string(),
    engine: z.string(),
    role: z.string().optional(),
    status: z.enum(['playable', 'coming-soon']).default('coming-soon'),
    /** Path to an exported web build under /public, e.g. "/play/umbral/index.html". */
    embed: z.string().optional(),
    aspectRatio: z.string().default('16 / 9'),
    itch: z.url().optional(),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['conference', 'journal', 'poster', 'workshop', 'preprint', 'thesis']),
    url: z.url().optional(),
    pdf: z.string().optional(),
    note: z.string().optional(),
    selected: z.boolean().default(false),
    placeholder,
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    title: z.string(),
    period: z.coerce.string(),
    status: z.enum(['active', 'completed']),
    summary: z.string(),
    keywords: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    order: z.number().default(0),
    placeholder,
  }),
});

const teaching = defineCollection({
  loader: file('src/data/teaching.yaml'),
  schema: z.object({
    kind: z.enum(['teaching', 'mentoring', 'outreach']),
    role: z.string(),
    title: z.string(),
    organization: z.string(),
    period: z.coerce.string(),
    description: z.string().optional(),
    url: z.url().optional(),
    order: z.number().default(0),
    placeholder,
  }),
});

const cvEntry = z.object({
  title: z.string(),
  organization: z.string(),
  location: z.string().optional(),
  period: z.coerce.string(),
  details: z.array(z.string()).default([]),
  order: z.number().default(0),
  placeholder,
});

const education = defineCollection({ loader: file('src/data/education.yaml'), schema: cvEntry });
const experience = defineCollection({ loader: file('src/data/experience.yaml'), schema: cvEntry });

const awards = defineCollection({
  loader: file('src/data/awards.yaml'),
  schema: z.object({
    title: z.string(),
    year: z.coerce.string(),
    description: z.string().optional(),
    url: z.url().optional(),
    placeholder,
  }),
});

const news = defineCollection({
  loader: file('src/data/news.yaml'),
  schema: z.object({
    date: z.string(), // "YYYY-MM"
    text: z.string(),
    url: z.string().optional(),
    placeholder,
  }),
});

export const collections = {
  blog,
  games,
  publications,
  projects,
  teaching,
  education,
  experience,
  awards,
  news,
};
