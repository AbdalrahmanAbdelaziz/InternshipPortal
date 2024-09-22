import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL, USER_REGISTER_URL, COMPANY_REGISTER_URL, UNIVERSITY_REGISTER_URL, USER_PROFILE_URL, COMPANY_PROFILE_URL, UNIVERSITY_PROFILE_URL } from '../shared/constants/urls'; 
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { IComRegister } from '../shared/interfaces/IComRegister';
import { IUniRegister } from '../shared/interfaces/IUniRegister';
import { User } from '../shared/models/user';
import { University } from '../shared/models/university';
import { Company } from '../shared/models/company';
import { Admin } from '../shared/models/admin';  // Import Admin model

// Define local storage keys
const USER_KEY = 'User';
const UNIVERSITY_KEY = 'University';
const COMPANY_KEY = 'Company';
const ADMIN_KEY = 'Admin';  // Define key for Admin

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.example.com'; // Replace with your API URL

  private userSubject = new BehaviorSubject<User | null>(this.getUserFromLocalStorage());
  private universitySubject = new BehaviorSubject<University | null>(this.getUniversityFromLocalStorage());
  private companySubject = new BehaviorSubject<Company | null>(this.getCompanyFromLocalStorage());
  private adminSubject = new BehaviorSubject<Admin | null>(this.getAdminFromLocalStorage()); // Add Admin Subject

  public userObservable: Observable<User | null>;
  public universityObservable: Observable<University | null>;
  public companyObservable: Observable<Company | null>;
  public adminObservable: Observable<Admin | null>; // Add Admin Observable

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
    this.universityObservable = this.universitySubject.asObservable();
    this.companyObservable = this.companySubject.asObservable();
    this.adminObservable = this.adminSubject.asObservable(); // Initialize Admin Observable
  }

  // Unified login method
  login(userLogin: IUserLogin): Observable<any> {
    return this.http.post<any>(LOGIN_URL, userLogin).pipe(
      tap({
        next: (response) => {
          if (response.role === 'user') {
            const user = response as User;
            this.setUserToLocalStorage(user);
            this.userSubject.next(user);
            this.toastrService.success(`Welcome ${user.name}!`, 'Login Successful');
          } else if (response.role === 'university') {
            const university = response as University;
            this.setUniversityToLocalStorage(university);
            this.universitySubject.next(university);
            this.toastrService.success(`Welcome ${university.UniName}!`, 'Login Successful');
          } else if (response.role === 'company') {
            const company = response as Company;
            this.setCompanyToLocalStorage(company);
            this.companySubject.next(company);
            this.toastrService.success(`Welcome ${company.companyName}!`, 'Login Successful');
          } else if (response.role === 'admin') { // Handle Admin role
            const admin = response as Admin;
            this.setAdminToLocalStorage(admin);
            this.adminSubject.next(admin);
            this.toastrService.success(`Welcome ${admin.name}!`, 'Login Successful');
          }
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  // Unified registration methods for users, universities, companies, and admins
  registerUser(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(`Welcome ${user.name}!`, 'Registration Successful');
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Registration Failed');
        }
      })
    );
  }

  registerUniversity(uniRegister: IUniRegister): Observable<University> {
    return this.http.post<University>(UNIVERSITY_REGISTER_URL, uniRegister).pipe(
      tap({
        next: (university) => {
          this.setUniversityToLocalStorage(university);
          this.universitySubject.next(university);
          this.toastrService.success(`Welcome ${university.UniName}!`, 'Registration Successful');
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Registration Failed');
        }
      })
    );
  }

  registerCompany(comRegister: IComRegister): Observable<Company> {
    return this.http.post<Company>(COMPANY_REGISTER_URL, comRegister).pipe(
      tap({
        next: (company) => {
          this.setCompanyToLocalStorage(company);
          this.companySubject.next(company);
          this.toastrService.success(`Welcome ${company.companyName}!`, 'Registration Successful');
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Registration Failed');
        }
      })
    );
  }

  // registerAdmin(adminRegister: Admin): Observable<Admin> { // Add Admin registration method
  //   return this.http.post<Admin>(ADMIN_REGISTER_URL, adminRegister).pipe(
  //     tap({
  //       next: (admin) => {
  //         this.setAdminToLocalStorage(admin);
  //         this.adminSubject.next(admin);
  //         this.toastrService.success(`Welcome ${admin.name}!`, 'Registration Successful');
  //       },
  //       error: (errorResponse) => {
  //         this.toastrService.error(errorResponse.error, 'Registration Failed');
  //       }
  //     })
  //   );
  // }

  // Unified logout method
  logout() {
    this.userSubject.next(null);
    this.universitySubject.next(null);
    this.companySubject.next(null);
    this.adminSubject.next(null); // Clear Admin Subject
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(UNIVERSITY_KEY);
    localStorage.removeItem(COMPANY_KEY);
    localStorage.removeItem(ADMIN_KEY); // Remove Admin key
    window.location.reload();  // Optional: reload the page after logout
  }

  // Helper methods for handling local storage for each role
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return null;
  }

  private setUniversityToLocalStorage(university: University) {
    localStorage.setItem(UNIVERSITY_KEY, JSON.stringify(university));
  }

  private getUniversityFromLocalStorage(): University | null {
    const universityJson = localStorage.getItem(UNIVERSITY_KEY);
    if (universityJson) return JSON.parse(universityJson) as University;
    return null;
  }

  private setCompanyToLocalStorage(company: Company) {
    localStorage.setItem(COMPANY_KEY, JSON.stringify(company));
  }

  private getCompanyFromLocalStorage(): Company | null {
    const companyJson = localStorage.getItem(COMPANY_KEY);
    if (companyJson) return JSON.parse(companyJson) as Company;
    return null;
  }

  private setAdminToLocalStorage(admin: Admin) { // Add Admin to local storage
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  }

  private getAdminFromLocalStorage(): Admin | null { // Get Admin from local storage
    const adminJson = localStorage.getItem(ADMIN_KEY);
    if (adminJson) return JSON.parse(adminJson) as Admin;
    return null;
  }

  // Update profile methods
  updateUserProfile(formData: FormData): Observable<any> {
    return this.http.put(USER_PROFILE_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
  
  updateCompanyProfile(formData: FormData): Observable<any> {
    return this.http.put(COMPANY_PROFILE_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }
  
  updateUniversityProfile(formData: FormData): Observable<any> {
    return this.http.put(UNIVERSITY_PROFILE_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  }

  // updateAdminProfile(formData: FormData): Observable<any> { // Add Admin profile update
  //   return this.http.put(ADMIN_PROFILE_URL, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  // }

  // New methods to get profiles
  getUserProfile(): Observable<User> {
    return this.http.get<User>(USER_PROFILE_URL);
  }

  getCompanyProfile(): Observable<Company> {
    return this.http.get<Company>(COMPANY_PROFILE_URL);
  }

  getUniversityProfile(): Observable<University> {
    return this.http.get<University>(UNIVERSITY_PROFILE_URL);
  }

  // getAdminProfile(): Observable<Admin> { // Add Admin profile get
  //   return this.http.get<Admin>(ADMIN_PROFILE_URL);
  // }

  //internships
  getCurrentUser(): Observable<User> {
    return this.userObservable as Observable<User>;
  }
}
