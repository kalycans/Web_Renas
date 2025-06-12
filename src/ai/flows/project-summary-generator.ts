'use server';

/**
 * @fileOverview A project summary generator AI agent.
 *
 * - generateProjectSummary - A function that handles the project summary generation process.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project.'),
});
export type GenerateProjectSummaryInput = z.infer<typeof GenerateProjectSummaryInputSchema>;

const GenerateProjectSummaryOutputSchema = z.object({
  summaryQuote: z.string().describe('A concise and engaging quote extracted from the project description.'),
});
export type GenerateProjectSummaryOutput = z.infer<typeof GenerateProjectSummaryOutputSchema>;

export async function generateProjectSummary(input: GenerateProjectSummaryInput): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an AI assistant that specializes in creating concise and engaging quotes that summarize projects. Given a project description, extract a single quote that best encapsulates the essence and impact of the project.

Project Description: {{{projectDescription}}}`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
