import  { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFoundPageError : RequestHandler = (req , res , next) => {
    res.status(StatusCodes.NOT_FOUND).send({
        success : false,
        message : 'Page Not Found',
        error : ''
    })
}

export default NotFoundPageError;