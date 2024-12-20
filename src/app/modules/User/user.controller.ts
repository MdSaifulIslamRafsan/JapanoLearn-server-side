
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";
import { StatusCodes } from "http-status-codes";

const createUser = catchAsync(async (req , res) => {
    const userData = req.body;
    const result = await UserService.createUserIntoDB(userData)
    sendResponse(res, {
        success : true,
        statusCode: StatusCodes.OK,
        message: "User created successfully",
        data: result,
    })
});

const getAllUser = catchAsync(async (req , res) => {
  const result = await UserService.getAllUsersFromDB()
  sendResponse(res, {
    success : true,
    statusCode: StatusCodes.OK,
    message: "All users fetched successfully",
    data: result,
  })
})

const makeUserAndAdmin = catchAsync(async(req , res) => {
  const {id} = req.params;
  const {role} = req.body;


  const result = await UserService.makeUserAndAdminIntoDB(id, role);

  sendResponse(res, {
    success : true,
    statusCode: StatusCodes.OK,
    message: `Role updated to ${role}`,
    data: result,
  })



  

})

export const UserController = {
  createUser,
  getAllUser,
  makeUserAndAdmin
};
