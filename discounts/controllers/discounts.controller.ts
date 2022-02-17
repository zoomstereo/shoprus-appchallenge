import express from 'express';
import debug from 'debug';
import DiscountsService from '../services/discounts.service';

const log: debug.IDebugger = debug('app:users-controller');

class DiscountsController {
    discountsService = new DiscountsService();

    listDiscounts = async (req: express.Request, res: express.Response) => {
        const discounts = await this.discountsService.list(100, 0);
        res.status(200).send(discounts);
    }

    createDiscount = async (req: express.Request, res: express.Response) => {
        const discountId = await this.discountsService.create(req.body)
        res.status(200).send({ discountId: discountId });
    }

}

export default DiscountsController;