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
const discount_entity_1 = require("../../entity/discount.entity");
const log = (0, debug_1.default)('app:in-memory-dao');
class DiscountsDao {
    constructor() {
        this.discountsRepository = (0, typeorm_1.getRepository)(discount_entity_1.Discount);
        log('Created new instance of ClientsDao');
    }
    addDiscount(discount) {
        return __awaiter(this, void 0, void 0, function* () {
            discount.registered = new Date();
            const newDiscount = yield this.discountsRepository.save(Object.assign({}, discount));
            return newDiscount.id;
        });
    }
    getDiscounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.discountsRepository.find({ take: 1000 });
        });
    }
    getDiscountByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.discountsRepository.findOne({ where: { name: name } });
        });
    }
}
exports.default = DiscountsDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rpc2NvdW50cy9EQU9zL2Rpc2NvdW50cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBd0M7QUFFeEMsa0RBQTBCO0FBQzFCLGtFQUF3RDtBQUV4RCxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFlBQVk7SUFHZDtRQUZBLHdCQUFtQixHQUFHLElBQUEsdUJBQWEsRUFBQywwQkFBUSxDQUFDLENBQUM7UUFHMUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVLLFdBQVcsQ0FBQyxRQUFrQjs7WUFDaEMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1lBQ2hDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksbUJBQU0sUUFBUSxFQUFHLENBQUE7WUFDeEUsT0FBTyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUM7S0FBQTtJQUVLLFlBQVk7O1lBQ2QsT0FBTyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxJQUFZOztZQUNoQyxPQUFPLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDNUUsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxZQUFZLENBQUMifQ==