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
exports.Invoice = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
const item_entity_1 = require("./item.entity");
let Invoice = class Invoice {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Invoice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.invoices),
    __metadata("design:type", client_entity_1.Client)
], Invoice.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.Item, item => item.invoice, { cascade: true }),
    __metadata("design:type", Array)
], Invoice.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Invoice.prototype, "discountPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Invoice.prototype, "flatDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Invoice.prototype, "discountFlag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Invoice.prototype, "totalWithoutDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Invoice.prototype, "totalWithDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Invoice.prototype, "date", void 0);
Invoice = __decorate([
    (0, typeorm_1.Entity)()
], Invoice);
exports.Invoice = Invoice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9lbnRpdHkvaW52b2ljZS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXVGO0FBQ3ZGLG1EQUF5QztBQUN6QywrQ0FBcUM7QUFHckMsSUFBYSxPQUFPLEdBQXBCLE1BQWEsT0FBTztDQTRCbkIsQ0FBQTtBQTFCRztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O21DQUNkO0FBR1g7SUFEQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsc0JBQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7OEJBQzNDLHNCQUFNO3VDQUFDO0FBR2Y7SUFEQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsa0JBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNqRDtBQUdkO0lBREMsSUFBQSxnQkFBTSxHQUFFOzttREFDa0I7QUFHM0I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzZDQUNZO0FBR3JCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDTjtBQUdyQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7cURBQ29CO0FBRzdCO0lBREMsSUFBQSxnQkFBTSxHQUFFOztrREFDaUI7QUFHMUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7OEJBQzFCLElBQUk7cUNBQUM7QUExQkYsT0FBTztJQURuQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxPQUFPLENBNEJuQjtBQTVCWSwwQkFBTyJ9