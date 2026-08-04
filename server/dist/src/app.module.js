"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma.module");
const auth_module_1 = require("./auth/auth.module");
const chauffeur_module_1 = require("./chauffeur/chauffeur.module");
const vehicule_module_1 = require("./vehicule/vehicule.module");
const objet_mission_module_1 = require("./objet-mission/objet-mission.module");
const destination_module_1 = require("./destination/destination.module");
const employe_module_1 = require("./employe/employe.module");
const ordre_mission_module_1 = require("./ordre-mission/ordre-mission.module");
const utilisateur_module_1 = require("./utilisateur/utilisateur.module");
const mail_module_1 = require("./mail/mail.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            chauffeur_module_1.ChauffeurModule,
            vehicule_module_1.VehiculeModule,
            objet_mission_module_1.ObjetMissionModule,
            destination_module_1.DestinationModule,
            employe_module_1.EmployeModule,
            ordre_mission_module_1.OrdreMissionModule,
            utilisateur_module_1.UtilisateurModule,
            mail_module_1.MailModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map