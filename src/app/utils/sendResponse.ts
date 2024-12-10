import { Response } from "express"

interface TSendResponse<T> {
    success : boolean,
    statusCode : number,
    message?: string,
    data : T
}

const sendResponse = <T> (res : Response , data : TSendResponse<T>) => {
    res.status(data?.statusCode).send({
        success : data.success,
        message : data.message,
        data : data.data
    })
}

export default sendResponse