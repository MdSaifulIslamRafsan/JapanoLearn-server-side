import { model, Schema } from "mongoose";
import { TVocabulary } from "./vocabulary.interface";
import Lesson from "../Lesson/lesson.modle";
import AppError from "../../error/AppError";
import { StatusCodes } from "http-status-codes";
import User from "../User/user.model";

const VocabularySchema = new Schema(
  {
    word: { type: String, required: true },
    pronunciation: { type: String, required: true },
    whenToSay: { type: String, required: true },
    meaning : { type: String, required : true },
    lessonNo: { type: Number, required: true },
    adminEmail: { type: String, required: true },
    isDeleted : {
      type : Boolean,
      default : false
  }
  },
  { timestamps: true }
);

VocabularySchema.pre('save', async function (next) {
      const existingLesson = await Lesson.findOne({ lessonNumber: this.lessonNo });
  
      if (!existingLesson) {
        throw new AppError(StatusCodes.NOT_FOUND , `Lesson number ${this.lessonNo} does not exist in the Lesson Data.`);
      }
  
      next();
  });
VocabularySchema.pre('save', async function (next) {
      const existingAdmin = await User.findOne({ email: this.adminEmail });
  
      if (!existingAdmin) {
        throw new AppError(StatusCodes.NOT_FOUND, `Admin with email ${this.adminEmail} does not exist.`);
      }
      if (!(existingAdmin.role === 'admin')) {
        throw new AppError(StatusCodes.FORBIDDEN, 'User does not have the required admin role.');
      }
  
      next();
  });
  

export const Vocabulary = model<TVocabulary>("Vocabulary", VocabularySchema);
