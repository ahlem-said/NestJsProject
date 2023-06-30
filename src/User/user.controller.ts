import {Body, Controller, Get, Post, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import path from "path";
import {CreateUserDto} from "../DTO/UserDto.dto";

@Controller('user')
export class UserController {
     constructor(private userService : UserService) {
     }
  
    @Post()
    createNewTodo(@Body(ValidationPipe) data: CreateUserDto) {

        return this.userService.createNewUser(data);
    }
  @Get()
  getAllUsers() {

return this.userService.getAllUsers();
  }
}
