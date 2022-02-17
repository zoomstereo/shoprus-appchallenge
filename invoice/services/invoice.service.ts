import { Invoice } from "../../entity/invoice.entity";
import InvoicesDao from "../DAOs/invoice.dao";


class InvoiceService {
    invoicesDao = new InvoicesDao();

    create = async (invoice: Invoice) => {
        return this.invoicesDao.addInvoice(invoice);
    }

    readById = async (id: number) => {
        return this.invoicesDao.getInvoiceById(id);
    }
}

export default InvoiceService;