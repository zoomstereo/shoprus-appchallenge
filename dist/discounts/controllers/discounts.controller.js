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
const debug_1 = __importDefault(require("debug"));
const discounts_service_1 = __importDefault(require("../services/discounts.service"));
const log = (0, debug_1.default)('app:users-controller');
class DiscountsController {
    constructor() {
        this.discountsService = new discounts_service_1.default();
        this.listDiscounts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const discounts = yield this.discountsService.list(100, 0);
            res.status(200).send(discounts);
        });
        this.createDiscount = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const discountId = yield this.discountsService.create(req.body);
            res.status(200).send({ discountId: discountId });
        });
    }
}
exports.default = DiscountsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9kaXNjb3VudHMvY29udHJvbGxlcnMvZGlzY291bnRzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsc0ZBQTZEO0FBRTdELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sbUJBQW1CO0lBQXpCO1FBQ0kscUJBQWdCLEdBQUcsSUFBSSwyQkFBZ0IsRUFBRSxDQUFDO1FBRTFDLGtCQUFhLEdBQUcsQ0FBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRSxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQSxDQUFBO1FBRUQsbUJBQWMsR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ25FLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDL0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUEsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQUVELGtCQUFlLG1CQUFtQixDQUFDIn0=