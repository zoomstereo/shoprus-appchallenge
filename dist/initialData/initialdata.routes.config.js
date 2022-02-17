"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialDataRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const initialDataManager_1 = __importDefault(require("../initialDataManager"));
class InitialDataRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'Initial data loader');
        /* SETS UP INITIAL SERVER DATA */
        this.initialDataManager = new initialDataManager_1.default();
        this.configureRoutes();
    }
    configureRoutes() {
        this.app.route(`/inidatas`)
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.initialDataManager.loadDataIfNew();
            res.status(200).send("Database initial data setted up");
        }));
        return this.app;
    }
}
exports.InitialDataRoutes = InitialDataRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGRhdGEucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2luaXRpYWxEYXRhL2luaXRpYWxkYXRhLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUVBQW9FO0FBQ3BFLCtFQUF1RDtBQUV2RCxNQUFhLGlCQUFrQixTQUFRLHlDQUFrQjtJQUlyRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUp0QyxpQ0FBaUM7UUFDakMsdUJBQWtCLEdBQUcsSUFBSSw0QkFBa0IsRUFBRSxDQUFDO1FBSzFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUN0QixHQUFHLENBQUMsQ0FBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUN2RCxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUU5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFTixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBckJELDhDQXFCQyJ9