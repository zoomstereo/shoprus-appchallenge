import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    percentage: number;

    @Column({ type: 'timestamptz' })
    registered: Date;

}