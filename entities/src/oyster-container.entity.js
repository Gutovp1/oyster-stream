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
exports.OysterContainer = exports.ContainerType = exports.OysterType = void 0;
const typeorm_1 = require("typeorm");
const longline_entity_1 = require("./longline.entity");
var OysterType;
(function (OysterType) {
    OysterType["Seed"] = "seed";
    OysterType["Shell"] = "shell";
    OysterType["Baby"] = "baby";
    OysterType["Medium"] = "medium";
    OysterType["Large"] = "large";
})(OysterType || (exports.OysterType = OysterType = {}));
var ContainerType;
(function (ContainerType) {
    ContainerType["WhiteNursery"] = "white-nursery";
    ContainerType["BlackNursery"] = "black-nursery";
    ContainerType["Box"] = "box";
    ContainerType["Tray"] = "tray";
    ContainerType["Chilean"] = "chilean";
    ContainerType["Intermediate"] = "intermediate";
    ContainerType["Definite"] = "definite";
    ContainerType["BabyStock"] = "baby-stock";
    ContainerType["MediumStock"] = "medium-stock";
    ContainerType["LargeStock"] = "large-stock";
})(ContainerType || (exports.ContainerType = ContainerType = {}));
let OysterContainer = class OysterContainer {
};
exports.OysterContainer = OysterContainer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OysterContainer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => longline_entity_1.Longline, (longline) => longline.oyster_containers),
    (0, typeorm_1.JoinColumn)({ name: "longlineId" }),
    __metadata("design:type", longline_entity_1.Longline)
], OysterContainer.prototype, "longline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OysterContainer.prototype, "longline_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OysterContainer.prototype, "oyster_batch_id", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], OysterContainer.prototype, "position_at_longline", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ContainerType,
        default: ContainerType.WhiteNursery,
    }),
    __metadata("design:type", String)
], OysterContainer.prototype, "oyster_container_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: OysterType,
        default: OysterType.Seed,
    }),
    __metadata("design:type", String)
], OysterContainer.prototype, "oyster_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OysterContainer.prototype, "level_partition_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], OysterContainer.prototype, "oyster_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OysterContainer.prototype, "in_sea_started_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OysterContainer.prototype, "expected_maturation_at", void 0);
exports.OysterContainer = OysterContainer = __decorate([
    (0, typeorm_1.Entity)({ name: "oyster-container" })
], OysterContainer);
//# sourceMappingURL=oyster-container.entity.js.map