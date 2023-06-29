import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import path from "path";

@Controller('user')
export class UserController {
     constructor(private userService : UserService) {
     }
     @Post()
  createNewUser(@Body() data):void  {
         const  {
             username,password,active,role
         } =data;
         this.userService.createNewUser(username,password,active,role);


  }
  @Get()
  getAllUsers() {

return this.userService.getAllUsers();
  }
}
