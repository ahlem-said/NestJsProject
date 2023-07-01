import {Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import path from "path";
import {CreateUserDto} from "../DTO/UserDto.dto";

@Controller('user')
export class UserController {
     constructor(private userService : UserService) {
     }

    @Post()
    createNewTodo(@Body(ValidationPipe) data: CreateUserDto)
    {
        return this.userService.createNewUser(data);
    }
  @Get()
  getAllUsers() {

  return this.userService.getAllUsers();
  }
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
