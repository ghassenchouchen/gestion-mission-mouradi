import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { HttpClient } from '@angular/common/http';

interface EmployeMock {
  id: number;
  mle: string;
  nom: string;
  prenom: string;
  fonction: string;
}

interface DestinationMock {
  id: number;
  nom: string;
  ville: string;
}

interface ObjetMock {
  id: number;
  libelle: string;
}

interface ChauffeurMock {
  id: number;
  mle: string;
  nom: string;
  prenom: string;
}

interface VehiculeMock {
  id: number;
  immatriculation: string;
  marque: string;
  modele: string;
}

@Component({
  selector: 'app-nouvelle-mission',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nouvelle-mission.html',
  styleUrl: './nouvelle-mission.css'
})
export class NouvelleMission {
  private http = inject(HttpClient);

  // Mock reference data with 4-digit matricules (matching DB seeds)
  employes: EmployeMock[] = [
    { id: 1, mle: '8971', nom: 'Gharbi', prenom: 'Salim', fonction: 'Contrôleur de Gestion' },
    { id: 2, mle: '1029', nom: 'Trabelsi', prenom: 'Amel', fonction: 'Directeur Marketing' },
    { id: 3, mle: '1030', nom: 'Ali', prenom: 'Mohamed', fonction: 'Auditeur Senior' },
    { id: 4, mle: '4392', nom: 'Ben Amor', prenom: 'Yassine', fonction: 'Ingénieur Système' },
    { id: 5, mle: '7104', nom: 'Mansour', prenom: 'Ridha', fonction: 'Directeur Technique' }
  ];

  destinations: DestinationMock[] = [
    { id: 1, nom: 'El Mouradi Gammarth', ville: 'Tunis' },
    { id: 2, nom: 'El Mouradi Sousse', ville: 'Sousse' },
    { id: 3, nom: 'El Mouradi Hammamet', ville: 'Hammamet' },
    { id: 4, nom: 'El Mouradi Djerba Menzel', ville: 'Djerba' },
    { id: 5, nom: 'El Mouradi Port El Kantaoui', ville: 'Sousse' }
  ];

  objets: ObjetMock[] = [
    { id: 1, libelle: 'Audit Interne' },
    { id: 2, libelle: 'Réunion Régionale' },
    { id: 3, libelle: 'Maintenance Serveur' },
    { id: 4, libelle: 'Inspection Qualité' },
    { id: 5, libelle: 'Livraison Équipements' }
  ];

  chauffeurs: ChauffeurMock[] = [
    { id: 1, mle: '1041', nom: 'Jlassi', prenom: 'Hedi' },
    { id: 2, mle: '1042', nom: 'Amdouni', prenom: 'Kais' },
    { id: 3, mle: '3981', nom: 'Mejri', prenom: 'Salah' }
  ];

