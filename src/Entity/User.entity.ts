import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {SocieteEntity} from "./Societe.entity";



@Entity(  "user")
export class UserEntity{
  @PrimaryGeneratedColumn()
   id:number;
  @Column()
   username : string;
   @Column()
   password : string;
    @Column({ default: false })

    active : boolean ;
   @Column()
   role : string;

    @ManyToOne(() => SocieteEntity, societe => societe.users)
    societe: SocieteEntity;

}