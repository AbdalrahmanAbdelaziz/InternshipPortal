import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCEPT_REQUEST_URL, REJECT_REQUEST_URL, Requests_URL } from '../shared/constants/urls';

// Import the URLs


@Injectable({
  providedIn: 'root'
})
export class RequestsForUniversityService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(Requests_URL);
  }

  acceptRequest(requestId: number): Observable<void> {
    return this.http.post<void>(`${ACCEPT_REQUEST_URL}/${requestId}`, {});
  }

  rejectRequest(requestId: number): Observable<void> {
    return this.http.post<void>(`${REJECT_REQUEST_URL}/${requestId}`, {});
  }
}
