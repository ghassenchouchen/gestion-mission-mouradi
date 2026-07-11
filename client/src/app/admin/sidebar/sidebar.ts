import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  @Input() activeItem: 'dashboard' | 'new-mission' | 'missions' | 'settings' | 'suivi-chauffeurs' | 'chauffeurs' = 'dashboard';

  private authService = inject(AuthService);
  private router = inject(Router);

  currentUser = this.authService.currentUser;

  userName = computed(() => {
    const user = this.currentUser();
    return user ? `${user.prenom} ${user.nom}` : 'Utilisateur';
  });

  userRole = computed(() => {
    const user = this.currentUser();
    return user ? (user.role === 'ADMIN' ? 'Administrateur' : 'Ressources Humaines') : '';
  });

  initials = computed(() => {
    const user = this.currentUser();
    if (!user) return 'U';
    const first = user.prenom?.charAt(0) || '';
    const last = user.nom?.charAt(0) || '';
    return (first + last).toUpperCase() || 'U';
  });

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
