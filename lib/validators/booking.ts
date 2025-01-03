import { z } from 'zod';

export const bookingSchema = z.object({
  date: z.string(),
  time: z.string(),
  guests: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});