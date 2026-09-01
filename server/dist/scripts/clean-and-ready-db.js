"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function cleanAndReadyDb() {
    console.log('🧹 Cleaning filler data and preparing database for real usage...');
    const deletedAcc = await prisma.accompagnateur.deleteMany({});
    console.log(`✅ Deleted ${deletedAcc.count} accompagnateurs.`);
    const deletedOM = await prisma.ordreMission.deleteMany({});
    console.log(`✅ Deleted ${deletedOM.count} sample mission orders.`);
    const deletedEmp = await prisma.employe.deleteMany({});
    console.log(`✅ Deleted ${deletedEmp.count} filler employees.`);
    const deletedObj = await prisma.objetMission.deleteMany({});
    console.log(`✅ Deleted ${deletedObj.count} old objet missions.`);
    const cleanObjets = [
        'Travaux',
        'Réunion',
        'Formation',
        'Livraison',
        'Inspection et Audit',
        'Mission administrative',
        'Maintenance'
    ];
    for (const libelle of cleanObjets) {
        await prisma.objetMission.create({
            data: { libelle, actif: true }
        });
    }
    console.log(`✅ Created ${cleanObjets.length} clean Objets de Mission.`);
    const updatedVeh = await prisma.vehicule.updateMany({
        data: { disponible: true }
    });
    console.log(`✅ Kept all Vehicles intact & reset ${updatedVeh.count} Vehicles to available.`);
    const updatedCh = await prisma.chauffeur.updateMany({
        data: { disponible: true }
    });
    console.log(`✅ Kept all Chauffeurs intact & reset ${updatedCh.count} Chauffeurs to available.`);
    console.log('🎉 Database is clean and ready for real usage!');
}
cleanAndReadyDb()
    .catch((e) => {
    console.error('❌ Error during DB cleanup:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=clean-and-ready-db.js.map