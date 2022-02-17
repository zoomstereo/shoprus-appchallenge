"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const invoice_controller_1 = __importDefault(require("./controllers/invoice.controller"));
const invoice_middleware_1 = __importDefault(require("./middlewares/invoice.middleware"));
class InvoicesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'InvoicesRoutes');
        this.invoicesController = new invoice_controller_1.default();
        this.invoicesMiddleware = new invoice_middleware_1.default();
        this.configureRoutes();
    }
    configureRoutes() {
        this.app.route(`/facturas/:id`)
            .get((0, express_validator_1.param)("id").isInt(), body_validation_middleware_1.default.verifyBodyFieldsErrors, this.invoicesController.getInvoiceById);
        this.app.route(`/facturas`)
            .post((0, express_validator_1.body)("clientId").isInt(), (0, express_validator_1.body)("items").isArray().notEmpty(), body_validation_middleware_1.default.verifyBodyFieldsErrors, this.invoicesMiddleware.validateClientExists, this.invoicesMiddleware.validateDiscountExists, this.invoicesController.createInvoice);
        return this.app;
    }
}
exports.InvoicesRoutes = InvoicesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaW52b2ljZS9pbnZvaWNlLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQWdEO0FBQ2hELHlFQUFvRTtBQUNwRSxpSEFBdUY7QUFDdkYsMEZBQWtFO0FBQ2xFLDBGQUFrRTtBQUVsRSxNQUFhLGNBQWUsU0FBUSx5Q0FBa0I7SUFJbEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFKakMsdUJBQWtCLEdBQUcsSUFBSSw0QkFBa0IsRUFBRSxDQUFDO1FBQzlDLHVCQUFrQixHQUFHLElBQUksNEJBQWtCLEVBQUUsQ0FBQztRQUsxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDMUIsR0FBRyxDQUNBLElBQUEseUJBQUssRUFBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDbkIsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUUvQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDdEIsSUFBSSxDQUNELElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDeEIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNsQyxvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUM1QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLEVBQzlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQ3hDLENBQUE7UUFFTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBOUJELHdDQThCQyJ9