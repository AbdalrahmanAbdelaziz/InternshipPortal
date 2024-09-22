import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RoleSelectionPageComponent } from './components/role-selection-page/role-selection-page.component';
import { UniversityRegisterPageComponent } from './components/university-register-page/university-register-page.component';
import { CompanyRegisterPageComponent } from './components/company-register-page/company-register-page.component';
import { RegisterRoleSelectionPageComponent } from './components/register-role-selection-page/register-role-selection-page.component';
import { ChooseComponent } from './components/choose/choose.component';  // Import the ChooseComponent
import { ProfileComponent } from './components/profile/profile.component';
import { MyInternshipsComponent } from './components/my-internships/my-internships.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { TraineesComponent } from './components/trainees/trainees.component';
import { MakePostComponent } from './components/make-post/make-post.component';
import { RequestsForCompanyComponent } from './components/requests-for-company/requests-for-company.component';
import { UniversityHomeComponent } from './components/university-home/university-home.component';
import { RequestsForUniversityComponent } from './components/requests-for-university/requests-for-university.component';
import { StudentsComponent } from './components/students/students.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminTraineesComponent } from './components/admin-trainees/admin-trainees.component';
import { AdminCompaniesComponent } from './components/admin-companies/admin-companies.component';
import { AdminUniversitiesComponent } from './components/admin-universities/admin-universities.component';
import { AdminPostRequestsComponent } from './components/admin-post-requests/admin-post-requests.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/choose', pathMatch: 'full' }, // Default route
  { path: 'choose', component: ChooseComponent }, // Route for ChooseComponent
  { path: 'select-role', component: RoleSelectionPageComponent },
  { path: 'register-role', component: RegisterRoleSelectionPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: 'apply/:internshipId', component: ApplyPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'register/student', component: RegisterPageComponent },
  { path: 'register/company', component: CompanyRegisterPageComponent },
  { path: 'register/university', component: UniversityRegisterPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'internships', component: MyInternshipsComponent},
  { path: 'companyHome', component: CompanyHomeComponent},
  { path: 'trainees', component: TraineesComponent},
  { path: 'make-post', component: MakePostComponent},
  { path: 'reqForCom', component: RequestsForCompanyComponent},
  { path: 'universityHome', component: UniversityHomeComponent},
  { path: 'uniRequests', component: RequestsForUniversityComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path:'admin-trainees', component: AdminTraineesComponent},
  { path: 'admin-companies', component: AdminCompaniesComponent},
  { path: 'admin-universities', component: AdminUniversitiesComponent},
  { path: 'post-requests', component: AdminPostRequestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


// , canActivate: [AuthGuard]