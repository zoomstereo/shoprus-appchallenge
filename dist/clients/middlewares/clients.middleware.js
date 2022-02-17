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
const clients_service_1 = __importDefault(require("../services/clients.service"));
class ClientsMiddleware {
    constructor() {
        this.clientsService = new clients_service_1.default();
        this.validateClientIsNotRegistered = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let firstName = req.body.firstName;
            let lastName = req.body.lastName;
            if (firstName && lastName) {
                let client = yield this.clientsService.readByName(firstName, lastName);
                if (client) {
                    res.status(400).send({ errors: [`Client is already registered`] });
                }
                else {
                    next();
                }
            }
        });
    }
}
exports.default = ClientsMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50cy9taWRkbGV3YXJlcy9jbGllbnRzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrRkFBeUQ7QUFFekQsTUFBTSxpQkFBaUI7SUFBdkI7UUFDSSxtQkFBYyxHQUFHLElBQUkseUJBQWMsRUFBRSxDQUFDO1FBRXRDLGtDQUE2QixHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCLEVBQUUsRUFBRTtZQUM5RyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUVqQyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLE1BQU0sRUFBRTtvQkFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN0RTtxQkFBTTtvQkFDSCxJQUFJLEVBQUUsQ0FBQztpQkFDVjthQUNKO1FBQ0wsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyJ9