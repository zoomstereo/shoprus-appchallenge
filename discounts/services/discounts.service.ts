import { Discount } from "../../entity/discount.entity";
import DiscountsDao from "../DAOs/discounts.dao";


class DiscountsService {
    discountsDao = new DiscountsDao();

    create = async (discount: Discount) => {
        return await this.discountsDao.addDiscount(discount);
    }

    list = async (limit: number, page: number) => {
        return this.discountsDao.getDiscounts();
    }

    findByName = async (name: string) => {
        return await this.discountsDao.getDiscountByName(name);
    }
}

export default DiscountsService;