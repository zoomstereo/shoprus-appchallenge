import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Client } from "./client.entity";
import { Item } from "./item.entity";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Client, client => client.invoices)
    client: Client;

    @OneToMany(() => Item, item => item.invoice, { cascade: true })
    items: Item[];

    @Column()
    discountPercentage: number;

    @Column()
    flatDiscount: number;

    @Column({ nullable: true })
    discountFlag: string;

    @Column()
    totalWithoutDiscount: number;

    @Column()
    totalWithDiscount: number;

    @Column({ type: 'timestamptz' })
    date: Date;

}