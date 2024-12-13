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
  
    const result = await Vocabulary.findByIdAndUpdate(objectId, payload, { new: true });
    return result;
};

const deleteVocabularyFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  
    const result = await Vocabulary.findByIdAndUpdate(objectId , {isDeleted :  true} , { new: true });
    return result;
}



export const VocabularyService = {
    createVocabularyIntoDB,
    getAllVocabularyFromDB,
    updateVocabularyIntoDB,
    deleteVocabularyFromDB
}