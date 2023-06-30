import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "../User/user.service";
import {SocieteService} from "./societe.service";

@Controller('societe')
export class SocieteController {
    constructor(private societeService : SocieteService) {
    }
    @Post()
    createNewSociete(@Body() data):void  {
        const  {
            Nom, adresse, active, region ,DataBaseName,DomainID,EncryptionKey,pays,
            MailFiscal,website
        } =data;
        this.societeService.createNewSociete(Nom, adresse, active, region ,DataBaseName,DomainID,EncryptionKey,pays,
            MailFiscal,website);


    }
    @Get()
    getAllUsers() {

        return this.societeService.getAllSocietes();
    }
}
