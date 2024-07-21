import { z } from 'zod';

export const onboardingSchema = z.object({
  username: z.string(),
  preferences: z.array(z.string()).optional(),
  invitees: z.array(z.string().email()).optional()
});