import "reflect-metadata";
import express from 'express';
import helmet from 'helmet';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import debug from 'debug';

import { CommonRoutesConfig } from './common/common.routes.config';
import { ClientsRoutes } from "./clients/clients.routes.config";
import { InvoicesRoutes } from "./invoice/invoice.routes.config";
import { DiscountsRoutes } from "./discounts/discounts.routes.config";
import InitialDataManager from "./initialDataManager";
import { InitialDataRoutes } from "./initialData/initialdata.routes.config";

export default class ServerSetup {
    app: express.Application = express();
    server: http.Server = http.createServer(this.app);
    port = 3000;
    routes: Array<CommonRoutesConfig> = [];
    debugLog: debug.IDebugger = debug('app');
    runningMessage = `Server running at http://localhost:${this.port}`;

    setUpServer = () => {
        
        this.app.use(express.json());

        this.app.use(helmet());
        // here we are preparing the expressWinston logging middleware configuration,
        // which will automatically log all HTTP requests handled by Express.js
        const loggerOptions: expressWinston.LoggerOptions = {
            transports: [new winston.transports.Console()],
            format: winston.format.combine(
                winston.format.json(),
                winston.format.prettyPrint(),
                winston.format.colorize({ all: true })
            ),
        };

        if (!process.env.DEBUG) {
            loggerOptions.meta = false; // when not debugging, log requests as one-liners
            if (typeof global.it === 'function') {
                loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
            }
        }

        this.app.use(expressWinston.logger(loggerOptions));

        // here we are adding the UserRoutes to our array,
        // after sending the Express.js application object to have the routes added to our app!            
        this.routes.push(new ClientsRoutes(this.app));
        this.routes.push(new InvoicesRoutes(this.app));
        this.routes.push(new DiscountsRoutes(this.app));
        this.routes.push(new InitialDataRoutes(this.app));


        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.status(200).send(this.runningMessage)
        });

        return this.server;
    }

    listen() {
        this.setUpServer();
        this.server.listen(this.port, () => {
            this.routes.forEach((route: CommonRoutesConfig) => {
                this.debugLog(`Routes configured for ${route.getName()}`);
            });

            console.log(this.runningMessage);
        });
    }
}