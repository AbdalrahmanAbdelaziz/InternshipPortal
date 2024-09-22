import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-for-company',
  templateUrl: './requests-for-company.component.html',
  styleUrls: ['./requests-for-company.component.css']
})
export class RequestsForCompanyComponent implements OnInit {
  requests: any[] = []; // Adjust type as needed

  constructor(private requestsService: RequestsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchRequests();
  }

  fetchRequests(): void {
    this.requestsService.getAllRequests().subscribe(data => {
      this.requests = data;
    }, error => {
      console.error('Error fetching requests', error);
    });
  }

  acceptRequest(requestId: string): void {
    this.requestsService.acceptRequest(requestId).subscribe(() => {
      this.router.navigate(['/trainees']); // Redirect to trainees page
      this.fetchRequests(); // Refresh the list
    }, error => {
      console.error('Error accepting request', error);
    });
  }

  rejectRequest(requestId: string): void {
    this.requestsService.rejectRequest(requestId).subscribe(() => {
      this.fetchRequests(); // Refresh the list
    }, error => {
      console.error('Error rejecting request', error);
    });
  }
}
