import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../admin/sidebar/sidebar';

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
}

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.html',
  styleUrl: '../../admin/dashboard/dashboard.css' // Reusing dashboard CSS directly
})
export class HrDashboard {
  stats: StatCard[] = [
    {
      title: "Missions aujourd'hui",
      value: 6,
      label: "Missions prévues pour la date actuelle",
      icon: "lucide:calendar",
      badgeText: "Aujourd'hui",
      badgeClass: "badge-valide"
    },
    {
      title: "Employés en mission",
      value: 5,
      label: "Collaborateurs actuellement en déplacement",
      icon: "lucide:users",
      badgeText: "Actif",
      badgeClass: "badge-encours"
    },
    {
      title: "Total ce mois",
      value: 24,
      label: "Missions cumulées sur le mois en cours",
      icon: "lucide:bar-chart-2",
      badgeText: "Juin 2026",
      badgeClass: "badge-termine"
    }
  ];

  todayMissions: ActiveMission[] = [
    {
      reference: 'OM-2026-0042',
      employeeName: 'Mohamed Ali',
      employeeInitials: 'MA',
      destination: 'El Mouradi Gammarth',
      period: 'Départ 08:30 - Retour 17:00',
      status: 'EN_COURS'
    },
    {
      reference: 'OM-2026-0041',
      employeeName: 'Yassine Ben Amor',
      employeeInitials: 'YA',
      destination: 'El Mouradi Sousse',
      period: 'Départ 09:00 - Retour 18:30',
      status: 'PLANIFIE'
    },
    {
      reference: 'OM-2026-0043',
      employeeName: 'Salim Gharbi',
      employeeInitials: 'SG',
      destination: 'El Mouradi Hammamet',
      period: 'Départ 10:15 - Retour 15:00',
      status: 'PLANIFIE'
    }
  ];

  getStatusClass(status: string): string {
    return status === 'EN_COURS' ? 'badge-encours' : 'badge-valide';
  }

  getStatusLabel(status: string): string {
    return status === 'EN_COURS' ? 'En cours' : 'Validé';
  }
}
