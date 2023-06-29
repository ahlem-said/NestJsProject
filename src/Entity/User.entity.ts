import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {name} from "ts-jest/dist/transformers/hoist-jest";


@Entity(  "user")
export class UserEntity{
  @PrimaryGeneratedColumn()
   id:number;
  @Column()
   username : string;
   @Column()
   password : string;
   @Column()
   active : boolean ;
   @Column()
   role : string;


}