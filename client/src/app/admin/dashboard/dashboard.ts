import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { PrintService } from '../../services/print.service';
import { OrdreMissionService, ChauffeurService, OrdreMission } from '../../services/api.service';

interface StatCard {
  title: string;
  value: number;
  label: string;
  icon: string;
  badgeText: string;
  badgeClass: string;
}

interface Mission {
  reference: string;
  employeeName: string;
  employeeInitials: string;
  destination: string;
  dateStr: string;
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
  raw: OrdreMission;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class AdminDashboard implements OnInit {
  private ordreMissionService = inject(OrdreMissionService);
  private chauffeurService = inject(ChauffeurService);
  private printService = inject(PrintService);

  stats: StatCard[] = [
    {
      title: 'Missions ce mois',
      value: 0,
      label: 'Missions planifiées et exécutées',
      icon: 'lucide:file-text',
      badgeText: '',
      badgeClass: 'badge-valide'
    },
    {
      title: 'En cours',
      value: 0,
      label: 'Véhicules actuellement sur la route',
      icon: 'lucide:truck',
      badgeText: 'Active',
      badgeClass: 'badge-encours'
    },
    {
      title: 'Chauffeurs disponibles',
      value: 0,
      label: 'Prêts pour affectation',
      icon: 'lucide:users',
      badgeText: '0%',
      badgeClass: 'badge-termine'
    }
  ];

  recentMissions: Mission[] = [];

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.ordreMissionService.getAll().subscribe({
      next: (missions) => {
        // 1. Calculate missions this month
        const currentYearMonth = new Date().toISOString().substring(0, 7); // "YYYY-MM"
        const missionsThisMonth = missions.filter(m => {
          return m.dateDebut.substring(0, 7) === currentYearMonth;
        });
        this.stats[0].value = missionsThisMonth.length;
        this.stats[0].label = `Missions pour ${new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;

        // 2. Count active / "EN_COURS" missions
        const activeMissions = missions.filter(m => m.statut === 'EN_COURS');
        this.stats[1].value = activeMissions.length;

        // 3. Populate recent missions (top 5 sorted by date)
        this.recentMissions = missions
          .slice(0, 5)
          .map(m => {
            const start = new Date(m.dateDebut);
            const empName = m.employe ? `${m.employe.prenom} ${m.employe.nom}` : 'N/A';
            const initials = m.employe ? `${m.employe.prenom[0]}${m.employe.nom[0]}`.toUpperCase() : 'N/A';
            return {
              reference: m.reference,
              employeeName: empName,
              employeeInitials: initials,
              destination: m.destination?.nom || 'N/A',
              dateStr: start.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
              status: m.statut,
              raw: m
            };
          });
      },
      error: (err) => console.error('Error fetching dashboard missions:', err)
    });

    this.chauffeurService.getAll().subscribe({
      next: (chauffeurs) => {
        const availableChauffeurs = chauffeurs.filter(c => c.disponible);
        this.stats[2].value = availableChauffeurs.length;
        const total = chauffeurs.length || 1;
        const rate = Math.round((availableChauffeurs.length / total) * 100);
        this.stats[2].badgeText = `${rate}%`;
      },
      error: (err) => console.error('Error fetching drivers:', err)
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'PLANIFIE': return 'badge-valide';
      case 'EN_COURS': return 'badge-encours';
      case 'TERMINE': return 'badge-termine';
      case 'ANNULE': return 'badge-annule';
      default: return 'badge-valide';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'PLANIFIE': return 'Validé';
      case 'EN_COURS': return 'En cours';
      case 'TERMINE': return 'Terminé';
      case 'ANNULE': return 'Annulé';
      default: return status;
    }
  }

  viewMission(ref: string) {
    const m = this.recentMissions.find(x => x.reference === ref);
    if (!m) return;
    alert(`Détails de l'ordre de mission ${m.reference}:\n` +
          `Employé: ${m.employeeName} (${m.raw.employe?.fonction})\n` +
          `Destination: ${m.destination}\n` +
          `Chauffeur: ${m.raw.chauffeur ? `${m.raw.chauffeur.prenom} ${m.raw.chauffeur.nom}` : 'N/A'}\n` +
          `Dates: du ${new Date(m.raw.dateDebut).toLocaleDateString('fr-FR')} au ${m.raw.dateFin ? new Date(m.raw.dateFin).toLocaleDateString('fr-FR') : 'N/A'}`);
  }

  editMission(ref: string) {
    const m = this.recentMissions.find(x => x.reference === ref);
    if (!m) return;
    if (m.status === 'EN_COURS' || m.status === 'TERMINE') {
      alert("Impossible de modifier les détails d'une mission en cours ou terminée.");
      return;
    }
    alert("Pour modifier cet ordre de mission, veuillez vous rendre sur la page 'Ordres de mission' et cliquer sur l'icône de modification.");
  }




  printMission(ref: string) {
    const mission = this.recentMissions.find(m => m.reference === ref);
    if (!mission) return;

    const raw = mission.raw;
    const departureDate = new Date(raw.dateDebut);
    const creationDate = new Date(raw.createdAt || departureDate);
    const dateEmission = creationDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const printDetails = {
      reference: raw.reference,
      employeeName: mission.employeeName,
      mle: raw.employe?.mle || '',
      fonction: raw.employe?.fonction || '',
      hotelAffectation: raw.employe?.hotelAffectation || '',
      destination: mission.destination,
      dateDebut: raw.dateDebut ? new Date(raw.dateDebut).toLocaleDateString('fr-FR') : '',
      dateFin: raw.dateFin ? new Date(raw.dateFin).toLocaleDateString('fr-FR') : '',
      heureDepart: raw.heureDepart || '08:00',
      heureRetour: raw.heureRetour || '',
      objet: raw.objetMission?.libelle || '',
      itineraire: raw.itineraire || `Tunis -> ${mission.destination.replace('El Mouradi ', '')} -> Tunis`,
      vehicule: raw.vehicule ? `${raw.vehicule.marque} ${raw.vehicule.modele} (${raw.vehicule.immatriculation})` : '',
      chauffeur: raw.chauffeur ? `${raw.chauffeur.prenom} ${raw.chauffeur.nom} (${raw.chauffeur.mle})` : '',
      accompagnateurs: raw.accompagnateurs?.map(a => `${a.employe.prenom} ${a.employe.nom} (${a.employe.mle})`) || [],
      notes: raw.notes || '',
      dateEmission: dateEmission
    };

    this.printService.printOrdreMission(printDetails);
  }
}
