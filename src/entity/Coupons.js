"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Coupons = void 0;
var typeorm_1 = require("typeorm");
var Coupons = /** @class */ (function () {
    function Coupons() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Coupons.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Coupons.prototype, "code");
    __decorate([
        typeorm_1.Column()
    ], Coupons.prototype, "address");
    __decorate([
        typeorm_1.Column({ name: "expires_at" })
    ], Coupons.prototype, "expiresAt");
    __decorate([
        typeorm_1.Column({ name: "assigned_at" })
    ], Coupons.prototype, "assignedAt");
    __decorate([
        typeorm_1.Column({ name: "customer_email" })
    ], Coupons.prototype, "customerEmail");
    Coupons = __decorate([
        typeorm_1.Entity({ name: "coupons" })
    ], Coupons);
    return Coupons;
}());
exports.Coupons = Coupons;
