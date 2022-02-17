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
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const shortid_1 = __importDefault(require("shortid"));
const server_1 = __importDefault(require("../../server"));
const connection_1 = require("../../connection");
let firstUserIdTest = 0; // will later hold a value returned by our API
const firstUserBody = {
    firstName: 'TestUser',
    lastName: '69',
    email: `marcos.henrique_${shortid_1.default.generate()}@toptal.com`,
    password: 'Sup3rSecret!23',
    permissionFlags: 1
};
let accessToken = '';
let refreshToken = '';
const newFirstName = 'Jose';
const newFirstName2 = 'Paulo';
const newLastName2 = 'Faraco';
describe('users and auth endpoints', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Describe inited");
        let server = new server_1.default();
        let request;
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
        it('should allow a POST to /users', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield request.post('/users').send(firstUserBody);
                (0, chai_1.expect)(res.status).to.equal(201);
                (0, chai_1.expect)(res.body).not.to.be.empty;
                (0, chai_1.expect)(res.body).to.be.an('object');
                (0, chai_1.expect)(res.body.id).to.be.a('number');
                firstUserIdTest = res.body.id;
            });
        });
        it('should allow a POST to /auth', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield request.post('/auth').send(firstUserBody);
                (0, chai_1.expect)(res.status).to.equal(201);
                (0, chai_1.expect)(res.body).not.to.be.empty;
                (0, chai_1.expect)(res.body).to.be.an('object');
                (0, chai_1.expect)(res.body.accessToken).to.be.a('string');
                accessToken = res.body.accessToken;
                refreshToken = res.body.refreshToken;
            });
        });
        it('should allow a GET from /users/:userId with an access token', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield request
                    .get(`/users/${firstUserIdTest}`)
                    .set({ authorization: `Bearer ${accessToken}` })
                    .send();
                (0, chai_1.expect)(res.status).to.equal(200);
                (0, chai_1.expect)(res.body).not.to.be.empty;
                (0, chai_1.expect)(res.body).to.be.an('object');
                (0, chai_1.expect)(res.body.id).to.be.a('number');
                (0, chai_1.expect)(res.body.id).to.equal(firstUserIdTest);
                (0, chai_1.expect)(res.body.email).to.equal(firstUserBody.email);
            });
        });
        // Nesting, Skipping, Isolating, and Bailing on Tests
        // Nested describe
        describe('with a valid access token', function () {
            it('should disallow a GET from /users', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield request
                        .get(`/users`)
                        .set({ Authorization: `Bearer ${accessToken}` })
                        .send();
                    (0, chai_1.expect)(res.status).to.equal(403);
                });
            });
            it('should disallow a PATCH to /users/:userId', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield request
                        .patch(`/users/${firstUserIdTest}`)
                        .set({ Authorization: `Bearer ${accessToken}` })
                        .send({
                        firstName: newFirstName,
                    });
                    (0, chai_1.expect)(res.status).to.equal(403);
                });
            });
            it('should disallow a PUT to /users/:userId with an nonexistent ID', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    // Here is currently testing against a String id
                    // TODO: Make a case where it test against an Number non existing ID
                    const res = yield request
                        .put(`/users/i-do-not-exist`)
                        //.put(`/users/999`)
                        .set({ Authorization: `Bearer ${accessToken}` })
                        .send({
                        email: firstUserBody.email,
                        password: firstUserBody.password,
                        firstName: 'Marcos',
                        lastName: 'Silva',
                        permissionFlags: 256,
                    });
                    (0, chai_1.expect)(res.status).to.equal(404);
                });
            });
            it('should disallow a PUT to /users/:userId trying to change the permission flags', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield request
                        .put(`/users/${firstUserIdTest}`)
                        .set({ Authorization: `Bearer ${accessToken}` })
                        .send({
                        email: firstUserBody.email,
                        password: firstUserBody.password,
                        firstName: 'Marcos',
                        lastName: 'Silva',
                        permissionFlags: 256,
                    });
                    (0, chai_1.expect)(res.status).to.equal(400);
                    (0, chai_1.expect)(res.body.errors).to.be.an('array');
                    (0, chai_1.expect)(res.body.errors).to.have.length(1);
                    (0, chai_1.expect)(res.body.errors[0]).to.equal('User cannot change permission flags');
                });
            });
            // TODO: Be carefull with this on production
            it('should allow a PUT to /users/:userId/permissionFlags/2 for testing', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield request
                        .put(`/users/${firstUserIdTest}/permissionFlags/2`)
                        .set({ Authorization: `Bearer ${accessToken}` })
                        .send({});
                    (0, chai_1.expect)(res.status).to.equal(204);
                });
            });
            describe('with a new set of permission flags', function () {
                it('should allow a POST to /auth/refresh-token', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const res = yield request
                            .post('/auth/refresh-token')
                            .set({ Authorization: `Bearer ${accessToken}` })
                            .send({ refreshToken });
                        (0, chai_1.expect)(res.status).to.equal(201);
                        (0, chai_1.expect)(res.body).not.to.be.empty;
                        (0, chai_1.expect)(res.body).to.be.an('object');
                        (0, chai_1.expect)(res.body.accessToken).to.be.a('string');
                        accessToken = res.body.accessToken;
                        refreshToken = res.body.refreshToken;
                    });
                });
                it('should allow a PUT to /users/:userId to change first and last names', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const res = yield request
                            .put(`/users/${firstUserIdTest}`)
                            .set({ Authorization: `Bearer ${accessToken}` })
                            .send({
                            email: firstUserBody.email,
                            password: firstUserBody.password,
                            firstName: newFirstName2,
                            lastName: newLastName2,
                            permissionFlags: 2,
                        });
                        (0, chai_1.expect)(res.status).to.equal(204);
                    });
                });
                it('should allow a GET from /users/:userId and should have a new full name', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const res = yield request
                            .get(`/users/${firstUserIdTest}`)
                            .set({ Authorization: `Bearer ${accessToken}` })
                            .send();
                        (0, chai_1.expect)(res.status).to.equal(200);
                        (0, chai_1.expect)(res.body).not.to.be.empty;
                        (0, chai_1.expect)(res.body).to.be.an('object');
                        (0, chai_1.expect)(res.body.id).to.be.a('number');
                        (0, chai_1.expect)(res.body.firstName).to.equal(newFirstName2);
                        (0, chai_1.expect)(res.body.lastName).to.equal(newLastName2);
                        (0, chai_1.expect)(res.body.email).to.equal(firstUserBody.email);
                        (0, chai_1.expect)(res.body.id).to.equal(firstUserIdTest);
                    });
                });
                it('should allow a DELETE from /users/:userId', function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        const res = yield request
                            .delete(`/users/${firstUserIdTest}`)
                            .set({ Authorization: `Bearer ${accessToken}` })
                            .send();
                        (0, chai_1.expect)(res.status).to.equal(204);
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvdXNlcnMvdXNlcnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixNQUFNLFlBQVksR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtJQUNwQixNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUM7Q0FDNUI7QUFFRCwwREFBa0M7QUFDbEMsK0JBQThCO0FBQzlCLHNEQUE4QjtBQUM5QiwwREFBdUM7QUFDdkMsaURBQThDO0FBRzlDLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztBQUN2RSxNQUFNLGFBQWEsR0FBRztJQUNsQixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsSUFBSTtJQUNkLEtBQUssRUFBRSxtQkFBbUIsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsYUFBYTtJQUN6RCxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLGVBQWUsRUFBRSxDQUFDO0NBQ3JCLENBQUM7QUFFRixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDckIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztBQUM1QixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUM7QUFDOUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBRTlCLFFBQVEsQ0FBQywwQkFBMEIsRUFBRTs7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksZ0JBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBaUMsQ0FBQztRQUV0QyxNQUFNLENBQUM7O2dCQUNILE1BQU0sdUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUN4QyxPQUFPLEdBQUcs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