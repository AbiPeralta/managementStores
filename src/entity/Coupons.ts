
import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";

@Entity({name:"coupons"})
export  class Coupons {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    code: Text;

    @Column()
    address: Text;

    @Column({name:"expires_at"})
    expiresAt: Timestamp;

    @Column({name:"assigned_at"})
    assignedAt: Timestamp;

    @Column({name:"customer_email"})
    customerEmail:Text;
}