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
const invoice_dao_1 = __importDefault(require("../DAOs/invoice.dao"));
class InvoiceService {
    constructor() {
        this.invoicesDao = new invoice_dao_1.default();
        this.create = (invoice) => __awaiter(this, void 0, void 0, function* () {
            return this.invoicesDao.addInvoice(invoice);
        });
        this.readById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.invoicesDao.getInvoiceById(id);
        });
    }
}
exports.default = InvoiceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vaW52b2ljZS9zZXJ2aWNlcy9pbnZvaWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzRUFBOEM7QUFHOUMsTUFBTSxjQUFjO0lBQXBCO1FBQ0ksZ0JBQVcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztRQUVoQyxXQUFNLEdBQUcsQ0FBTyxPQUFnQixFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUEsQ0FBQTtRQUVELGFBQVEsR0FBRyxDQUFPLEVBQVUsRUFBRSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==