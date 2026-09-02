import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_BASE = environment.apiUrl;

// === interfaces / Types ===

export interface Employe {
  id: number;
  mle: string;
  nom: string;
  prenom: string;
  fonction: string;
  hotelAffectation: string;
  actif: boolean;
}

export interface Etablissement {
  id: number;
  code: string;
  nom: string;
  ville: string;
  adresse?: string | null;
  actif: boolean;
}

export interface Chauffeur {
  id: number;
  mle?: string | null;
  nom: string;
  prenom: string;
  telephone?: string | null;
  disponible: boolean;
  vehiculeParDefautId?: number | null;
  etablissementId?: number | null;
  etablissement?: Etablissement | null;
}

export interface Vehicule {
  id: number;
  immatriculation: string;
  marque: string;
  modele?: string;
  type: string;
  disponible: boolean;
}

export interface Destination {
  id: number;
  nom: string;
  ville: string;
}

export interface ObjetMission {
  id: number;
  libelle: string;
  actif: boolean;
}

export interface Accompagnateur {
  id: number;
  ordreMissionId: number;
  employeId: number;
  employe: Employe;
}

export interface OrdreMission {
  id: number;
  reference: string;
  employeId: number;
  employe?: Employe;
  destinationId: number;
  destination?: Destination;
  chauffeurId: number;
  chauffeur?: Chauffeur;
  vehiculeId: number;
  vehicule?: Vehicule;
  objetMissionId?: number;
  objetMission?: ObjetMission;
  creeParId: number;
  creePar?: { id: number; email: string; nom?: string; prenom?: string; role?: string };
  dateDebut: string;
  dateFin?: string | null;
  heureDepart: string;
  heureRetour?: string | null;
  departReel?: string | null;
  retourReel?: string | null;
  statut: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
  itineraire?: string | null;
  fraisParticipation?: number;
  fraisMission?: number;
  notes?: string | null;
  createdAt: string;
  accompagnateurs?: Accompagnateur[];
  destinationsMission?: { id?: number; destinationId?: number; destination: Destination }[];
}


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/employes`;

  getAll(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url);
  }

  getOne(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.url}/${id}`);
  }

  create(data: Omit<Employe, 'id'>): Observable<Employe> {
    return this.http.post<Employe>(this.url, data);
  }

  update(id: number, data: Partial<Employe>): Observable<Employe> {
    return this.http.put<Employe>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/chauffeurs`;

  getAll(): Observable<Chauffeur[]> {
    return this.http.get<Chauffeur[]>(this.url);
  }

  getOne(id: number): Observable<Chauffeur> {
    return this.http.get<Chauffeur>(`${this.url}/${id}`);
  }

  create(data: Omit<Chauffeur, 'id'>): Observable<Chauffeur> {
    return this.http.post<Chauffeur>(this.url, data);
  }

  update(id: number, data: Partial<Chauffeur>): Observable<Chauffeur> {
    return this.http.put<Chauffeur>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/vehicules`;

  getAll(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.url);
  }

  getOne(id: number): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${this.url}/${id}`);
  }

  create(data: Omit<Vehicule, 'id'>): Observable<Vehicule> {
    return this.http.post<Vehicule>(this.url, data);
  }

  update(id: number, data: Partial<Vehicule>): Observable<Vehicule> {
    return this.http.put<Vehicule>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/destinations`;

  getAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.url);
  }

  getOne(id: number): Observable<Destination> {
    return this.http.get<Destination>(`${this.url}/${id}`);
  }

  create(data: Omit<Destination, 'id'>): Observable<Destination> {
    return this.http.post<Destination>(this.url, data);
  }

  update(id: number, data: Partial<Destination>): Observable<Destination> {
    return this.http.put<Destination>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ObjetMissionService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/objets-mission`;

  getAll(): Observable<ObjetMission[]> {
    return this.http.get<ObjetMission[]>(this.url);
  }

  getOne(id: number): Observable<ObjetMission> {
    return this.http.get<ObjetMission>(`${this.url}/${id}`);
  }

  create(data: Omit<ObjetMission, 'id'>): Observable<ObjetMission> {
    return this.http.post<ObjetMission>(this.url, data);
  }

  update(id: number, data: Partial<ObjetMission>): Observable<ObjetMission> {
    return this.http.put<ObjetMission>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class OrdreMissionService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/ordre-missions`;

  getAll(): Observable<OrdreMission[]> {
    return this.http.get<OrdreMission[]>(this.url);
  }

  getOne(id: number): Observable<OrdreMission> {
    return this.http.get<OrdreMission>(`${this.url}/${id}`);
  }

  create(data: {
    employeId?: number;
    destinationId: number;
    autresDestinations?: number[];
    chauffeurId: number;
    vehiculeId: number;
    objetMissionId?: number;
    dateDebut: string;
    dateFin?: string;
    heureDepart: string;
    heureRetour?: string;
    itineraire?: string;
    fraisParticipation?: number;
    fraisMission?: number;
    notes?: string;
    accompagnateurs?: number[]; // Employee IDs
    statut?: string;
  }): Observable<OrdreMission> {
    return this.http.post<OrdreMission>(this.url, data);
  }

  update(id: number, data: {
    employeId?: number;
    destinationId?: number;
    autresDestinations?: number[];
    chauffeurId?: number;
    vehiculeId?: number;
    objetMissionId?: number;
    dateDebut?: string;
    dateFin?: string;
    heureDepart?: string;
    heureRetour?: string;
    itineraire?: string;
    fraisParticipation?: number;
    fraisMission?: number;
    notes?: string;
    statut?: string;
    departReel?: string;
    retourReel?: string;
    accompagnateurs?: number[];
  }): Observable<OrdreMission> {
    return this.http.put<OrdreMission>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

export interface Utilisateur {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: 'ADMIN' | 'HR' | 'USER';
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/utilisateurs`;

  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url);
  }

  getOne(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.url}/${id}`);
  }

  create(data: Omit<Utilisateur, 'id'>): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.url, data);
  }

  update(id: number, data: Partial<Utilisateur>): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private http = inject(HttpClient);
  private url = `${API_BASE}/etablissements`;

  getAll(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(this.url);
  }

  getOne(id: number): Observable<Etablissement> {
    return this.http.get<Etablissement>(`${this.url}/${id}`);
  }

  create(data: Omit<Etablissement, 'id'>): Observable<Etablissement> {
    return this.http.post<Etablissement>(this.url, data);
  }

  update(id: number, data: Partial<Etablissement>): Observable<Etablissement> {
    return this.http.put<Etablissement>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
