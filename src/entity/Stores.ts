
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"stores"})

export  class Stores {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: Text;

    @Column()
    address: Text;
}
