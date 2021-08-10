

import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

@Entity({ name: "stats" })
export class Stat {

  @PrimaryGeneratedColumn()
  id: Number;
}