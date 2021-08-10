import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column
} from "typeorm";

@Entity({ name: "coupons" })
export class Coupon {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column({ name: "customer_email" })
  customerEmail: string;

  @Column()
  address: string;

  @Column({ name: "expires_at", type: "timestamp" })
  expiresAt: Date;

  @Column({ name: "assigned_at", type: "timestamp" })
  assignedAt: Date;
}