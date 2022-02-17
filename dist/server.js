"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const debug_1 = __importDefault(require("debug"));
const clients_routes_config_1 = require("./clients/clients.routes.config");
const invoice_routes_config_1 = require("./invoice/invoice.routes.config");
const discounts_routes_config_1 = require("./discounts/discounts.routes.config");
const initialdata_routes_config_1 = require("./initialData/initialdata.routes.config");
class ServerSetup {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = http.createServer(this.app);
        this.port = 3000;
        this.routes = [];
        this.debugLog = (0, debug_1.default)('app');
        this.runningMessage = `Server running at http://localhost:${this.port}`;
        this.setUpServer = () => {
            this.app.use(express_1.default.json());
            this.app.use((0, helmet_1.default)());
            // here we are preparing the expressWinston logging middleware configuration,
            // which will automatically log all HTTP requests handled by Express.js
            const loggerOptions = {
                transports: [new winston.transports.Console()],
                format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
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
            this.routes.push(new clients_routes_config_1.ClientsRoutes(this.app));
            this.routes.push(new invoice_routes_config_1.InvoicesRoutes(this.app));
            this.routes.push(new discounts_routes_config_1.DiscountsRoutes(this.app));
            this.routes.push(new initialdata_routes_config_1.InitialDataRoutes(this.app));
            this.app.get('/', (req, res) => {
                res.status(200).send(this.runningMessage);
            });
            return this.server;
        };
    }
    listen() {
        this.setUpServer();
        this.server.listen(this.port, () => {
            this.routes.forEach((route) => {
                this.debugLog(`Routes configured for ${route.getName()}`);
            });
            console.log(this.runningMessage);
        });
    }
}
exports.default = ServerSetup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUMxQixzREFBOEI7QUFDOUIsb0RBQTRCO0FBQzVCLDJDQUE2QjtBQUM3QixpREFBbUM7QUFDbkMsZ0VBQWtEO0FBQ2xELGtEQUEwQjtBQUcxQiwyRUFBZ0U7QUFDaEUsMkVBQWlFO0FBQ2pFLGlGQUFzRTtBQUV0RSx1RkFBNEU7QUFFNUUsTUFBcUIsV0FBVztJQUFoQztRQUNJLFFBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFDckMsV0FBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osV0FBTSxHQUE4QixFQUFFLENBQUM7UUFDdkMsYUFBUSxHQUFvQixJQUFBLGVBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLHNDQUFzQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkUsZ0JBQVcsR0FBRyxHQUFHLEVBQUU7WUFFZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsQ0FBQztZQUN2Qiw2RUFBNkU7WUFDN0UsdUVBQXVFO1lBQ3ZFLE1BQU0sYUFBYSxHQUFpQztnQkFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ3pDO2FBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDcEIsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxpREFBaUQ7Z0JBQzdFLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRTtvQkFDakMsYUFBYSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyw0Q0FBNEM7aUJBQzdFO2FBQ0o7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFFbkQsa0RBQWtEO1lBQ2xELG1HQUFtRztZQUNuRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxzQ0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUkseUNBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBR2xELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO2dCQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDN0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFBO0lBWUwsQ0FBQztJQVZHLE1BQU07UUFDRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTFERCw4QkEwREMifQ==