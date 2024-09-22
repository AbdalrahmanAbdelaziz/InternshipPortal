import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainee } from '../shared/interfaces/traineeInterface';
import { TRAINEES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  constructor(private http: HttpClient) {}

  // Fetch all trainees
  getTrainees(): Observable<Trainee[]> {
    return this.http.get<Trainee[]>(TRAINEES_URL);
  }

  // Add methods for updating trainee's evaluation or uploading certificate
  updateTraineeEvaluation(traineeId: string, evaluation: string): Observable<any> {
    return this.http.put(`${TRAINEES_URL}/${traineeId}/evaluation`, { evaluation });
  }

  uploadCertificate(traineeId: string, certificate: File): Observable<any> {
    const formData = new FormData();
    formData.append('certificate', certificate);
    return this.http.post(`${TRAINEES_URL}/${traineeId}/certificate`, formData);
  }
}
