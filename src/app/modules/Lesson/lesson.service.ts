import { Vocabulary } from "../Vocabulary/vocabulary.model";
import { TLesson } from "./lesson.interface";
import Lesson from "./lesson.modle";

const lessonCreateIntoDB = async (payload: TLesson) => {
  const lastLesson = await Lesson.findOne().sort({ lessonNumber: -1 });
  if (lastLesson) {
    payload.lessonNumber = lastLesson.lessonNumber + 1;
  } else {
    payload.lessonNumber = 1;
  }
  const result = await Lesson.create(payload);
  return result;
};

const getAllLessonsIntoDB = async () => {
  const result = await Lesson.aggregate([
    {
      $lookup: {
        from: "vocabularies", 
        localField: "lessonNumber", 
        foreignField: "lessonNo", 
        as: "vocabularyDetails", 
      },
    },
    {
      $addFields: {
        vocabularyCount: { $size: "$vocabularyDetails" }, 
      },
    },
    {
      $project: {
        lessonName: 1,
        lessonNumber: 1,
        vocabularyCount: 1,
      },
    },
  ]);

 
  return result;
};
const updateLessonIntoDB = async (id: number, payload: TLesson) => {
  const result = await Lesson.findOneAndUpdate({ lessonNumber: id }, payload, {
    new: true,
  });
  return result;
};

const deleteLessonIntoDB = async (id: number) => {
  const result = await Lesson.findOneAndUpdate(
    { lessonNumber: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const getSingleLessonIntoDB = (id: number) => {
  const result = Vocabulary.findOne({ lessonNo: id });
  return result;
};

export const LessonService = {
  lessonCreateIntoDB,
  getAllLessonsIntoDB,
  updateLessonIntoDB,
  getSingleLessonIntoDB,
  deleteLessonIntoDB,
};
