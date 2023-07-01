import {IsNotEmpty, MaxLength, MinLength} from "class-validator";
import {Column} from "typeorm";
import {Unique} from "typeorm/browser";

export class CreateSocieteDto {
    @IsNotEmpty()
    Nom : string;
    @IsNotEmpty()

    MailFiscal : string;
    @IsNotEmpty()
    adresse : string ;
    @IsNotEmpty()
    region : string;
    @IsNotEmpty()
    pays : string ;
    @IsNotEmpty()
    website : string;
    @IsNotEmpty()
    DomainID : number ;
    @IsNotEmpty()
    EncryptionKey : number;
    @IsNotEmpty()
    DataBaseName : string ;
    @IsNotEmpty()
    active : boolean;
}