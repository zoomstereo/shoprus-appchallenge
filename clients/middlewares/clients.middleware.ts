import express from 'express';
import ClientsService from "../services/clients.service";

class ClientsMiddleware {
    clientsService = new ClientsService();

    validateClientIsNotRegistered = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;

        if (firstName && lastName) {
            let client = await this.clientsService.readByName(firstName, lastName);
            if (client) {
                res.status(400).send({ errors: [`Client is already registered`] });
            } else {
                next();
            }
        }
    }
}

export default ClientsMiddleware;