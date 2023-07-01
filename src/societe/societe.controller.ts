import {Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe} from '@nestjs/common';
import {UserService} from "../User/user.service";
import {SocieteService} from "./societe.service";
import {CreateSocieteDto} from "../DTO/SocieteDto.dto";

@Controller('societe')
export class SocieteController {
    constructor(private societeService : SocieteService) {
    }
    @Post()
    createNewSociete(@Body(ValidationPipe) data:CreateSocieteDto ) {

        this.societeService.createNewSociete(data);


    }
    @Get()
    getAllUsers() {

        return this.societeService.getAllSocietes();
    }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateSocieteDto) {
        return this.societeService.updateSociete(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.societeService.deleteUser(id);
    }
}
