import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RoleSelectionPageComponent } from './components/role-selection-page/role-selection-page.component';
import { CompanyRegisterPageComponent } from './components/company-register-page/company-register-page.component';
import { UniversityRegisterPageComponent } from './components/university-register-page/university-register-page.component';
import { RegisterRoleSelectionPageComponent } from './components/register-role-selection-page/register-role-selection-page.component';
import { ChooseComponent } from './components/choose/choose.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
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
import { TokenInterceptor } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    PostPageComponent,
    ApplyPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputValidationComponent,
    TextInputComponent,
    RegisterPageComponent,
    RoleSelectionPageComponent,
    CompanyRegisterPageComponent,
    UniversityRegisterPageComponent,
    RegisterRoleSelectionPageComponent,
    ChooseComponent,
    ProfileComponent,
    SuccessDialogComponent,
    MyInternshipsComponent,
    CompanyHomeComponent,
    TraineesComponent,
    MakePostComponent,
    RequestsForCompanyComponent,
    UniversityHomeComponent,
    RequestsForUniversityComponent,
    StudentsComponent,
    AdminPageComponent,
    AdminTraineesComponent,
    AdminCompaniesComponent,
    AdminUniversitiesComponent,
    AdminPostRequestsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
    
  ],
  providers: [
    provideAnimationsAsync(),
    CookieService, // Make sure CookieService is provided
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
