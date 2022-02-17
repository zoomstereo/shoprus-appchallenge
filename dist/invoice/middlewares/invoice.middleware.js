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
const clients_service_1 = __importDefault(require("../../clients/services/clients.service"));
const discounts_service_1 = __importDefault(require("../../discounts/services/discounts.service"));
class InvoicesMiddleware {
    constructor() {
        this.clientsService = new clients_service_1.default();
        this.discountService = new discounts_service_1.default();
        this.validateClientExists = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let client = yield this.clientsService.readById(parseInt(req.body.clientId));
            if (!client) {
                res.status(400).send({ errors: ["client-not-found"] });
                return;
            }
            else {
                res.locals.client = client;
                next();
            }
        });
        this.validateDiscountExists = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.discountName) {
                let discount = yield this.discountService.findByName(req.body.discountName);
                if (!discount) {
                    res.status(400).send({ errors: ["discount not found"] });
                    return;
                }
                else {
                    res.locals.discount = discount;
                    next();
                }
            }
            else {
                next();
            }
        });
    }
}
exports.default = InvoicesMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vaW52b2ljZS9taWRkbGV3YXJlcy9pbnZvaWNlLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2RkFBb0U7QUFDcEUsbUdBQTBFO0FBRTFFLE1BQU0sa0JBQWtCO0lBQXhCO1FBQ0ksbUJBQWMsR0FBRyxJQUFJLHlCQUFjLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztRQUV6Qyx5QkFBb0IsR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFFLEVBQUU7WUFDckcsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFBQyxPQUFPO2FBQ2xFO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDM0IsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUMsQ0FBQSxDQUFBO1FBRUQsMkJBQXNCLEdBQUcsQ0FBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEIsRUFBRSxFQUFFO1lBQ3ZHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3ZCLElBQUksUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUUsSUFBRyxDQUFDLFFBQVEsRUFBRTtvQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUFDLE9BQU87aUJBQ3BFO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDL0IsSUFBSSxFQUFFLENBQUM7aUJBQ1Y7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQzthQUNWO1FBQ0wsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9