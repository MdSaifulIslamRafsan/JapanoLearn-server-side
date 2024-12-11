import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/error";
import { HttpStatus } from "http-status-ts";


const handleZodError = (err: ZodError) => {
    const StatusCode = HttpStatus.BAD_REQUEST;
    const errorSource : TErrorSources[] = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    return {
      StatusCode,
      message: 'zod validation error',
      errorSource,
    };
  };
export default handleZodError