import express from "express";
import { body, param } from "express-validator";
import { CommonRoutesConfig } from "../common/common.routes.config";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import ClientsController from "./controllers/clients.controller";
import ClientsMiddleware from "./middlewares/clients.middleware";


export class ClientsRoutes extends CommonRoutesConfig {
    clientsController = new ClientsController();
    clientsMiddleware = new ClientsMiddleware();

    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');

        this.configureRoutes();
    }

    configureRoutes(): express.Application {

        this.app.route(`/clientes`)
            .get(this.clientsController.listClients)
            .post(
                body("firstName").notEmpty(),
                body("lastName").notEmpty(),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                this.clientsMiddleware.validateClientIsNotRegistered,
                this.clientsController.createClient)

        this.app.route('/clientes/:id')
            .get(
                param("id").isInt(),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                this.clientsController.getClientById
            );


        return this.app;
    }
}