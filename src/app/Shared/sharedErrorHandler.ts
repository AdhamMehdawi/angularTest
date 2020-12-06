export class ShredErrorHandler{ 

    static HandleError(error): any
    {
        if (error.error instanceof ErrorEvent) {
            console.log(error);
            //client side error
          } else {
            //server side error
            console.log(error.status);
          }
          return throwError('error on server');
    }
}