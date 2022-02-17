import express from 'express';
import debug from 'debug';
import ClientsService from '../services/clients.service';

const log: debug.IDebugger = debug('app:users-controller');

class ClientsController {
    clientsService = new ClientsService();

    listClients = async (req: express.Request, res: express.Response) => {
        let firstName = req.query.firstName?.toString();
        let lastName = req.query.lastName?.toString();

        if (firstName && lastName) {            
            const client = await this.clientsService.readByName(firstName, lastName)            
            res.status(200).send(client);
        } else {
            const clients = await this.clientsService.list(100, 0);
            res.status(200).send(clients);
        }
    }

    getClientById = async (req: express.Request, res: express.Response) => {
        const client = await this.clientsService.readById(parseInt(req.params.id)); 

        if (!client) {
            res.status(404).send({ errors: ["Client not found"] }); return;
        }
        res.status(200).send(client);
    }

    createClient = async (req: express.Request, res: express.Response) => {
        const clientId = await this.clientsService.create(req.body)
        res.status(200).send({ clientId: clientId });
    }

}

export default ClientsController;