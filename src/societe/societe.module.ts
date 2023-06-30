import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../Entity/User.entity";
import {UserController} from "../User/user.controller";
import {UserService} from "../User/user.service";
import {SocieteEntity} from "../Entity/Societe.entity";
import {SocieteController} from "./societe.controller";
import {SocieteService} from "./societe.service";

@Module({
    imports  : [
        TypeOrmModule.forFeature([SocieteEntity])
    ],
    controllers: [SocieteController],
    providers: [SocieteService]
})
export class SocieteModule {}
