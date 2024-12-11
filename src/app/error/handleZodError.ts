import { ZodError, ZodIssue } from "zod";
import { TErrorSources, TGenericError } from "../interface/error";
import { HttpStatus } from "http-status-ts";


const handleZodError = (err: ZodError) : TGenericError => {
    const statusCode = HttpStatus.BAD_REQUEST;
    const errorSources : TErrorSources[] = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    return {
      statusCode,
      message: 'zod validation error',
      errorSources,
    };
  };
export default handleZodError