  vehicules: VehiculeMock[] = [
    { id: 1, immatriculation: '142 TUN 3854', marque: 'Toyota', modele: 'Hilux' },
    { id: 2, immatriculation: '204 TUN 8891', marque: 'Volkswagen', modele: 'Passat' },
    { id: 3, immatriculation: '190 TUN 1205', marque: 'Hyundai', modele: 'H1' },
    { id: 4, immatriculation: 'Lui-même', marque: 'Lui-même (chauffeur)', modele: '' }
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

  // Form states
  selectedEmployeId: string | null = null;
  selectedEmploye: EmployeMock | null = null;

  // New employee creation form state
  showAddEmployeForm = false;
  newEmployeMle = '';
  newEmployeNom = '';
  newEmployePrenom = '';
  newEmployeFonction = '';
  newEmployeHotel = 'Direction générale';

  destinationId: number | null = null;
  objetId: number | null = null; // Optional
  itineraire = '';

  dateDebut = new Date().toISOString().split('T')[0];
  dateFin = new Date().toISOString().split('T')[0];
  heureDepart = '08:00';
  heureRetour = '18:00';

  chauffeurId: number | null = null;
  vehiculeId: number | null = null;
  immatriculation = '';

  accompagnateurs: EmployeMock[] = [];
  selectedAccompagnateurId = '';

  fraisSectionExpanded = false;
  fraisParticipation = 0;
  fraisMission = 0;
  notes = '';

  isSubmitting = false;
  successMessage = '';

  constructor(private router: Router) {}

  // Selection change
  onEmployeChange() {
    if (this.selectedEmployeId) {
      const emp = this.employes.find(e => e.id === Number(this.selectedEmployeId));
      this.selectedEmploye = emp || null;
    } else {
      this.selectedEmploye = null;
    }
  }

  // Add new employee to simulated front memory and NestJS backend database
  saveNewEmploye() {
    const mleRegex = /^\d{4}$/;
    if (!mleRegex.test(this.newEmployeMle)) {
      alert('Le matricule doit être composé de 4 chiffres exactement (ex: 8971).');
      return;
    }
    if (!this.newEmployeNom || !this.newEmployePrenom || !this.newEmployeFonction || !this.newEmployeHotel) {
      alert('Veuillez remplir tous les champs de l\'accompagnateur.');
      return;
    }

    const newEmp = {
      mle: this.newEmployeMle,
      nom: this.newEmployeNom,
      prenom: this.newEmployePrenom,
      fonction: this.newEmployeFonction,
      hotelAffectation: this.newEmployeHotel
    };

    // Locally add to array to refresh dropdown immediately
    const nextId = this.employes.length > 0 ? Math.max(...this.employes.map(e => e.id)) + 1 : 1;
    const addedEmp = { id: nextId, ...newEmp };
    this.employes.push(addedEmp);
    this.selectedEmployeId = nextId.toString();
    this.onEmployeChange();

    // Call REST endpoint to save in backend SQLite database
    this.http.post('http://localhost:3000/employes', newEmp).subscribe({
      next: (res: any) => {
        console.log('Employee saved in database:', res);
        if (res && res.id) {
          const index = this.employes.findIndex(e => e.mle === res.mle);
          if (index !== -1) {
            this.employes[index] = res;
            this.selectedEmployeId = res.id.toString();
            this.onEmployeChange();
          }
        }
      },
      error: (err) => {
        console.error('Failed to post employee to database:', err);
      }
    });

    // Reset and close form
    this.showAddEmployeForm = false;
    this.newEmployeMle = '';
    this.newEmployeNom = '';
    this.newEmployePrenom = '';
    this.newEmployeFonction = '';
    this.newEmployeHotel = 'Direction générale';
  }

  // Vehicle change auto-fill
  onVehiculeChange() {
    const veh = this.vehicules.find(v => v.id === Number(this.vehiculeId));
    if (veh) {
      this.immatriculation = veh.immatriculation;
    } else {
      this.immatriculation = '';
    }
  }

  // Accompagnateurs list logic
  addAccompagnateur() {
    if (!this.selectedAccompagnateurId) return;
    const empId = Number(this.selectedAccompagnateurId);
    
    // Check if already added
    if (this.accompagnateurs.some(a => a.id === empId)) {
      this.selectedAccompagnateurId = '';
      return;
    }

    // Check if main employee
    if (this.selectedEmploye && this.selectedEmploye.id === empId) {
      alert('L\'accompagnateur principal ne peut pas être ré-ajouté comme co-accompagnateur.');
      this.selectedAccompagnateurId = '';
      return;
    }

    const emp = this.employes.find(e => e.id === empId);
    if (emp) {
      this.accompagnateurs.push(emp);
    }
    this.selectedAccompagnateurId = '';
  }

  removeAccompagnateur(empId: number) {
    this.accompagnateurs = this.accompagnateurs.filter(a => a.id !== empId);
  }

  get availableAccompagnateurs(): EmployeMock[] {
    return this.employes.filter(e => 
      (!this.selectedEmploye || e.id !== this.selectedEmploye.id) &&
      !this.accompagnateurs.some(a => a.id === e.id)
    );
  }

  toggleFraisSection() {
    this.fraisSectionExpanded = !this.fraisSectionExpanded;
  }

  // Submit form
  save(printAfter: boolean = false) {
    // Note: this.objetId is now optional
    if (!this.selectedEmploye || !this.destinationId || !this.dateDebut || !this.dateFin || !this.heureDepart || !this.heureRetour || !this.chauffeurId || !this.vehiculeId) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    this.isSubmitting = true;
    
    // Simulating API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = printAfter 
        ? 'Ordre de mission enregistré avec succès. Impression en cours...' 
        : 'Ordre de mission enregistré avec succès !';
      
      setTimeout(() => {
        this.successMessage = '';
        this.router.navigate(['/admin/dashboard']);
      }, 2000);
    }, 1200);
  }
}
