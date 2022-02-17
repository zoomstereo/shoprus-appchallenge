"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiscountManager {
    constructor() {
        this._foodTypeItems = [];
        this._priceTotalWithoutFoodType = 0;
    }
    _getPriceTotal(items) {
        items.forEach(item => {
            if (item.category.toLowerCase() === "comestible") {
                this._foodTypeItems.push(item);
            }
            else {
                this._priceTotalWithoutFoodType += item.price * item.amount;
            }
        });
    }
    _getDiscountPercentage(client) {
        let discountPercentage = 0;
        if (client.isEmployee) {
            discountPercentage = 30;
        }
        else if (client.isAfiliated) {
            discountPercentage = 10;
        }
        else if (((client.registered.valueOf() - new Date().getTime().valueOf()) / 31536000000) > 2) { // todo simplify
            discountPercentage = 5;
        }
        return discountPercentage;
    }
    _getFoodTypeItemsTotalPrice() {
        let total = 0;
        this._foodTypeItems.forEach(item => {
            total += item.amount * item.price;
        });
        return total;
    }
    _getDiscountedValueOf(value, percentage) {
        if (percentage == 0)
            return value;
        return value - (value * (percentage / 100));
    }
    calculateDiscounts(items, client, customDiscount) {
        this._foodTypeItems = [];
        this._priceTotalWithoutFoodType = 0;
        let discountPercentage = 0;
        let totalWithoutDiscount = 0;
        //Separates the "comestible" items from the others to get its price
        this._getPriceTotal(items);
        totalWithoutDiscount += this._priceTotalWithoutFoodType;
        discountPercentage = this._getDiscountPercentage(client);
        // Applies the first type of dicount ( The % based )
        let amountAfterFirstDiscount = this._getDiscountedValueOf(this._priceTotalWithoutFoodType, discountPercentage);
        if (customDiscount) {
            amountAfterFirstDiscount = this._getDiscountedValueOf(amountAfterFirstDiscount, customDiscount.percentage);
        }
        let foodItemsTotalprice = this._getFoodTypeItemsTotalPrice();
        // Since "comestible" type of items doesnt get % applied it just adds it to the total before
        // the flat amount is discounted
        amountAfterFirstDiscount += foodItemsTotalprice;
        totalWithoutDiscount += foodItemsTotalprice;
        // Applies the flat discount of 5$ of every 100$
        let flatDiscount = Math.floor(amountAfterFirstDiscount / 100) * 5;
        let finalDiscount = amountAfterFirstDiscount - flatDiscount;
        return {
            discountPercentage: discountPercentage,
            flatDiscount: flatDiscount,
            totalWithDiscount: finalDiscount,
            totalWithoutDiscount: totalWithoutDiscount
        };
    }
}
exports.default = DiscountManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY291bnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGlzY291bnRzL2Rpc2NvdW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sZUFBZTtJQUFyQjtRQUNZLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLCtCQUEwQixHQUFHLENBQUMsQ0FBQztJQWtGM0MsQ0FBQztJQWhGVyxjQUFjLENBQUMsS0FBYTtRQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxZQUFZLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILElBQUksQ0FBQywwQkFBMEIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDL0Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxNQUFjO1FBQ3pDLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNuQixrQkFBa0IsR0FBRyxFQUFFLENBQUM7U0FDM0I7YUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDM0Isa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCO1lBQzdHLGtCQUFrQixHQUFHLENBQUMsQ0FBQztTQUMxQjtRQUVELE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVPLDJCQUEyQjtRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVPLHFCQUFxQixDQUFDLEtBQWEsRUFBRSxVQUFrQjtRQUMzRCxJQUFJLFVBQVUsSUFBSSxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDbEMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxjQUF5QjtRQUN2RSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRzNCLG9CQUFvQixJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQztRQUV4RCxrQkFBa0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekQsb0RBQW9EO1FBQ3BELElBQUksd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRy9HLElBQUksY0FBYyxFQUFFO1lBQ2hCLHdCQUF3QixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUc7UUFFRCxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBRTdELDRGQUE0RjtRQUM1RixnQ0FBZ0M7UUFDaEMsd0JBQXdCLElBQUksbUJBQW1CLENBQUE7UUFFL0Msb0JBQW9CLElBQUksbUJBQW1CLENBQUM7UUFHNUMsZ0RBQWdEO1FBQ2hELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxFLElBQUksYUFBYSxHQUFHLHdCQUF3QixHQUFHLFlBQVksQ0FBQztRQUU1RCxPQUFPO1lBQ0gsa0JBQWtCLEVBQUUsa0JBQWtCO1lBQ3RDLFlBQVksRUFBRSxZQUFZO1lBQzFCLGlCQUFpQixFQUFFLGFBQWE7WUFDaEMsb0JBQW9CLEVBQUUsb0JBQW9CO1NBQzdDLENBQUE7SUFFTCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxlQUFlLENBQUMifQ==