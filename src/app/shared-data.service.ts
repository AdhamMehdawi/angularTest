import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  datToShare = new BehaviorSubject<any>({ id: 10, name: 'test' });
  lookups = new BehaviorSubject<any>(null);
  obj2 = { id: 10, Name: 'test' };

  constructor(private http: HttpClient) {}

  changeDataValues(obj) {
    this.datToShare.next(obj);
  }

  getLookupsByType(types): Observable<any> {
    return this.lookups.pipe(
      mergeMap((e) => {
        if (e) {
          return e;
        }
        return this.http.post(
          'http://localhost:52710/api/Lookups/GetByType',
          types
        );
      })
    );
  }
}
