import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {SocieteEntity} from "../Entity/Societe.entity";
import {CreateSocieteDto} from "../DTO/SocieteDto.dto";

@Injectable()
export class SocieteService {
    constructor(@InjectRepository (SocieteEntity) private soc :Repository<SocieteEntity>) {
    }


    async createNewSociete(creteSociete :CreateSocieteDto)  {
        const societe = new SocieteEntity();
        const {Nom, adresse, active, region,DataBaseName,DomainID,EncryptionKey,pays, MailFiscal,website
        } = creteSociete
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
        try {
            return await this.soc.save(societe);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong, Societe not created');
        }

    }

    async getAllSocietes() :Promise<SocieteEntity[]>
    {
        return await this.soc.find();

    }
    async updateSociete(id: string, updateUserDto: CreateSocieteDto) {
        const user = await this.soc.findOneById(id);
        if (!user) {
            throw new NotFoundException('Societe non trouvé');
        }

        // Mettez à jour les attributs de l'utilisateur selon les données de updateUserDto
        user.Nom = updateUserDto.Nom;
        user.adresse = updateUserDto.adresse;
        user.active = updateUserDto.active;
        user.region = updateUserDto.region;
        user.DataBaseName = updateUserDto.DataBaseName;
        user.DomainID = updateUserDto.DomainID;
        user.EncryptionKey = updateUserDto.EncryptionKey;
        user.pays = updateUserDto.pays;
        user.MailFiscal = updateUserDto.MailFiscal;
        user.website = updateUserDto.website;

        await this.soc.save(user);
        return user;
    }

    async deleteUser(id: string) {
        const user = await this.soc.findOneById(id);
        if (!user) {
            throw new NotFoundException('Societe non trouvé');
        }

        await this.soc.remove(user);
        return { message: 'Societe supprimé avec succès' };
    }

}

