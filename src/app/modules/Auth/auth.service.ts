import { HttpStatus } from "http-status-ts";
import User from "../User/user.model";
import bcrypt from "bcrypt";
import AppError from "../../error/AppError";
import config from "../../config";
import jwt from "jsonwebtoken";

const loginIntoDB = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(HttpStatus.NOT_FOUND, "User not found");
  }

  const isMatchPassword = bcrypt.compareSync(
    password,
    user?.password as string
  );
  if (!isMatchPassword) {
    throw new AppError(HttpStatus.NOT_FOUND, "Invalid credentials");
  }

  // JWT token generation
  const token = jwt.sign(
    { email: user.email, role: user.role },
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
