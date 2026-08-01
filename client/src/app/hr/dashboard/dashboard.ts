import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../admin/sidebar/sidebar';
import { OrdreMissionService, OrdreMission } from '../../services/api.service';

interface StatCard {
  title: string;
  value: number;
  label: string;
  icon: string;
  badgeText: string;
  badgeClass: string;
}

interface ActiveMission {
  reference: string;
  employeeName: string;
  employeeInitials: string;
  destination: string;
  period: string;
  status: 'PLANIFIE' | 'EN_COURS';
  raw: OrdreMission;
}

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.html',
  styleUrl: '../../admin/dashboard/dashboard.css' // Reusing dashboard CSS directly
})
export class HrDashboard implements OnInit {
  private ordreMissionService = inject(OrdreMissionService);
  private cdr = inject(ChangeDetectorRef);

  stats: StatCard[] = [
    {
      title: "Missions aujourd'hui",
      value: 0,
      label: "Missions prévues pour la date actuelle",
      icon: "lucide:calendar",
      badgeText: "Aujourd'hui",
      badgeClass: "badge-valide"
    },
    {
      title: "Employés en mission",
      value: 0,
      label: "Collaborateurs actuellement en déplacement",
      icon: "lucide:users",
      badgeText: "Actif",
      badgeClass: "badge-encours"
    },
    {
      title: "Total ce mois",
      value: 0,
      label: "Missions cumulées sur le mois en cours",
      icon: "lucide:bar-chart-2",
      badgeText: "",
      badgeClass: "badge-termine"
    }
  ];

  todayMissions: ActiveMission[] = [];

  ngOnInit() {
    this.loadHRDashboardData();
  }

  loadHRDashboardData() {
    this.ordreMissionService.getAll().subscribe({
      next: (missions) => {
        const todayStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
        const currentYearMonth = new Date().toISOString().substring(0, 7); // "YYYY-MM"

        // 1. Calculate missions today
        const missionsToday = missions.filter(m => m.statut !== 'ANNULE' && m.dateDebut.substring(0, 10) === todayStr);
        this.stats[0].value = missionsToday.length;

        // 2. Count active employees in mission (statut is EN_COURS)
        const activeMissions = missions.filter(m => m.statut === 'EN_COURS');
        this.stats[1].value = activeMissions.length;

        // 3. Count total missions this month
        const missionsThisMonth = missions.filter(m => m.statut !== 'ANNULE' && m.dateDebut.substring(0, 7) === currentYearMonth);
        this.stats[2].value = missionsThisMonth.length;
        this.stats[2].badgeText = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

        // 4. Load today's active/planned missions
        this.todayMissions = missions
          .filter(m => m.dateDebut.substring(0, 10) === todayStr && (m.statut === 'PLANIFIE' || m.statut === 'EN_COURS'))
          .map(m => {
            const empName = m.employe ? `${m.employe.prenom} ${m.employe.nom}` : 'N/A';
            const initials = m.employe ? `${m.employe.prenom[0]}${m.employe.nom[0]}`.toUpperCase() : 'N/A';
            return {
              reference: m.reference,
              employeeName: empName,
              employeeInitials: initials,
              destination: m.destination?.nom || 'N/A',
              period: `Départ ${m.heureDepart} ${m.heureRetour ? `- Retour ${m.heureRetour}` : ''}`,
              status: m.statut as 'PLANIFIE' | 'EN_COURS',
              raw: m
            };
          });
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading HR dashboard data:', err)
    });
  }

  getStatusClass(status: string): string {
    return status === 'EN_COURS' ? 'badge-encours' : 'badge-valide';
  }

  getStatusLabel(status: string): string {
    return status === 'EN_COURS' ? 'En cours' : 'Validé';
  }
}

