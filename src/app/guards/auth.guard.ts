import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userObservable.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/choose']); // Redirect to login page if not authenticated
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/choose']); // Redirect to login page in case of error
        return of(false);
      })
    );
  }
}
