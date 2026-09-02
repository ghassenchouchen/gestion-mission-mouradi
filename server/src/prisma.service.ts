import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private pool: Pool;

  constructor() {
    const connectionString =
      process.env.DATABASE_URL ||
      'postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public';

    const pool = new Pool({
      connectionString,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    // IMPORTANT: Catch background errors on idle pool connections so Node.js process does not crash!
    pool.on('error', (err) => {
      this.logger.error('Unexpected error on idle PostgreSQL client pool connection:', err);
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit() {
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
      try {
        await this.$connect();
        this.logger.log('✅ Successfully connected to PostgreSQL database');
        break;
      } catch (err) {
        attempts++;
        this.logger.error(`❌ Failed to connect to PostgreSQL database (Attempt ${attempts}/${maxAttempts}):`, err);
        if (attempts >= maxAttempts) {
          this.logger.error('Max connection attempts reached. Server will start but DB calls may fail until connection is restored.');
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      if (this.pool) {
        await this.pool.end();
      }
      this.logger.log('PrismaService disconnected cleanly.');
    } catch (err) {
      this.logger.error('Error during PrismaService disconnect:', err);
    }
  }
}
