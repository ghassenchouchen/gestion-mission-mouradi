"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const bcrypt = __importStar(require("bcryptjs"));
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('Seeding reference data and sample demo dataset into PostgreSQL...');
    await prisma.accompagnateur.deleteMany({});
    await prisma.ordreMission.deleteMany({});
    await prisma.utilisateur.deleteMany({});
    await prisma.employe.deleteMany({});
    await prisma.chauffeur.deleteMany({});
    await prisma.vehicule.deleteMany({});
    await prisma.objetMission.deleteMany({});
    await prisma.destination.deleteMany({});
    await prisma.etablissement.deleteMany({});
    const etablissementList = [
        { code: 'DG', nom: 'Direction générale', ville: 'Sousse', adresse: 'B.P 48 El Kantaoui 4089 Port El Kantaoui', actif: true },
        { code: 'EMG', nom: 'El Mouradi Gammarth', ville: 'Tunis', adresse: 'Les Côtes de Carthage 2078 Gammarth', actif: true },
        { code: 'EMP', nom: 'El Mouradi Palace', ville: 'Sousse', adresse: 'Zone Touristique El Kantaoui 4089', actif: true },
        { code: 'EMK', nom: 'El Mouradi Port El Kantaoui', ville: 'Sousse', adresse: 'Port El Kantaoui 4089', actif: true },
        { code: 'EMH', nom: 'El Mouradi Hammamet', ville: 'Hammamet', adresse: 'Yasmine Hammamet 8050', actif: true },
        { code: 'EMD', nom: 'El Mouradi Djerba Menzel', ville: 'Djerba', adresse: 'Zone Touristique Midoun 4116', actif: true },
        { code: 'EMM', nom: 'El Mouradi Mahdia', ville: 'Mahdia', adresse: 'Zone Touristique Mahdia 5100', actif: true },
    ];
    const dbEtablissements = {};
    for (const etab of etablissementList) {
        const dbEtab = await prisma.etablissement.create({ data: etab });
        dbEtablissements[etab.code] = dbEtab;
    }
    console.log(`✅ Created ${Object.keys(dbEtablissements).length} Etablissements`);
    const salt = await bcrypt.genSalt(10);
    const adminPasswordHash = await bcrypt.hash('admin123', salt);
    const hrPasswordHash = await bcrypt.hash('hr123', salt);
    const admin = await prisma.utilisateur.create({
        data: {
            email: 'admin@elmouradi.com',
            passwordHash: adminPasswordHash,
            nom: 'Administrateur',
            prenom: 'El Mouradi',
            role: 'ADMIN',
        },
    });
    const hr = await prisma.utilisateur.create({
        data: {
            email: 'hr@elmouradi.com',
            passwordHash: hrPasswordHash,
            nom: 'RH',
            prenom: 'Service',
            role: 'HR',
        },
    });
    console.log('✅ Created Users:', admin.email, hr.email);
    const vehicleList = [
        { immatriculation: '7094 TU 109', marque: 'Isuzu', modele: 'D-Max', type: 'Utilitaire', disponible: true },
        { immatriculation: '3588 TU 213', marque: 'Citroen', modele: 'Berlingo', type: 'Utilitaire', disponible: false },
        { immatriculation: '3968 TU 129', marque: 'PEUGEOT', modele: 'Partner', type: 'Utilitaire', disponible: false },
        { immatriculation: '3597 TU 213', marque: 'Citroen', modele: 'Berlingo', type: 'Utilitaire', disponible: true },
        { immatriculation: '8090 TU 145', marque: 'Mercedes', modele: 'Axor', type: 'Poids Lourd', disponible: true },
        { immatriculation: '2187 TU 73', marque: 'Renault', modele: 'CLR 230', type: 'Poids Lourd', disponible: true },
        { immatriculation: '5079 TU 59', marque: 'Renault', modele: 'CL R 220', type: 'Poids Lourd', disponible: true },
        { immatriculation: '8572 TU 100', marque: 'Isuzu', modele: 'D-Max', type: 'Utilitaire', disponible: true },
        { immatriculation: '5388 TU 130', marque: 'Isuzu', modele: 'DMAX', type: 'Utilitaire', disponible: true },
        { immatriculation: '1016 TU 113', marque: 'Peugeot', modele: 'Partner', type: 'Utilitaire', disponible: true },
        { immatriculation: '7285 TU 197', marque: 'FIAT', modele: 'QUBO', type: 'Voiture', disponible: true },
        { immatriculation: '3398 TU 206', marque: 'Citroen', modele: 'C ELYSEE', type: 'Voiture', disponible: true },
        { immatriculation: '7292 TU 197', marque: 'FIAT', modele: 'QUBO', type: 'Voiture', disponible: true },
        { immatriculation: 'Lui-même', marque: 'N/A', modele: 'Propre moyen', type: 'Aucun', disponible: true }
    ];
    const dbVehicles = {};
    for (const v of vehicleList) {
        const dbV = await prisma.vehicule.create({ data: v });
        dbVehicles[v.immatriculation] = dbV;
    }
    console.log(`✅ Created ${Object.keys(dbVehicles).length} Vehicles`);
    const chauffeurList = [
        { mle: '1001', nom: 'LAKTI', prenom: 'Samir', disponible: true, vehicleImmat: '7094 TU 109' },
        { mle: '1002', nom: 'Bousnina', prenom: 'Samir', disponible: false, vehicleImmat: '3588 TU 213' },
        { mle: '1003', nom: 'Timoomi', prenom: 'Yassin', disponible: false, vehicleImmat: '3968 TU 129' },
        { mle: '1004', nom: 'Tayeri', prenom: 'Bechir', disponible: true, vehicleImmat: '3597 TU 213' },
        { mle: '1005', nom: 'Jelidi', prenom: 'Jamel', disponible: true, vehicleImmat: '8090 TU 145' },
        { mle: '1006', nom: 'Sawalmi', prenom: 'Anis', disponible: true, vehicleImmat: '2187 TU 73' },
        { mle: '1007', nom: 'Kaomsi', prenom: 'Bel Hassen', disponible: true, vehicleImmat: '5079 TU 59' },
        { mle: '1008', nom: 'Ghannen', prenom: 'Omar', disponible: true, vehicleImmat: '8572 TU 100' },
        { mle: '1009', nom: 'HAJ Mbarek', prenom: 'Faycel', disponible: true, vehicleImmat: '5388 TU 130' },
        { mle: '1010', nom: 'Guesmi', prenom: 'Mounir', disponible: true, vehicleImmat: '7292 TU 197' }
    ];
    const dbChauffeurs = [];
    for (const ch of chauffeurList) {
        const { vehicleImmat, ...chauffeurData } = ch;
        const defaultVehicle = dbVehicles[vehicleImmat];
        const dbCh = await prisma.chauffeur.create({
            data: {
                ...chauffeurData,
                vehiculeParDefautId: defaultVehicle ? defaultVehicle.id : undefined,
                etablissementId: dbEtablissements['DG']?.id || undefined,
            },
        });
        dbChauffeurs.push(dbCh);
    }
    console.log(`✅ Created ${dbChauffeurs.length} Chauffeurs`);
    const objList = [
        { libelle: 'Travaux', actif: true },
        { libelle: 'Réunion', actif: true },
        { libelle: 'Formation', actif: true },
        { libelle: 'Livraison', actif: true },
        { libelle: 'Inspection et Audit', actif: true }
    ];
    const dbObjects = [];
    for (const obj of objList) {
        const dbObj = await prisma.objetMission.create({ data: obj });
        dbObjects.push(dbObj);
    }
    console.log(`✅ Created ${dbObjects.length} ObjetMissions`);
    const destList = [
        { nom: 'El Mouradi Port El Kantaoui', ville: 'Sousse' },
        { nom: 'El Mouradi Palace', ville: 'Sousse' },
        { nom: 'El Mouradi Gammarth', ville: 'Tunis' },
        { nom: 'El Mouradi Hammamet', ville: 'Hammamet' },
        { nom: 'El Mouradi Djerba Menzel', ville: 'Djerba' },
        { nom: 'El Mouradi Mahdia', ville: 'Mahdia' },
        { nom: 'El Mouradi Tozeur', ville: 'Tozeur' },
        { nom: 'El Mouradi Douz', ville: 'Douz' },
        { nom: 'Direction générale', ville: 'Sousse' }
    ];
    const dbDestinations = [];
    for (const dest of destList) {
        const dbDest = await prisma.destination.create({ data: dest });
        dbDestinations.push(dbDest);
    }
    console.log(`✅ Created ${dbDestinations.length} Destinations`);
    const employeeList = [
        { mle: '8971', nom: 'TRABELSI', prenom: 'Mohamed', fonction: 'Ingénieur Système', hotelAffectation: 'Direction générale', actif: true },
        { mle: '4521', nom: 'BEN ALI', prenom: 'Sonia', fonction: 'Responsable Qualité', hotelAffectation: 'El Mouradi Gammarth', actif: true },
        { mle: '6332', nom: 'CHAMMAKH', prenom: 'Karim', fonction: 'Chef de Projet', hotelAffectation: 'El Mouradi Palace', actif: true },
        { mle: '9120', nom: 'GHARBI', prenom: 'Fatma', fonction: 'Directrice RH', hotelAffectation: 'Direction générale', actif: true },
        { mle: '3314', nom: 'SELLAMI', prenom: 'Youssef', fonction: 'Technicien Maintenance', hotelAffectation: 'El Mouradi Port El Kantaoui', actif: true }
    ];
    const dbEmployes = [];
    for (const emp of employeeList) {
        const dbE = await prisma.employe.create({ data: emp });
        dbEmployes.push(dbE);
    }
    console.log(`✅ Created ${dbEmployes.length} Employees`);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0001',
            employeId: dbEmployes[0].id,
            destinationId: dbDestinations[0].id,
            chauffeurId: dbChauffeurs[0].id,
            vehiculeId: dbVehicles['7094 TU 109'].id,
            objetMissionId: dbObjects[0].id,
            creeParId: admin.id,
            dateDebut: yesterday,
            dateFin: yesterday,
            heureDepart: '08:00',
            heureRetour: '17:00',
            statut: 'TERMINE',
            itineraire: 'Tunis -> Sousse -> Tunis',
            fraisParticipation: 50,
            fraisMission: 120,
            notes: 'Mission terminée sans incident. Maintenance serveurs effectuée.'
        }
    });
    await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0002',
            employeId: dbEmployes[1].id,
            destinationId: dbDestinations[3].id,
            chauffeurId: dbChauffeurs[2].id,
            vehiculeId: dbVehicles['3968 TU 129'].id,
            objetMissionId: dbObjects[4].id,
            creeParId: admin.id,
            dateDebut: today,
            dateFin: tomorrow,
            heureDepart: '07:30',
            heureRetour: '19:00',
            statut: 'EN_COURS',
            itineraire: 'Direction Générale -> El Mouradi Hammamet',
            fraisParticipation: 30,
            fraisMission: 85,
            notes: 'Audit annuel de conformité hygiène et sécurité.'
        }
    });
    await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0003',
            employeId: dbEmployes[2].id,
            destinationId: dbDestinations[4].id,
            chauffeurId: dbChauffeurs[1].id,
            vehiculeId: dbVehicles['3588 TU 213'].id,
            objetMissionId: dbObjects[1].id,
            creeParId: admin.id,
            dateDebut: tomorrow,
            dateFin: nextWeek,
            heureDepart: '09:00',
            heureRetour: '18:00',
            statut: 'PLANIFIE',
            itineraire: 'Tunis -> Djerba',
            fraisParticipation: 100,
            fraisMission: 350,
            notes: 'Réunion régionale avec les chefs de départements.'
        }
    });
    console.log('✅ Created Sample Demo Missions');
    console.log('\n🎉 Seeding finished successfully with rich demo data!');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map