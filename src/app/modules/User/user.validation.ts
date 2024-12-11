import { z } from "zod";

export const createUserValidation = z.object({
  body: z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters'}),
    email: z.string().min(1, {message: 'Email is required'}).email('Invalid email address'),
    photo: z.string().url("Photo must be a valid URL"),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}).max(20, 'Password must not exceed 20 characters'),
  }),
});


export const UserValidation = {
    createUserValidation
}