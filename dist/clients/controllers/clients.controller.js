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
const clients_service_1 = __importDefault(require("../services/clients.service"));
const log = (0, debug_1.default)('app:users-controller');
class ClientsController {
    constructor() {
        this.clientsService = new clients_service_1.default();
        this.listClients = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            let firstName = (_a = req.query.firstName) === null || _a === void 0 ? void 0 : _a.toString();
            let lastName = (_b = req.query.lastName) === null || _b === void 0 ? void 0 : _b.toString();
            if (firstName && lastName) {
                const client = yield this.clientsService.readByName(firstName, lastName);
                res.status(200).send(client);
            }
            else {
                const clients = yield this.clientsService.list(100, 0);
                res.status(200).send(clients);
            }
        });
        this.getClientById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const client = yield this.clientsService.readById(parseInt(req.params.id));
            if (!client) {
                res.status(404).send({ errors: ["Client not found"] });
                return;
            }
            res.status(200).send(client);
        });
        this.createClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const clientId = yield this.clientsService.create(req.body);
            res.status(200).send({ clientId: clientId });
        });
    }
}
exports.default = ClientsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50cy9jb250cm9sbGVycy9jbGllbnRzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsa0ZBQXlEO0FBRXpELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0saUJBQWlCO0lBQXZCO1FBQ0ksbUJBQWMsR0FBRyxJQUFJLHlCQUFjLEVBQUUsQ0FBQztRQUV0QyxnQkFBVyxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7O1lBQ2hFLElBQUksU0FBUyxHQUFHLE1BQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLDBDQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ2hELElBQUksUUFBUSxHQUFHLE1BQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLDBDQUFFLFFBQVEsRUFBRSxDQUFDO1lBRTlDLElBQUksU0FBUyxJQUFJLFFBQVEsRUFBRTtnQkFDdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ3hFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNILE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQSxDQUFBO1FBRUQsa0JBQWEsR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUzRSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQUMsT0FBTzthQUNsRTtZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFBO1FBRUQsaUJBQVksR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2pFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFBLENBQUE7SUFFTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyJ9