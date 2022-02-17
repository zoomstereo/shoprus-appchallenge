import express from 'express';
import ClientsService from '../../clients/services/clients.service';
import DiscountsService from '../../discounts/services/discounts.service';

class InvoicesMiddleware {
    clientsService = new ClientsService();
    discountService = new DiscountsService();

    validateClientExists = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let client = await this.clientsService.readById(parseInt(req.body.clientId));
        if (!client) {
            res.status(400).send({ errors: ["client-not-found"] }); return;
        } else {
            res.locals.client = client;
            next();
        }
    }

    validateDiscountExists = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.body.discountName) {
            let discount = await this.discountService.findByName(req.body.discountName);
            if(!discount) {
                res.status(400).send({ errors: ["discount not found"] }); return;
            } else {
                res.locals.discount = discount;
                next();
            }
        } else {
            next();
        }        
    }
}

export default InvoicesMiddleware;