import express from 'express';
import DiscountsService from '../services/discounts.service';

class DiscountsMiddleware {
    discountService = new DiscountsService();

    validateDiscountNameDoesntExists = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let discount = await this.discountService.findByName(req.body.name);

        if (discount) {
            res.status(400).send({ errors: ["discount already created"] }); return;
        } else {
            next();
        }

    }
}

export default DiscountsMiddleware;