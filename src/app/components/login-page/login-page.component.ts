import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Import the unified AuthService

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  selectedRole = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedRole = this.activatedRoute.snapshot.queryParams['role'] || '';

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: [this.selectedRole || '', Validators.required]  
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
  
    if (this.loginForm.invalid) return;
  
    this.authService.login({
      email: this.fc.email.value,
      password: this.fc.password.value,
      role: this.fc.role.value
    }).subscribe(() => {
      // Navigate based on the role
      switch (this.fc.role.value) {
        case 'student':
          this.router.navigateByUrl('/home');
          break;
        case 'admin':
          this.router.navigateByUrl('/admin-page');
          break;
        case 'company':
          this.router.navigateByUrl('/companyHome');
          break;
        case 'university':
          this.router.navigateByUrl('/universityHome');
          break;
        default:
          this.router.navigateByUrl(this.returnUrl); // Fallback to returnUrl
      }
    }, (error) => {
      console.error('Login error: ', error);
    });
  }
}
