import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error";
import { ZodError } from "zod";
import handleZodError from "../error/handleZodError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let errorStatus = err.statusCode || 500;
  let errorMessage = err.message || "Something went wrong!";

  let errorSource: TErrorSources[] = [
    {
      path: "",
      message: "something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    errorStatus = simplifiedError.StatusCode;
    errorMessage = simplifiedError.message;
    errorSource = simplifiedError.errorSource;
  }

  res.status(errorStatus).send({
    success: false,
    message: errorMessage,
    errorSource,
  });
};

export default globalErrorHandler;
