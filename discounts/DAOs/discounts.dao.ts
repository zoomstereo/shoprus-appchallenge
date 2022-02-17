import { getRepository } from "typeorm";

import debug from 'debug';
import { Discount } from "../../entity/discount.entity";

const log: debug.IDebugger = debug('app:in-memory-dao');

class DiscountsDao {
    discountsRepository = getRepository(Discount);

    constructor() {
        log('Created new instance of ClientsDao');
    }

    async addDiscount(discount: Discount) {
        discount.registered = new Date()
        const newDiscount = await this.discountsRepository.save({ ...discount })
        return newDiscount.id;
    }

    async getDiscounts() {
        return await this.discountsRepository.find({ take: 1000 });
    }

    async getDiscountByName(name: string) {
        return await this.discountsRepository.findOne({ where: { name: name } })
    }

}

export default DiscountsDao;