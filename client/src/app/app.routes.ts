import { Routes } from '@angular/router';
import { Login } from './login/login';
import { AdminDashboard } from './admin/dashboard/dashboard';
import { NouvelleMission } from './admin/nouvelle-mission/nouvelle-mission';
import { MissionsList } from './admin/missions/missions';
import { Settings } from './admin/settings/settings';
import { HrDashboard } from './hr/dashboard/dashboard';
import { HrMissionsList } from './hr/missions/missions';
import { CalendrierChauffeurs } from './hr/calendrier-chauffeurs/calendrier-chauffeurs';
import { HrChauffeursList } from './hr/chauffeurs/chauffeurs';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: 'dashboard', 
    component: AdminDashboard,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'USER'] }
  },
  { 
    path: 'nouvelle-mission', 
    component: NouvelleMission,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'USER'] }
  },
  { 
    path: 'missions', 
    component: MissionsList,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'USER'] }
  },
  { 
    path: 'suivi-chauffeurs', 
    component: CalendrierChauffeurs,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'USER'] }
  },
  { 
    path: 'settings', 
    component: Settings,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'USER', 'HR'] }
  },

  // Backward compatibility redirects for legacy /admin/* URLs
  { path: 'admin/dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'admin/nouvelle-mission', redirectTo: 'nouvelle-mission', pathMatch: 'full' },
  { path: 'admin/missions', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'admin/suivi-chauffeurs', redirectTo: 'suivi-chauffeurs', pathMatch: 'full' },
  { path: 'admin/settings', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'dashboard', pathMatch: 'full' },

  // HR Routes
  { 
    path: 'hr/dashboard', 
    component: HrDashboard,
    canActivate: [authGuard],
    data: { roles: ['HR'] }
  },
  { 
    path: 'hr/missions', 
    component: HrMissionsList,
    canActivate: [authGuard],
    data: { roles: ['HR'] }
  },
  { 
    path: 'hr/suivi-chauffeurs', 
    component: CalendrierChauffeurs,
    canActivate: [authGuard],
    data: { roles: ['HR'] }
  },
  { 
    path: 'hr/chauffeurs', 
    component: HrChauffeursList,
    canActivate: [authGuard],
    data: { roles: ['HR'] }
  },
  { path: 'hr/settings', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'hr', redirectTo: 'hr/suivi-chauffeurs', pathMatch: 'full' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
