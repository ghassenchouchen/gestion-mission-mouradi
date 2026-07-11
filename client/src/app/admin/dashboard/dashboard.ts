import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { PrintService } from '../../services/print.service';

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
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class AdminDashboard {
  stats: StatCard[] = [
    {
      title: 'Missions ce mois',
      value: 28,
      label: 'Missions planifiées et exécutées',
      icon: 'lucide:file-text',
      badgeText: '',
      badgeClass: 'badge-valide'
    },
    {
      title: 'En cours',
      value: 4,
      label: 'Véhicules actuellement sur la route',
      icon: 'lucide:truck',
      badgeText: 'Active',
      badgeClass: 'badge-encours'
    },
    {
      title: 'Chauffeurs disponibles',
      value: 12,
      label: 'Prêts pour affectation',
      icon: 'lucide:users',
      badgeText: '90%',
      badgeClass: 'badge-termine'
    }
  ];

  recentMissions: Mission[] = [
    {
      reference: 'OM-2026-0042',
      employeeName: 'Mohamed Ali',
      employeeInitials: 'MA',
      destination: 'El Mouradi Gammarth',
      dateStr: '18 Juin 2026',
      status: 'EN_COURS'
    },
    {
      reference: 'OM-2026-0041',
      employeeName: 'Yassine Ben Amor',
      employeeInitials: 'YA',
      destination: 'El Mouradi Sousse',
      dateStr: '18 Juin 2026',
      status: 'PLANIFIE'
    },
    {
      reference: 'OM-2026-0040',
      employeeName: 'Amel Trabelsi',
      employeeInitials: 'AT',
      destination: 'El Mouradi Hammamet',
      dateStr: '17 Juin 2026',
      status: 'TERMINE'
    },
    {
      reference: 'OM-2026-0039',
      employeeName: 'Ridha Mansour',
      employeeInitials: 'RM',
      destination: 'El Mouradi Djerba',
      dateStr: '16 Juin 2026',
      status: 'TERMINE'
    },
    {
      reference: 'OM-2026-0038',
      employeeName: 'Sami Ben Salem',
      employeeInitials: 'SS',
      destination: 'El Mouradi Port El Kantaoui',
      dateStr: '15 Juin 2026',
      status: 'ANNULE'
    }
  ];

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
    console.log('Viewing mission', ref);
  }

  editMission(ref: string) {
    console.log('Editing mission', ref);
  }

  private printService = inject(PrintService);

  private getMockEmployeeFunction(name: string): string {
    const funcs: Record<string, string> = {
      'Mohamed Ali': 'Auditeur Interne Senior',
      'Yassine Ben Amor': 'Ingénieur Réseaux & Télécoms',
      'Amel Trabelsi': 'Directeur Marketing Regional',
      'Ridha Mansour': 'Directeur Technique Général',
      'Sami Ben Salem': 'Contrôleur de Gestion',
      'Salim Gharbi': 'Inspecteur Qualité et Normes',
      'Mariem Toumi': 'Chef Comptable',
      'Kais Azaiez': 'Responsable Logistique'
    };
    return funcs[name] || 'Collaborateur';
  }

  private getMockVehicle(ref: string): string {
    const vehicles = [
      'Toyota Hilux (142 TUN 3854)',
      'Volkswagen Passat (204 TUN 8891)',
      'Hyundai H1 (190 TUN 1205)'
    ];
    const idx = ref.charCodeAt(ref.length - 1) % vehicles.length;
    return vehicles[idx];
  }

  private getMockChauffeur(ref: string): string {
    const chauffeurs = [
      'Samir Zorgatti (1041)',
      'Ali Ben Salem (1042)',
      'Salah Mejri (3981)'
    ];
    const idx = ref.charCodeAt(ref.length - 1) % chauffeurs.length;
    return chauffeurs[idx];
  }

  private getMockAccompagnateurs(ref: string): string[] {
    const accs = [
      [],
      ['Salim Gharbi (8971)'],
      ['Amel Trabelsi (1029)', 'Yassine Ben Amor (4392)'],
      ['Mohamed Ali (1030)']
    ];
    const idx = ref.charCodeAt(ref.length - 1) % accs.length;
    return accs[idx];
  }

  private getMockDateEmission(dateStr: string): string {
    const match = dateStr.match(/(\d+)\s+([a-zA-Zûé]+)\s+(\d{4})/);
    if (match) {
      const day = parseInt(match[1], 10);
      const monthStr = match[2].toLowerCase();
      const year = parseInt(match[3], 10);
      const months: Record<string, number> = {
        'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
        'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
      };
      const month = months[monthStr] !== undefined ? months[monthStr] : 5;
      const d = new Date(year, month, day);
      d.setDate(d.getDate() - 1);
      return d.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
    return dateStr;
  }

  printMission(ref: string) {
    const mission = this.recentMissions.find(m => m.reference === ref);
    if (!mission) return;

    const mles: Record<string, string> = {
      'Mohamed Ali': '1030',
      'Yassine Ben Amor': '4392',
      'Amel Trabelsi': '1029',
      'Ridha Mansour': '7104',
      'Sami Ben Salem': '5821',
      'Salim Gharbi': '8971',
      'Mariem Toumi': '3194',
      'Kais Azaiez': '6284'
    };

    const printDetails = {
      reference: mission.reference,
      employeeName: mission.employeeName,
      mle: mles[mission.employeeName] || '8971',
      fonction: this.getMockEmployeeFunction(mission.employeeName),
      hotelAffectation: 'El Mouradi Gammarth',
      destination: mission.destination,
      dateDebut: mission.dateStr,
      dateFin: mission.dateStr,
      heureDepart: '08:30',
      heureRetour: '18:00',
      objet: 'Inspection et Audit de Routine',
      itineraire: `Tunis -> ${mission.destination.replace('El Mouradi ', '')} -> Tunis`,
      vehicule: this.getMockVehicle(mission.reference),
      chauffeur: this.getMockChauffeur(mission.reference),
      accompagnateurs: this.getMockAccompagnateurs(mission.reference),
      notes: 'Véhicule de service affecté. Assurer le respect des consignes de sécurité routière.',
      dateEmission: this.getMockDateEmission(mission.dateStr)
    };

    this.printService.printOrdreMission(printDetails);
  }
}
