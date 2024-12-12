import { z } from "zod";

export const createUserValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email("Invalid email address"),
    photo: z.string({
      required_error: "Photo URL is required",
      invalid_type_error: "Photo must be a valid string URL",
    }).url("Photo must be a valid URL"),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(6, { message: "Password must be at least 6 characters" })
      .max(20, { message: "Password must not exceed 20 characters" }),
  }),
});

export const UserValidation = {
  createUserValidation,
};
