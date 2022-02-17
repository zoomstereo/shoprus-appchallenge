import { getRepository } from "typeorm";

import debug from 'debug';
import { Invoice } from "../../entity/invoice.entity";

const log: debug.IDebugger = debug('app:in-memory-dao');

class InvoicesDao {
    invoiceRepository = getRepository(Invoice);

    constructor() {
        log('Created new instance of InvoiceDao');
    }

    async getInvoiceById(id: number) {
        return await this.invoiceRepository.findOne({ where: { id: id }, relations: ["items"] });        
    }

    async addInvoice(invoice: Invoice) {
        invoice.date = new Date()

        const newInvoice = await this.invoiceRepository.save({ ...invoice });
        return newInvoice.id;
    }
}

export default InvoicesDao;