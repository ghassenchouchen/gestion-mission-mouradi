"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetMissionModule = void 0;
const common_1 = require("@nestjs/common");
const objet_mission_service_1 = require("./objet-mission.service");
const objet_mission_controller_1 = require("./objet-mission.controller");
let ObjetMissionModule = class ObjetMissionModule {
};
exports.ObjetMissionModule = ObjetMissionModule;
exports.ObjetMissionModule = ObjetMissionModule = __decorate([
    (0, common_1.Module)({
        controllers: [objet_mission_controller_1.ObjetMissionController],
        providers: [objet_mission_service_1.ObjetMissionService],
        exports: [objet_mission_service_1.ObjetMissionService],
    })
], ObjetMissionModule);
//# sourceMappingURL=objet-mission.module.js.map