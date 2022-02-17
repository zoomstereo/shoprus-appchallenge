import dotenv from 'dotenv';
import DiscountManager from '../../discounts/discountManager';
import { Client } from '../../entity/client.entity';
import { Item } from '../../entity/item.entity';
const dotenvResult = dotenv.config();
import { expect } from 'chai';
if (dotenvResult.error) {
    throw dotenvResult.error;
}


describe('Discount Manager Test', async function () {
    const discountManager = new DiscountManager();

    it('It should apply 10$ discount without %', async function () {
        let items = [
            { category: "", amount: 1, price: 100 },
            { category: "", amount: 1, price: 100 },
        ]

        let client = {
            isEmployee: false,
            isAfiliated: false,
            registered: new Date()
        }

        let discountResults = discountManager.calculateDiscounts(items as Item[], client as Client);

        expect(discountResults.discountPercentage).to.equal(0);
        expect(discountResults.flatDiscount).to.equal(10);
        expect(discountResults.totalWithDiscount).to.equal(190);
        expect(discountResults.totalWithoutDiscount).to.equal(200);        
    })

})