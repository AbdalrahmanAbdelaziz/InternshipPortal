import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordsMatchValidators } from '../../shared/validators/password_match_validator';
import { IComRegister } from '../../shared/interfaces/IComRegister';
import { AuthService } from '../../services/auth.service'; // Use AuthService for registration

@Component({
  selector: 'app-company-register-page',
  templateUrl: './company-register-page.component.html',
  styleUrls: ['./company-register-page.component.css']
})
export class CompanyRegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Use AuthService for company registration
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPassword: ['', Validators.required],
      companyConfirmPassword: ['', Validators.required],
      location: [''],
      accreditation: [''],
      companyLogo: [''],
      companyDesc: [''],
      websiteLink: [''],
      industry: ['']
    }, {
      validators: PasswordsMatchValidators('companyPassword', 'companyConfirmPassword') // Ensure passwords match
    });
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const company: IComRegister = {
      companyName: fv.companyName,
      companyEmail: fv.companyEmail,
      companyPassword: fv.companyPassword,
      companyConfirmPassword: fv.companyConfirmPassword,
      location: fv.location,
      companyLogo: fv.companyLogo,
      companyDesc: fv.companyDesc,
      websiteLink: fv.websiteLink,
      industry: fv.industry
    };

    // Use AuthService for registration
    this.authService.registerCompany(company).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        // Handle registration errors
        console.error('Company registration failed', error);
      }
    });
  }
}
