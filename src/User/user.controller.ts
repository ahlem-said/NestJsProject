import {Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import path from "path";
import {CreateUserDto} from "../DTO/UserDto.dto";
import {SocieteService} from "../societe/societe.service";

@Controller('user')
export class UserController {
     constructor(private userService : UserService ,private societeService:SocieteService) {
     }

    @Post()
    createNewTodo(@Body(ValidationPipe) data: CreateUserDto, @Body('idSociete') idSociete: number) {
        return this.userService.createNewUser(data, idSociete);
    }
  @Get()
  getAllUsers() {

  return this.userService.getAllUsers();
  }
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto, @Query('idSociete') idSociete: number) {
        return this.userService.updateUser(id, updateUserDto, idSociete);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
