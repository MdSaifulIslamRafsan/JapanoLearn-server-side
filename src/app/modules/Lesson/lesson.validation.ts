import { z } from "zod";

const createLessonSchema = z.object({
  body: z.object({
    lessonName: z.string().min(1, "Lesson Name is required"),
  }),
});
const updateLessonSchema = z.object({
  body: z.object({
    lessonName: z.string().optional(),
  }),
});

export const LessonValidation = {
  createLessonSchema,
  updateLessonSchema,
};
