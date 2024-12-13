import { TLesson } from "./lesson.interface";
import { model, Schema } from "mongoose";

const LessonSchema = new Schema<TLesson>({
  lessonName: { type: String, required: true },
  lessonNumber: { type: Number, required: true, unique: true },
  vocabularyCount: { type: Number, default: 0 },
  isDeleted : {
    type : Boolean,
    default : false
}
},
{
  timestamps: true,
}
);

// Query Middleware
LessonSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

LessonSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});



LessonSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Lesson = model<TLesson>("Lesson", LessonSchema);

export default Lesson;
