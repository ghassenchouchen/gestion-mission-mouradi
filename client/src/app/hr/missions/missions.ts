import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../admin/sidebar/sidebar';
import { OrdreMissionService, OrdreMission, ChauffeurService, Chauffeur } from '../../services/api.service';

interface Mission {
  id: number;
  reference: string;
  employeeName: string;
  employeeInitials: string;
  destination: string;
  dateDebut: string;
  dateFin: string;
  dateStr: string;
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
  raw: OrdreMission;
}

@Component({
  selector: 'app-hr-missions-list',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './missions.html',
  styleUrl: '../../admin/missions/missions.css' // Reusing missions list CSS directly
})
export class HrMissionsList implements OnInit {
  private ordreMissionService = inject(OrdreMissionService);
  private chauffeurService = inject(ChauffeurService);
  private cdr = inject(ChangeDetectorRef);

  missions: Mission[] = [];
  drivers: Chauffeur[] = [];

  // Filters state
  chauffeurFilter: number | 'ALL' = 'ALL';
  statusFilter = 'ALL';
  startDateFilter = '';
  endDateFilter = '';

  // Pagination state
  currentPage = 1;
  pageSize = 5;

  ngOnInit() {
    this.loadMissions();
    this.chauffeurService.getAll().subscribe(data => { this.drivers = data; this.cdr.markForCheck(); });
  }

  loadMissions() {
    this.ordreMissionService.getAll().subscribe({
      next: (data) => {
        this.missions = data
          .filter(m => m.statut !== 'ANNULE')
          .map(m => this.mapToViewModel(m));
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error fetching missions for HR:', err)
    });
  }

  private mapToViewModel(m: OrdreMission): Mission {
    const emp = m.employe;
    const empName = emp ? `${emp.prenom} ${emp.nom}` : 'N/A';
    const initials = emp ? `${emp.prenom[0]}${emp.nom[0]}`.toUpperCase() : 'N/A';
    const dest = m.destination ? m.destination.nom : 'N/A';

    const start = new Date(m.dateDebut);
    const end = m.dateFin ? new Date(m.dateFin) : null;

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const dateStr = end && start.getTime() !== end.getTime()
      ? `${start.toLocaleDateString('fr-FR', options)} - ${end.toLocaleDateString('fr-FR', { ...options, year: 'numeric' })}`
      : `${start.toLocaleDateString('fr-FR', { ...options, year: 'numeric' })}`;

    return {
      id: m.id,
      reference: m.reference,
      employeeName: empName,
      employeeInitials: initials,
      destination: dest,
      dateDebut: m.dateDebut.split('T')[0],
      dateFin: m.dateFin ? m.dateFin.split('T')[0] : m.dateDebut.split('T')[0],
      dateStr: dateStr,
      status: m.statut,
      raw: m
    };
  }

  get filteredMissions(): Mission[] {
    return this.missions.filter(m => {
      // Chauffeur match
      const chauffeurMatches = this.chauffeurFilter === 'ALL' || 
        (m.raw.chauffeurId && m.raw.chauffeurId === Number(this.chauffeurFilter));

      const statusMatches = this.statusFilter === 'ALL' || m.status === this.statusFilter;

      const dateStartMatches = !this.startDateFilter || m.dateDebut >= this.startDateFilter;
      const dateEndMatches = !this.endDateFilter || m.dateFin <= this.endDateFilter;

      return chauffeurMatches && statusMatches && dateStartMatches && dateEndMatches;
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
    this.chauffeurFilter = 'ALL';
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
    const data = this.filteredMissions;
    if (data.length === 0) {
      alert('Aucune mission à exporter.');
      return;
    }

    const headers = [
      'Référence',
      'Matricule Employé',
      'Employé',
      'Fonction',
      'Établissement',
      'Destination',
      'Objet de la Mission',
      'Date Début',
      'Heure Départ',
      'Date Fin',
      'Heure Retour',
      'Chauffeur Désigné',
      'Matricule Chauffeur',
      'Moyen de Transport',
      'Accompagnateurs',
      'Itinéraire',
      'Frais Participation (TND)',
      'Frais Mission (TND)',
      'Statut',
      'Notes'
    ];

    const formatDateStr = (dStr?: string) => {
      if (!dStr) return '';
      const d = new Date(dStr);
      return isNaN(d.getTime()) ? '' : d.toLocaleDateString('fr-FR');
    };

    const csvRows = [
      headers.join(';'),
      ...data.map(m => {
        const raw = m.raw;
        const emp = raw.employe;
        const ch = raw.chauffeur;
        const veh = raw.vehicule;
        const obj = raw.objetMission;
        const accs = raw.accompagnateurs?.map(a => `${a.employe.prenom} ${a.employe.nom}`).join(', ') || '';

        const vehStr = veh ? `${veh.marque} ${veh.modele} (${veh.immatriculation})` : '';
        const chName = ch ? `${ch.prenom} ${ch.nom}` : '';

        return [
          m.reference,
          emp?.mle || '',
          m.employeeName,
          emp?.fonction || '',
          emp?.hotelAffectation || '',
          m.destination,
          obj?.libelle || '',
          formatDateStr(m.dateDebut),
          raw.heureDepart || '',
          formatDateStr(m.dateFin),
          raw.heureRetour || '',
          chName,
          ch?.mle || '',
          vehStr,
          accs,
          raw.itineraire || '',
          raw.fraisParticipation ?? 0,
          raw.fraisMission ?? 0,
          this.getStatusLabel(m.status),
          raw.notes || ''
        ].map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(';');
      })
    ];

    const bom = '\uFEFF';
    const blob = new Blob([bom + csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ordres_de_mission_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  // Modals state
  isDetailModalOpen = false;
  selectedMission: Mission | null = null;

  viewDetails(ref: string) {
    const m = this.missions.find(x => x.reference === ref);
    if (!m) return;
    this.selectedMission = m;
    this.isDetailModalOpen = true;
  }

  closeDetailsModal() {
    this.isDetailModalOpen = false;
    this.selectedMission = null;
  }
}

