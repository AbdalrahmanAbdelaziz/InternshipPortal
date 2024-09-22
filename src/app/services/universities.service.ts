import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DELETE_UNIVERSITY_URL, UNIVERSITIES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<any[]> {
    return this.http.get<any[]>(UNIVERSITIES_URL);
  }

  deleteUniversity(universityId: string): Observable<void> {
    return this.http.delete<void>(`${DELETE_UNIVERSITY_URL}/${universityId}`);
  }
}
