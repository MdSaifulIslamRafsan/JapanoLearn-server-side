import { RequestHandler } from "express";
import express from "express";
import AppError from "../error/AppError";
import { HttpStatus } from "http-status-ts";
import  jwt  from 'jsonwebtoken';
import config from "../config";


interface TDecoded {
    id: string;
    email: string;
    iat: number;
    exp: number;
}
interface TUserRequest extends express.Request {
    user?: TDecoded
  }
const verifyToken : RequestHandler = async (req : TUserRequest, res, next) => {
   try {
    const token = req.cookies.token;
    if(!token){
        throw new AppError(HttpStatus.UNAUTHORIZED , "Unauthorized access")
    }

    jwt.verify(token , config.ACCESS_TOKEN_SECRET as string, (err : unknown , decoded : unknown)=>{
        if(err){
            throw new AppError(HttpStatus.UNAUTHORIZED , "Unauthorized access") 
        }
        req.user  = decoded as TDecoded
        next();
    }) 
   } catch (error) {
    next(error);
   }



  
};

export default verifyToken;