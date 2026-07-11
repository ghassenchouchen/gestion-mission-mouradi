import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

// Reference types
interface Chauffeur { id: number; mle: string; nom: string; prenom: string; telephone: string; disponible: boolean; }
interface Vehicule { id: number; immatriculation: string; marque: string; modele: string; type: string; disponible: boolean; }
interface Objet { id: number; libelle: string; actif: boolean; }
interface Destination { id: number; nom: string; ville: string; }
interface Employe { id: number; mle: string; nom: string; prenom: string; fonction: string; hotelAffectation: string; actif: boolean; }
interface Utilisateur { id: number; email: string; nom: string; prenom: string; role: 'ADMIN' | 'HR'; }

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  activeTab: 'chauffeurs' | 'vehicules' | 'objets' | 'destinations' | 'employes' | 'utilisateurs' = 'chauffeurs';

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
  chauffeurs: Chauffeur[] = [
    { id: 1, mle: '1041', nom: 'Jlassi', prenom: 'Hedi', telephone: '+216 98 123 456', disponible: true },
    { id: 2, mle: '1042', nom: 'Amdouni', prenom: 'Kais', telephone: '+216 97 654 321', disponible: true },
    { id: 3, mle: '3981', nom: 'Mejri', prenom: 'Salah', telephone: '+216 95 333 444', disponible: false }
  ];

  vehicules: Vehicule[] = [
    { id: 1, immatriculation: '142 TUN 3854', marque: 'Toyota', modele: 'Hilux', type: 'Utilitaire', disponible: true },
    { id: 2, immatriculation: '204 TUN 8891', marque: 'Volkswagen', modele: 'Passat', type: 'Voiture', disponible: true },
    { id: 3, immatriculation: '190 TUN 1205', marque: 'Hyundai', modele: 'H1', type: 'Bus', disponible: false }
  ];

  objets: Objet[] = [
    { id: 1, libelle: 'Audit Interne', actif: true },
    { id: 2, libelle: 'Réunion Régionale', actif: true },
    { id: 3, libelle: 'Maintenance Serveur', actif: true },
    { id: 4, libelle: 'Livraison Équipements', actif: false }
  ];

  destinations: Destination[] = [
    { id: 1, nom: 'El Mouradi Gammarth', ville: 'Tunis' },
    { id: 2, nom: 'El Mouradi Sousse', ville: 'Sousse' },
    { id: 3, nom: 'El Mouradi Hammamet', ville: 'Hammamet' },
    { id: 4, nom: 'El Mouradi Djerba', ville: 'Djerba' }
  ];

  employes: Employe[] = [
    { id: 1, mle: '8971', nom: 'Gharbi', prenom: 'Salim', fonction: 'Contrôleur de Gestion', hotelAffectation: 'El Mouradi Gammarth', actif: true },
    { id: 2, mle: '1029', nom: 'Trabelsi', prenom: 'Amel', fonction: 'Directeur Marketing', hotelAffectation: 'El Mouradi Sousse', actif: true },
    { id: 3, mle: '1030', nom: 'Ali', prenom: 'Mohamed', fonction: 'Auditeur Senior', hotelAffectation: 'El Mouradi Hammamet', actif: true },
    { id: 4, mle: '4392', nom: 'Ben Amor', prenom: 'Yassine', fonction: 'Ingénieur Système', hotelAffectation: 'El Mouradi Port El Kantaoui', actif: false }
  ];

  utilisateurs: Utilisateur[] = [
    { id: 1, email: 'admin@elmouradi.tn', nom: 'Admin', prenom: 'El Mouradi', role: 'ADMIN' },
    { id: 2, email: 'hr@elmouradi.tn', nom: 'HR', prenom: 'El Mouradi', role: 'HR' }
  ];

  // Modal State
  isModalOpen = false;
  modalMode: 'add' | 'edit' = 'add';
  editingId: number | null = null;

  // Form Fields (Union of all possible fields)
  formData: any = {};

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
    const list = this.getCurrentList();
    if (this.modalMode === 'add') {
      const newId = list.length > 0 ? Math.max(...list.map((i: any) => i.id)) + 1 : 1;
      const newItem = { id: newId, ...this.formData };
      list.push(newItem);
    } else {
      const idx = list.findIndex((i: any) => i.id === this.editingId);
      if (idx !== -1) {
        list[idx] = { id: this.editingId, ...this.formData };
      }
    }
    this.closeModal();
  }

  deleteItem(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      const list = this.getCurrentList();
      const idx = list.findIndex((i: any) => i.id === id);
      if (idx !== -1) {
        list.splice(idx, 1);
      }
    }
  }

  private getCurrentList(): any[] {
    switch (this.activeTab) {
      case 'chauffeurs': return this.chauffeurs;
      case 'vehicules': return this.vehicules;
      case 'objets': return this.objets;
      case 'destinations': return this.destinations;
      case 'employes': return this.employes;
      case 'utilisateurs': return this.utilisateurs;
    }
  }
}
