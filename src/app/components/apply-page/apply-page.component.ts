import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component'; 

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent implements OnInit {
  applyForm!: FormGroup;
  user: User | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog 
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUserInfo();
  }

  private initForm(): void {
    this.applyForm = this.fb.group({
      name: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      major: [{ value: '', disabled: true }],
      startDate: [{ value: '', disabled: true }],
      gradDate: [{ value: '', disabled: true }],
      nationalID: [{ value: '', disabled: true }],
      portfolio: [{ value: '', disabled: true }],
      cvFile: [null],
      gpa: [null, Validators.required]
    });
  }

  private loadUserInfo(): void {
    this.authService.getUserProfile().subscribe(user => {
      this.user = user;
      this.applyForm.patchValue(user);
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.applyForm.get('cvFile')?.setValue(file);
    }
  }

  onSubmit(): void {
    if (this.applyForm.valid) {
      const formData = new FormData();
      Object.keys(this.applyForm.controls).forEach(key => {
        const value = this.applyForm.get(key)?.value;
        if (key === 'cvFile' && value) {
          formData.append(key, value, value.name);
        } else {
          formData.append(key, value);
        }
      });
      this.authService.updateUserProfile(formData).subscribe(
        response => {
          console.log('Profile updated successfully');
          this.dialog.open(SuccessDialogComponent, {
            width: '300px',
            disableClose: true
          }).afterClosed().subscribe(() => {
            this.router.navigate(['/home']);
          });
        },
        error => {
          console.error('Profile update error: ', error);
        }
      );
    }
  }
}
