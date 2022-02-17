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
const discounts_service_1 = __importDefault(require("../services/discounts.service"));
class DiscountsMiddleware {
    constructor() {
        this.discountService = new discounts_service_1.default();
        this.validateDiscountNameDoesntExists = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let discount = yield this.discountService.findByName(req.body.name);
            if (discount) {
                res.status(400).send({ errors: ["discount already created"] });
                return;
            }
            else {
                next();
            }
        });
    }
}
exports.default = DiscountsMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRzLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9kaXNjb3VudHMvbWlkZGxld2FyZXMvZGlzY291bnRzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzRkFBNkQ7QUFFN0QsTUFBTSxtQkFBbUI7SUFBekI7UUFDSSxvQkFBZSxHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztRQUV6QyxxQ0FBZ0MsR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFFLEVBQUU7WUFDakgsSUFBSSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBFLElBQUksUUFBUSxFQUFFO2dCQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQUMsT0FBTzthQUMxRTtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQzthQUNWO1FBRUwsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQyJ9