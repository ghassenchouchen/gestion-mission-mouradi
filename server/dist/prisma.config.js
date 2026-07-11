"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: "prisma/schema.prisma",
    datasource: {
        url: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/gestion_mission?schema=public",
    },
    migrations: {
        seed: "npx tsx ./prisma/seed.ts",
    },
});
//# sourceMappingURL=prisma.config.js.map