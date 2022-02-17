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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const invoice_entity_1 = require("./invoice.entity");
let Client = class Client {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Client.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Client.prototype, "isAfiliated", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Client.prototype, "isEmployee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Client.prototype, "registered", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invoice_entity_1.Invoice, invoice => invoice.client),
    __metadata("design:type", Array)
], Client.prototype, "invoices", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)()
], Client);
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2VudGl0eS9jbGllbnQuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE0RTtBQUM1RSxxREFBMkM7QUFHM0MsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtDQXlCbEIsQ0FBQTtBQXZCRztJQURDLElBQUEsZ0NBQXNCLEdBQUU7O2tDQUNkO0FBR1g7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3FDQUNiO0FBR2Q7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3lDQUNTO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxHQUFFOzt3Q0FDUTtBQUdqQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7MkNBQ047QUFHckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7OzBDQUNQO0FBR3BCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDOzhCQUNwQixJQUFJOzBDQUFDO0FBR2pCO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzt3Q0FDaEM7QUF2QlgsTUFBTTtJQURsQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxNQUFNLENBeUJsQjtBQXpCWSx3QkFBTSJ9