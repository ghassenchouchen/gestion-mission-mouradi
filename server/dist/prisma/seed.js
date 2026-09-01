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
    console.log('🌱 Seeding / verifying core reference data in PostgreSQL...');
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
        const dbEtab = await prisma.etablissement.upsert({
            where: { code: etab.code },
            update: { nom: etab.nom, ville: etab.ville, adresse: etab.adresse, actif: true },
            create: etab
        });
        dbEtablissements[etab.code] = dbEtab;
    }
    console.log(`✅ Verified ${Object.keys(dbEtablissements).length} Etablissements`);
    const salt = await bcrypt.genSalt(10);
    const adminPasswordHash = await bcrypt.hash('admin123', salt);
    const hrPasswordHash = await bcrypt.hash('hr123', salt);
    const admin = await prisma.utilisateur.upsert({
        where: { email: 'admin@elmouradi.com' },
        update: {},
        create: {
            email: 'admin@elmouradi.com',
            passwordHash: adminPasswordHash,
            nom: 'Administrateur',
            prenom: 'El Mouradi',
            role: 'ADMIN',
        },
    });
    const hr = await prisma.utilisateur.upsert({
        where: { email: 'hr@elmouradi.com' },
        update: {},
        create: {
            email: 'hr@elmouradi.com',
            passwordHash: hrPasswordHash,
            nom: 'RH',
            prenom: 'Service',
            role: 'HR',
        },
    });
    console.log('✅ Verified System Users:', admin.email, hr.email);
    const vehicleList = [
        { immatriculation: '7094 TU 109', marque: 'Isuzu', modele: 'D-Max', type: 'Utilitaire', disponible: true },
        { immatriculation: '3588 TU 213', marque: 'Citroen', modele: 'Berlingo', type: 'Utilitaire', disponible: true },
        { immatriculation: '3968 TU 129', marque: 'PEUGEOT', modele: 'Partner', type: 'Utilitaire', disponible: true },
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
        const dbV = await prisma.vehicule.upsert({
            where: { immatriculation: v.immatriculation },
            update: { marque: v.marque, modele: v.modele, type: v.type },
            create: v
        });
        dbVehicles[v.immatriculation] = dbV;
    }
    console.log(`✅ Verified ${Object.keys(dbVehicles).length} Vehicles`);
    const chauffeurList = [
        { mle: '1001', nom: 'LAKTI', prenom: 'Samir', disponible: true, vehicleImmat: '7094 TU 109' },
        { mle: '1002', nom: 'Bousnina', prenom: 'Samir', disponible: true, vehicleImmat: '3588 TU 213' },
        { mle: '1003', nom: 'Timoomi', prenom: 'Yassin', disponible: true, vehicleImmat: '3968 TU 129' },
        { mle: '1004', nom: 'Tayeri', prenom: 'Bechir', disponible: true, vehicleImmat: '3597 TU 213' },
        { mle: '1005', nom: 'Jelidi', prenom: 'Jamel', disponible: true, vehicleImmat: '8090 TU 145' },
        { mle: '1006', nom: 'Sawalmi', prenom: 'Anis', disponible: true, vehicleImmat: '2187 TU 73' },
        { mle: '1007', nom: 'Kaomsi', prenom: 'Bel Hassen', disponible: true, vehicleImmat: '5079 TU 59' },
        { mle: '1008', nom: 'Ghannen', prenom: 'Omar', disponible: true, vehicleImmat: '8572 TU 100' },
        { mle: '1009', nom: 'HAJ Mbarek', prenom: 'Faycel', disponible: true, vehicleImmat: '5388 TU 130' },
        { mle: '1010', nom: 'Guesmi', prenom: 'Mounir', disponible: true, vehicleImmat: '7292 TU 197' }
    ];
    for (const ch of chauffeurList) {
        const { vehicleImmat, ...chauffeurData } = ch;
        const defaultVehicle = dbVehicles[vehicleImmat];
        await prisma.chauffeur.upsert({
            where: { mle: ch.mle },
            update: { nom: ch.nom, prenom: ch.prenom },
            create: {
                ...chauffeurData,
                vehiculeParDefautId: defaultVehicle ? defaultVehicle.id : undefined,
                etablissementId: dbEtablissements['DG']?.id || undefined,
            }
        });
    }
    console.log(`✅ Verified ${chauffeurList.length} Chauffeurs`);
    const objList = [
        { libelle: 'Travaux', actif: true },
        { libelle: 'Réunion', actif: true },
        { libelle: 'Formation', actif: true },
        { libelle: 'Livraison', actif: true },
        { libelle: 'Inspection et Audit', actif: true },
        { libelle: 'Mission administrative', actif: true },
        { libelle: 'Maintenance', actif: true }
    ];
    for (const obj of objList) {
        await prisma.objetMission.upsert({
            where: { libelle: obj.libelle },
            update: { actif: true },
            create: obj
        });
    }
    console.log(`✅ Verified ${objList.length} Objets de Mission`);
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
    for (const dest of destList) {
        await prisma.destination.upsert({
            where: { nom: dest.nom },
            update: { ville: dest.ville },
            create: dest
        });
    }
    console.log(`✅ Verified ${destList.length} Destinations`);
    console.log('\n🎉 Reference dataset is fully verified and ready!');
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