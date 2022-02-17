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
const clients_service_1 = __importDefault(require("./clients/services/clients.service"));
const discountManager_1 = __importDefault(require("./discounts/discountManager"));
const discounts_service_1 = __importDefault(require("./discounts/services/discounts.service"));
const invoice_service_1 = __importDefault(require("./invoice/services/invoice.service"));
class InitialDataManager {
    constructor() {
        this.clientService = new clients_service_1.default();
        this.invoiceService = new invoice_service_1.default();
        this.discountsService = new discounts_service_1.default();
        this.discountManager = new discountManager_1.default();
    }
    loadDataIfNew() {
        return __awaiter(this, void 0, void 0, function* () {
            let clients = yield this.clientService.list(100, 1);
            if (clients.length == 0) {
                // Do all the database stuff
                console.log("doing the database setup");
                /*
                    Crear cliente
                        donde no no tiene ningun tipo de descuento
                        cliente donde tiene solo afiliado
                        donde es empleado
                        donde tiene mas de 2 anios como cliente
                        donde cumpla todas las condiciones anteriores
                        */
                let nodiscountClientId = yield this.clientService.create({ firstName: "cliente01", lastName: "No descuento" });
                let afiliatedClientId = yield this.clientService.create({ firstName: "cliente02", lastName: "Afiliado", isAfiliated: true });
                this.clientService.create({ firstName: "cliente03", lastName: "Empleado", isEmployee: true });
                this.clientService.create({ firstName: "cliente04", lastName: "2anios cliente", registered: new Date('2019-12-09') });
                this.clientService.create({ firstName: "cliente05", lastName: "All conditions", isAfiliated: true, isEmployee: true, registered: new Date('2019-09-09') });
                // Crear facturas
                //     Crear factura con cliente sin ningun tipo de descuento pero 200$ para conseguir 10$ flat
                //     Crear factura con item comestible
                let noDiscountClient = yield this.clientService.readById(nodiscountClientId);
                let afiliatedClient = yield this.clientService.readById(afiliatedClientId);
                let items01 = [
                    { name: "ItemTest01", amount: 1, price: 100, category: "" },
                    { name: "ItemTest01", amount: 1, price: 100, category: "" }
                ];
                let discountInfo01 = this.discountManager.calculateDiscounts(items01, noDiscountClient);
                this.invoiceService.create({
                    client: noDiscountClient,
                    items: items01,
                    discountPercentage: discountInfo01.discountPercentage,
                    flatDiscount: discountInfo01.flatDiscount,
                    discountFlag: "",
                    totalWithDiscount: discountInfo01.totalWithDiscount,
                    totalWithoutDiscount: discountInfo01.totalWithoutDiscount,
                });
                let items02 = [
                    { name: "ItemTest01", amount: 1, price: 100, category: "" },
                    { name: "ItemTest01", amount: 1, price: 100, category: "" }
                ];
                let discountInfo02 = this.discountManager.calculateDiscounts(items02, afiliatedClient);
                this.invoiceService.create({
                    client: afiliatedClient,
                    items: items02,
                    discountPercentage: discountInfo02.discountPercentage,
                    flatDiscount: discountInfo02.flatDiscount,
                    discountFlag: "",
                    totalWithDiscount: discountInfo02.totalWithDiscount,
                    totalWithoutDiscount: discountInfo02.totalWithoutDiscount,
                });
                // Crear descuentos
                //     Crear 2 descuentos diferentes
                this.discountsService.create({ name: "TEST_DISCOUNT01", description: "sample description", percentage: 12 });
                this.discountsService.create({ name: "TEST_DISCOUNT02", description: "sample description", percentage: 7 });
            }
            else {
                console.log("database is already setted up");
            }
        });
    }
}
exports.default = InitialDataManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbERhdGFNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaW5pdGlhbERhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUZBQWdFO0FBQ2hFLGtGQUEwRDtBQUMxRCwrRkFBc0U7QUFLdEUseUZBQWdFO0FBRWhFLE1BQU0sa0JBQWtCO0lBQXhCO1FBQ0ksa0JBQWEsR0FBRyxJQUFJLHlCQUFjLEVBQUUsQ0FBQztRQUNyQyxtQkFBYyxHQUFHLElBQUkseUJBQWMsRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDO0lBdUU1QyxDQUFDO0lBckVTLGFBQWE7O1lBQ2YsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEQsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDckIsNEJBQTRCO2dCQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBRXhDOzs7Ozs7OzBCQU9VO2dCQUNWLElBQUksa0JBQWtCLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBWSxDQUFDLENBQUE7Z0JBQ3hILElBQUksaUJBQWlCLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFZLENBQUMsQ0FBQTtnQkFDdEksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEs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