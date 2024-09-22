import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COMPANIES_URL, DELETE_COMPANY_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(COMPANIES_URL);
  }

  deleteCompany(companyId: string): Observable<void> {
    return this.http.delete<void>(`${DELETE_COMPANY_URL}/${companyId}`);
  }
}
