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
const client_entity_1 = require("../../entity/client.entity");
const log = (0, debug_1.default)('app:in-memory-dao');
class ClientsDao {
    constructor() {
        this.clientRepository = (0, typeorm_1.getRepository)(client_entity_1.Client);
        log('Created new instance of ClientsDao');
    }
    addClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!client.registered) {
                client.registered = new Date();
            }
            const newClient = yield this.clientRepository.save(Object.assign({}, client));
            return newClient.id;
        });
    }
    getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientRepository.find({ take: 10 });
        });
    }
    getClientById(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientRepository.findOne({ where: { id: clientId } });
        });
    }
    getClientByName(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clientRepository.findOne({ where: { firstName: firstName, lastName: lastName } });
        });
    }
}
exports.default = ClientsDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnRzL0RBT3MvY2xpZW50cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBd0M7QUFFeEMsa0RBQTBCO0FBQzFCLDhEQUFvRDtBQUVwRCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFVBQVU7SUFHWjtRQUZBLHFCQUFnQixHQUFHLElBQUEsdUJBQWEsRUFBQyxzQkFBTSxDQUFDLENBQUM7UUFHckMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVLLFNBQVMsQ0FBQyxNQUFjOztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO2FBQ2pDO1lBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxtQkFBTSxNQUFNLEVBQUcsQ0FBQTtZQUNqRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFDWixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsUUFBZ0I7O1lBQ2hDLE9BQU8sTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMzRSxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsU0FBaUIsRUFBRSxRQUFnQjs7WUFDckQsT0FBTyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDdkcsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxVQUFVLENBQUMifQ==