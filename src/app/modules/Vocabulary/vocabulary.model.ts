import { model, Schema } from "mongoose";
import { TVocabulary } from "./vocabulary.interface";

const VocabularySchema = new Schema(
  {
    word: { type: String, required: true },
    pronunciation: { type: String, required: true },
    whenToSay: { type: String, required: true },
    lessonNo: { type: Number, required: true },
    adminEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export const Vocabulary = model<TVocabulary>("Vocabulary", VocabularySchema);
