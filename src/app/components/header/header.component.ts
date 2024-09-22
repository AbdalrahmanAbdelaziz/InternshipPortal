import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/models/user';
import { University } from '../../shared/models/university';
import { Company } from '../../shared/models/company';
import { Router } from '@angular/router';
import { Admin } from '../../shared/models/admin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User | null = null;
  university: University | null = null;
  company: Company | null = null;
  admin: Admin | null = null;
  isLoginPage: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });

    this.authService.universityObservable.subscribe((newUniversity) => {
      this.university = newUniversity;
    });

    this.authService.companyObservable.subscribe((newCompany) => {
      this.company = newCompany;
    });

    this.router.events.subscribe(() => {
      this.checkIfLoginPage();
    });

    this.checkIfLoginPage();
  }

  checkIfLoginPage(): void {
    this.isLoginPage = this.router.url === '/login';
  }

  logout() {
    this.authService.logout();
  }

  get isAuth() {
    return (this.user && this.user.token) || 
           (this.university && this.university.token) || 
           (this.company && this.company.token);
  }

  get displayName() {
    if (this.user && this.user.token) {
      return this.user.name;
    } else if (this.university && this.university.token) {
      return this.university.UniName;
    } else if (this.company && this.company.token) {
      return this.company.companyName;
    }
    return '';
  }

  // Method to check if the current role is 'student'
  isStudentRole(): boolean {
    return this.user?.role === 'student';
  }

  // Method to check if the current role is 'admin'
  isAdminRole(): boolean {
    return this.admin?.role === 'admin';
  }
}
