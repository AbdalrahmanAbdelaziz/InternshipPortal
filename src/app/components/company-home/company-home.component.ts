import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    switch(page) {
      case 'trainees':
        this.router.navigate(['/trainees']);
        break;
      case 'make-post':
        this.router.navigate(['/make-post']);
        break;
      case 'requests':
        this.router.navigate(['/reqForCom']); 
        break;
      default:
        console.error('Unknown page');
    }
  }
}
