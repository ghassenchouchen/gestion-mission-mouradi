import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding reference data and sample demo dataset into PostgreSQL...');

  // 1. Clean existing data (order matters for FK constraints)
  await prisma.accompagnateur.deleteMany({});
  await prisma.ordreMission.deleteMany({});
  await prisma.utilisateur.deleteMany({});
  await prisma.employe.deleteMany({});
  await prisma.chauffeur.deleteMany({});
  await prisma.vehicule.deleteMany({});
  await prisma.objetMission.deleteMany({});
  await prisma.destination.deleteMany({});

  // 2. Create Admin & HR Users
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

  // 3. Create Vehicles
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

  const dbVehicles: Record<string, any> = {};
  for (const v of vehicleList) {
    const dbV = await prisma.vehicule.create({ data: v });
    dbVehicles[v.immatriculation] = dbV;
  }
  console.log(`✅ Created ${Object.keys(dbVehicles).length} Vehicles`);

  // 4. Create Chauffeurs
  const chauffeurList = [
    { mle: '1001', nom: 'LAKTI', prenom: 'Samir', disponible: true, vehicleImmat: '7094 TU 109' },
    { mle: '1002', nom: 'Bousnina', prenom: 'Samir', disponible: true, vehicleImmat: '3588 TU 213' },
    { mle: '1003', nom: 'Timoomi', prenom: 'Yassin', disponible: false, vehicleImmat: '3968 TU 129' }, // Busy on active mission
    { mle: '1004', nom: 'Tayeri', prenom: 'Bechir', disponible: true, vehicleImmat: '3597 TU 213' },
    { mle: '1005', nom: 'Jelidi', prenom: 'Jamel', disponible: true, vehicleImmat: '8090 TU 145' },
    { mle: '1006', nom: 'Sawalmi', prenom: 'Anis', disponible: true, vehicleImmat: '2187 TU 73' },
    { mle: '1007', nom: 'Kaomsi', prenom: 'Bel Hassen', disponible: true, vehicleImmat: '5079 TU 59' },
    { mle: '1008', nom: 'Ghannen', prenom: 'Omar', disponible: true, vehicleImmat: '8572 TU 100' },
    { mle: '1009', nom: 'HAJ Mbarek', prenom: 'Faycel', disponible: true, vehicleImmat: '5388 TU 130' },
    { mle: '1010', nom: 'Guesmi', prenom: 'Mounir', disponible: true, vehicleImmat: '7292 TU 197' }
  ];

  const dbChauffeurs: any[] = [];
  for (const ch of chauffeurList) {
    const { vehicleImmat, ...chauffeurData } = ch;
    const defaultVehicle = dbVehicles[vehicleImmat];
    const dbCh = await prisma.chauffeur.create({
      data: {
        ...chauffeurData,
        vehiculeParDefautId: defaultVehicle ? defaultVehicle.id : undefined,
      },
    });
    dbChauffeurs.push(dbCh);
  }
  console.log(`✅ Created ${dbChauffeurs.length} Chauffeurs`);

  // 5. Create Mission Objectives
  const objList = [
    { libelle: 'Travaux', actif: true },
    { libelle: 'Réunion', actif: true },
    { libelle: 'Formation', actif: true },
    { libelle: 'Livraison', actif: true },
    { libelle: 'Inspection et Audit', actif: true }
  ];

  const dbObjects: any[] = [];
  for (const obj of objList) {
    const dbObj = await prisma.objetMission.create({ data: obj });
    dbObjects.push(dbObj);
  }
  console.log(`✅ Created ${dbObjects.length} ObjetMissions`);

  // 6. Create Destinations
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

  const dbDestinations: any[] = [];
  for (const dest of destList) {
    const dbDest = await prisma.destination.create({ data: dest });
    dbDestinations.push(dbDest);
  }
  console.log(`✅ Created ${dbDestinations.length} Destinations`);

  // 7. Create Sample Employees
  const employeeList = [
    { mle: '8971', nom: 'TRABELSI', prenom: 'Mohamed', fonction: 'Ingénieur Système', hotelAffectation: 'Direction générale', actif: true },
    { mle: '4521', nom: 'BEN ALI', prenom: 'Sonia', fonction: 'Responsable Qualité', hotelAffectation: 'El Mouradi Gammarth', actif: true },
    { mle: '6332', nom: 'CHAMMAKH', prenom: 'Karim', fonction: 'Chef de Projet', hotelAffectation: 'El Mouradi Palace', actif: true },
    { mle: '9120', nom: 'GHARBI', prenom: 'Fatma', fonction: 'Directrice RH', hotelAffectation: 'Direction générale', actif: true },
    { mle: '3314', nom: 'SELLAMI', prenom: 'Youssef', fonction: 'Technicien Maintenance', hotelAffectation: 'El Mouradi Port El Kantaoui', actif: true }
  ];

  const dbEmployes: any[] = [];
  for (const emp of employeeList) {
    const dbE = await prisma.employe.create({ data: emp });
    dbEmployes.push(dbE);
  }
  console.log(`✅ Created ${dbEmployes.length} Employees`);

  // 8. Create Sample Missions for Demo
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const nextWeek = new Date(today); nextWeek.setDate(today.getDate() + 7);

  // Mission 1: Terminée (Completed)
  await prisma.ordreMission.create({
    data: {
      reference: 'OM-2026-0001',
      employeId: dbEmployes[0].id, // Mohamed Trabelsi
      destinationId: dbDestinations[0].id, // Port El Kantaoui
      chauffeurId: dbChauffeurs[0].id, // Samir Lakti
      vehiculeId: dbVehicles['7094 TU 109'].id,
      objetMissionId: dbObjects[0].id, // Travaux
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

  // Mission 2: En cours (Active)
  await prisma.ordreMission.create({
    data: {
      reference: 'OM-2026-0002',
      employeId: dbEmployes[1].id, // Sonia Ben Ali
      destinationId: dbDestinations[3].id, // Hammamet
      chauffeurId: dbChauffeurs[2].id, // Yassin Timoomi (Marked busy)
      vehiculeId: dbVehicles['3968 TU 129'].id,
      objetMissionId: dbObjects[4].id, // Inspection
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

  // Mission 3: Planifiée (Validated / Planned for tomorrow)
  await prisma.ordreMission.create({
    data: {
      reference: 'OM-2026-0003',
      employeId: dbEmployes[2].id, // Karim Chammakh
      destinationId: dbDestinations[4].id, // Djerba
      chauffeurId: dbChauffeurs[1].id, // Samir Bousnina
      vehiculeId: dbVehicles['3588 TU 213'].id,
      objetMissionId: dbObjects[1].id, // Réunion
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
