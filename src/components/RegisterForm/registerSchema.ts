import { z } from 'zod';

export const registerSchema = z.object({
	firstName: z
		.string()
		.min(1, { message: 'First Name cannot be empty' })
		.max(50),
	lastName: z
		.string()
		.min(1, { message: 'First Name cannot be empty' })
		.max(50),
	email: z
		.string()
		.email({ message: 'Looks like this is not an email' })
		.max(50),
	password: z.string().min(1, { message: 'Password cannot be empty' }).max(50),
});

export type FormValues = z.infer<typeof registerSchema>;
