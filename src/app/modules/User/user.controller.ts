import { HttpStatus } from "http-status-ts";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req , res) => {
    const userData = req.body;
    const result = await UserService.createUserIntoDB(userData)
    sendResponse(res, {
        success : true,
        statusCode: HttpStatus.OK,
        message: "User created successfully",
        data: result,
    })
});

const getAllUser = catchAsync(async (req , res) => {
  const result = await UserService.getAllUsersFromDB()
  sendResponse(res, {
    success : true,
    statusCode: HttpStatus.OK,
    message: "All users fetched successfully",
    data: result,
  })
})

export const UserController = {
  createUser,
  getAllUser,
};
