

import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"coupons"})
export  class Coupons {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    code: Text;

    @Column()
    address: Text;

    @Column({name:"expires_at"})
    expiresAt: Date;

    @Column({name:"assigned_at"})
    assignedAt: Date;

    @Column({name:"customer_email"})
    customerEmail:Text;
}