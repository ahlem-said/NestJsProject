import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../Entity/User.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository (UserEntity) private repo :Repository<UserEntity>) {
    }
   async createNewUser(username: string, password: string, active: boolean, role: string) : Promise<UserEntity> {
        const user:UserEntity = new UserEntity();
        user.username=username;
        user.password=password;
       user.active=active;
       user.role=role;
       this.repo.create(user);
    return await this.repo.save( user);
    }

   async getAllUsers() :Promise<UserEntity[]>
   {
       return await this.repo.find();

    }

}
