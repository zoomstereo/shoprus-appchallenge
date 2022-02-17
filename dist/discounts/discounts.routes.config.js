"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const discounts_controller_1 = __importDefault(require("./controllers/discounts.controller"));
const discounts_middleware_1 = __importDefault(require("./middlewares/discounts.middleware"));
class DiscountsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'DiscoutssRoutes');
        this.discountsController = new discounts_controller_1.default();
        this.discountsMiddleware = new discounts_middleware_1.default();
        this.configureRoutes();
    }
    configureRoutes() {
        this.app.route(`/descuentos`)
            .get(this.discountsController.listDiscounts)
            .post((0, express_validator_1.body)("name").notEmpty(), (0, express_validator_1.body)("percentage").isInt({ min: 1, max: 50 }).withMessage("Max percentage value is 50"), // is not specified in the document
        body_validation_middleware_1.default.verifyBodyFieldsErrors, this.discountsMiddleware.validateDiscountNameDoesntExists, this.discountsController.createDiscount);
        return this.app;
    }
}
exports.DiscountsRoutes = DiscountsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kaXNjb3VudHMvZGlzY291bnRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBQ3pDLHlFQUFvRTtBQUNwRSxpSEFBdUY7QUFDdkYsOEZBQXFFO0FBQ3JFLDhGQUFxRTtBQUdyRSxNQUFhLGVBQWdCLFNBQVEseUNBQWtCO0lBSW5ELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBSmxDLHdCQUFtQixHQUFHLElBQUksOEJBQW1CLEVBQUUsQ0FBQztRQUNoRCx3QkFBbUIsR0FBRyxJQUFJLDhCQUFtQixFQUFFLENBQUM7UUFLNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO2FBQzNDLElBQUksQ0FDRCxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3ZCLElBQUEsd0JBQUksRUFBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLG1DQUFtQztRQUM1SCxvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdDQUFnQyxFQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUMxQyxDQUFBO1FBR0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXpCRCwwQ0F5QkMifQ==