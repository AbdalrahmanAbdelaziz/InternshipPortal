import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get token from cookies
    const token = this.cookieService.get('access_token');

    // Clone the request and add token as an Authorization header if it exists
    let clonedReq = req;
    if (token) {
      clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Handle the request and look for the token in the response
    return next.handle(clonedReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Check if response contains the token
          const newToken = event.headers.get('Authorization');
          if (newToken) {
            // Save the token in cookies
            this.cookieService.set('access_token', newToken.split(' ')[1]); // Assuming token is "Bearer <token>"
          }
        }
      }, (error: HttpErrorResponse) => {
        // Handle errors globally if needed
        console.error('Error occurred:', error);
      })
    );
  }
}
