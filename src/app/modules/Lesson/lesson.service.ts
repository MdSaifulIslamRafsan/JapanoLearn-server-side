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
  console.log('line no 49', id);
  const result = await Lesson.findOneAndUpdate(
    { lessonNumber: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const getSingleLessonIntoDB = async (id: number) => {

  const result = await Lesson.aggregate([
    { $match: { lessonNumber: id, isDeleted: false } },
    {
      $lookup: {
        from: "vocabularies",
        localField: "lessonNumber",
        foreignField: "lessonNo",
        as: "vocabulary",
      },
    },
    {
      // Format the output
      $project: {
        _id: 0,
        "vocabulary.word": 1,
        "vocabulary.pronunciation": 1,
        "vocabulary.whenToSay": 1,
        "vocabulary.meaning": 1,
        "vocabulary.adminEmail": 1,
        "vocabulary.lessonNo": 1,
        "vocabulary.lessonName": "$lessonDetails.lessonName",
      },
    },
  ]);

  return result[0];
};

export const LessonService = {
  lessonCreateIntoDB,
  getAllLessonsIntoDB,
  updateLessonIntoDB,
  getSingleLessonIntoDB,
  deleteLessonIntoDB,
};
