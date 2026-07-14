import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { PrintService } from '../../services/print.service';
import { 
  OrdreMissionService, 
  ChauffeurService, 
  VehiculeService, 
  DestinationService, 
  ObjetMissionService, 
  OrdreMission, 
  Chauffeur, 
  Vehicule, 
  Destination, 
  ObjetMission 
} from '../../services/api.service';

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
  selector: 'app-missions-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './missions.html',
  styleUrl: './missions.css'
})
export class MissionsList implements OnInit {
  private ordreMissionService = inject(OrdreMissionService);
  private chauffeurService = inject(ChauffeurService);
  private vehiculeService = inject(VehiculeService);
  private destinationService = inject(DestinationService);
  private objetMissionService = inject(ObjetMissionService);
  private printService = inject(PrintService);

  missions: Mission[] = [];

  // Filters state
  searchQuery = '';
  statusFilter = 'ALL';
  startDateFilter = '';
  endDateFilter = '';

  // Pagination state
  currentPage = 1;
  pageSize = 5;

  // Modals state
  isDetailModalOpen = false;
  isEditModalOpen = false;
  selectedMission: Mission | null = null;
  formData: any = {};

  // Form lists
  drivers: Chauffeur[] = [];
  vehicles: Vehicule[] = [];
  destinations: Destination[] = [];
  objets: ObjetMission[] = [];

  ngOnInit() {
    this.loadMissions();
    this.loadEditReferenceData();
  }

  loadMissions() {
    this.ordreMissionService.getAll().subscribe({
      next: (data) => {
        this.missions = data.map(m => this.mapToViewModel(m));
        // Refresh details modal object reference if it was open
        if (this.selectedMission) {
          const updated = this.missions.find(m => m.id === this.selectedMission!.id);
          if (updated) this.selectedMission = updated;
        }
      },
      error: (err) => console.error('Error fetching missions:', err)
    });
  }

  loadEditReferenceData() {
    this.chauffeurService.getAll().subscribe(data => this.drivers = data);
    this.vehiculeService.getAll().subscribe(data => this.vehicles = data);
    this.destinationService.getAll().subscribe(data => this.destinations = data);
    this.objetMissionService.getAll().subscribe(data => this.objets = data.filter(o => o.actif));
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
    const m = this.missions.find(x => x.reference === ref);
    if (!m) return;
    this.selectedMission = m;
    this.isDetailModalOpen = true;
  }

  closeDetailsModal() {
    this.isDetailModalOpen = false;
    this.selectedMission = null;
  }

  updateStatus(status: 'EN_COURS' | 'TERMINE' | 'ANNULE') {
    if (!this.selectedMission) return;
    
    this.ordreMissionService.update(this.selectedMission.id, { statut: status }).subscribe({
      next: () => {
        this.loadMissions();
      },
      error: (err) => {
        console.error('Error updating mission status:', err);
        alert(err.error?.message || 'Erreur lors de la mise à jour du statut.');
      }
    });
  }

  editMission(ref: string) {
    const m = this.missions.find(x => x.reference === ref);
    if (!m) return;
    if (m.status === 'EN_COURS' || m.status === 'TERMINE') {
      alert("Impossible de modifier les détails d'une mission en cours ou terminée.");
      return;
    }
    
    this.selectedMission = m;
    this.formData = {
      dateDebut: m.raw.dateDebut.split('T')[0],
      dateFin: m.raw.dateFin ? m.raw.dateFin.split('T')[0] : '',
      heureDepart: m.raw.heureDepart,
      heureRetour: m.raw.heureRetour || '',
      chauffeurId: m.raw.chauffeurId,
      vehiculeId: m.raw.vehiculeId,
      destinationId: m.raw.destinationId,
      objetMissionId: m.raw.objetMissionId,
      itineraire: m.raw.itineraire || '',
      fraisParticipation: m.raw.fraisParticipation || 0,
      fraisMission: m.raw.fraisMission || 0,
      notes: m.raw.notes || ''
    };
    
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.formData = {};
    this.selectedMission = null;
  }

  saveEdit() {
    if (!this.selectedMission) return;
    
    // Valider la cohérence des dates
    if (this.formData.dateFin && this.formData.dateFin < this.formData.dateDebut) {
      alert("La date de retour ne peut pas être avant la date de départ.");
      return;
    }

    // Valider la cohérence des heures si le voyage se fait le même jour
    if ((!this.formData.dateFin || this.formData.dateDebut === this.formData.dateFin) && this.formData.heureRetour) {
      const [hDep, mDep] = this.formData.heureDepart.split(':').map(Number);
      const [hRet, mRet] = this.formData.heureRetour.split(':').map(Number);
      if (!isNaN(hDep) && !isNaN(hRet)) {
        if (hDep > hRet || (hDep === hRet && mDep >= mRet)) {
          alert("L'heure de retour doit être après l'heure de départ.");
          return;
        }
      }
    }

    const payload = {
      ...this.formData,
      chauffeurId: Number(this.formData.chauffeurId),
      vehiculeId: Number(this.formData.vehiculeId),
      destinationId: Number(this.formData.destinationId),
      objetMissionId: Number(this.formData.objetMissionId),
      fraisParticipation: Number(this.formData.fraisParticipation) || 0,
      fraisMission: Number(this.formData.fraisMission) || 0,
      dateFin: this.formData.dateFin || undefined,
      heureRetour: this.formData.heureRetour || undefined
    };

    this.ordreMissionService.update(this.selectedMission.id, payload).subscribe({
      next: () => {
        this.loadMissions();
        this.closeEditModal();
      },
      error: (err) => {
        console.error('Error saving mission edits:', err);
        alert(err.error?.message || 'Erreur lors de la sauvegarde des modifications.');
      }
    });
  }


  printMission(ref: string) {
    const m = this.missions.find(x => x.reference === ref);
    if (!m) return;

    const raw = m.raw;
    const departureDate = new Date(raw.dateDebut);
    const creationDate = new Date(raw.createdAt || departureDate);
    const dateEmission = creationDate.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const printDetails = {
      reference: raw.reference,
      employeeName: m.employeeName,
      mle: raw.employe?.mle || '',
      fonction: raw.employe?.fonction || '',
      hotelAffectation: raw.employe?.hotelAffectation || '',
      destination: m.destination,
      dateDebut: raw.dateDebut ? new Date(raw.dateDebut).toLocaleDateString('fr-FR') : '',
      dateFin: raw.dateFin ? new Date(raw.dateFin).toLocaleDateString('fr-FR') : '',
      heureDepart: raw.heureDepart || '08:00',
      heureRetour: raw.heureRetour || '',
      objet: raw.objetMission?.libelle || '',
      itineraire: raw.itineraire || `Tunis -> ${m.destination.replace('El Mouradi ', '')} -> Tunis`,
      vehicule: raw.vehicule ? `${raw.vehicule.marque} ${raw.vehicule.modele} (${raw.vehicule.immatriculation})` : '',
      chauffeur: raw.chauffeur ? `${raw.chauffeur.prenom} ${raw.chauffeur.nom} (${raw.chauffeur.mle})` : '',
      accompagnateurs: raw.accompagnateurs?.map(a => `${a.employe.prenom} ${a.employe.nom} (${a.employe.mle})`) || [],
      notes: raw.notes || '',
      dateEmission: dateEmission
    };

    this.printService.printOrdreMission(printDetails);
  }
}

