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
const discounts_dao_1 = __importDefault(require("../DAOs/discounts.dao"));
class DiscountsService {
    constructor() {
        this.discountsDao = new discounts_dao_1.default();
        this.create = (discount) => __awaiter(this, void 0, void 0, function* () {
            return yield this.discountsDao.addDiscount(discount);
        });
        this.list = (limit, page) => __awaiter(this, void 0, void 0, function* () {
            return this.discountsDao.getDiscounts();
        });
        this.findByName = (name) => __awaiter(this, void 0, void 0, function* () {
            return yield this.discountsDao.getDiscountByName(name);
        });
    }
}
exports.default = DiscountsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9kaXNjb3VudHMvc2VydmljZXMvZGlzY291bnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRUFBaUQ7QUFHakQsTUFBTSxnQkFBZ0I7SUFBdEI7UUFDSSxpQkFBWSxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO1FBRWxDLFdBQU0sR0FBRyxDQUFPLFFBQWtCLEVBQUUsRUFBRTtZQUNsQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFBLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBTyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQSxDQUFBO1FBRUQsZUFBVSxHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUU7WUFDaEMsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQyJ9