import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { VocabularyService } from "./vocabulary.service";

const createVocabulary = catchAsync(async(req, res) => {
  const VocabularyData = req.body;
  const vocabulary = await VocabularyService.createVocabularyIntoDB(VocabularyData);

  sendResponse(res, {
    success : true,
    statusCode : StatusCodes.OK,
    message: "Vocabulary created successfully",
    data: vocabulary
  })
});

export const VocabularyController = {
    createVocabulary
}