
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "stores" })

export class Store {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;
}
