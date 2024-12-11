import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import { ZodError } from "zod";
import handleZodError from "../error/handleZodError";
import handleValidationError from "../error/handlevalidationError";
import config from "../config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let errorStatus = err.statusCode || 500;
  let errorMessage = err.message || "Something went wrong!";

  let errorSource: TErrorSources[] = [
    {
      path: "",
      message: err.message,
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    errorStatus = simplifiedError.statusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
  }else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    errorStatus = simplifiedError.statusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSources;
}

  res.status(errorStatus).send({
    success: false,
    message: errorMessage,
    errorSource,
    stack : config.NODE_ENV === 'development' ? err?.stack : null
  });
};

export default globalErrorHandler;
