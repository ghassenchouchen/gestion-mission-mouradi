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
        id: number;
        createdAt: Date;
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
        employe: {
            id: number;
            nom: string;
            prenom: string;
            mle: string;
            actif: boolean;
            fonction: string;
            hotelAffectation: string;
        };
        chauffeur: {
            id: number;
            nom: string;
            prenom: string;
            mle: string;
            telephone: string | null;
            disponible: boolean;
        };
        vehicule: {
            id: number;
            disponible: boolean;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
        };
        objetMission: {
            id: number;
            libelle: string;
            actif: boolean;
        };
        destination: {
            id: number;
            nom: string;
            ville: string;
        };
        creePar: {
            id: number;
            email: string;
            nom: string;
            prenom: string;
        };
        accompagnateurs: ({
            employe: {
                id: number;
                nom: string;
                prenom: string;
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
        id: number;
        createdAt: Date;
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
        employe: {
            id: number;
            nom: string;
            prenom: string;
            mle: string;
            actif: boolean;
            fonction: string;
            hotelAffectation: string;
        };
        chauffeur: {
            id: number;
            nom: string;
            prenom: string;
            mle: string;
            telephone: string | null;
            disponible: boolean;
        };
        vehicule: {
            id: number;
            disponible: boolean;
            immatriculation: string;
            marque: string;
            modele: string;
            type: string;
        };
        objetMission: {
            id: number;
            libelle: string;
            actif: boolean;
        };
        destination: {
            id: number;
            nom: string;
            ville: string;
        };
        creePar: {
            id: number;
            email: string;
            nom: string;
            prenom: string;
        };
        accompagnateurs: ({
            employe: {
                id: number;
                nom: string;
                prenom: string;
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
        id: number;
        createdAt: Date;
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
        id: number;
        createdAt: Date;
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
        id: number;
        createdAt: Date;
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
