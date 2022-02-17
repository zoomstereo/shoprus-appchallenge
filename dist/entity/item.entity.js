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
exports.Item = void 0;
const typeorm_1 = require("typeorm");
const invoice_entity_1 = require("./invoice.entity");
let Item = class Item {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => invoice_entity_1.Invoice, invoice => invoice.items),
    __metadata("design:type", invoice_entity_1.Invoice)
], Item.prototype, "invoice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Item.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Item.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Item.prototype, "category", void 0);
Item = __decorate([
    (0, typeorm_1.Entity)()
], Item);
exports.Item = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9lbnRpdHkvaXRlbS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTRFO0FBQzVFLHFEQUEyQztBQUczQyxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFJO0NBa0JoQixDQUFBO0FBaEJHO0lBREMsSUFBQSxnQ0FBc0IsR0FBRTs7Z0NBQ2Q7QUFHWDtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs4QkFDMUMsd0JBQU87cUNBQUM7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O2tDQUNJO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O29DQUNNO0FBR2Y7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O21DQUNLO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3NDQUNRO0FBakJSLElBQUk7SUFEaEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksSUFBSSxDQWtCaEI7QUFsQlksb0JBQUkifQ==