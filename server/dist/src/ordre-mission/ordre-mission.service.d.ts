import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
export declare class OrdreMissionService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private readonly logger;
    private autoStartInterval;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    private runSchedulerTasks;
    private autoStartMissions;
    private autoTerminateMissions;
    create(userId: number, dto: {
        employeId?: number;
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
        employeId: number | null;
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
            id: number;
            prenom: string;
            disponible: boolean;
            mle: string | null;
            telephone: string | null;
            vehiculeParDefautId: number | null;
            etablissementId: number | null;
        };
        objetMission: {
            actif: boolean;
            id: number;
            libelle: string;
        };
        destination: {
            nom: string;
            ville: string;
            id: number;
        };
        employe: {
            nom: string;
            actif: boolean;
            id: number;
            prenom: string;
            mle: string | null;
            fonction: string | null;
            hotelAffectation: string;
        } | null;
        creePar: {
            nom: string | null;
            id: number;
            email: string;
            prenom: string | null;
        };
        accompagnateurs: ({
            employe: {
                nom: string;
                actif: boolean;
                id: number;
                prenom: string;
                mle: string | null;
                fonction: string | null;
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
        employeId: number | null;
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
            id: number;
            prenom: string;
            disponible: boolean;
            mle: string | null;
            telephone: string | null;
            vehiculeParDefautId: number | null;
            etablissementId: number | null;
        };
        objetMission: {
            actif: boolean;
            id: number;
            libelle: string;
        };
        destination: {
            nom: string;
            ville: string;
            id: number;
        };
        employe: {
            nom: string;
            actif: boolean;
            id: number;
            prenom: string;
            mle: string | null;
            fonction: string | null;
            hotelAffectation: string;
        } | null;
        creePar: {
            nom: string | null;
            id: number;
            email: string;
            prenom: string | null;
        };
        accompagnateurs: ({
            employe: {
                nom: string;
                actif: boolean;
                id: number;
                prenom: string;
                mle: string | null;
                fonction: string | null;
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
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    }>;
    update(id: number, dto: {
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
        employeId: number | null;
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
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number;
        creeParId: number;
    }>;
}
