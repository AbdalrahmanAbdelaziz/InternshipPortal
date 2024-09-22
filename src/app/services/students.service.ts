import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DELETE_STUDENT_URL, STUDENTS_URL } from '../shared/constants/urls';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(STUDENTS_URL);
  }

  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${DELETE_STUDENT_URL}/${studentId}`);
  }
}
