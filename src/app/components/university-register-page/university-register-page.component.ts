import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUniRegister } from '../../shared/interfaces/IUniRegister';
import { PasswordsMatchValidators } from '../../shared/validators/password_match_validator';
import { AuthService } from '../../services/auth.service'; // Use AuthService instead of UniversityService

@Component({
  selector: 'app-university-register-page',
  templateUrl: './university-register-page.component.html',
  styleUrls: ['./university-register-page.component.css']
})
export class UniversityRegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Inject AuthService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      UniName: ['', Validators.required],
      UniEmail: ['', [Validators.required, Validators.email]],
      UniPassword: ['', Validators.required],
      UniConfirmPassword: ['', Validators.required],
      accreditation: ['', Validators.required],
    }, {
      validators: PasswordsMatchValidators('UniPassword', 'UniConfirmPassword')
    });
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const university: IUniRegister = {
      UniName: fv.UniName,
      UniEmail: fv.UniEmail,
      UniPassword: fv.UniPassword,
      UniConfirmPassword: fv.UniConfirmPassword,
      accreditation: fv.accreditation
    };

    // Use AuthService for registration
    this.authService.registerUniversity(university).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        // Handle error, show message, etc.
        console.error('Registration error', error);
      }
    });
  }
}
