import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, debounce, debounceTime, retry } from 'rxjs/operators';
import { ShredErrorHandler } from '../Shared/sharedErrorHandler';
import { environment } from './../../environments/environment';
import { PostModel } from './postmodel';

@Injectable({
  providedIn: 'root',
  // providedIn: 'any'
  // providedIn: 'ModuleName'
})
export class PostService {
  serverUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}

  getPost(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.serverUrl + 'posts').pipe(
      //retry(2),debounceTime(2),debounce(c=>{})
      catchError(this.handleError)
    );
  }

  getCommnets(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.serverUrl + 'posts/' + id + '/comments');
  }

  
  checkEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:61638/api/values/'+email);
  }

  searchPosts(key: string): Observable<PostModel[]> {
    return this.http.post<PostModel[]>(this.serverUrl + 'posts', { key });
  }

  handleError(error) {
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
