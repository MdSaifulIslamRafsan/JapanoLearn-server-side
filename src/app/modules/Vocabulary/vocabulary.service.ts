import mongoose from "mongoose";
import { TVocabulary } from "./vocabulary.interface";
import { Vocabulary } from "./vocabulary.model";

 const createVocabularyIntoDB = async (payload: TVocabulary) => {
  const result =  Vocabulary.create(payload);
  return result;
};

const getAllVocabularyFromDB = async () => {
    const result = await Vocabulary.find({});
    return result;
};

const updateVocabularyIntoDB = async (id: string, payload: Partial<TVocabulary>) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const object = await Vocabulary.findById(objectId);
  console.log('18 line' , object);


    const result = await Vocabulary.findByIdAndUpdate(objectId, payload, { new: true });
    console.log('22 line' , payload)
    console.log('23 line' , result)
    return result;
};



export const VocabularyService = {
    createVocabularyIntoDB,
    getAllVocabularyFromDB,
    updateVocabularyIntoDB
}