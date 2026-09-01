import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: 'ADMIN' | 'HR' | 'USER';
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  
  currentUser = signal<User | null>(null);

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.currentUser.set(response.user);
      }),
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUserRole(): 'ADMIN' | 'HR' | 'USER' | null {
    const user = this.currentUser();
    return user ? user.role : null;
  }

  private loadUserFromStorage() {
    const token = this.getToken();
    const userJson = localStorage.getItem('user');
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        this.currentUser.set(user);
      } catch (e) {
        this.logout();
      }
    }
  }
}

