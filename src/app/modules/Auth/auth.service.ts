
import User from "../User/user.model";
import bcrypt from "bcrypt";
import AppError from "../../error/AppError";
import config from "../../config";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const loginIntoDB = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User not found");
  }

  const isMatchPassword = bcrypt.compareSync(
    password,
    user?.password as string
  );
  if (!isMatchPassword) {
    throw new AppError(StatusCodes.NOT_FOUND, "Invalid credentials");
  }

  // JWT token generation
  const token = jwt.sign(
    {
        id: user._id,
        email: user.email,
      },
    config.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: "90d",
    }
  );

  return { user, token };
};

export const AuthService = {
  loginIntoDB,
};
