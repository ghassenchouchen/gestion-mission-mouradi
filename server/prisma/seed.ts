import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding reference data into PostgreSQL...');

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

  // 3. Create Vehicles FIRST (needed for chauffeur default vehicle references)
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

  // 4. Create Chauffeurs with default vehicle assignments
  // Based on the real chauffeur-vehicle pairing table
  const chauffeurList = [
    { nom: 'LAKTI', prenom: 'Samir', disponible: true, vehicleImmat: '7094 TU 109' },
    { nom: 'Bousnina', prenom: 'Samir', disponible: true, vehicleImmat: '3588 TU 213' },
    { nom: 'Timoomi', prenom: 'Yassin', disponible: true, vehicleImmat: '3968 TU 129' },
    { nom: 'Tayeri', prenom: 'Bechir', disponible: true, vehicleImmat: '3597 TU 213' },
    { nom: 'Jelidi', prenom: 'Jamel', disponible: true, vehicleImmat: '8090 TU 145' },
    { nom: 'Sawalmi', prenom: 'Anis', disponible: true, vehicleImmat: '2187 TU 73' },
    { nom: 'Kaomsi', prenom: 'Bel Hassen', disponible: true, vehicleImmat: '5079 TU 59' },
    { nom: 'Ghannen', prenom: 'Omar', disponible: true, vehicleImmat: '8572 TU 100' },
    { nom: 'HAJ Mbarek', prenom: 'Faycel', disponible: true, vehicleImmat: '5388 TU 130' },
    { nom: 'Guesmi', prenom: 'Mounir', disponible: true, vehicleImmat: '7292 TU 197' }
  ];

  const dbChauffeurs = [];
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

  const dbObjects = [];
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

  const dbDestinations = [];
  for (const dest of destList) {
    const dbDest = await prisma.destination.create({ data: dest });
    dbDestinations.push(dbDest);
  }
  console.log(`✅ Created ${dbDestinations.length} Destinations`);

  // NOTE: No mock employees or sample missions are seeded.
  // Employees should be added through the application UI.
  // Missions will be created by users through the "Nouvelle Mission" form.

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
