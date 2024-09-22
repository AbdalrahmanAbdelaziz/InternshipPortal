import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordsMatchValidators } from '../../shared/validators/password_match_validator';
import { IUserRegister } from '../../shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'] // Fixed styleUrls typo
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Use AuthService instead of UserService
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required], // Ensure confirmPassword matches field name
      major: ['', Validators.required],
      startDate: ['', Validators.required],
      gradDate: ['', Validators.required],
      cvFile: ['', Validators.required],
      portfolio: [''],
      gpa: ['', Validators.required],
      nationalID: ['', Validators.required]
    }, {
      validators: PasswordsMatchValidators('password', 'confirmPassword') // Fixed field name in validator
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/'; // Default to home if no returnUrl
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword, // Fixed field name
      major: fv.major,
      startDate: fv.startDate,
      gradDate: fv.gradDate, // Fixed gradDate value (was using startDate)
      cvFile: fv.cvFile,
      portfolio: fv.portfolio,
      gpa: fv.gpa,
      nationalID: fv.nationalID
    };

    // Use AuthService for registration
    this.authService.registerUser(user).subscribe({
      next: () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (error) => {
        // Handle registration error (show message or log)
        console.error('Registration failed', error);
      }
    });
  }
}
