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
        accompagnateurs?: number[];
        statut?: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        reference: string;
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number | null;
        creeParId: number;
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
            id: number;
            nom: string;
            prenom: string;
            disponible: boolean;
            mle: string | null;
            vehiculeParDefautId: number | null;
            telephone: string | null;
            etablissementId: number | null;
        };
        objetMission: {
            id: number;
            actif: boolean;
            libelle: string;
        } | null;
        destinationsMission: ({
            destination: {
                id: number;
                nom: string;
                ville: string;
            };
        } & {
            id: number;
            destinationId: number;
            ordreMissionId: number;
        })[];
        destination: {
            id: number;
            nom: string;
            ville: string;
        };
        employe: {
            id: number;
            nom: string;
            actif: boolean;
            prenom: string;
            mle: string | null;
            fonction: string | null;
            hotelAffectation: string;
        } | null;
        creePar: {
            id: number;
            nom: string | null;
            email: string;
            prenom: string | null;
            role: string;
        };
        accompagnateurs: ({
            employe: {
                id: number;
                nom: string;
                actif: boolean;
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
        id: number;
        createdAt: Date;
        reference: string;
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number | null;
        creeParId: number;
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
            id: number;
            nom: string;
            prenom: string;
            disponible: boolean;
            mle: string | null;
            vehiculeParDefautId: number | null;
            telephone: string | null;
            etablissementId: number | null;
        };
        objetMission: {
            id: number;
            actif: boolean;
            libelle: string;
        } | null;
        destinationsMission: ({
            destination: {
                id: number;
                nom: string;
                ville: string;
            };
        } & {
            id: number;
            destinationId: number;
            ordreMissionId: number;
        })[];
        destination: {
            id: number;
            nom: string;
            ville: string;
        };
        employe: {
            id: number;
            nom: string;
            actif: boolean;
            prenom: string;
            mle: string | null;
            fonction: string | null;
            hotelAffectation: string;
        } | null;
        creePar: {
            id: number;
            nom: string | null;
            email: string;
            prenom: string | null;
            role: string;
        };
        accompagnateurs: ({
            employe: {
                id: number;
                nom: string;
                actif: boolean;
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
        id: number;
        createdAt: Date;
        reference: string;
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number | null;
        creeParId: number;
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
    }>;
    update(id: number, dto: {
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
    }): Promise<{
        id: number;
        createdAt: Date;
        reference: string;
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number | null;
        creeParId: number;
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
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        reference: string;
        employeId: number | null;
        destinationId: number;
        chauffeurId: number;
        vehiculeId: number;
        objetMissionId: number | null;
        creeParId: number;
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
    }>;
}
