
import { TLesson } from "./lesson.interface";
import { model, Schema } from "mongoose";

const LessonSchema = new Schema<TLesson>({
    lessonName: { type: String, required: true },
    lessonNumber: { type: Number, required: true, unique: true },
    vocabularyCount: { type: Number, default: 0 },
  });

const Lesson = model<TLesson>('Lesson', LessonSchema);

export default Lesson;