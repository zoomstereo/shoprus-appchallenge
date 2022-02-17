import { Client } from "../entity/client.entity";
import { Discount } from "../entity/discount.entity";
import { Item } from "../entity/item.entity";

class DiscountManager {
    private _foodTypeItems: Item[] = [];
    private _priceTotalWithoutFoodType = 0;

    private _getPriceTotal(items: Item[]) {
        items.forEach(item => {
            if (item.category.toLowerCase() === "comestible") {
                this._foodTypeItems.push(item);
            } else {
                this._priceTotalWithoutFoodType += item.price * item.amount;
            }
        })
    }

    private _getDiscountPercentage(client: Client) {
        let discountPercentage = 0;
        if (client.isEmployee) {
            discountPercentage = 30;
        } else if (client.isAfiliated) {
            discountPercentage = 10;
        } else if (((client.registered.valueOf() - new Date().getTime().valueOf()) / 31536000000) > 2) { // todo simplify
            discountPercentage = 5;
        }

        return discountPercentage;
    }

    private _getFoodTypeItemsTotalPrice() {
        let total = 0;
        this._foodTypeItems.forEach(item => {
            total += item.amount * item.price;
        })
        return total;
    }

    private _getDiscountedValueOf(value: number, percentage: number) {
        if (percentage == 0) return value;
        return value - (value * (percentage / 100));
    }

    calculateDiscounts(items: Item[], client: Client, customDiscount?: Discount) {
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
        amountAfterFirstDiscount += foodItemsTotalprice

        totalWithoutDiscount += foodItemsTotalprice;


        // Applies the flat discount of 5$ of every 100$
        let flatDiscount = Math.floor(amountAfterFirstDiscount / 100) * 5;

        let finalDiscount = amountAfterFirstDiscount - flatDiscount;

        return {
            discountPercentage: discountPercentage,
            flatDiscount: flatDiscount,
            totalWithDiscount: finalDiscount,
            totalWithoutDiscount: totalWithoutDiscount
        }

    }
}

export default DiscountManager;