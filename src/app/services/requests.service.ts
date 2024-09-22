import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests_URL, ACCEPT_REQUEST_URL, REJECT_REQUEST_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  getAllRequests(): Observable<any[]> {
    return this.http.get<any[]>(Requests_URL); // Adjust endpoint if needed
  }

  acceptRequest(requestId: string): Observable<void> {
    return this.http.post<void>(`${ACCEPT_REQUEST_URL}/${requestId}`, {});
  }

  rejectRequest(requestId: string): Observable<void> {
    return this.http.post<void>(`${REJECT_REQUEST_URL}/${requestId}`, {});
  }
}
