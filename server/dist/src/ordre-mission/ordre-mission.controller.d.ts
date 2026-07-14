import { OrdreMissionService } from './ordre-mission.service';
export declare class OrdreMissionController {
    private readonly service;
    constructor(service: OrdreMissionService);
    create(user: any, body: {
        employeId: number;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        dateDebut: string;
        dateFin?: string;
        heureDepart: string;
        heureRetour?: string;
        itineraire?: string;
        fraisParticipation?: number;
        fraisMission?: number;
        notes?: string;
        accompagnateurs?: number[];
        statut?: string;
    }): Promise<{
        createdAt: Date;
        id: number;
        reference: string;
        dateDebut: Date;
        dateFin: Date | null;
        heureDepart: string;
        heureRetour: string | null;
        departReel: Date | null;
        retourReel: Date | null;
        statut: string;
        itineraire: string | null;
        fraisParticipation: number | null;
        fraisMission: number | null;
        notes: string | null;
        employeId: number;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    }>;
    findAll(): Promise<({
        vehicule: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        };
        chauffeur: {
            nom: string;
            prenom: string;
            id: number;
            disponible: boolean;
            mle: string | null;
            telephone: string | null;
            vehiculeParDefautId: number | null;
        };
        objetMission: {
            id: number;
            libelle: string;
            actif: boolean;
        };
        destination: {
            nom: string;
            id: number;
            ville: string;
        };
        employe: {
            nom: string;
            prenom: string;
            id: number;
            mle: string;
            actif: boolean;
            fonction: string;
            hotelAffectation: string;
        };
        creePar: {
            email: string;
            nom: string;
            prenom: string;
            id: number;
        };
        accompagnateurs: ({
            employe: {
                nom: string;
                prenom: string;
                id: number;
                mle: string;
                actif: boolean;
                fonction: string;
                hotelAffectation: string;
            };
        } & {
            id: number;
            employeId: number;
            ordreMissionId: number;
        })[];
    } & {
        createdAt: Date;
        id: number;
        reference: string;
        dateDebut: Date;
        dateFin: Date | null;
        heureDepart: string;
        heureRetour: string | null;
        departReel: Date | null;
        retourReel: Date | null;
        statut: string;
        itineraire: string | null;
        fraisParticipation: number | null;
        fraisMission: number | null;
        notes: string | null;
        employeId: number;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    })[]>;
    findOne(id: number): Promise<{
        vehicule: {
            id: number;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
            disponible: boolean;
        };
        chauffeur: {
            nom: string;
            prenom: string;
            id: number;
            disponible: boolean;
            mle: string | null;
            telephone: string | null;
            vehiculeParDefautId: number | null;
        };
        objetMission: {
            id: number;
            libelle: string;
            actif: boolean;
        };
        destination: {
            nom: string;
            id: number;
            ville: string;
        };
        employe: {
            nom: string;
            prenom: string;
            id: number;
            mle: string;
            actif: boolean;
            fonction: string;
            hotelAffectation: string;
        };
        creePar: {
            email: string;
            nom: string;
            prenom: string;
            id: number;
        };
        accompagnateurs: ({
            employe: {
                nom: string;
                prenom: string;
                id: number;
                mle: string;
                actif: boolean;
                fonction: string;
                hotelAffectation: string;
            };
        } & {
            id: number;
            employeId: number;
            ordreMissionId: number;
        })[];
    } & {
        createdAt: Date;
        id: number;
        reference: string;
        dateDebut: Date;
        dateFin: Date | null;
        heureDepart: string;
        heureRetour: string | null;
        departReel: Date | null;
        retourReel: Date | null;
        statut: string;
        itineraire: string | null;
        fraisParticipation: number | null;
        fraisMission: number | null;
        notes: string | null;
        employeId: number;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    }>;
    update(id: number, body: {
        employeId?: number;
        destinationId?: number;
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
    }): Promise<{
        createdAt: Date;
        id: number;
        reference: string;
        dateDebut: Date;
        dateFin: Date | null;
        heureDepart: string;
        heureRetour: string | null;
        departReel: Date | null;
        retourReel: Date | null;
        statut: string;
        itineraire: string | null;
        fraisParticipation: number | null;
        fraisMission: number | null;
        notes: string | null;
        employeId: number;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        id: number;
        reference: string;
        dateDebut: Date;
        dateFin: Date | null;
        heureDepart: string;
        heureRetour: string | null;
        departReel: Date | null;
        retourReel: Date | null;
        statut: string;
        itineraire: string | null;
        fraisParticipation: number | null;
        fraisMission: number | null;
        notes: string | null;
        employeId: number;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    }>;
}
