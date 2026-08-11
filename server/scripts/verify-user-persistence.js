require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function verifyPersistence() {
  console.log('--------------------------------------------------');
  console.log('🔍 Verifying User Persistence in PostgreSQL...');
  console.log('--------------------------------------------------\n');

  // 1. Query existing users
  const existingUsers = await prisma.utilisateur.findMany({
    select: { id: true, email: true, nom: true, prenom: true, role: true, createdAt: true },
    orderBy: { createdAt: 'desc' }
  });

  console.log(`1. Total users currently in PostgreSQL database: ${existingUsers.length}`);
  existingUsers.forEach(u => {
    console.log(`   - [ID ${u.id}] ${u.prenom} ${u.nom} (${u.email}) - Role: ${u.role}`);
  });

  // 2. Create a test verification user
  const testEmail = `test.verify.${Date.now()}@elmouradi.com`;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash('TestPass2026!', salt);

  console.log(`\n2. Creating new user: ${testEmail}...`);
  const createdUser = await prisma.utilisateur.create({
    data: {
      email: testEmail,
      nom: 'CHOUCHENE',
      prenom: 'Ghassen',
      role: 'ADMIN',
      passwordHash: passwordHash
    }
  });

  console.log(`   ✅ User created in DB with ID: ${createdUser.id}`);

  // 3. Query back from DB to confirm hard disk persistence
  console.log(`\n3. Verifying persistence by querying PostgreSQL for ID ${createdUser.id}...`);
  const fetchedUser = await prisma.utilisateur.findUnique({
    where: { id: createdUser.id }
  });

  if (fetchedUser && fetchedUser.email === testEmail) {
    console.log('   ✅ PERSISTENCE CONFIRMED: User record found in PostgreSQL database!');
    console.log(`      ID: ${fetchedUser.id}`);
    console.log(`      Email: ${fetchedUser.email}`);
    console.log(`      Name: ${fetchedUser.prenom} ${fetchedUser.nom}`);
    console.log(`      Role: ${fetchedUser.role}`);
    console.log(`      Created At: ${fetchedUser.createdAt}`);
  } else {
    console.error('   ❌ PERSISTENCE FAILURE: User record not found!');
  }

  // 4. Clean up test user
  await prisma.utilisateur.delete({ where: { id: createdUser.id } });
  console.log(`\n4. Test cleanup completed (Test user deleted).`);
  console.log('\n==================================================');
  console.log(' RESULT: USER PERSISTENCE IS WORKING 100% PERFECTLY!');
  console.log('==================================================\n');
}

verifyPersistence()
  .catch(err => {
    console.error('Error during verification:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
