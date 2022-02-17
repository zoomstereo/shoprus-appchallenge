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
exports.Discount = void 0;
const typeorm_1 = require("typeorm");
let Discount = class Discount {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Discount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Discount.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Discount.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Discount.prototype, "percentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Discount.prototype, "registered", void 0);
Discount = __decorate([
    (0, typeorm_1.Entity)()
], Discount);
exports.Discount = Discount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnQuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZW50aXR5L2Rpc2NvdW50LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUU7QUFHakUsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtDQWdCcEIsQ0FBQTtBQWRHO0lBREMsSUFBQSxnQ0FBc0IsR0FBRTs7b0NBQ2Q7QUFHWDtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQ1o7QUFHYjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ1A7QUFHcEI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzRDQUNVO0FBR25CO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDOzhCQUNwQixJQUFJOzRDQUFDO0FBZFIsUUFBUTtJQURwQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxRQUFRLENBZ0JwQjtBQWhCWSw0QkFBUSJ9