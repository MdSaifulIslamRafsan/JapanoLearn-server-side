import  { RequestHandler } from 'express';
import {HttpStatus} from "http-status-ts"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFoundPageError : RequestHandler = (req , res , next) => {
    res.status(HttpStatus.NOT_FOUND).send({
        success : false,
        message : 'Page Not Found',
        error : ''
    })
}

export default NotFoundPageError;