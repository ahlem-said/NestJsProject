import {IsDate, IsNotEmpty, IsOptional, Length, MaxLength, MinLength} from "class-validator";
import {Column, Unique} from "typeorm";

export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(10, {message: 'Max length is 10 characters.'})
    username: string;
    @IsNotEmpty()
    @MaxLength(12,{message: 'Max length is 12 characters.'})
    @MinLength(10,{message: 'Min length is 10 characters.'})
    password: string;
    @IsNotEmpty()
    active : boolean ;
    @IsNotEmpty()
    role : string;

}