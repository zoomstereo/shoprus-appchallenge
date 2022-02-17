import express from "express";
import { body } from "express-validator";
import { CommonRoutesConfig } from "../common/common.routes.config";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";
import DiscountsController from "./controllers/discounts.controller";
import DiscountsMiddleware from "./middlewares/discounts.middleware";


export class DiscountsRoutes extends CommonRoutesConfig {
    discountsController = new DiscountsController();
    discountsMiddleware = new DiscountsMiddleware();

    constructor(app: express.Application) {
        super(app, 'DiscoutssRoutes');

        this.configureRoutes();
    }

    configureRoutes(): express.Application {

        this.app.route(`/descuentos`)
            .get(this.discountsController.listDiscounts)
            .post(
                body("name").notEmpty(),
                body("percentage").isInt({ min: 1, max: 50 }).withMessage("Max percentage value is 50"), // is not specified in the document
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                this.discountsMiddleware.validateDiscountNameDoesntExists,
                this.discountsController.createDiscount
            )


        return this.app;
    }
}