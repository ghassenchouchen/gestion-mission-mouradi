import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../admin/sidebar/sidebar';

interface Mission {
  reference: string;
  employeeName: string;
  employeeInitials: string;
  destination: string;
  dateDebut: string;
  dateFin: string;
  dateStr: string;
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}

@Component({
  selector: 'app-hr-missions-list',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './missions.html',
  styleUrl: '../../admin/missions/missions.css' // Reusing missions list CSS directly
})
export class HrMissionsList {
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
      const query = this.searchQuery.toLowerCase();
      const textMatches = !query || 
        m.reference.toLowerCase().includes(query) ||
        m.employeeName.toLowerCase().includes(query) ||
        m.destination.toLowerCase().includes(query);

      const statusMatches = this.statusFilter === 'ALL' || m.status === this.statusFilter;

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
    this.currentPage = 1;
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

  exportExcel() {
    alert("Exportation des ordres de mission vers Excel initiée !");
  }

  viewDetails(ref: string) {
    alert(`Détails de l'ordre de mission ${ref}:\nDestination: El Mouradi Gammarth\nDates: 18 Juin - 20 Juin\nChauffeur: Hedi Jlassi`);
  }
}
