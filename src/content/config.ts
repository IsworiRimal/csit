// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('BscCsitNepal'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const syllabusCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    author: z.string().optional(),
    description: z.string(),
    objectives: z.string(),
    tags: z.array(z.string()),
  }),
});

const questionCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    year: z.string(),
    subject: z.string(),
    subject_slug: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const pageCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    description: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blogs': blogsCollection,
  'syllabus': syllabusCollection,
  'questions': questionCollection,
  'pages': pageCollection,
};