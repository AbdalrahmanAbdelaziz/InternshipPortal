import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsForUniversityService } from '../../services/requests-for-university.service';

@Component({
  selector: 'app-requests-for-university',
  templateUrl: './requests-for-university.component.html',
  styleUrls: ['./requests-for-university.component.css']
})
export class RequestsForUniversityComponent implements OnInit {
  requests: any[] = [];

  constructor(
    private requestsService: RequestsForUniversityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.requestsService.getRequests().subscribe(
      (data) => this.requests = data,
      (error) => console.error('Error loading requests', error)
    );
  }

  acceptRequest(requestId: number) {
    this.requestsService.acceptRequest(requestId).subscribe(
      () => {
        this.requests = this.requests.filter(request => request.id !== requestId);
        this.router.navigate(['/trainees']); // Navigate to the trainees page
      },
      (error) => console.error('Error accepting request', error)
    );
  }

  rejectRequest(requestId: number) {
    this.requestsService.rejectRequest(requestId).subscribe(
      () => {
        this.requests = this.requests.filter(request => request.id !== requestId);
      },
      (error) => console.error('Error rejecting request', error)
    );
  }
}
