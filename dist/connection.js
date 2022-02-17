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
exports.connection = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const connection = {
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_1.createConnection)();
            console.log("Connected to the db");
        });
    },
    createTestConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_1.createConnection)({
                type: "postgres",
                host: "localhost",
                port: 5433,
                username: process.env.DB_USERNAME,
                password: process.env.PASSWORD,
                database: process.env.DATABASE_NAME,
                synchronize: true,
                logging: false,
                entities: [
                    "entity/**/*.entity.ts"
                ],
                migrations: [
                    "migration/*.ts"
                ],
                subscribers: [
                    "subscriber/*.ts"
                ]
            });
            console.log("Connected to the TEST db");
        });
    },
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_1.getConnection)().close();
        });
    }
};
exports.connection = connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLHFDQUEwRDtBQUUxRCxNQUFNLFlBQVksR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXJDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtJQUNwQixNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUM7Q0FDNUI7QUFHRCxNQUFNLFVBQVUsR0FBRztJQUNULE1BQU07O1lBQ1IsTUFBTSxJQUFBLDBCQUFnQixHQUFFLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLG9CQUFvQjs7WUFDdEIsTUFBTSxJQUFBLDBCQUFnQixFQUFDO2dCQUNuQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7Z0JBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7Z0JBQzlCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWE7Z0JBQ25DLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUU7b0JBQ04sdUJBQXVCO2lCQUMxQjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsZ0JBQWdCO2lCQUNuQjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1QsaUJBQWlCO2lCQUNwQjthQUNKLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFSyxLQUFLOztZQUNQLE1BQU0sSUFBQSx1QkFBYSxHQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQUVRLGdDQUFVIn0=