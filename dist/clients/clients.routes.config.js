"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const clients_controller_1 = __importDefault(require("./controllers/clients.controller"));
const clients_middleware_1 = __importDefault(require("./middlewares/clients.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
        this.clientsController = new clients_controller_1.default();
        this.clientsMiddleware = new clients_middleware_1.default();
        this.configureRoutes();
    }
    configureRoutes() {
        this.app.route(`/clientes`)
            .get(this.clientsController.listClients)
            .post((0, express_validator_1.body)("firstName").notEmpty(), (0, express_validator_1.body)("lastName").notEmpty(), body_validation_middleware_1.default.verifyBodyFieldsErrors, this.clientsMiddleware.validateClientIsNotRegistered, this.clientsController.createClient);
        this.app.route('/clientes/:id')
            .get((0, express_validator_1.param)("id").isInt(), body_validation_middleware_1.default.verifyBodyFieldsErrors, this.clientsController.getClientById);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xpZW50cy9jbGllbnRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQWdEO0FBQ2hELHlFQUFvRTtBQUNwRSxpSEFBdUY7QUFDdkYsMEZBQWlFO0FBQ2pFLDBGQUFpRTtBQUdqRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFJakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBSmhDLHNCQUFpQixHQUFHLElBQUksNEJBQWlCLEVBQUUsQ0FBQztRQUM1QyxzQkFBaUIsR0FBRyxJQUFJLDRCQUFpQixFQUFFLENBQUM7UUFLeEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDO2FBQ3ZDLElBQUksQ0FDRCxJQUFBLHdCQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzVCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDM0Isb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkIsRUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRTVDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUMxQixHQUFHLENBQ0EsSUFBQSx5QkFBSyxFQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUNuQixvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FDdkMsQ0FBQztRQUdOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUEvQkQsc0NBK0JDIn0=