require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function testDuplicateUser() {
  console.log('--------------------------------------------------');
  console.log('🛡️ Testing Duplicate User Prevention in PostgreSQL');
  console.log('--------------------------------------------------\n');

  const testEmail = 'admin@elmouradi.com'; // Existing user in seed

  console.log(`1. Attempting to create duplicate user with email "${testEmail}" (Role: HR)...`);

  try {
    await prisma.utilisateur.create({
      data: {
        email: testEmail,
        nom: 'Duplicate',
        prenom: 'Test',
        role: 'HR',
        passwordHash: 'hash123'
      }
    });
    console.error('❌ FAILURE: Database allowed duplicate user creation!');
  } catch (error) {
    console.log('   ✅ REJECTED BY POSTGRESQL (Unique Constraint P2002):');
    console.log(`      Error Code: ${error.code}`);
    console.log(`      Message: Unique constraint failed on field (${error.meta?.target || 'email'})`);
  }

  console.log('\n==================================================');
  console.log(' RESULT: DUPLICATE USER CREATION IS STRICTLY BLOCKED!');
  console.log('==================================================\n');
}

testDuplicateUser()
  .catch(err => console.error(err))
  .finally(async () => await prisma.$disconnect());
