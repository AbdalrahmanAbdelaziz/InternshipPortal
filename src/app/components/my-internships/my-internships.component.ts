import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InternshipService } from '../../services/internship.service';
import { AuthService } from '../../services/auth.service';
import { Internship } from '../../shared/interfaces/internshipInterface';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-my-internships',
  templateUrl: './my-internships.component.html',
  styleUrls: ['./my-internships.component.css']
})
export class MyInternshipsComponent implements OnInit, OnDestroy {
  internships: Internship[] = [];
  userSubscription!: Subscription;

  constructor(
    private internshipService: InternshipService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.getCurrentUser().subscribe((user: User) => {
      this.internshipService.getInternships(user.id).subscribe(
        (internships: Internship[]) => {
          this.internships = internships;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching internships', error);
        }
      );
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'Accepted':
        return 'status-accepted';
      case 'Rejected':
        return 'status-rejected';
      case 'Finished':
        return 'status-finished';
      default:
        return '';
    }
  }

  isEvaluationDisabled(internship: Internship): boolean {
    return internship.status !== 'Done';
  }

  isCertificateDisabled(internship: Internship): boolean {
    return !internship.certificateLink || internship.status !== 'Done';
  }
}
