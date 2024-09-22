import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    switch(page) {
      case 'trainees':
        this.router.navigate(['/admin-trainees']);
        break;
      case 'companies':
        this.router.navigate(['/admin-companies']);
        break;
      case 'universities':
        this.router.navigate(['/admin-universities']);
        break;
      case 'post-requests':
        this.router.navigate(['/post-requests']);
        break;
      default:
        console.error('Unknown page');
    }
  }
}
