'use server';
/**
 * @fileOverview This file contains a Genkit flow for prioritizing contact form submissions based on their content.
 *
 * - prioritizeContactFormSubmission - A function that takes contact form data as input and returns a priority score.
 * - ContactFormInput - The input type for the prioritizeContactFormSubmission function.
 * - ContactFormOutput - The return type for the prioritizeContactFormSubmission function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  subject: z.string().describe('The subject of the contact form.'),
  content: z.string().describe('The content of the contact form message.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  priorityScore: z
    .number()
    .describe(
      'A score between 0 and 1 indicating the priority of the contact form submission. Higher scores indicate higher priority.'
    ),
  reason: z
    .string()
    .describe(
      'A brief explanation of why the contact form submission was assigned the given priority score.'
    ),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function prioritizeContactFormSubmission(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  return prioritizeContactFormSubmissionFlow(input);
}

const prioritizeContactFormSubmissionPrompt = ai.definePrompt({
  name: 'prioritizeContactFormSubmissionPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are an AI assistant that helps prioritize contact form submissions.

  Analyze the following contact form submission and determine its priority.
  Provide a priority score between 0 and 1, where 0 is the lowest priority and 1 is the highest.
  Also, provide a brief explanation of why the submission was assigned the given priority score.

  Here is the contact form submission:
  Name: {{{name}}}
  Subject: {{{subject}}}
  Content: {{{content}}}

  Consider factors such as urgency, importance, and relevance to the website owner.
  For example, submissions related to urgent technical issues or business opportunities should be prioritized.
  Submissions that are spam or irrelevant should be assigned a low priority score.

  Respond with a JSON object that contains the priorityScore and reason fields.
  `,
});

const prioritizeContactFormSubmissionFlow = ai.defineFlow(
  {
    name: 'prioritizeContactFormSubmissionFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await prioritizeContactFormSubmissionPrompt(input);
    return output!;
  }
);
