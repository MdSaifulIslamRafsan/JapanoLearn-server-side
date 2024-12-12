import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { LessonService } from "./lesson.service";

const createLesson = catchAsync(async(req , res) => {
    const lesson = req.body;
    const newLesson = await LessonService.lessonCreateIntoDB(lesson);

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Lesson created successfully",
        data: newLesson
    })


})

const getAllLessons = catchAsync(async(req , res)=>{
    const result = await LessonService.getAllLessonsIntoDB();
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Lessons fetched successfully",
        data: result
    });
})

export const LessonController ={
    createLesson,
    getAllLessons
};