import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { HttpClient } from '@angular/common/http';
import { 
  EmployeService, 
  DestinationService, 
  ObjetMissionService, 
  ChauffeurService, 
  VehiculeService, 
  OrdreMissionService, 
  Employe, 
  Destination, 
  ObjetMission, 
  Chauffeur, 
  Vehicule 
} from '../../services/api.service';
import { PrintService } from '../../services/print.service';

@Component({
  selector: 'app-nouvelle-mission',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Sidebar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './nouvelle-mission.html',
  styleUrl: './nouvelle-mission.css'
})
export class NouvelleMission implements OnInit {
  private http = inject(HttpClient);
  private employeService = inject(EmployeService);
  private destinationService = inject(DestinationService);
  private objetMissionService = inject(ObjetMissionService);
  private chauffeurService = inject(ChauffeurService);
  private vehiculeService = inject(VehiculeService);
  private ordreMissionService = inject(OrdreMissionService);
  private printService = inject(PrintService);
  private cdr = inject(ChangeDetectorRef);

  employes: Employe[] = [];
  destinations: Destination[] = [];
  objets: ObjetMission[] = [];
  chauffeurs: Chauffeur[] = [];
  vehicules: Vehicule[] = [];

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

  // Form states
  selectedEmployeId: string | null = null;
  selectedEmploye: Employe | null = null;

  // New employee creation form state
  showAddEmployeForm = false;
  newEmployeMle = '';
  newEmployeNom = '';
  newEmployePrenom = '';
  newEmployeFonction = '';
  newEmployeHotel = 'Direction générale';

  // New chauffeur creation form state
  showAddChauffeurForm = false;
  newChauffeurMle = '';
  newChauffeurNom = '';
  newChauffeurPrenom = '';
  newChauffeurTelephone = '';

  // New vehicule creation form state
  showAddVehiculeForm = false;
  newVehiculeImmatriculation = '';
  newVehiculeMarque = '';
  newVehiculeModele = '';
  newVehiculeType = 'Voiture';

  // New destination creation form state
  showAddDestinationForm = false;
  newDestinationNom = '';
  newDestinationVille = 'Sousse';

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

  accompagnateurs: Employe[] = [];
  selectedAccompagnateurId = '';

  notes = '';

