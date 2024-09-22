import { Component, OnInit } from '@angular/core';
import { PostRequestsService } from '../../services/post-requests.service';

@Component({
  selector: 'app-admin-post-requests',
  templateUrl: './admin-post-requests.component.html',
  styleUrls: ['./admin-post-requests.component.css']
})
export class AdminPostRequestsComponent implements OnInit {
  postRequests: any[] = []; // Adjust type if needed

  constructor(private postRequestsService: PostRequestsService) { }

  ngOnInit(): void {
    this.loadPostRequests();
  }

  loadPostRequests(): void {
    this.postRequestsService.getPostRequests().subscribe(
      data => this.postRequests = data,
      error => console.error('Error fetching post requests:', error)
    );
  }

  approveRequest(requestId: string): void {
    if (confirm('Are you sure you want to approve this post?')) {
      this.postRequestsService.approveRequest(requestId).subscribe(
        () => {
          this.postRequests = this.postRequests.filter(request => request.id !== requestId);
        },
        error => console.error('Error approving post request:', error)
      );
    }
  }

  rejectRequest(requestId: string): void {
    if (confirm('Are you sure you want to reject this post?')) {
      this.postRequestsService.rejectRequest(requestId).subscribe(
        () => {
          this.postRequests = this.postRequests.filter(request => request.id !== requestId);
        },
        error => console.error('Error rejecting post request:', error)
      );
    }
  }
}
