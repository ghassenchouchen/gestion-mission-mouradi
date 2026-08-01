import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  showPassword = false;
  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  togglePw() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.cdr.markForCheck();
        // Redirect based on user role
        if (response.user.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (response.user.role === 'HR') {
          this.router.navigate(['/hr/suivi-chauffeurs']);
        } else {
          this.errorMessage = 'Rôle non reconnu. Accès refusé.';
          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.errorMessage = 'Le serveur est hors ligne ou inaccessible.';
        } else {
          this.errorMessage = err.error?.message || 'Identifiants de connexion incorrects.';
        }
        this.cdr.markForCheck();
      },
    });
  }
}
