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
import { ToastService } from '../../services/toast.service';

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
  private toastService = inject(ToastService);

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
  selectedEmployeId: number | string | null = null;
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

  // New objet de mission creation form state
  showAddObjetForm = false;
  newObjetLibelle = '';

  // Previous selection values (for cancel restoration)
  previousChauffeurId: number | null = null;
  previousVehiculeId: number | null = null;
  previousDestinationId: number | null = null;
  previousObjetId: number | null = null;
  previousEmployeId: string | null = null;

  destinationId: number | string | null = null;
  objetId: number | string | null = null;
  itineraire = '';

  dateDebut = new Date().toISOString().split('T')[0];
  dateFin = new Date().toISOString().split('T')[0];
  heureDepart = '08:00';
  heureRetour = '18:00';

  chauffeurId: number | string | null = null;
  vehiculeId: number | string | null = null;
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
    if (this.selectedEmployeId === 'NEW') {
      this.showAddEmployeForm = true;
      setTimeout(() => { this.selectedEmployeId = null; this.cdr.markForCheck(); });
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
    if (!this.newEmployeNom || !this.newEmployePrenom) {
      this.toastService.warning('Veuillez remplir le nom et le prénom de l\'accompagnateur.');
      return;
    }
    if (this.newEmployeMle) {
      const mleRegex = /^\d{4}$/;
      if (!mleRegex.test(this.newEmployeMle)) {
        this.toastService.warning('Le matricule doit être composé de 4 chiffres exactement (ex: 8971).');
        return;
      }
    }

    const newEmp: any = {
      nom: this.newEmployeNom,
      prenom: this.newEmployePrenom,
      mle: this.newEmployeMle || undefined,
      fonction: this.newEmployeFonction || undefined,
      hotelAffectation: this.newEmployeHotel || 'Direction générale',
      actif: true
    };

    // Call REST endpoint to save in backend database
    this.employeService.create(newEmp).subscribe({
      next: (res: any) => {
        this.employes.push(res);
        this.selectedEmployeId = res.id;
        this.onEmployeChange();
        this.toastService.success('Accompagnateur créé avec succès');
        
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
        this.toastService.error(err.error?.message || 'Erreur lors de la création de l\'accompagnateur.');
      }
    });
  }

  // Add new chauffeur directly to NestJS backend database
  saveNewChauffeur() {
    if (!this.newChauffeurNom || !this.newChauffeurPrenom) {
      this.toastService.warning('Veuillez remplir le nom et le prénom du chauffeur.');
      return;
    }
    if (this.newChauffeurMle) {
      const mleRegex = /^\d{4}$/;
      if (!mleRegex.test(this.newChauffeurMle)) {
        this.toastService.warning('Le matricule du chauffeur doit être composé de 4 chiffres exactement (ex: 1045).');
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
        this.toastService.success('Chauffeur créé avec succès');
        
        // Reset and close form on success
        this.showAddChauffeurForm = false;
        this.newChauffeurMle = '';
        this.newChauffeurNom = '';
        this.newChauffeurPrenom = '';
        this.newChauffeurTelephone = '';
      },
      error: (err) => {
        console.error('Failed to post chauffeur to database:', err);
        this.toastService.error(err.error?.message || 'Erreur lors de la création du chauffeur.');
      }
    });
  }

  // Add new vehicle directly to NestJS backend database
  saveNewVehicule() {
    if (!this.newVehiculeImmatriculation || !this.newVehiculeMarque || !this.newVehiculeModele) {
      this.toastService.warning('Veuillez remplir l\'immatriculation, la marque et le modèle du véhicule.');
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
        this.toastService.success('Véhicule créé avec succès');
        
        // Reset and close form on success
        this.showAddVehiculeForm = false;
        this.newVehiculeImmatriculation = '';
        this.newVehiculeMarque = '';
        this.newVehiculeModele = '';
        this.newVehiculeType = 'Voiture';
      },
      error: (err) => {
        console.error('Failed to post vehicle to database:', err);
        this.toastService.error(err.error?.message || 'Erreur lors de la création du véhicule.');
      }
    });
  }

  // Add new destination directly to NestJS backend database
  saveNewDestination() {
    if (!this.newDestinationNom || !this.newDestinationVille) {
      this.toastService.warning('Veuillez remplir le nom et le gouvernorat/ville de la destination.');
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
        this.toastService.success('Destination créée avec succès');
        
        // Reset and close form on success
        this.showAddDestinationForm = false;
        this.newDestinationNom = '';
        this.newDestinationVille = 'Sousse';
      },
      error: (err) => {
        console.error('Failed to post destination to database:', err);
        this.toastService.error(err.error?.message || 'Erreur lors de la création de la destination.');
      }
    });
  }

  // Add new objet de mission directly to NestJS backend database
  saveNewObjet() {
    if (!this.newObjetLibelle) {
      this.toastService.warning('Veuillez remplir le libellé de l\'objet de mission.');
      return;
    }

    const newObj: any = {
      libelle: this.newObjetLibelle,
      actif: true
    };

    this.objetMissionService.create(newObj).subscribe({
      next: (res: any) => {
        this.objets.push(res);
        this.objetId = res.id;
        this.toastService.success('Objet de mission créé avec succès');

        // Reset and close form on success
        this.showAddObjetForm = false;
        this.newObjetLibelle = '';
      },
      error: (err) => {
        console.error('Failed to post objet de mission to database:', err);
        this.toastService.error(err.error?.message || 'Erreur lors de la création de l\'objet de mission.');
      }
    });
  }

  // When chauffeur changes, auto-select their default vehicle
  onChauffeurChange() {
    if (this.chauffeurId === 'NEW') {
      this.showAddChauffeurForm = true;
      setTimeout(() => { this.chauffeurId = null; this.cdr.markForCheck(); });
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
    if (this.vehiculeId === 'NEW') {
      this.showAddVehiculeForm = true;
      setTimeout(() => { this.vehiculeId = null; this.cdr.markForCheck(); });
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
    if (this.destinationId === 'NEW') {
      this.showAddDestinationForm = true;
      setTimeout(() => { this.destinationId = null; this.cdr.markForCheck(); });
      return;
    }
  }

  onObjetChange() {
    if (this.objetId === 'NEW') {
      this.showAddObjetForm = true;
      setTimeout(() => { this.objetId = null; this.cdr.markForCheck(); });
      return;
    }
  }

  // Cancel methods for inline creation forms
  cancelAddChauffeur() {
    this.showAddChauffeurForm = false;
    this.newChauffeurMle = '';
    this.newChauffeurNom = '';
    this.newChauffeurPrenom = '';
    this.newChauffeurTelephone = '';
  }

  cancelAddVehicule() {
    this.showAddVehiculeForm = false;
    this.newVehiculeImmatriculation = '';
    this.newVehiculeMarque = '';
    this.newVehiculeModele = '';
    this.newVehiculeType = 'Voiture';
  }

  cancelAddDestination() {
    this.showAddDestinationForm = false;
    this.newDestinationNom = '';
    this.newDestinationVille = 'Sousse';
  }

  cancelAddObjet() {
    this.showAddObjetForm = false;
    this.newObjetLibelle = '';
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
      this.toastService.warning('L\'accompagnateur principal ne peut pas être ré-ajouté comme co-accompagnateur.');
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
      chauffeurEtablissement: ch?.etablissement?.nom || 'Direction générale',
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
    if (!this.destinationId || !this.dateDebut || !this.heureDepart || !this.chauffeurId || !this.vehiculeId) {
      this.toastService.warning('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Valider la cohérence des dates
    if (this.dateFin && this.dateFin < this.dateDebut) {
      this.toastService.warning("La date de retour ne peut pas être avant la date de départ.");
      return;
    }

    // Valider la cohérence des heures si le voyage se fait le même jour
    if ((!this.dateFin || this.dateDebut === this.dateFin) && this.heureRetour) {
      const [hDep, mDep] = this.heureDepart.split(':').map(Number);
      const [hRet, mRet] = this.heureRetour.split(':').map(Number);
      if (!isNaN(hDep) && !isNaN(hRet)) {
        if (hDep > hRet || (hDep === hRet && mDep >= mRet)) {
          this.toastService.warning("L'heure de retour doit être après l'heure de départ.");
          return;
        }
      }
    }

    this.isSubmitting = true;
    
    const payload = {
      employeId: this.selectedEmployeId ? Number(this.selectedEmployeId) : undefined,
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
        const msg = printAfter 
          ? 'Ordre de mission enregistré avec succès. Impression en cours...' 
          : 'Ordre de mission enregistré avec succès !';
        
        this.toastService.success(msg);
        
        if (printAfter) {
          this.printCreatedMission(res);
        }

        setTimeout(() => {
          this.router.navigate(['/admin/dashboard']);
        }, 1500);
      },
      error: (err) => {
        this.isSubmitting = false;
        console.error('Failed to create mission order:', err);
        this.toastService.error(err.error?.message || 'Erreur lors de la création de l\'ordre de mission.');
      }
    });
  }
}

