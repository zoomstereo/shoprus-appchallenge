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
const clients_dao_1 = __importDefault(require("../DAOs/clients.dao"));
class ClientsService {
    constructor() {
        this.clientsDao = new clients_dao_1.default();
        this.create = (client) => __awaiter(this, void 0, void 0, function* () {
            return this.clientsDao.addClient(client);
        });
        this.list = (limit, page) => __awaiter(this, void 0, void 0, function* () {
            return this.clientsDao.getClients();
        });
        this.readById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.clientsDao.getClientById(id);
        });
        this.readByName = (firstname, lastName) => __awaiter(this, void 0, void 0, function* () {
            return yield this.clientsDao.getClientByName(firstname, lastName);
        });
    }
}
exports.default = ClientsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50cy9zZXJ2aWNlcy9jbGllbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzRUFBNkM7QUFHN0MsTUFBTSxjQUFjO0lBQXBCO1FBQ0ksZUFBVSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO1FBRTlCLFdBQU0sR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFBLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBTyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQSxDQUFBO1FBRUQsYUFBUSxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUEsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFPLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3ZELE9BQU8sTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==