import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';


import { UsersModule } from './users/users.module';
import { DepotsModule } from './depot/depots.module';
import { AdminsModule } from './admins/admins.module';
import { DronesModule } from './drones/drones.module';
import { RequestsModule } from './requests/requests.module';




@Module({
  imports: [UsersModule, DepotsModule, AdminsModule, DronesModule, RequestsModule, MongooseModule.forRoot('mongodb+srv://ivor:8600@users.ooebc.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
