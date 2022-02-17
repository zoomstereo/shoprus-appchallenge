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
const dotenv_1 = __importDefault(require("dotenv"));
const dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
const uuid_1 = require("uuid");
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const server_1 = __importDefault(require("../../server"));
const connection_1 = require("../../connection");
describe('Clients Test - /clientes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let server = new server_1.default();
        let request;
        let tempClient = {
            id: 0,
            firstName: "",
            lastName: ""
        };
        before(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield connection_1.connection.createTestConnection();
                request = supertest_1.default.agent(server.setUpServer());
            });
        });
        after(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield connection_1.connection.close();
            });
        });
        it('should get a list of clients', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield request.get('/clientes').send();
                (0, chai_1.expect)(res.status).to.equal(200);
                (0, chai_1.expect)(res.body).not.to.be.empty;
                (0, chai_1.expect)(res.body).to.be.an('array');
            });
        });
        it('should let me create a new client', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let firstName = "integration-test-client";
                let lastName = (0, uuid_1.v4)();
                const res = yield request.post('/clientes')
                    .send({ firstName: firstName, lastName: lastName });
                (0, chai_1.expect)(res.status).to.equal(200);
                (0, chai_1.expect)(res.body).not.to.be.empty;
                (0, chai_1.expect)(res.body.clientId).to.be.an("number");
                tempClient.id = res.body.clientId;
                tempClient.firstName = firstName;
                tempClient.lastName = lastName;
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9jbGllbnRzL2NsaWVudHMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixNQUFNLFlBQVksR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtJQUNwQixNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUM7Q0FDNUI7QUFDRCwrQkFBa0M7QUFDbEMsMERBQWtDO0FBQ2xDLCtCQUE4QjtBQUM5QiwwREFBdUM7QUFDdkMsaURBQThDO0FBRTlDLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTs7UUFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxPQUFpQyxDQUFDO1FBQ3RDLElBQUksVUFBVSxHQUFHO1lBQ2IsRUFBRSxFQUFFLENBQUM7WUFDTCxTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQTtRQUVELE1BQU0sQ0FBQzs7Z0JBQ0gsTUFBTSx1QkFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNwRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDOztnQkFDRixNQUFNLHVCQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTs7Z0JBQy9CLE1BQU0sR0FBRyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFbEQsSUFBQSxhQUFNLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxDQUFDO1NBQUEsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLG1DQUFtQyxFQUFFOztnQkFDcEMsSUFBSSxTQUFTLEdBQUcseUJBQXlCLENBQUE7Z0JBQ3pDLElBQUksUUFBUSxHQUFHLElBQUEsU0FBSSxHQUFFLENBQUM7Z0JBRXRCLE1BQU0sR0FBRyxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7cUJBQ3RDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBRXhELElBQUEsYUFBTSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUM1QyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNsQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDakMsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDbkMsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==