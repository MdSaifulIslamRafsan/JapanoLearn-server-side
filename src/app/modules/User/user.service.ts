import { HttpStatus } from "http-status-ts";
import AppError from "../../error/AppError";
import { TUser } from "./user.interface";
import User from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const userData: Partial<TUser> = payload;

  // set user role
  userData.role = "user";

  //   check email address exists
  const isExistEmail = await User.findOne({ email: payload.email });

  if (isExistEmail) {
    throw new AppError(HttpStatus.CONFLICT ,"Email already exists");
  }

  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUserIntoDB,
};
