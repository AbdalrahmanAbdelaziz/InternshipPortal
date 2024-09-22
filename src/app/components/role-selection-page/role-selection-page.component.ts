// role-selection-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection-page',
  templateUrl: './role-selection-page.component.html',
  styleUrls: ['./role-selection-page.component.css']
})
export class RoleSelectionPageComponent {

  constructor(private router: Router) {}

  selectRole(role: string) {
    this.router.navigate(['/login'], { queryParams: { role: role } });
  }

  navigateToRegister() {
    this.router.navigate(['/register-role']);
  }
}
