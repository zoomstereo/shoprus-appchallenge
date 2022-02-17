"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const debug_1 = __importDefault(require("debug"));
const invoice_entity_1 = require("../../entity/invoice.entity");
const log = (0, debug_1.default)('app:in-memory-dao');
class InvoicesDao {
    constructor() {
        this.invoiceRepository = (0, typeorm_1.getRepository)(invoice_entity_1.Invoice);
        log('Created new instance of InvoiceDao');
    }
    getInvoiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.invoiceRepository.findOne({ where: { id: id }, relations: ["items"] });
        });
    }
    addInvoice(invoice) {
        return __awaiter(this, void 0, void 0, function* () {
            invoice.date = new Date();
            const newInvoice = yield this.invoiceRepository.save(Object.assign({}, invoice));
            return newInvoice.id;
        });
    }
}
exports.default = InvoicesDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9pbnZvaWNlL0RBT3MvaW52b2ljZS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBd0M7QUFFeEMsa0RBQTBCO0FBQzFCLGdFQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFdBQVc7SUFHYjtRQUZBLHNCQUFpQixHQUFHLElBQUEsdUJBQWEsRUFBQyx3QkFBTyxDQUFDLENBQUM7UUFHdkMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVLLGNBQWMsQ0FBQyxFQUFVOztZQUMzQixPQUFPLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0YsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLE9BQWdCOztZQUM3QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7WUFFekIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxtQkFBTSxPQUFPLEVBQUcsQ0FBQztZQUNyRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==