import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Internship } from '../shared/interfaces/internshipInterface';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  private apiUrl = 'https://api.example.com/internships'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Fetch internship details by ID
  getInternshipById(id: string): Observable<Internship> {
    return this.http.get<Internship>(`${this.apiUrl}/${id}`);
  }

  // Apply for an internship by ID
  applyForInternship(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/apply`, {});
  }

  // Fetch all internships for a user
  getInternships(userId: string): Observable<Internship[]> {
    return this.http.get<Internship[]>(`${this.apiUrl}?userId=${userId}`);
  }
}
