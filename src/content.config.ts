import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const symptoms = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/symptoms" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        categories: z.array(z.string()).optional(),
    }),
});

const research = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/research" }),
    schema: z.object({
        title: z.string(),
        paperLink: z.string().url().optional(),
        symptoms: z.array(z.string()),
        kampo: z.array(z.string()),
        evidenceLevel: z.string().optional(),
        date: z.date().optional(),
        image: z.string().optional(),
        categories: z.array(z.string()).optional(),
    }),
});

export const collections = { symptoms, research };
