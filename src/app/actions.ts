"use server";

import { z } from 'zod';
import { prioritizeContactFormSubmission } from '@/ai/flows/prioritize-contact-form-submission';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  content: z.string().min(10, "Message must be at least 10 characters long.").max(1000, "Message must be less than 1000 characters."),
});

export async function handleContactSubmission(data: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    // Construct a more detailed error message
    const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(' ');
    return { error: `Invalid input: ${errorMessages}` };
  }

  try {
    const priorityResult = await prioritizeContactFormSubmission(validatedFields.data);
    
    // In a real application, you would now use this priority score.
    // For example, send an email with a subject line indicating the priority.
    console.log('AI Priority Analysis:', priorityResult);
    
    return { success: `Message processed. AI priority score: ${priorityResult.priorityScore.toFixed(2)}.` };
  } catch (error) {
    console.error("Error during AI prioritization:", error);
    return { error: "Failed to process message with AI. Please try again." };
  }
}
