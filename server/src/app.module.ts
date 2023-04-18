require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserCommand } from './utls/seed-commands/user.command';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
/**
 * Usage and Description - This file will act as the main
 * app wrapper combining the controller functions and the
 * service functions
 *
 **/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
    }),
    CommandModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserCommand],
})
export class AppModule {}
