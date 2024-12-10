import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message || 'Something went wrong!';


  res.status(errorStatus).send({
    success: false,
    message: errorMessage,
    err,
  });
};

export default globalErrorHandler;
