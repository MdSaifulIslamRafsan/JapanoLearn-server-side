import mongoose from "mongoose";
import { TErrorSources, TGenericError } from "../interface/error";
import { StatusCodes } from "http-status-codes";

const handleValidationError = (err : mongoose.Error.ValidationError ) : TGenericError =>{

    const statusCode = StatusCodes.BAD_REQUEST;
    const errorSources : TErrorSources[] = Object.values(err.errors).map((value : mongoose.Error.ValidatorError | mongoose.Error.CastError ) => {
        return {
            path: value.path,
            message : value.message
        }
    });

    return {
        statusCode,
        message: "Validation failed",
        errorSources
    }
}

export default handleValidationError;