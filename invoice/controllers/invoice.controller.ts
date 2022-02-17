import express from 'express';
import debug from 'debug';
import InvoiceService from '../services/invoice.service';
import { Invoice } from '../../entity/invoice.entity';
import DiscountManager from '../../discounts/discountManager';
import ClientsService from '../../clients/services/clients.service';
import { Discount } from '../../entity/discount.entity';

const log: debug.IDebugger = debug('app:users-controller');

class InvoicesController {
    invoicesService = new InvoiceService();
    clientsService = new ClientsService();

    getInvoiceById = async (req: express.Request, res: express.Response) => {
        const invoice = await this.invoicesService.readById(parseInt(req.params.id));
        if (invoice) {
            res.status(200).send(invoice);
        } else {
            res.status(404).send({ errors: ["Invoice not found"] });
        }
    }

    createInvoice = async (req: express.Request, res: express.Response) => {
        let items = req.body.items;
        let discount = res.locals.discount as Discount;
        let discountInfo = new DiscountManager().calculateDiscounts(items, res.locals.client, discount);

        let invoice = {
            client: res.locals.client,
            items: items,
            /* Discount side */
            discountPercentage: discountInfo.discountPercentage,
            flatDiscount: discountInfo.flatDiscount,
            discountFlag: discount ? discount.name : null,
            totalWithDiscount: discountInfo.totalWithDiscount,
            totalWithoutDiscount: discountInfo.totalWithoutDiscount,

        } as Invoice;

        const invoiceId = await this.invoicesService.create(invoice)
        res.status(200).send({ invoiceId: invoiceId });
    }

}

export default InvoicesController;