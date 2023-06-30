import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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
    @Column()
    active : boolean;



}