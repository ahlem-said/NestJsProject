import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../Entity/User.entity";
import {SocieteEntity} from "../Entity/Societe.entity";
import {SocieteService} from "../societe/societe.service";

@Module({
  imports  : [
      TypeOrmModule.forFeature([UserEntity, SocieteEntity])
  ],
  controllers: [UserController],
  providers: [UserService,SocieteService]
})
export class UserModule {}
