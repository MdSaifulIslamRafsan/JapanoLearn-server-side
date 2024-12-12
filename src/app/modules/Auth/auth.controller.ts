
import catchAsync from "../../utils/catchAsync";
import AppError from "../../error/AppError";
import { AuthService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const userLogin = catchAsync(async (req , res) => {
    const { email, password} = req.body;
    if (!email) {
        throw new AppError(StatusCodes.NOT_FOUND , "Please provide email");
    }
    if (!password) {
        throw new AppError(StatusCodes.NOT_FOUND , "Please provide password");
    }

  const result = await AuthService.loginIntoDB(email, password);

  res.cookie('token', result.token, {
    expires: new Date(Date.now() + 3600000), 
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'none', 
  });
  

  sendResponse(res , {
    success: true,
    statusCode : StatusCodes.OK,
    message: "User logged in successfully",
    data: result
  })





})


const userLogout = catchAsync(async(req , res) => {
  res.clearCookie('token', {maxAge : 0});
  sendResponse(res , {
    success: true,
    statusCode : StatusCodes.OK,
    message: "User logged out successfully",
    data: null
  })
})

export const AuthController = {
    userLogin,
    userLogout
};