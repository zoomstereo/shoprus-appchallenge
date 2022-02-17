import { getRepository } from "typeorm";

import debug from 'debug';
import { Client } from "../../entity/client.entity";

const log: debug.IDebugger = debug('app:in-memory-dao');

class ClientsDao {
    clientRepository = getRepository(Client);

    constructor() {
        log('Created new instance of ClientsDao');
    }

    async addClient(client: Client) {
        if (!client.registered) {
            client.registered = new Date()
        }

        const newClient = await this.clientRepository.save({ ...client })
        return newClient.id;
    }

    async getClients() {
        return this.clientRepository.find({ take: 10 });
    }

    async getClientById(clientId: number) {
        return await this.clientRepository.findOne({ where: { id: clientId } })
    }

    async getClientByName(firstName: string, lastName: string) {
        return await this.clientRepository.findOne({ where: { firstName: firstName, lastName: lastName } })
    }
}

export default ClientsDao;