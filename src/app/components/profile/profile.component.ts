import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IUserRegister } from '../../shared/interfaces/IUserRegister';
import { IComRegister } from '../../shared/interfaces/IComRegister';
import { IUniRegister } from '../../shared/interfaces/IUniRegister';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileType: 'user' | 'company' | 'university' = 'user'; // Set default profile type
  isEditing = false;
  user: IUserRegister | null = null;
  company: IComRegister | null = null;
  university: IUniRegister | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      major: [''],
      startDate: [''],
      gradDate: [''],
      cvFile: [null],
      
      gpa: [''],
      nationalID: [''],
      companyName: [''],
      companyEmail: [''],
      companyPassword: [''],
      companyConfirmPassword: [''],
      location: [''],
      companyLogo: [null],
      companyDesc: [''],
      websiteLink: [''],
      industry: [''],
      UniName: [''],
      UniEmail: [''],
      UniPassword: [''],
      UniConfirmPassword: [''],
      accreditation: [false],
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    // Example: Load profile based on profileType
    if (this.profileType === 'user') {
      this.authService.getUserProfile().subscribe(profile => {
        this.user = profile;
        this.profileForm.patchValue(this.user);
      });
    } else if (this.profileType === 'company') {
      this.authService.getCompanyProfile().subscribe(profile => {
        this.company = profile;
        this.profileForm.patchValue(this.company);
      });
    } else if (this.profileType === 'university') {
      this.authService.getUniversityProfile().subscribe(profile => {
        this.university = profile;
        this.profileForm.patchValue(this.university);
      });
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    this.profileForm.patchValue({
      [controlName]: file
    });
  }

  onSubmit() {
    if (this.profileType === 'user') {
      this.authService.updateUserProfile(this.profileForm.value).subscribe();
    } else if (this.profileType === 'company') {
      this.authService.updateCompanyProfile(this.profileForm.value).subscribe();
    } else if (this.profileType === 'university') {
      this.authService.updateUniversityProfile(this.profileForm.value).subscribe();
    }
    this.isEditing = false;
  }
}
