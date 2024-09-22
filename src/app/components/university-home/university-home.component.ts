// university-home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-home',
  templateUrl: './university-home.component.html',
  styleUrls: ['./university-home.component.css']
})
export class UniversityHomeComponent {

  constructor(private router: Router) { }

  navigateToRequests() {
    this.router.navigate(['/uniRequests']);
  }

  navigateToAllStudents() {
    this.router.navigate(['/students']);
  }

}
