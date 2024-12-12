import { z } from "zod";

const createVocabularyValidation = z.object({
  body : z.object({
    word: z.string({
        required_error: "Word is required",
        invalid_type_error: "Word must be a string",
      }),
    
      pronunciation: z.string({
        required_error: "Pronunciation is required",
        invalid_type_error: "Pronunciation must be a string",
      }),
    
      whenToSay: z.string({
        required_error: "When to say is required",
        invalid_type_error: "When to say must be a string",
      }),
    
      lessonNo: z
        .number({
          required_error: "Lesson number is required",
          invalid_type_error: "Lesson number must be a number",
        })
        .min(1, { message: "Lesson number must be at least 1" }),
    
      adminEmail: z
        .string({
          required_error: "Admin email is required",
          invalid_type_error: "Admin email must be a string",
        })
        .email("Invalid email address"),
  })
});

export const vocabularyValidation = { createVocabularyValidation };
