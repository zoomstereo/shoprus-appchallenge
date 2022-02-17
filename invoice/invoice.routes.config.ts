import express from "express";
import { body, param } from "express-validator";
import { CommonRoutesConfig } from "../common/common.routes.config";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import InvoicesController from "./controllers/invoice.controller";
import InvoicesMiddleware from "./middlewares/invoice.middleware";

export class InvoicesRoutes extends CommonRoutesConfig {
    invoicesController = new InvoicesController();
    invoicesMiddleware = new InvoicesMiddleware();

    constructor(app: express.Application) {
        super(app, 'InvoicesRoutes');

        this.configureRoutes();
    }

    configureRoutes(): express.Application {

        this.app.route(`/facturas/:id`)
            .get(
                param("id").isInt(),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                this.invoicesController.getInvoiceById)

        this.app.route(`/facturas`)
            .post(
                body("clientId").isInt(),
                body("items").isArray().notEmpty(),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                this.invoicesMiddleware.validateClientExists,
                this.invoicesMiddleware.validateDiscountExists,
                this.invoicesController.createInvoice
            )

        return this.app;
    }
}