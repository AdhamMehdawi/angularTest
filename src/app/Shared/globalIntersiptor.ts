import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError, tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //
    //
    //
    //

    //let token = localStorage.getItem("token");

//  {
//      "Authorization": token
//  }

// const newRequest = req.clone({
//  headers: req.headers.set("Authorization",'Bearer '+token);
// });


    return next.handle(req).pipe(
      retry(1),
    //   tap(
    //     (event) => {
    //       if (event instanceof HttpRequest) {
    //         if (event.body.notification === true) {
    //           alert(event.body.message);
    //         }
    //       }
    //     },
    //     (error) => {}
    //   )
    //   catchError((error: HttpErrorResponse) => {
    //     if (error.status === 400) {
    //       //bad request
    //     }
    //     if (error.status === 401) {
    //       //unauthorized
    //       //  redirect to login
    //       this.router.navigate(['/login']);
    //     }
    //   }),
    //   finalize(() => {
    //     alert('finalize');
    //   })
    );
  }
}
