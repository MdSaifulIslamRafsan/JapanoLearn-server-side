import AppError from "../error/AppError";
import User from "../modules/User/user.model";
import  express, {  RequestHandler }  from 'express';
import { StatusCodes } from "http-status-codes";

interface TDecoded {
    id: string;
    email: string;
    iat: number;
    exp: number;
}
interface TUserRequest extends express.Request {
    user?: TDecoded
}

const verifyAdmin : RequestHandler = async (req : TUserRequest, res , next )  => {
  try {
    if(!req.user){
        throw new AppError(StatusCodes.UNAUTHORIZED, "unauthorized access")
    }
    const email = req.user.email;

    const user = await User.findOne({ email });

    if (user?.role !== "admin") {
        throw new AppError(StatusCodes.FORBIDDEN ,"forbidden access")
    }
    next();
  } catch (error) {
    next(error)
  }
};

export default verifyAdmin;