  isSubmitting = false;
  successMessage = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadReferenceData();
  }

  loadReferenceData() {
    this.employeService.getAll().subscribe({
      next: (data) => {
        this.employes = data.filter(e => e.actif);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading employees:', err)
    });

    this.destinationService.getAll().subscribe({
      next: (data) => {
        this.destinations = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading destinations:', err)
    });

    this.objetMissionService.getAll().subscribe({
      next: (data) => {
        this.objets = data.filter(o => o.actif);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading object missions:', err)
    });

    this.chauffeurService.getAll().subscribe({
      next: (data) => {
        // Show only available drivers
        this.chauffeurs = data.filter(c => c.disponible);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading chauffeurs:', err)
    });

    this.vehiculeService.getAll().subscribe({
      next: (data) => {
        // Show only available vehicles or the "Lui-même" option
        this.vehicules = data.filter(v => v.disponible || v.immatriculation === 'Lui-même');
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading vehicles:', err)
    });
  }

  // Selection change
  onEmployeChange() {
    if (String(this.selectedEmployeId) === 'NEW') {
      this.showAddEmployeForm = true;
      this.selectedEmployeId = null;
      this.selectedEmploye = null;
      return;
    }
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
      hotelAffectation: this.newEmployeHotel,
      actif: true
    };

    // Call REST endpoint to save in backend database
    this.employeService.create(newEmp).subscribe({
      next: (res: any) => {
        this.employes.push(res);
        this.selectedEmployeId = res.id.toString();
        this.onEmployeChange();
        
        // Reset and close form only on success (Fix M4)
        this.showAddEmployeForm = false;
        this.newEmployeMle = '';
        this.newEmployeNom = '';
        this.newEmployePrenom = '';
        this.newEmployeFonction = '';
        this.newEmployeHotel = 'Direction générale';
      },
      error: (err) => {
        console.error('Failed to post employee to database:', err);
        alert(err.error?.message || 'Erreur lors de la création de l\'accompagnateur.');
      }
    });
  }

  // Add new chauffeur directly to NestJS backend database
  saveNewChauffeur() {
    if (!this.newChauffeurNom || !this.newChauffeurPrenom) {
      alert('Veuillez remplir le nom et le prénom du chauffeur.');
      return;
    }
    if (this.newChauffeurMle) {
      const mleRegex = /^\d{4}$/;
      if (!mleRegex.test(this.newChauffeurMle)) {
        alert('Le matricule du chauffeur doit être composé de 4 chiffres exactement (ex: 1045).');
        return;
      }
    }

    const newCh: any = {
      nom: this.newChauffeurNom,
      prenom: this.newChauffeurPrenom,
      telephone: this.newChauffeurTelephone || undefined,
      disponible: true
    };
    if (this.newChauffeurMle) {
      newCh.mle = this.newChauffeurMle;
    }

    this.chauffeurService.create(newCh).subscribe({
      next: (res: any) => {
        this.chauffeurs.push(res);
        this.chauffeurId = res.id;
        
        // Reset and close form on success
        this.showAddChauffeurForm = false;
        this.newChauffeurMle = '';
        this.newChauffeurNom = '';
        this.newChauffeurPrenom = '';
        this.newChauffeurTelephone = '';
      },
      error: (err) => {
        console.error('Failed to post chauffeur to database:', err);
        alert(err.error?.message || 'Erreur lors de la création du chauffeur.');
      }
    });
  }

  // Add new vehicle directly to NestJS backend database
  saveNewVehicule() {
    if (!this.newVehiculeImmatriculation || !this.newVehiculeMarque || !this.newVehiculeModele) {
      alert('Veuillez remplir l\'immatriculation, la marque et le modèle du véhicule.');
      return;
    }

    const newVeh: any = {
      immatriculation: this.newVehiculeImmatriculation,
      marque: this.newVehiculeMarque,
      modele: this.newVehiculeModele,
      type: this.newVehiculeType,
      disponible: true
    };

    this.vehiculeService.create(newVeh).subscribe({
      next: (res: any) => {
        this.vehicules.push(res);
        this.vehiculeId = res.id;
        this.immatriculation = res.immatriculation;
        
        // Reset and close form on success
        this.showAddVehiculeForm = false;
        this.newVehiculeImmatriculation = '';
        this.newVehiculeMarque = '';
        this.newVehiculeModele = '';
        this.newVehiculeType = 'Voiture';
      },
      error: (err) => {
        console.error('Failed to post vehicle to database:', err);
        alert(err.error?.message || 'Erreur lors de la création du véhicule.');
      }
    });
  }

  // Add new destination directly to NestJS backend database
  saveNewDestination() {
    if (!this.newDestinationNom || !this.newDestinationVille) {
      alert('Veuillez remplir le nom et le gouvernorat/ville de la destination.');
      return;
    }

    const newDest = {
      nom: this.newDestinationNom,
      ville: this.newDestinationVille
    };

    this.destinationService.create(newDest).subscribe({
      next: (res: any) => {
        this.destinations.push(res);
        this.destinationId = res.id;
        
        // Reset and close form on success
        this.showAddDestinationForm = false;
        this.newDestinationNom = '';
        this.newDestinationVille = 'Sousse';
      },
      error: (err) => {
        console.error('Failed to post destination to database:', err);
        alert(err.error?.message || 'Erreur lors de la création de la destination.');
      }
    });
  }

  // When chauffeur changes, auto-select their default vehicle
  onChauffeurChange() {
    if (String(this.chauffeurId) === 'NEW') {
      this.showAddChauffeurForm = true;
      this.chauffeurId = null;
      return;
    }
    if (this.chauffeurId) {
      const ch = this.chauffeurs.find(c => c.id === Number(this.chauffeurId));
      if (ch && ch.vehiculeParDefautId) {
        const defaultVeh = this.vehicules.find(v => v.id === ch.vehiculeParDefautId);
        if (defaultVeh) {
          this.vehiculeId = defaultVeh.id;
          this.immatriculation = defaultVeh.immatriculation;
        }
      }
    }
  }

  // When vehicle changes, auto-select the chauffeur assigned to it (if any)
  onVehiculeChange() {
    if (String(this.vehiculeId) === 'NEW') {
      this.showAddVehiculeForm = true;
      this.vehiculeId = null;
      return;
    }
    const veh = this.vehicules.find(v => v.id === Number(this.vehiculeId));
    if (veh) {
      this.immatriculation = veh.immatriculation;
      // Reverse lookup: find the chauffeur whose default vehicle is this one
      const matchingChauffeur = this.chauffeurs.find(c => c.vehiculeParDefautId === veh.id);
      if (matchingChauffeur && !this.chauffeurId) {
        this.chauffeurId = matchingChauffeur.id;
      }
    } else {
      this.immatriculation = '';
    }
  }

  onDestinationChange() {
    if (String(this.destinationId) === 'NEW') {
      this.showAddDestinationForm = true;
      this.destinationId = null;
      return;
    }
  }

  isPropreMoyenSelected(): boolean {
    const veh = this.vehicules.find(v => v.id === Number(this.vehiculeId));
    return veh ? (veh.immatriculation === 'Lui-même' || veh.immatriculation === 'Aucun') : false;
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

  get availableAccompagnateurs(): Employe[] {
    return this.employes.filter(e => 
      (!this.selectedEmploye || e.id !== this.selectedEmploye.id) &&
      !this.accompagnateurs.some(a => a.id === e.id)
    );
  }

  printCreatedMission(res: any) {
    const emp = this.employes.find(e => e.id === Number(this.selectedEmployeId));
    const dest = this.destinations.find(d => d.id === Number(this.destinationId));
    const obj = this.objets.find(o => o.id === Number(this.objetId));
    const ch = this.chauffeurs.find(c => c.id === Number(this.chauffeurId));
    const veh = this.vehicules.find(v => v.id === Number(this.vehiculeId));

    const printDetails = {
      reference: res.reference,
      employeeName: emp ? `${emp.prenom} ${emp.nom}` : '',
      mle: emp ? emp.mle : '',
      fonction: emp ? emp.fonction : '',
      hotelAffectation: emp ? emp.hotelAffectation : 'Direction générale',
      destination: dest ? dest.nom : '',
      dateDebut: this.dateDebut.split('-').reverse().join('/'),
      dateFin: this.dateFin ? this.dateFin.split('-').reverse().join('/') : '',
      heureDepart: this.heureDepart,
      heureRetour: this.heureRetour || '',
      objet: obj ? obj.libelle : '',
      itineraire: '',
      vehicule: veh ? `${veh.marque} ${veh.modele} ${veh.immatriculation}` : '',
      vehiculeMarque: veh ? `${veh.marque} ${veh.modele}` : '',
      vehiculeImmatriculation: veh ? veh.immatriculation : '',
      chauffeurName: ch ? `${ch.prenom} ${ch.nom}` : '',
      chauffeur: ch ? `${ch.prenom} ${ch.nom}` : '',
      accompagnateurs: this.accompagnateurs.map(a => `${a.prenom} ${a.nom}`),
      notes: this.notes || '',
      dateEmission: new Date(res.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    this.printService.printOrdreMission(printDetails);
  }

  // Submit form
  save(printAfter: boolean = false) {
    if (!this.selectedEmploye || !this.destinationId || !this.dateDebut || !this.heureDepart || !this.chauffeurId || !this.vehiculeId) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Valider la cohérence des dates
    if (this.dateFin && this.dateFin < this.dateDebut) {
      alert("La date de retour ne peut pas être avant la date de départ.");
      return;
    }

    // Valider la cohérence des heures si le voyage se fait le même jour
    if ((!this.dateFin || this.dateDebut === this.dateFin) && this.heureRetour) {
      const [hDep, mDep] = this.heureDepart.split(':').map(Number);
      const [hRet, mRet] = this.heureRetour.split(':').map(Number);
      if (!isNaN(hDep) && !isNaN(hRet)) {
        if (hDep > hRet || (hDep === hRet && mDep >= mRet)) {
          alert("L'heure de retour doit être après l'heure de départ.");
          return;
        }
      }
    }

    this.isSubmitting = true;
    
    const payload = {
      employeId: Number(this.selectedEmployeId),
      destinationId: Number(this.destinationId),
      chauffeurId: Number(this.chauffeurId),
      vehiculeId: Number(this.vehiculeId),
      objetMissionId: Number(this.objetId || 1), // Optional but default to 1 if empty
      dateDebut: this.dateDebut,
      dateFin: this.dateFin || undefined,
      heureDepart: this.heureDepart,
      heureRetour: this.heureRetour || undefined,
      itineraire: this.itineraire || undefined,
      notes: this.notes || undefined,
      accompagnateurs: this.accompagnateurs.map(a => a.id),
      statut: 'PLANIFIE'
    };

    this.ordreMissionService.create(payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.successMessage = printAfter 
          ? 'Ordre de mission enregistré avec succès. Impression en cours...' 
          : 'Ordre de mission enregistré avec succès !';
        
        if (printAfter) {
          this.printCreatedMission(res);
        }

        setTimeout(() => {
          this.successMessage = '';
          this.router.navigate(['/admin/dashboard']);
        }, 2000);
      },
      error: (err) => {
        this.isSubmitting = false;
        console.error('Failed to create mission order:', err);
        alert(err.error?.message || 'Erreur lors de la création de l\'ordre de mission.');
      }
    });
  }
}

