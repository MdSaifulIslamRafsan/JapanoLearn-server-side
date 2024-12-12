import { TVocabulary } from "./vocabulary.interface";
import { Vocabulary } from "./vocabulary.model";

 const createVocabularyIntoDB = async (payload: TVocabulary) => {
  const result =  Vocabulary.create(payload);
  return result;
};



export const VocabularyService = {
    createVocabularyIntoDB
}