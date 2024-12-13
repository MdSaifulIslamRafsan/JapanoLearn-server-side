import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { VocabularyService } from "./vocabulary.service";

const createVocabulary = catchAsync(async (req, res) => {
  const VocabularyData = req.body;

  const vocabulary =
    await VocabularyService.createVocabularyIntoDB(VocabularyData);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Vocabulary created successfully",
    data: vocabulary,
  });
});

const getAllVocabulary = catchAsync(async (req, res) => {
  const result = await VocabularyService.getAllVocabularyFromDB();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "All vocabularies retrieved successfully",
    data: result,
  });
});

const updateVocabulary = catchAsync(async(req, res) => {
  const {id} = req.params;
  const {currentvocabulary} = req.body;
  
  const result = await VocabularyService.updateVocabularyIntoDB(id, currentvocabulary);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Vocabulary updated successfully",
    data: result,
  });

  
})

export const VocabularyController = {
  createVocabulary,
  getAllVocabulary,
  updateVocabulary,
};
