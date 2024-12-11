import { HttpStatus } from "http-status-ts";
import catchAsync from "../../utils/catchAsync";
import AppError from "../../error/AppError";
import { AuthService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";

const userLogin = catchAsync(async (req , res) => {
    const { email, password} = req.body;
    if (!email) {
        throw new AppError(HttpStatus.NOT_FOUND , "Please provide email");
    }
    if (!password) {
        throw new AppError(HttpStatus.NOT_FOUND , "Please provide password");
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
    statusCode : HttpStatus.OK,
    message: "User logged in successfully",
    data: result
  })





})

export const AuthController = {
    userLogin
};