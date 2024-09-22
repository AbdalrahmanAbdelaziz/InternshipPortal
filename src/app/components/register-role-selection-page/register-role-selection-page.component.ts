import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-role-selection-page',
  templateUrl: './register-role-selection-page.component.html',
  styleUrls: ['./register-role-selection-page.component.css']
})
export class RegisterRoleSelectionPageComponent {

  role: string | null = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.role = this.activatedRoute.snapshot.queryParams['role'];
  }

  registerAs(role: string) {
    this.router.navigate([`/register/${role}`]);
  }
}
