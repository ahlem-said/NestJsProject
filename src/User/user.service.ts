import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../Entity/User.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../DTO/UserDto.dto";
import {SocieteEntity} from "../Entity/Societe.entity";
import any = jasmine.any;

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly repo: Repository<UserEntity>,
        @InjectRepository(SocieteEntity)
        private readonly soc: Repository<SocieteEntity>,
    ) {

    }
    async createNewUser(createUser: CreateUserDto, idSociete: number) {
        const user = new UserEntity();
        const { username, password, active, role } = createUser;
        const societe = await this.soc.findOneById(idSociete);
        if (!societe) {
            throw new NotFoundException('La société spécifiée n\'existe pas');
        }
        user.username = username;
        user.password = password;
        user.active = active;
        user.role = role;
        user.societe = societe;
        try {
            return await this.repo.save(user);
        } catch (err) {
            throw new InternalServerErrorException('Une erreur s\'est produite lors de la création de l\'utilisateur');
        }
    }
    async getAllUsers(): Promise<UserEntity[]> {
        return await this.repo
            .createQueryBuilder('user')
            .leftJoin('user.societe', 'societe')
            .select(['user', 'societe.idSociete'])
            .getMany();
    }
    async updateUser(id: number, updateUserDto: CreateUserDto, idSociete: number) {
        const user = await this.repo.findOneById(id);
        if (!user) {
            throw new NotFoundException('Utilisateur non trouvé');
        }

        // Vérifier si l'ID de la société a été modifié
        if (user.societe && user.societe.idSociete !== idSociete) {
            // Vérifier si la société existe
            const societeExistante = await this.soc.findOneById(idSociete);
            if (!societeExistante) {
                throw new NotFoundException('Société spécifiée non trouvée');
            }
            user.societe = societeExistante;
        }

        // Mettre à jour les autres attributs de l'utilisateur
        const { username, password, active, role } = updateUserDto;
        user.username = username;
        user.password = password;
        user.active = active;
        user.role = role;

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