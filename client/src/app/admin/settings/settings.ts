import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';
import { 
  ChauffeurService, 
  VehiculeService, 
  ObjetMissionService, 
  DestinationService, 
  EmployeService, 
  Chauffeur, 
  Vehicule, 
  ObjetMission, 
  Destination, 
  Employe,
  UtilisateurService,
  Utilisateur
} from '../../services/api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements OnInit {
  private chauffeurService = inject(ChauffeurService);
  private vehiculeService = inject(VehiculeService);
  private objetMissionService = inject(ObjetMissionService);
  private destinationService = inject(DestinationService);
  private employeService = inject(EmployeService);
  private utilisateurService = inject(UtilisateurService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  activeTab: 'chauffeurs' | 'vehicules' | 'objets' | 'destinations' | 'employes' | 'utilisateurs' = 'chauffeurs';

  governorates = [
    'Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa',
    'Jendouba', 'Kairouan', 'Kasserine', 'Kébili', 'Le Kef', 'Mahdia',
    'La Manouba', 'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid',
    'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];

  hotelsList = [
    'Direction générale',
    'El Mouradi Gammarth',
    'El Mouradi Palace',
    'El Mouradi Port El Kantaoui',
    'El Mouradi Sousse',
    'El Mouradi Hammamet',
    'El Mouradi Djerba Menzel',
    'El Mouradi Mahdia',
    'El Mouradi Tozeur',
    'El Mouradi Douz',
    'El Mouradi Skanes',
    'El Mouradi Club Kantaoui',
    'El Mouradi Cap Mahdia'
  ];

  // Data stores
  chauffeurs: Chauffeur[] = [];
  vehicules: Vehicule[] = [];
  objets: ObjetMission[] = [];
  destinations: Destination[] = [];
  employes: Employe[] = [];
  utilisateurs: Utilisateur[] = [];

  // Modal State
  isModalOpen = false;
  modalMode: 'add' | 'edit' = 'add';
  editingId: number | null = null;

  // Form Fields (Union of all possible fields)
  formData: any = {};

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const t = params['tab'];
        if (['chauffeurs', 'vehicules', 'objets', 'destinations', 'employes', 'utilisateurs'].includes(t)) {
          this.activeTab = t;
        }
      }
    });
    this.loadAllData();
  }

  loadAllData() {
    this.chauffeurService.getAll().subscribe({
      next: (data) => { this.chauffeurs = data; this.cdr.markForCheck(); },
      error: (err) => console.error('Error loading chauffeurs:', err)
    });
    this.vehiculeService.getAll().subscribe({
      next: (data) => { this.vehicules = data; this.cdr.markForCheck(); },
      error: (err) => console.error('Error loading vehicles:', err)
    });
    this.objetMissionService.getAll().subscribe({
      next: (data) => { this.objets = data; this.cdr.markForCheck(); },
      error: (err) => console.error('Error loading objects:', err)
    });
    this.destinationService.getAll().subscribe({
      next: (data) => { this.destinations = data; this.cdr.markForCheck(); },
      error: (err) => console.error('Error loading destinations:', err)
    });
    this.employeService.getAll().subscribe({
      next: (data) => { this.employes = data; this.cdr.markForCheck(); },
      error: (err) => console.error('Error loading employees:', err)
    });
    this.utilisateurService.getAll().subscribe({
      next: (data) => { this.utilisateurs = data; this.cdr.markForCheck(); },
      error: (err) => console.error('Error loading users:', err)
    });
  }

  switchTab(tab: 'chauffeurs' | 'vehicules' | 'objets' | 'destinations' | 'employes' | 'utilisateurs') {
    this.activeTab = tab;
  }

  getModalTitle(): string {
    const action = this.modalMode === 'add' ? 'Ajouter' : 'Modifier';
    switch (this.activeTab) {
      case 'chauffeurs': return `${action} un chauffeur`;
      case 'vehicules': return `${action} un véhicule`;
      case 'objets': return `${action} un objet de mission`;
      case 'destinations': return `${action} une destination`;
      case 'employes': return `${action} un employé`;
      case 'utilisateurs': return `${action} un utilisateur`;
      default: return `${action}`;
    }
  }

  openAddModal() {
    this.modalMode = 'add';
    this.editingId = null;
    this.formData = {};
    
    // Set default toggles to true
    if (this.activeTab === 'chauffeurs' || this.activeTab === 'vehicules') {
      this.formData.disponible = true;
    } else if (this.activeTab === 'objets' || this.activeTab === 'employes') {
      this.formData.actif = true;
    } else if (this.activeTab === 'utilisateurs') {
      this.formData.role = 'HR';
    }

    this.isModalOpen = true;
  }

  openEditModal(item: any) {
    this.modalMode = 'edit';
    this.editingId = item.id;
    this.formData = { ...item };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.formData = {};
  }

  saveItem() {
    const service = this.getServiceForActiveTab();
    if (!service) return;

    if (this.modalMode === 'add') {
      // Validate form payload
      if (this.activeTab === 'utilisateurs' && (!this.formData.email || !this.formData.password)) {
        alert('Veuillez remplir l\'email et le mot de passe.');
        return;
      }
      if (this.activeTab === 'chauffeurs' && (!this.formData.nom || !this.formData.prenom)) {
        alert('Veuillez remplir le nom et le prénom du chauffeur.');
        return;
      }
      if (this.activeTab === 'vehicules' && (!this.formData.immatriculation || !this.formData.marque || !this.formData.modele)) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      if (this.activeTab === 'objets' && !this.formData.libelle) {
        alert('Libellé est obligatoire.');
        return;
      }
      if (this.activeTab === 'destinations' && (!this.formData.nom || !this.formData.ville)) {
        alert('Nom et ville sont obligatoires.');
        return;
      }
      if (this.activeTab === 'employes' && (!this.formData.mle || !this.formData.nom || !this.formData.prenom || !this.formData.fonction || !this.formData.hotelAffectation)) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }

      service.create(this.formData).subscribe({
        next: () => {
          this.loadAllData();
          this.closeModal();
        },
        error: (err: any) => {
          console.error('Error creating setting:', err);
          alert(err.error?.message || 'Erreur lors de la création de l\'élément. Vérifiez l\'unicité des clés (matricule, immatriculation, libelle, etc.)');
        }
      });
    } else {
      service.update(this.editingId!, this.formData).subscribe({
        next: () => {
          this.loadAllData();
          this.closeModal();
        },
        error: (err: any) => {
          console.error('Error updating setting:', err);
          alert(err.error?.message || 'Erreur lors de la mise à jour de l\'élément.');
        }
      });
    }
  }

  deleteItem(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      const service = this.getServiceForActiveTab();
      if (!service) return;

      service.delete(id).subscribe({
        next: () => {
          this.loadAllData();
        },
        error: (err: any) => {
          console.error('Error deleting setting:', err);
          // Standard check for constraint violations (Restrict)
          if (err.status === 409 || err.status === 400 || (err.error?.message && err.error.message.includes('Foreign key'))) {
            alert('Impossible de supprimer cet élément car il est actuellement référencé dans un ordre de mission.');
          } else {
            alert('Impossible de supprimer cet élément. Il est probablement associé à un ordre de mission existant (contrainte d\'intégrité).');
          }
        }
      });
    }
  }

  private getServiceForActiveTab(): any {
    switch (this.activeTab) {
      case 'chauffeurs': return this.chauffeurService;
      case 'vehicules': return this.vehiculeService;
      case 'objets': return this.objetMissionService;
      case 'destinations': return this.destinationService;
      case 'employes': return this.employeService;
      case 'utilisateurs': return this.utilisateurService;
      default: return null;
    }
  }
}

