import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');
  const router = inject(Router);
  const toastService = inject(ToastService);

  // Attach Authorization header whenever access token is present
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        console.error('❌ Backend connection refused or offline (status 0).');
        toastService.error('Impossible de se connecter au serveur backend. Vérifiez que le serveur NestJS est démarré.');
      }
      if (error.status === 401) {
        console.warn('⚠️ 401 Unauthorized response received — clearing session and redirecting to login.');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};