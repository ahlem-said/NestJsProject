import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {SocieteEntity} from "../Entity/Societe.entity";

@Injectable()
export class SocieteService {
    constructor(@InjectRepository (SocieteEntity) private soc :Repository<SocieteEntity>) {
    }
    async createNewSociete(Nom: string, adresse: string, active: boolean, region: string ,DataBaseName:string,DomainID:number,EncryptionKey:number,pays:string,
    MailFiscal:string,website:string) : Promise<SocieteEntity> {
        const societe:SocieteEntity = new SocieteEntity();
        societe.Nom=Nom;
         societe.adresse=adresse;
          societe.region=region;
          societe.active=active;
          societe.DataBaseName=DataBaseName;
          societe.DomainID=DomainID;
          societe.EncryptionKey=EncryptionKey;
          societe.pays=pays;
          societe.MailFiscal=MailFiscal;
          societe.website=website;

        this.soc.create(societe);
        return await this.soc.save( societe);
    }

    async getAllSocietes() :Promise<SocieteEntity[]>
    {
        return await this.soc.find();

    }

}
