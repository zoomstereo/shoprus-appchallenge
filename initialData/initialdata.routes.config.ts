import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import InitialDataManager from "../initialDataManager";

export class InitialDataRoutes extends CommonRoutesConfig {
    /* SETS UP INITIAL SERVER DATA */
    initialDataManager = new InitialDataManager();

    constructor(app: express.Application) {
        super(app, 'Initial data loader');

        this.configureRoutes();
    }

    configureRoutes(): express.Application {

        this.app.route(`/inidatas`)
            .get(async (req: express.Request, res: express.Response) => {
                await this.initialDataManager.loadDataIfNew();

                res.status(200).send("Database initial data setted up");
            })

        return this.app;
    }
}