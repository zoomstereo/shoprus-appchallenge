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
const debug_1 = __importDefault(require("debug"));
const invoice_service_1 = __importDefault(require("../services/invoice.service"));
const discountManager_1 = __importDefault(require("../../discounts/discountManager"));
const clients_service_1 = __importDefault(require("../../clients/services/clients.service"));
const log = (0, debug_1.default)('app:users-controller');
class InvoicesController {
    constructor() {
        this.invoicesService = new invoice_service_1.default();
        this.clientsService = new clients_service_1.default();
        this.getInvoiceById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const invoice = yield this.invoicesService.readById(parseInt(req.params.id));
            if (invoice) {
                res.status(200).send(invoice);
            }
            else {
                res.status(404).send({ errors: ["Invoice not found"] });
            }
        });
        this.createInvoice = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let items = req.body.items;
            let discount = res.locals.discount;
            let discountInfo = new discountManager_1.default().calculateDiscounts(items, res.locals.client, discount);
            let invoice = {
                client: res.locals.client,
                items: items,
                /* Discount side */
                discountPercentage: discountInfo.discountPercentage,
                flatDiscount: discountInfo.flatDiscount,
                discountFlag: discount ? discount.name : null,
                totalWithDiscount: discountInfo.totalWithDiscount,
                totalWithoutDiscount: discountInfo.totalWithoutDiscount,
            };
            const invoiceId = yield this.invoicesService.create(invoice);
            res.status(200).send({ invoiceId: invoiceId });
        });
    }
}
exports.default = InvoicesController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vaW52b2ljZS9jb250cm9sbGVycy9pbnZvaWNlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsa0ZBQXlEO0FBRXpELHNGQUE4RDtBQUM5RCw2RkFBb0U7QUFHcEUsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxrQkFBa0I7SUFBeEI7UUFDSSxvQkFBZSxHQUFHLElBQUkseUJBQWMsRUFBRSxDQUFDO1FBQ3ZDLG1CQUFjLEdBQUcsSUFBSSx5QkFBYyxFQUFFLENBQUM7UUFFdEMsbUJBQWMsR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ25FLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLE9BQU8sRUFBRTtnQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNEO1FBQ0wsQ0FBQyxDQUFBLENBQUE7UUFFRCxrQkFBYSxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEUsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0IsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFvQixDQUFDO1lBQy9DLElBQUksWUFBWSxHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVoRyxJQUFJLE9BQU8sR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUN6QixLQUFLLEVBQUUsS0FBSztnQkFDWixtQkFBbUI7Z0JBQ25CLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxrQkFBa0I7Z0JBQ25ELFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtnQkFDdkMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDN0MsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLGlCQUFpQjtnQkFDakQsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLG9CQUFvQjthQUUvQyxDQUFDO1lBRWIsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM1RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQSxDQUFBO0lBRUwsQ0FBQztDQUFBO0FBRUQsa0JBQWUsa0JBQWtCLENBQUMifQ==