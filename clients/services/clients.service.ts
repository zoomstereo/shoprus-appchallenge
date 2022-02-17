import { Client } from "../../entity/client.entity";
import ClientsDao from "../DAOs/clients.dao";


class ClientsService {
    clientsDao = new ClientsDao();

    create = async (client: Client) => {
        return this.clientsDao.addClient(client);
    }

    list = async (limit: number, page: number) => {
        return this.clientsDao.getClients();
    }

    readById = async (id: number) => {
        return this.clientsDao.getClientById(id);
    }

    readByName = async (firstname: string, lastName: string) => {
        return await this.clientsDao.getClientByName(firstname, lastName);
    }
}

export default ClientsService;