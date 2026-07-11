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
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const bcrypt = __importStar(require("bcryptjs"));
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('Seeding reference data into PostgreSQL...');
    await prisma.accompagnateur.deleteMany({});
    await prisma.ordreMission.deleteMany({});
    await prisma.utilisateur.deleteMany({});
    await prisma.employe.deleteMany({});
    await prisma.chauffeur.deleteMany({});
    await prisma.vehicule.deleteMany({});
    await prisma.objetMission.deleteMany({});
    await prisma.destination.deleteMany({});
    const salt = await bcrypt.genSalt(10);
    const adminPasswordHash = await bcrypt.hash('admin123', salt);
    const hrPasswordHash = await bcrypt.hash('hr123', salt);
    const admin = await prisma.utilisateur.create({
        data: {
            email: 'admin@elmouradi.tn',
            passwordHash: adminPasswordHash,
            nom: 'Administrateur',
            prenom: 'El Mouradi',
            role: 'ADMIN',
        },
    });
    const hr = await prisma.utilisateur.create({
        data: {
            email: 'hr@elmouradi.tn',
            passwordHash: hrPasswordHash,
            nom: 'RH',
            prenom: 'Service',
            role: 'HR',
        },
    });
    console.log('✅ Created Users:', admin.email, hr.email);
    const empList = [
        { mle: '1029', nom: 'Bouguerra', prenom: 'Abdelhak', fonction: 'Technicien', hotelAffectation: 'El Mouradi Port El Kantaoui' },
        { mle: '1030', nom: 'Mahrouk', prenom: 'Nabil', fonction: 'DC', hotelAffectation: 'El Mouradi Palace' },
        { mle: '4392', nom: 'Ben Amor', prenom: 'Yassine', fonction: 'Auditeur', hotelAffectation: 'Direction générale' },
        { mle: '7104', nom: 'Mansour', prenom: 'Ridha', fonction: 'Responsable Maintenance', hotelAffectation: 'El Mouradi Djerba Menzel' },
        { mle: '5821', nom: 'Ben Salem', prenom: 'Sami', fonction: 'Contrôleur de Gestion', hotelAffectation: 'Direction générale' },
        { mle: '8971', nom: 'Gharbi', prenom: 'Salim', fonction: 'Directeur Financier', hotelAffectation: 'Direction générale' },
        { mle: '3194', nom: 'Toumi', prenom: 'Mariem', fonction: 'Assistante RH', hotelAffectation: 'Direction générale' },
        { mle: '6284', nom: 'Azaiez', prenom: 'Kais', fonction: 'Chef de Projet', hotelAffectation: 'El Mouradi Gammarth' }
    ];
    const dbEmployees = [];
    for (const emp of empList) {
        const dbEmp = await prisma.employe.create({ data: emp });
        dbEmployees.push(dbEmp);
    }
    console.log(`✅ Created ${dbEmployees.length} Employees`);
    const chauffeurList = [
        { mle: '1041', nom: 'Zorgatti', prenom: 'Samir', telephone: '+216 98 123 456', disponible: true },
        { mle: '1042', nom: 'Ben Salem', prenom: 'Ali', telephone: '+216 98 654 321', disponible: true },
        { mle: '3981', nom: 'Mejri', prenom: 'Salah', telephone: '+216 95 333 444', disponible: true },
        { mle: '2756', nom: 'Hamdi', prenom: 'Nizar', telephone: '+216 97 111 222', disponible: true }
    ];
    const dbChauffeurs = [];
    for (const ch of chauffeurList) {
        const dbCh = await prisma.chauffeur.create({ data: ch });
        dbChauffeurs.push(dbCh);
    }
    console.log(`✅ Created ${dbChauffeurs.length} Chauffeurs`);
    const vehicleList = [
        { immatriculation: '210 TUN 1234', marque: 'Peugeot', modele: 'Partner', type: 'Utilitaire', disponible: true },
        { immatriculation: '142 TUN 3854', marque: 'Toyota', modele: 'Hilux', type: 'Utilitaire', disponible: true },
        { immatriculation: '198 TUN 7721', marque: 'Hyundai', modele: 'H1', type: 'Bus', disponible: true },
        { immatriculation: '210 TUN 5589', marque: 'Toyota', modele: 'Hilux', type: 'Utilitaire', disponible: true },
        { immatriculation: 'Lui-même', marque: 'N/A', modele: 'Propre moyen', type: 'Aucun', disponible: true }
    ];
    const dbVehicles = [];
    for (const v of vehicleList) {
        const dbV = await prisma.vehicule.create({ data: v });
        dbVehicles.push(dbV);
    }
    console.log(`✅ Created ${dbVehicles.length} Vehicles`);
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
        { nom: 'Direction générale', ville: 'Tunis' }
    ];
    const dbDestinations = [];
    for (const dest of destList) {
        const dbDest = await prisma.destination.create({ data: dest });
        dbDestinations.push(dbDest);
    }
    console.log(`✅ Created ${dbDestinations.length} Destinations`);
    const today = new Date();
    const tomorrowStart = new Date(today);
    tomorrowStart.setDate(today.getDate() + 1);
    const tomorrowEnd = new Date(today);
    tomorrowEnd.setDate(today.getDate() + 3);
    const yesterdayStart = new Date(today);
    yesterdayStart.setDate(today.getDate() - 3);
    const yesterdayEnd = new Date(today);
    yesterdayEnd.setDate(today.getDate() - 1);
    const m1 = await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0001',
            employeId: dbEmployees.find(e => e.mle === '8971').id,
            destinationId: dbDestinations.find(d => d.nom === 'El Mouradi Gammarth').id,
            chauffeurId: dbChauffeurs.find(c => c.mle === '1042').id,
            vehiculeId: dbVehicles.find(v => v.immatriculation === '198 TUN 7721').id,
            objetMissionId: dbObjects.find(o => o.libelle === 'Inspection et Audit').id,
            creeParId: admin.id,
            dateDebut: tomorrowStart,
            dateFin: tomorrowEnd,
            heureDepart: '08:30',
            heureRetour: '17:30',
            statut: 'PLANIFIE',
            itineraire: 'Tunis -> Gammarth -> Tunis',
            notes: 'Visite d\'audit financier de fin de trimestre.'
        }
    });
    const m2 = await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0002',
            employeId: dbEmployees.find(e => e.mle === '1029').id,
            destinationId: dbDestinations.find(d => d.nom === 'El Mouradi Hammamet').id,
            chauffeurId: dbChauffeurs.find(c => c.mle === '1041').id,
            vehiculeId: dbVehicles.find(v => v.immatriculation === '210 TUN 1234').id,
            objetMissionId: dbObjects.find(o => o.libelle === 'Travaux').id,
            creeParId: admin.id,
            dateDebut: today,
            dateFin: tomorrowStart,
            heureDepart: '07:30',
            heureRetour: '18:00',
            statut: 'EN_COURS',
            itineraire: 'Tunis -> Hammamet -> Tunis',
            notes: 'Maintenance préventive des serveurs locaux.'
        }
    });
    await prisma.chauffeur.update({ where: { mle: '1041' }, data: { disponible: false } });
    await prisma.vehicule.update({ where: { immatriculation: '210 TUN 1234' }, data: { disponible: false } });
    const m3 = await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0003',
            employeId: dbEmployees.find(e => e.mle === '1030').id,
            destinationId: dbDestinations.find(d => d.nom === 'El Mouradi Palace').id,
            chauffeurId: dbChauffeurs.find(c => c.mle === '3981').id,
            vehiculeId: dbVehicles.find(v => v.immatriculation === 'Lui-même').id,
            objetMissionId: dbObjects.find(o => o.libelle === 'Réunion').id,
            creeParId: admin.id,
            dateDebut: yesterdayStart,
            dateFin: yesterdayEnd,
            heureDepart: '09:00',
            heureRetour: '16:00',
            statut: 'TERMINE',
            itineraire: 'Tunis -> Sousse -> Tunis',
            notes: 'Réunion régionale des directeurs.'
        }
    });
    const m4 = await prisma.ordreMission.create({
        data: {
            reference: 'OM-2026-0004',
            employeId: dbEmployees.find(e => e.mle === '5821').id,
            destinationId: dbDestinations.find(d => d.nom === 'El Mouradi Port El Kantaoui').id,
            chauffeurId: dbChauffeurs.find(c => c.mle === '2756').id,
            vehiculeId: dbVehicles.find(v => v.immatriculation === 'Lui-même').id,
            objetMissionId: dbObjects.find(o => o.libelle === 'Formation').id,
            creeParId: admin.id,
            dateDebut: yesterdayStart,
            dateFin: yesterdayEnd,
            heureDepart: '08:30',
            heureRetour: '18:00',
            statut: 'ANNULE',
            itineraire: 'Tunis -> Sousse -> Tunis',
            notes: 'Formation annulée pour cause d\'intempéries.'
        }
    });
    console.log('✅ Created Sample Missions');
    console.log('\n🎉 Seeding finished successfully!');
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