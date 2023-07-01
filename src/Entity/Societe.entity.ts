import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./User.entity";


@Entity(  "societe")
export class SocieteEntity{
    @PrimaryGeneratedColumn()
    idSociete:number;
    @Column()
    Nom : string;
    @Column()
    MailFiscal : string;
    @Column()
    adresse : string ;
    @Column()
    region : string;
    @Column()
    pays : string ;
    @Column()
    website : string;
    @Column()
    DomainID : number ;
    @Column()
    EncryptionKey : number;
    @Column()
    DataBaseName : string ;
    @Column({ default: false })
    active : boolean;
    @OneToMany(() => UserEntity, user => user.societe)
    users: UserEntity[];



}