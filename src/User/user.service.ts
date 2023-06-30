import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../Entity/User.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../DTO/UserDto.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository (UserEntity) private repo :Repository<UserEntity>) {
    }
   async createNewUser(createUser: CreateUserDto) {

        const user  = new UserEntity();
        const {username,password,active,role} =createUser;
        user.username=username;
        user.password=password;
       user.active=active;
       user.role=role;
       this.repo.create(user);
       try {
           return await this.repo.save(user);
       } catch (err) {
           throw new InternalServerErrorException('Something went wrong, user not created');
       }

   }

   async getAllUsers() :Promise<UserEntity[]>
   {
       return await this.repo.find();

    }

}
