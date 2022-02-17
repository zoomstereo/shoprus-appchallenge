import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
import { v4 as uuid } from 'uuid';
import supertest from 'supertest';
import { expect } from 'chai';
import ServerSetup from '../../server';
import { connection } from '../../connection';

describe('Clients Test - /clientes', async function () {
    let server = new ServerSetup();
    let request: supertest.SuperAgentTest;
    let tempClient = {
        id: 0,
        firstName: "",
        lastName: ""
    }

    before(async function () {
        await connection.createTestConnection();
        request = supertest.agent(server.setUpServer());
    });

    after(async function () {
        await connection.close();
    });

    it('should get a list of clients', async function () {
        const res = await request.get('/clientes').send();

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('array');
    })

    it('should let me create a new client', async function () {
        let firstName = "integration-test-client"
        let lastName = uuid();

        const res = await request.post('/clientes')
            .send({ firstName: firstName, lastName: lastName });

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body.clientId).to.be.an("number")
        tempClient.id = res.body.clientId;
        tempClient.firstName = firstName;
        tempClient.lastName = lastName;
    })
})