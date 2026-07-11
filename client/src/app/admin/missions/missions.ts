import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { PrintService } from '../../services/print.service';

interface Mission {
  reference: string;
  employeeName: string;
  employeeInitials: string;
  destination: string;
  dateDebut: string; // ISO format for easy filtering
  dateFin: string;
  dateStr: string;
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}

@Component({
  selector: 'app-missions-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './missions.html',
  styleUrl: './missions.css'
})
export class MissionsList {
  missions: Mission[] = [
    {
      reference: 'OM-2026-0042',
      employeeName: 'Mohamed Ali',
      employeeInitials: 'MA',
      destination: 'El Mouradi Gammarth',
      dateDebut: '2026-06-18',
      dateFin: '2026-06-20',
      dateStr: '18 Juin - 20 Juin',
      status: 'EN_COURS'
    },
    {
      reference: 'OM-2026-0041',
      employeeName: 'Yassine Ben Amor',
      employeeInitials: 'YA',
      destination: 'El Mouradi Sousse',
      dateDebut: '2026-06-18',
      dateFin: '2026-06-19',
      dateStr: '18 Juin - 19 Juin',
      status: 'PLANIFIE'
    },
    {
      reference: 'OM-2026-0040',
      employeeName: 'Amel Trabelsi',
      employeeInitials: 'AT',
      destination: 'El Mouradi Hammamet',
      dateDebut: '2026-06-17',
      dateFin: '2026-06-17',
      dateStr: '17 Juin 2026',
      status: 'TERMINE'
    },
    {
      reference: 'OM-2026-0039',
      employeeName: 'Ridha Mansour',
      employeeInitials: 'RM',
      destination: 'El Mouradi Djerba',
      dateDebut: '2026-06-16',
      dateFin: '2026-06-20',
      dateStr: '16 Juin - 20 Juin',
      status: 'TERMINE'
    },
    {
      reference: 'OM-2026-0038',
      employeeName: 'Sami Ben Salem',
      employeeInitials: 'SS',
      destination: 'El Mouradi Port El Kantaoui',
      dateDebut: '2026-06-15',
      dateFin: '2026-06-16',
      dateStr: '15 Juin - 16 Juin',
      status: 'ANNULE'
    },
    {
      reference: 'OM-2026-0037',
      employeeName: 'Salim Gharbi',
      employeeInitials: 'SG',
      destination: 'El Mouradi Mahdia',
      dateDebut: '2026-06-12',
      dateFin: '2026-06-14',
      dateStr: '12 Juin - 14 Juin',
      status: 'TERMINE'
    },
    {
      reference: 'OM-2026-0036',
      employeeName: 'Mariem Toumi',
      employeeInitials: 'MT',
      destination: 'El Mouradi Gammarth',
      dateDebut: '2026-06-10',
      dateFin: '2026-06-10',
      dateStr: '10 Juin 2026',
      status: 'TERMINE'
    },
    {
      reference: 'OM-2026-0035',
      employeeName: 'Kais Azaiez',
      employeeInitials: 'KA',
      destination: 'El Mouradi Skanes',
      dateDebut: '2026-06-08',
      dateFin: '2026-06-09',
      dateStr: '08 Juin - 09 Juin',
      status: 'PLANIFIE'
    }
  ];

  // Filters state
  searchQuery = '';
  statusFilter = 'ALL';
  startDateFilter = '';
  endDateFilter = '';

  // Pagination state
  currentPage = 1;
  pageSize = 5;

  get filteredMissions(): Mission[] {
    return this.missions.filter(m => {
      // Search text match
      const query = this.searchQuery.toLowerCase();
      const textMatches = !query || 
        m.reference.toLowerCase().includes(query) ||
        m.employeeName.toLowerCase().includes(query) ||
        m.destination.toLowerCase().includes(query);

      // Status match
      const statusMatches = this.statusFilter === 'ALL' || m.status === this.statusFilter;

      // Date matches
      const dateStartMatches = !this.startDateFilter || m.dateDebut >= this.startDateFilter;
      const dateEndMatches = !this.endDateFilter || m.dateFin <= this.endDateFilter;

      return textMatches && statusMatches && dateStartMatches && dateEndMatches;
    });
  }

  get paginatedMissions(): Mission[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredMissions.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMissions.length / this.pageSize) || 1;
  }

  get startItemIndex(): number {
    if (this.filteredMissions.length === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItemIndex(): number {
    const calculated = this.currentPage * this.pageSize;
    const total = this.filteredMissions.length;
    return calculated > total ? total : calculated;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  resetFilters() {
    this.searchQuery = '';
    this.statusFilter = 'ALL';
    this.startDateFilter = '';
    this.endDateFilter = '';
    this.currentPage = 1;
  }

  onFilterChange() {
    this.currentPage = 1; // Reset to first page when filters change
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
    console.log('Viewing details of', ref);
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

  printMission(ref: string) {
    const mission = this.missions.find(m => m.reference === ref);
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

    // Coherent creation date (mocked as 1 day before departure)
    const departureDate = new Date(mission.dateDebut);
    const creationDate = new Date(departureDate);
    creationDate.setDate(departureDate.getDate() - 1);
    const dateEmission = creationDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const printDetails = {
      reference: mission.reference,
      employeeName: mission.employeeName,
      mle: mles[mission.employeeName] || '8971',
      fonction: this.getMockEmployeeFunction(mission.employeeName),
      hotelAffectation: 'El Mouradi Gammarth',
      destination: mission.destination,
      dateDebut: mission.dateDebut.split('-').reverse().join('/'),
      dateFin: mission.dateFin.split('-').reverse().join('/'),
      heureDepart: '08:30',
      heureRetour: '18:00',
      objet: 'Inspection et Audit de Routine',
      itineraire: `Tunis -> ${mission.destination.replace('El Mouradi ', '')} -> Tunis`,
      vehicule: this.getMockVehicle(mission.reference),
      chauffeur: this.getMockChauffeur(mission.reference),
      accompagnateurs: this.getMockAccompagnateurs(mission.reference),
      notes: 'Véhicule de service affecté. Assurer le respect des consignes de sécurité routière.',
      dateEmission: dateEmission
    };

    this.printService.printOrdreMission(printDetails);
  }
}
