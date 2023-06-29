import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';

const ormOptions :TypeOrmModuleOptions= {
  type : 'mysql',
  host:'localhost',
  port:3306,
  username: 'root',
  password:'',
 database: 'nestjs',
  autoLoadEntities: true,
  synchronize:true,
};

@Module({
  imports: [
      TypeOrmModule.forRoot(
ormOptions
      ),
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
