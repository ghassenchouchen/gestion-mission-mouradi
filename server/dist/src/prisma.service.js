"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    logger = new common_1.Logger(PrismaService_1.name);
    pool;
    constructor() {
        const connectionString = process.env.DATABASE_URL ||
            'postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public';
        const pool = new pg_1.Pool({
            connectionString,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 5000,
            keepAlive: true,
            keepAliveInitialDelayMillis: 10000,
        });
        pool.on('error', (err) => {
            this.logger.error('Unexpected error on idle PostgreSQL client pool connection:', err);
        });
        const adapter = new adapter_pg_1.PrismaPg(pool);
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
            }
            catch (err) {
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
        }
        catch (err) {
            this.logger.error('Error during PrismaService disconnect:', err);
        }
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map