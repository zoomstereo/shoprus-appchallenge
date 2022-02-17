import ClientsService from "./clients/services/clients.service";
import DiscountManager from "./discounts/discountManager";
import DiscountsService from "./discounts/services/discounts.service";
import { Client } from "./entity/client.entity";
import { Discount } from "./entity/discount.entity";
import { Invoice } from "./entity/invoice.entity";
import { Item } from "./entity/item.entity";
import InvoiceService from "./invoice/services/invoice.service";

class InitialDataManager {
    clientService = new ClientsService();
    invoiceService = new InvoiceService();
    discountsService = new DiscountsService();
    discountManager = new DiscountManager();

    async loadDataIfNew() {
        let clients = await this.clientService.list(100, 1);

        if (clients.length == 0) {
            // Do all the database stuff
            console.log("doing the database setup");

            /* 
                Crear cliente 
                    donde no no tiene ningun tipo de descuento 
                    cliente donde tiene solo afiliado
                    donde es empleado
                    donde tiene mas de 2 anios como cliente
                    donde cumpla todas las condiciones anteriores            
                    */
            let nodiscountClientId = await this.clientService.create({ firstName: "cliente01", lastName: "No descuento" } as Client)
            let afiliatedClientId = await this.clientService.create({ firstName: "cliente02", lastName: "Afiliado", isAfiliated: true } as Client)
            this.clientService.create({ firstName: "cliente03", lastName: "Empleado", isEmployee: true } as Client)
            this.clientService.create({ firstName: "cliente04", lastName: "2anios cliente", registered: new Date('2019-12-09') } as Client)
            this.clientService.create({ firstName: "cliente05", lastName: "All conditions", isAfiliated: true, isEmployee: true, registered: new Date('2019-09-09') } as Client)

            // Crear facturas
            //     Crear factura con cliente sin ningun tipo de descuento pero 200$ para conseguir 10$ flat
            //     Crear factura con item comestible
            let noDiscountClient = await this.clientService.readById(nodiscountClientId);
            let afiliatedClient = await this.clientService.readById(afiliatedClientId);


            let items01 = [
                { name: "ItemTest01", amount: 1, price: 100, category: "" },
                { name: "ItemTest01", amount: 1, price: 100, category: "" }
            ]
            let discountInfo01 = this.discountManager.calculateDiscounts(items01 as Item[], noDiscountClient as Client);
            this.invoiceService.create({
                client: noDiscountClient,
                items: items01,
                discountPercentage: discountInfo01.discountPercentage,
                flatDiscount: discountInfo01.flatDiscount,
                discountFlag: "",
                totalWithDiscount: discountInfo01.totalWithDiscount,
                totalWithoutDiscount: discountInfo01.totalWithoutDiscount,
            } as Invoice);


            let items02 = [
                { name: "ItemTest01", amount: 1, price: 100, category: "" },
                { name: "ItemTest01", amount: 1, price: 100, category: "" }
            ]
            let discountInfo02 = this.discountManager.calculateDiscounts(items02 as Item[], afiliatedClient as Client);
            this.invoiceService.create({
                client: afiliatedClient,
                items: items02,
                discountPercentage: discountInfo02.discountPercentage,
                flatDiscount: discountInfo02.flatDiscount,
                discountFlag: "",
                totalWithDiscount: discountInfo02.totalWithDiscount,
                totalWithoutDiscount: discountInfo02.totalWithoutDiscount,
            } as Invoice);

            // Crear descuentos
            //     Crear 2 descuentos diferentes
            this.discountsService.create({ name: "TEST_DISCOUNT01", description: "sample description", percentage: 12 } as Discount)
            this.discountsService.create({ name: "TEST_DISCOUNT02", description: "sample description", percentage: 7 } as Discount)


        } else {
            console.log("database is already setted up");
        }
    }
}

export default InitialDataManager;