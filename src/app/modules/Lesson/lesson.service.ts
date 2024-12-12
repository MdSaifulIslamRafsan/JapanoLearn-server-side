import { TLesson } from "./lesson.interface";
import Lesson from "./lesson.modle";

const lessonCreateIntoDB = async(payload: TLesson) => {
    const lastLesson = await Lesson.findOne().sort({ lessonNumber: -1 });
    if (lastLesson) {
      payload.lessonNumber = lastLesson.lessonNumber + 1;
    } else {
      payload.lessonNumber = 1;
    }
  const result = await Lesson.create(payload);
  return result;
};

const getAllLessonsIntoDB = async () =>{
    const result = await Lesson.find();
    return result;
}

export const LessonService = {
  lessonCreateIntoDB,
  getAllLessonsIntoDB,
};
