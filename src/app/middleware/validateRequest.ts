import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
const validateRequest = (Schema : AnyZodObject ) => {

    return async (req : Request , res : Response , next : NextFunction) => {
        try {
            await Schema.parseAsync({
                body: req.body,
              });
             return next();
        } catch (error) {
            next(error);
        }
    }

}

export default validateRequest;