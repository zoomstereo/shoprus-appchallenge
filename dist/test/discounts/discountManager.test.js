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
const dotenv_1 = __importDefault(require("dotenv"));
const discountManager_1 = __importDefault(require("../../discounts/discountManager"));
const dotenvResult = dotenv_1.default.config();
const chai_1 = require("chai");
if (dotenvResult.error) {
    throw dotenvResult.error;
}
describe('Discount Manager Test', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const discountManager = new discountManager_1.default();
        it('It should apply 10$ discount without %', function () {
            return __awaiter(this, void 0, void 0, function* () {
                let items = [
                    { category: "", amount: 1, price: 100 },
                    { category: "", amount: 1, price: 100 },
                ];
                let client = {
                    isEmployee: false,
                    isAfiliated: false,
                    registered: new Date()
                };
                let discountResults = discountManager.calculateDiscounts(items, client);
                (0, chai_1.expect)(discountResults.discountPercentage).to.equal(0);
                (0, chai_1.expect)(discountResults.flatDiscount).to.equal(10);
                (0, chai_1.expect)(discountResults.totalWithDiscount).to.equal(190);
                (0, chai_1.expect)(discountResults.totalWithoutDiscount).to.equal(200);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRNYW5hZ2VyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2Rpc2NvdW50cy9kaXNjb3VudE1hbmFnZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixzRkFBOEQ7QUFHOUQsTUFBTSxZQUFZLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQywrQkFBOEI7QUFDOUIsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO0lBQ3BCLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQztDQUM1QjtBQUdELFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTs7UUFDOUIsTUFBTSxlQUFlLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7UUFFOUMsRUFBRSxDQUFDLHdDQUF3QyxFQUFFOztnQkFDekMsSUFBSSxLQUFLLEdBQUc7b0JBQ1IsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtvQkFDdkMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtpQkFDMUMsQ0FBQTtnQkFFRCxJQUFJLE1BQU0sR0FBRztvQkFDVCxVQUFVLEVBQUUsS0FBSztvQkFDakIsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtpQkFDekIsQ0FBQTtnQkFFRCxJQUFJLGVBQWUsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsS0FBZSxFQUFFLE1BQWdCLENBQUMsQ0FBQztnQkFFNUYsSUFBQSxhQUFNLEVBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsSUFBQSxhQUFNLEVBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xELElBQUEsYUFBTSxFQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELElBQUEsYUFBTSxFQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0QsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==