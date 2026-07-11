import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Functional HTTP Interceptor that automatically appends the JWT access token
 * to all requests targeting the backend NestJS server.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');

  if (token && req.url.startsWith('http://localhost:3000')) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};