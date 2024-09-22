import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APPROVE_POST_REQUEST_URL, POST_REQUESTS_URL, REJECT_POST_REQUEST_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PostRequestsService {

  constructor(private http: HttpClient) { }

  getPostRequests(): Observable<any[]> {
    return this.http.get<any[]>(POST_REQUESTS_URL);
  }

  approveRequest(requestId: string): Observable<void> {
    return this.http.post<void>(`${APPROVE_POST_REQUEST_URL}/${requestId}`, {});
  }

  rejectRequest(requestId: string): Observable<void> {
    return this.http.post<void>(`${REJECT_POST_REQUEST_URL}/${requestId}`, {});
  }
}
