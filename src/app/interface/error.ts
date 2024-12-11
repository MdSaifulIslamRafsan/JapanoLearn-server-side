export interface TErrorSources {
    path: string | number;
    message: string;
  }


export interface TGenericError {
    statusCode: number;
    message: string;
    errorSources: TErrorSources[];
}