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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Longline = exports.AcceptedContainerTypes = exports.LonglineType = void 0;
const typeorm_1 = require("typeorm");
const oyster_container_entity_1 = require("./oyster-container.entity");
const marine_farm_entity_1 = require("./marine-farm.entity");
var LonglineType;
(function (LonglineType) {
    LonglineType["SmallBuoy"] = "small-buoy";
    LonglineType["BigBuoy"] = "big-buoy";
})(LonglineType || (exports.LonglineType = LonglineType = {}));
var AcceptedContainerTypes;
(function (AcceptedContainerTypes) {
    AcceptedContainerTypes["Seed"] = "seed";
    AcceptedContainerTypes["Shell"] = "shell";
    AcceptedContainerTypes["Baby"] = "baby";
    AcceptedContainerTypes["Medium"] = "medium";
    AcceptedContainerTypes["Large"] = "large";
})(AcceptedContainerTypes || (exports.AcceptedContainerTypes = AcceptedContainerTypes = {}));
let Longline = class Longline {
};
exports.Longline = Longline;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Longline.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => oyster_container_entity_1.OysterContainer, (oyster_container) => oyster_container.longline),
    __metadata("design:type", Array)
], Longline.prototype, "oyster_containers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => marine_farm_entity_1.MarineFarm, (marine_farm) => marine_farm.longlines),
    (0, typeorm_1.JoinColumn)({ name: "marinefarmId" }),
    __metadata("design:type", marine_farm_entity_1.MarineFarm)
], Longline.prototype, "marinefarm", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: LonglineType,
        default: LonglineType.SmallBuoy,
    }),
    __metadata("design:type", String)
], Longline.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], Longline.prototype, "position_at_farm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Longline.prototype, "maximum_containers", void 0);
exports.Longline = Longline = __decorate([
    (0, typeorm_1.Entity)({ name: "longline" })
], Longline);
//# sourceMappingURL=longline.entity.js.map