
import mongoose from "mongoose";
import { TUser } from "./user.interface";
import User from "./user.model";
type TRole = 'admin' | 'user'

const createUserIntoDB = async (payload: TUser) => {
  const userData: Partial<TUser> = payload;

  // set user role
  userData.role = "user";



  const result = await User.create(payload);
  return result;
};
const getAllUsersFromDB = async() =>{
  const users = await User.find({});
  return users;
}
const makeUserAndAdminIntoDB = async(id : string , role : TRole) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await User.findByIdAndUpdate(objectId , {role}, {new : true});
  return result;
}

export const UserService = {
  createUserIntoDB,
  getAllUsersFromDB,
  makeUserAndAdminIntoDB
};
