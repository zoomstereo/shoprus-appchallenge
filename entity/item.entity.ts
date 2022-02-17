import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Invoice } from "./invoice.entity";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Invoice, invoice => invoice.items)
    invoice: Invoice;

    @Column()
    name: string;

    @Column()
    amount: number;

    @Column()
    price: number;

    @Column()
    category: string;
}
