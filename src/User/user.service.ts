import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
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
    async updateUser(id: number, updateUserDto: CreateUserDto) {
        const user = await this.repo.findOneById(id);
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }

        // Mettez à jour les attributs de l'utilisateur selon les données de updateUserDto
        // updateUserDto est une classe DTO (Data Transfer Object) qui contient les attributs à mettre à jour
        user.username = updateUserDto.username;
        user.password = updateUserDto.password;
        user.active = updateUserDto.active;
        user.role = updateUserDto.role;

        await this.repo.save(user);
        return user;
    }

    async deleteUser(id: string) {
        const user = await this.repo.findOneById(id);
        if (!user) {
            throw new NotFoundException('Utilisateur non trouvé');
        }

        await this.repo.remove(user);
        return { message: 'Utilisateur supprimé avec succès' };
    }
}