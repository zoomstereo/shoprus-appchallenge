import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Invoice } from "./invoice.entity";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: false })
    isAfiliated: boolean;

    @Column({ default: false })
    isEmployee: boolean;

    @Column({ type: 'timestamptz' })
    registered: Date;

    @OneToMany(() => Invoice, invoice => invoice.client)
    invoices: Invoice[];

}