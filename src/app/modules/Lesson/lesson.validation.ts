import { z } from "zod";

const createLessonSchema = z.object({
  body: z.object({
    lessonName: z.string({
      required_error: "Lesson Name is required",
      invalid_type_error: "Lesson Name must be a string",
    }).min(1, { message: "Lesson Name is required" }),
  }),
});

const updateLessonSchema = z.object({
  body: z.object({
    lessonName: z.string({
      invalid_type_error: "Lesson Name must be a string",
    }).optional(),
  }),
});

export const LessonValidation = {
  createLessonSchema,
  updateLessonSchema,
};
