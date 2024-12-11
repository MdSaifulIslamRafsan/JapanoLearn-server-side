
import { TUser } from "./user.interface";
import User from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const userData: Partial<TUser> = payload;

  // set user role
  userData.role = "user";



  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUserIntoDB,
};
