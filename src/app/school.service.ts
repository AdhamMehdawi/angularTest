import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  getSchools(pageNumber: number): Observable<any> {
    return this.http.get<any>('http://localhost:61638/api/Institution/GetInstitutionForDropdown?page='+pageNumber);
  }
}
